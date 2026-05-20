import { useState } from "react";
import { useNavigate } from "react-router";
import { AlertTriangle, MapPin, FileText, ChevronDown } from "lucide-react";
import api from "../api";

const BAIRROS = [
  { nome: "Centro",          regiao: "Centro" },
  { nome: "Santos Dumont",   regiao: "Norte" },
  { nome: "Jardim Brasília", regiao: "Sul" },
  { nome: "Olímpio Belo",    regiao: "Leste" },
  { nome: "Santa Luzia",     regiao: "Oeste" },
  { nome: "Jardim Alvorada", regiao: "Norte" },
  { nome: "São Bento",       regiao: "Sul" },
];

const URGENCIAS = ["Baixa", "Media", "Alta", "Critica"] as const;
type Urgencia = typeof URGENCIAS[number];

const URGENCIA_COLORS: Record<Urgencia, string> = {
  Baixa: "bg-green-100 text-green-700 border-green-200",
  Media: "bg-yellow-100 text-yellow-700 border-yellow-200",
  Alta: "bg-orange-100 text-orange-700 border-orange-200",
  Critica: "bg-red-100 text-red-700 border-red-200",
};

export function CadastroOcorrenciaPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Pega o usuário logado do localStorage
  const usuarioRaw = localStorage.getItem("usuario");
  const usuario = usuarioRaw ? JSON.parse(usuarioRaw) : null;

  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    id_servico: "",
    urgencia: "" as Urgencia | "",
    // Endereço da ocorrência
    endereco_completo: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    fonte_localizacao: "manual",
  });

  const update = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!usuario) {
      setError("Você precisa estar logado para registrar uma ocorrência.");
      navigate("/");
      return;
    }

    if (!formData.id_servico || isNaN(Number(formData.id_servico))) {
      setError("Informe um ID de serviço válido.");
      return;
    }

    setLoading(true);
    try {
      await api.post("/ocorrencia/cadastrar", {
        titulo: formData.titulo,
        descricao: formData.descricao,
        id_usuario: usuario.id,
        id_servico: Number(formData.id_servico),
        urgencia: formData.urgencia || undefined,
        endereco: {
          endereco_completo: formData.endereco_completo,
          rua: formData.rua,
          numero: formData.numero,
          complemento: formData.complemento || undefined,
          bairro: formData.bairro,
          fonte_localizacao: formData.fonte_localizacao,
        },
      });

      setSuccess(true);
      setTimeout(() => navigate("/dashboard/ocorrencias"), 2000);
    } catch (err: any) {
      const mensagem =
        err.response?.data?.detail || "Erro ao registrar ocorrência. Tente novamente.";
      setError(typeof mensagem === "string" ? mensagem : JSON.stringify(mensagem));
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M6 16L13 23L26 9" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="text-[#101828] text-[20px] font-semibold">Ocorrência registrada!</h2>
        <p className="text-[#4a5565] text-[14px]">Redirecionando para a lista de ocorrências...</p>
      </div>
    );
  }

  return (
    <div className="max-w-[640px] mx-auto px-4 py-8" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-[10px] bg-[#3b82f6]/10 flex items-center justify-center">
            <AlertTriangle size={20} className="text-[#3b82f6]" />
          </div>
          <h1 className="text-[#101828] text-[22px] font-semibold tracking-[-0.4px]">
            Registrar Ocorrência
          </h1>
        </div>
        <p className="text-[#4a5565] text-[14px] leading-[20px] ml-[52px]">
          Descreva o problema e informe o local para que possamos atender rapidamente.
        </p>
      </div>

      {error && (
        <div className="mb-5 p-3 bg-red-50 border border-red-200 rounded-[10px]">
          <p className="text-red-600 text-[13px]">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Seção: Dados da ocorrência */}
        <div className="bg-white border border-[#e5e7eb] rounded-[14px] p-5 space-y-4">
          <div className="flex items-center gap-2 mb-1">
            <FileText size={16} className="text-[#6b7280]" />
            <h2 className="text-[#374151] text-[14px] font-semibold">Dados da ocorrência</h2>
          </div>

          {/* Título */}
          <div>
            <label className="block text-[#364153] text-[13px] font-medium mb-1.5">Título</label>
            <input
              type="text"
              value={formData.titulo}
              onChange={(e) => update("titulo", e.target.value)}
              placeholder="Ex: Buraco na calçada da Av. Principal"
              required
              className="w-full h-[44px] bg-[#f9fafb] border border-[#e5e7eb] rounded-[10px] px-4 text-[14px] text-[#101828] placeholder:text-[rgba(10,10,10,0.35)] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
            />
          </div>

          {/* Descrição */}
          <div>
            <label className="block text-[#364153] text-[13px] font-medium mb-1.5">Descrição</label>
            <textarea
              value={formData.descricao}
              onChange={(e) => update("descricao", e.target.value)}
              placeholder="Descreva o problema com o máximo de detalhes possível..."
              required
              rows={4}
              className="w-full bg-[#f9fafb] border border-[#e5e7eb] rounded-[10px] px-4 py-3 text-[14px] text-[#101828] placeholder:text-[rgba(10,10,10,0.35)] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all resize-none"
            />
          </div>

          {/* ID do serviço e Urgência */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#364153] text-[13px] font-medium mb-1.5">ID do Serviço</label>
              <input
                type="number"
                value={formData.id_servico}
                onChange={(e) => update("id_servico", e.target.value)}
                placeholder="Ex: 1"
                required
                min={1}
                className="w-full h-[44px] bg-[#f9fafb] border border-[#e5e7eb] rounded-[10px] px-4 text-[14px] text-[#101828] placeholder:text-[rgba(10,10,10,0.35)] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
              />
            </div>
            <div>
              <label className="block text-[#364153] text-[13px] font-medium mb-1.5">
                Urgência <span className="text-[#99a1af] font-normal">(opcional)</span>
              </label>
              <div className="relative">
                <select
                  value={formData.urgencia}
                  onChange={(e) => update("urgencia", e.target.value)}
                  className="w-full h-[44px] bg-[#f9fafb] border border-[#e5e7eb] rounded-[10px] pl-4 pr-9 text-[14px] text-[#101828] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all appearance-none"
                >
                  <option value="">Selecionar</option>
                  {URGENCIAS.map((u) => (
                    <option key={u} value={u}>{u}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#99a1af] pointer-events-none" />
              </div>
              {formData.urgencia && (
                <span className={`inline-block mt-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium border ${URGENCIA_COLORS[formData.urgencia as Urgencia]}`}>
                  {formData.urgencia}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Seção: Localização */}
        <div className="bg-white border border-[#e5e7eb] rounded-[14px] p-5 space-y-4">
          <div className="flex items-center gap-2 mb-1">
            <MapPin size={16} className="text-[#6b7280]" />
            <h2 className="text-[#374151] text-[14px] font-semibold">Localização da ocorrência</h2>
          </div>

          {/* Endereço completo */}
          <div>
            <label className="block text-[#364153] text-[13px] font-medium mb-1.5">Endereço completo</label>
            <input
              type="text"
              value={formData.endereco_completo}
              onChange={(e) => update("endereco_completo", e.target.value)}
              placeholder="Rua, número, bairro..."
              required
              className="w-full h-[44px] bg-[#f9fafb] border border-[#e5e7eb] rounded-[10px] px-4 text-[14px] text-[#101828] placeholder:text-[rgba(10,10,10,0.35)] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
            />
          </div>

          {/* Rua e Número */}
          <div className="grid grid-cols-[1fr_120px] gap-4">
            <div>
              <label className="block text-[#364153] text-[13px] font-medium mb-1.5">Rua</label>
              <input
                type="text"
                value={formData.rua}
                onChange={(e) => update("rua", e.target.value)}
                placeholder="Nome da rua"
                required
                className="w-full h-[44px] bg-[#f9fafb] border border-[#e5e7eb] rounded-[10px] px-4 text-[14px] text-[#101828] placeholder:text-[rgba(10,10,10,0.35)] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
              />
            </div>
            <div>
              <label className="block text-[#364153] text-[13px] font-medium mb-1.5">Número</label>
              <input
                type="text"
                value={formData.numero}
                onChange={(e) => update("numero", e.target.value)}
                placeholder="123"
                required
                className="w-full h-[44px] bg-[#f9fafb] border border-[#e5e7eb] rounded-[10px] px-4 text-[14px] text-[#101828] placeholder:text-[rgba(10,10,10,0.35)] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
              />
            </div>
          </div>

          {/* Bairro e Complemento */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#364153] text-[13px] font-medium mb-1.5">Bairro</label>
              <div className="relative">
                <select
                  value={formData.bairro}
                  onChange={(e) => update("bairro", e.target.value)}
                  required
                  className="w-full h-[44px] bg-[#f9fafb] border border-[#e5e7eb] rounded-[10px] px-4 pr-9 text-[14px] text-[#101828] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all appearance-none"
                >
                  <option value="" disabled>Selecione</option>
                  <option value="Centro">Centro</option>
                  <option value="Santos Dumont">Santos Dumont</option>
                  <option value="Jardim Brasília">Jardim Brasília</option>
                  <option value="Olímpio Belo">Olímpio Belo</option>
                  <option value="Santa Luzia">Santa Luzia</option>
                  <option value="Jardim Alvorada">Jardim Alvorada</option>
                  <option value="São Bento">São Bento</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#99a1af] pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-[#364153] text-[13px] font-medium mb-1.5">
                Complemento <span className="text-[#99a1af] font-normal">(opcional)</span>
              </label>
              <input
                type="text"
                value={formData.complemento}
                onChange={(e) => update("complemento", e.target.value)}
                placeholder="Próximo ao..."
                className="w-full h-[44px] bg-[#f9fafb] border border-[#e5e7eb] rounded-[10px] px-4 text-[14px] text-[#101828] placeholder:text-[rgba(10,10,10,0.35)] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
              />
            </div>
          </div>
        </div>

        {/* Botões */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => navigate("/dashboard/ocorrencias")}
            className="flex-1 h-[48px] bg-white border border-[#e5e7eb] hover:bg-[#f9fafb] text-[#374151] text-[15px] font-medium rounded-[10px] transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={loading}
            className="flex-[2] h-[48px] bg-[#3b82f6] hover:bg-[#2563eb] disabled:opacity-60 disabled:cursor-not-allowed text-white text-[15px] font-medium rounded-[10px] transition-colors shadow-sm shadow-[#3b82f6]/20"
          >
            {loading ? "Registrando..." : "Registrar ocorrência"}
          </button>
        </div>
      </form>
    </div>
  );
}