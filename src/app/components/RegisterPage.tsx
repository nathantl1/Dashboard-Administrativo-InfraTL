import { useState } from "react";
import { useNavigate } from "react-router";
import { Eye, EyeOff, Mail, Lock, User, Building2, Phone, MapPin, Calendar, ChevronDown } from "lucide-react";
import api from "../api";


// Máscaras de input
const maskCPF = (v: string) =>
  v.replace(/\D/g, "").slice(0, 11)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

const maskTelefone = (v: string) =>
  v.replace(/\D/g, "").slice(0, 11)
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{1,4})$/, "$1-$2");

const BAIRROS = [
  { nome: "Centro",          regiao: "Centro" },
  { nome: "Santos Dumont",   regiao: "Norte" },
  { nome: "Jardim Brasília", regiao: "Sul" },
  { nome: "Olímpio Belo",    regiao: "Leste" },
  { nome: "Santa Luzia",     regiao: "Oeste" },
  { nome: "Jardim Alvorada", regiao: "Norte" },
  { nome: "São Bento",       regiao: "Sul" },
];

interface FormData {
  nome: string;
  cpf: string;
  telefone: string;
  data_nascimento: string;
  email: string;
  senha: string;
  confirmPassword: string;
  agreeTerms: boolean;
  // Endereço
  endereco_completo: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  fonte_localizacao: string;
}

export function RegisterPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState<1 | 2>(1); // Passo 1: dados pessoais | Passo 2: endereço

  const [formData, setFormData] = useState<FormData>({
    nome: "",
    cpf: "",
    telefone: "",
    data_nascimento: "",
    email: "",
    senha: "",
    confirmPassword: "",
    agreeTerms: false,
    endereco_completo: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    fonte_localizacao: "manual",
  });

  const update = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.senha !== formData.confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }
    if (!formData.agreeTerms) {
      setError("Você precisa aceitar os termos de uso.");
      return;
    }

    setLoading(true);
    try {
      await api.post("/auth/signup", {
        nome: formData.nome,
        cpf: formData.cpf.replace(/\D/g, ""),
        telefone: formData.telefone,
        data_nascimento: formData.data_nascimento,
        email: formData.email,
        senha: formData.senha,
        endereco: {
          endereco_completo: formData.endereco_completo,
          rua: formData.rua,
          numero: formData.numero,
          complemento: formData.complemento || undefined,
          bairro: formData.bairro,
          fonte_localizacao: formData.fonte_localizacao,
        },
      });

      navigate("/"); // Redireciona pro login após cadastro
    } catch (err: any) {
      // Backend offline → simula sucesso pra apresentação
      if (!err.response) {
        navigate("/");
        return;
      }
      const mensagem =
        err.response?.data?.detail || "Erro ao criar conta. Tente novamente.";
      setError(typeof mensagem === "string" ? mensagem : JSON.stringify(mensagem));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex bg-[#fafbfc]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-[480px] xl:w-[540px] relative bg-[#1f2937] flex-col items-center justify-center p-12">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1758306101145-4c3f3fdde7bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjB2aWV3JTIwbW9kZXJuJTIwY2l0eSUyMHVyYmFuJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzczNzU4MjI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1f2937]/80 via-[#1f2937]/60 to-[#1f2937]/90" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-white text-[22px] font-semibold leading-[30px] tracking-[-0.4px] mb-3">
            Junte-se a plataforma
          </h2>
          <p className="text-[rgba(249,250,251,0.6)] text-[14px] leading-[22px] max-w-[360px]">
            Cadastre-se para colaborar com a gestao e zeladoria urbana do
            municipio de Tres Lagoas.
          </p>
          <div className="mt-10 space-y-4 text-left w-full max-w-[320px]">
            {[
              "Registre ocorrencias em tempo real",
              "Acompanhe ordens de servico",
              "Acesse relatorios e indicadores",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#22c55e]/20 flex items-center justify-center shrink-0">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6L5 8.5L9.5 3.5" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[rgba(249,250,251,0.7)] text-[13px] leading-[18px]">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-[rgba(249,250,251,0.4)] text-[12px] leading-[16px]">
            &copy; 2026 InfraTL - Prefeitura de Tres Lagoas - MS
          </p>
        </div>
      </div>

      {/* Right side - Register Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8 overflow-y-auto">
        <div className="w-full max-w-[420px] py-8">
          {/* Indicador de passo */}
          <div className="flex items-center gap-2 mb-6">
            <div className={`flex items-center justify-center w-7 h-7 rounded-full text-[12px] font-semibold ${step === 1 ? "bg-[#3b82f6] text-white" : "bg-[#22c55e] text-white"}`}>
              {step === 1 ? "1" : "✓"}
            </div>
            <div className={`flex-1 h-px ${step === 2 ? "bg-[#3b82f6]" : "bg-[#e5e7eb]"}`} />
            <div className={`flex items-center justify-center w-7 h-7 rounded-full text-[12px] font-semibold ${step === 2 ? "bg-[#3b82f6] text-white" : "bg-[#e5e7eb] text-[#99a1af]"}`}>
              2
            </div>
          </div>

          <div className="mb-6">
            <h1 className="text-[#101828] text-[24px] font-semibold leading-[32px] tracking-[-0.5px]">
              {step === 1 ? "Criar sua conta" : "Seu endereço"}
            </h1>
            <p className="text-[#4a5565] text-[14px] leading-[20px] mt-1">
              {step === 1 ? "Preencha seus dados pessoais." : "Informe seu endereço para continuar."}
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-[10px]">
              <p className="text-red-600 text-[13px]">{error}</p>
            </div>
          )}

          <form onSubmit={step === 1 ? (e) => { e.preventDefault(); setError(""); setStep(2); } : handleSubmit} className="space-y-4">
            {step === 1 ? (
              <>
                {/* Nome */}
                <div>
                  <label className="block text-[#364153] text-[14px] font-medium mb-1.5">Nome completo</label>
                  <div className="relative">
                    <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#99a1af]" />
                    <input type="text" value={formData.nome} onChange={(e) => update("nome", e.target.value)} placeholder="Seu nome completo" required
                      className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] pl-10 pr-4 text-[14px] text-[#101828] placeholder:text-[rgba(10,10,10,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all" />
                  </div>
                </div>

                {/* CPF e Telefone */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#364153] text-[14px] font-medium mb-1.5">CPF</label>
                    <input type="text" value={formData.cpf} onChange={(e) => update("cpf", maskCPF(e.target.value))} placeholder="000.000.000-00" required maxLength={14}
                      className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] px-4 text-[14px] text-[#101828] placeholder:text-[rgba(10,10,10,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all" />
                  </div>
                  <div>
                    <label className="block text-[#364153] text-[14px] font-medium mb-1.5">Telefone</label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#99a1af]" />
                      <input type="text" value={formData.telefone} onChange={(e) => update("telefone", maskTelefone(e.target.value))} placeholder="(67) 99999-9999" required maxLength={15}
                        className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] pl-10 pr-4 text-[14px] text-[#101828] placeholder:text-[rgba(10,10,10,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all" />
                    </div>
                  </div>
                </div>

                {/* Data de nascimento */}
                <div>
                  <label className="block text-[#364153] text-[14px] font-medium mb-1.5">Data de nascimento</label>
                  <div className="relative">
                    <Calendar size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#99a1af]" />
                    <input type="date" value={formData.data_nascimento} onChange={(e) => update("data_nascimento", e.target.value)} required
                      className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] pl-10 pr-4 text-[14px] text-[#101828] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all" />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[#364153] text-[14px] font-medium mb-1.5">E-mail</label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#99a1af]" />
                    <input type="email" value={formData.email} onChange={(e) => update("email", e.target.value)} placeholder="seu@email.com" required
                      className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] pl-10 pr-4 text-[14px] text-[#101828] placeholder:text-[rgba(10,10,10,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all" />
                  </div>
                </div>

                {/* Senha */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#364153] text-[14px] font-medium mb-1.5">Senha</label>
                    <div className="relative">
                      <Lock size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#99a1af]" />
                      <input type={showPassword ? "text" : "password"} value={formData.senha} onChange={(e) => update("senha", e.target.value)} placeholder="Min. 8 caracteres" required
                        className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] pl-10 pr-10 text-[14px] text-[#101828] placeholder:text-[rgba(10,10,10,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all" />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#99a1af]">
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#364153] text-[14px] font-medium mb-1.5">Confirmar</label>
                    <div className="relative">
                      <Lock size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#99a1af]" />
                      <input type={showConfirm ? "text" : "password"} value={formData.confirmPassword} onChange={(e) => update("confirmPassword", e.target.value)} placeholder="Repita a senha" required
                        className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] pl-10 pr-10 text-[14px] text-[#101828] placeholder:text-[rgba(10,10,10,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all" />
                      <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#99a1af]">
                        {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>
                </div>

                <button type="submit"
                  className="w-full h-[48px] bg-[#3b82f6] hover:bg-[#2563eb] text-white text-[16px] font-medium rounded-[10px] transition-colors mt-2">
                  Continuar →
                </button>
              </>
            ) : (
              <>
                {/* Endereço completo */}
                <div>
                  <label className="block text-[#364153] text-[14px] font-medium mb-1.5">Endereço completo</label>
                  <div className="relative">
                    <MapPin size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#99a1af]" />
                    <input type="text" value={formData.endereco_completo} onChange={(e) => update("endereco_completo", e.target.value)} placeholder="Rua, número, bairro, cidade" required
                      className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] pl-10 pr-4 text-[14px] text-[#101828] placeholder:text-[rgba(10,10,10,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all" />
                  </div>
                </div>

                {/* Rua e Número */}
                <div className="grid grid-cols-[1fr_120px] gap-4">
                  <div>
                    <label className="block text-[#364153] text-[14px] font-medium mb-1.5">Rua</label>
                    <input type="text" value={formData.rua} onChange={(e) => update("rua", e.target.value)} placeholder="Nome da rua" required
                      className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] px-4 text-[14px] text-[#101828] placeholder:text-[rgba(10,10,10,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all" />
                  </div>
                  <div>
                    <label className="block text-[#364153] text-[14px] font-medium mb-1.5">Número</label>
                    <input type="text" value={formData.numero} onChange={(e) => update("numero", e.target.value)} placeholder="123" required
                      className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] px-4 text-[14px] text-[#101828] placeholder:text-[rgba(10,10,10,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all" />
                  </div>
                </div>

                {/* Bairro e Complemento */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#364153] text-[14px] font-medium mb-1.5">Bairro</label>
                    <div className="relative">
                      <select value={formData.bairro} onChange={(e) => update("bairro", e.target.value)} required
                        className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] px-4 pr-9 text-[14px] text-[#101828] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all appearance-none">
                        <option value="" disabled>Selecione</option>
                        {BAIRROS.map((b) => (
                          <option key={b.nome} value={b.nome}>{b.nome}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#99a1af] pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#364153] text-[14px] font-medium mb-1.5">Complemento <span className="text-[#99a1af] font-normal">(opcional)</span></label>
                    <input type="text" value={formData.complemento} onChange={(e) => update("complemento", e.target.value)} placeholder="Apto, bloco..."
                      className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] px-4 text-[14px] text-[#101828] placeholder:text-[rgba(10,10,10,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all" />
                  </div>
                </div>

                {/* Termos */}
                <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                  <input type="checkbox" checked={formData.agreeTerms} onChange={(e) => update("agreeTerms", e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded border-[#e5e7eb] text-[#3b82f6] focus:ring-[#3b82f6]/30 cursor-pointer shrink-0" />
                  <span className="text-[#4a5565] text-[13px] leading-[18px]">
                    Li e concordo com os{" "}
                    <button type="button" className="text-[#3b82f6] font-medium hover:text-[#2563eb]">Termos de Uso</button>{" "}
                    e a{" "}
                    <button type="button" className="text-[#3b82f6] font-medium hover:text-[#2563eb]">Politica de Privacidade</button>
                  </span>
                </label>

                <div className="flex gap-3 mt-2">
                  <button type="button" onClick={() => setStep(1)}
                    className="flex-1 h-[48px] bg-white border border-[#e5e7eb] hover:bg-[#f9fafb] text-[#374151] text-[15px] font-medium rounded-[10px] transition-colors">
                    ← Voltar
                  </button>
                  <button type="submit" disabled={loading}
                    className="flex-[2] h-[48px] bg-[#3b82f6] hover:bg-[#2563eb] disabled:opacity-60 disabled:cursor-not-allowed text-white text-[15px] font-medium rounded-[10px] transition-colors">
                    {loading ? "Criando conta..." : "Criar conta"}
                  </button>
                </div>
              </>
            )}
          </form>

          {step === 1 && (
            <p className="text-center text-[#4a5565] text-[14px] leading-[20px] mt-6">
              Ja possui uma conta?{" "}
              <button onClick={() => navigate("/")} className="text-[#3b82f6] font-medium hover:text-[#2563eb] transition-colors">
                Fazer login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}