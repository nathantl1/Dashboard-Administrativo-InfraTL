import { useState } from "react";
import {
  Search,
  Plus,
  Download,
  Calendar,
  User,
  Clock,
  CheckCircle2,
  CircleDot,
  PauseCircle,
  XCircle,
  ArrowRight,
  MapPin,
  Wrench,
  MoreHorizontal,
  Filter,
} from "lucide-react";

type OSStatus = "Aberta" | "Em Andamento" | "Pausada" | "Concluida" | "Cancelada";

interface OrdemServico {
  id: string;
  title: string;
  description: string;
  occurrenceId: string;
  address: string;
  neighborhood: string;
  assignedTeam: string;
  responsible: string;
  createdDate: string;
  dueDate: string;
  status: OSStatus;
  progress: number;
}

const ordensServico: OrdemServico[] = [
  { id: "OS-0412", title: "Reparo de buraco na via", description: "Tapa-buraco e recapeamento no trecho da Av. Principal", occurrenceId: "#2847", address: "Av. Principal, 1245", neighborhood: "Centro", assignedTeam: "Equipe Pavimentacao", responsible: "Eng. Ricardo", createdDate: "10/03/2026", dueDate: "15/03/2026", status: "Aberta", progress: 0 },
  { id: "OS-0411", title: "Troca de lampada publica", description: "Substituicao de lampada LED poste 856-J", occurrenceId: "#2846", address: "Rua das Flores, 856", neighborhood: "Jardim", assignedTeam: "Equipe Eletrica", responsible: "Tec. Paulo", createdDate: "10/03/2026", dueDate: "12/03/2026", status: "Em Andamento", progress: 60 },
  { id: "OS-0410", title: "Coleta especial de residuos", description: "Remocao de entulho e lixo volumoso", occurrenceId: "#2845", address: "Rua Santos Dumont, 234", neighborhood: "Vila Nova", assignedTeam: "Equipe Limpeza", responsible: "Sup. Marta", createdDate: "09/03/2026", dueDate: "10/03/2026", status: "Concluida", progress: 100 },
  { id: "OS-0409", title: "Poda de arvore de grande porte", description: "Poda de galhos com risco de queda sobre fiacao", occurrenceId: "#2844", address: "Av. dos Estados, 3456", neighborhood: "Industrial", assignedTeam: "Equipe Ambiental", responsible: "Bio. Andrea", createdDate: "09/03/2026", dueDate: "11/03/2026", status: "Concluida", progress: 100 },
  { id: "OS-0408", title: "Tapa-buraco emergencial", description: "Reparo urgente em cratera formada apos chuva", occurrenceId: "#2843", address: "Rua 7 de Setembro, 789", neighborhood: "Centro", assignedTeam: "Equipe Pavimentacao", responsible: "Eng. Ricardo", createdDate: "08/03/2026", dueDate: "14/03/2026", status: "Em Andamento", progress: 35 },
  { id: "OS-0407", title: "Desobstrucao de bueiro", description: "Limpeza e desobstrucao de galeria pluvial", occurrenceId: "#2842", address: "Rua Amazonas, 1123", neighborhood: "Sao Jose", assignedTeam: "Equipe Drenagem", responsible: "Tec. Jorge", createdDate: "08/03/2026", dueDate: "13/03/2026", status: "Pausada", progress: 20 },
  { id: "OS-0406", title: "Instalacao de placa de sinalizacao", description: "Nova placa de pare no cruzamento", occurrenceId: "#2841", address: "Av. Brasil, 2890", neighborhood: "Centro", assignedTeam: "Equipe Transito", responsible: "Ag. Marcos", createdDate: "07/03/2026", dueDate: "09/03/2026", status: "Concluida", progress: 100 },
  { id: "OS-0405", title: "Reparo de luminaria vandalizada", description: "Troca de equipamento danificado por vandalismo", occurrenceId: "#2840", address: "Rua das Acacias, 445", neighborhood: "Parque Verde", assignedTeam: "Equipe Eletrica", responsible: "Tec. Paulo", createdDate: "07/03/2026", dueDate: "14/03/2026", status: "Em Andamento", progress: 80 },
];

const statusConfig: Record<OSStatus, { bg: string; dot: string; text: string; icon: typeof CircleDot }> = {
  Aberta: { bg: "bg-[#fef9c2]", dot: "bg-[#f0b100]", text: "text-[#a65f00]", icon: CircleDot },
  "Em Andamento": { bg: "bg-[#dbeafe]", dot: "bg-[#2b7fff]", text: "text-[#1447e6]", icon: Clock },
  Pausada: { bg: "bg-[#fef3c7]", dot: "bg-[#f59e0b]", text: "text-[#b45309]", icon: PauseCircle },
  Concluida: { bg: "bg-[#dcfce7]", dot: "bg-[#00c950]", text: "text-[#008236]", icon: CheckCircle2 },
  Cancelada: { bg: "bg-[#f3f4f6]", dot: "bg-[#99a1af]", text: "text-[#4a5565]", icon: XCircle },
};

const summaryCards = [
  { label: "Abertas", count: 1, color: "text-[#f0b100]", bg: "bg-[#fef9c2]" },
  { label: "Em Andamento", count: 3, color: "text-[#2b7fff]", bg: "bg-[#dbeafe]" },
  { label: "Pausadas", count: 1, color: "text-[#f59e0b]", bg: "bg-[#fef3c7]" },
  { label: "Concluidas", count: 3, color: "text-[#00c950]", bg: "bg-[#dcfce7]" },
];

export function OrdensServicoPage() {
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");

  return (
    <div className="px-6 pt-6 pb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-[#101828] text-[20px] font-semibold leading-[28px] tracking-[-0.45px]">
            Ordens de Servico
          </h1>
          <p className="text-[#4a5565] text-[12px] leading-[16px] mt-1">
            Acompanhe e gerencie as ordens de servico atribuidas as equipes
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="h-[40px] px-4 bg-white border border-[#e5e7eb] rounded-[10px] flex items-center gap-2 hover:bg-gray-50 transition-colors text-[14px] font-medium text-[#364153]">
            <Download size={16} />
            Exportar
          </button>
          <button className="h-[40px] px-4 bg-[#3b82f6] rounded-[10px] flex items-center gap-2 hover:bg-[#2563eb] transition-colors text-[14px] font-medium text-white shadow-sm shadow-[#3b82f6]/20">
            <Plus size={16} />
            Nova OS
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {summaryCards.map((card) => (
          <div key={card.label} className="bg-white rounded-[12px] border border-[#e5e7eb] px-4 py-3 flex items-center gap-3">
            <div className={`w-10 h-10 rounded-[10px] ${card.bg} flex items-center justify-center`}>
              <span className={`text-[18px] font-semibold ${card.color}`}>{card.count}</span>
            </div>
            <span className="text-[#4a5565] text-[13px] font-medium">{card.label}</span>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
        <div className="relative flex-1 max-w-[360px]">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#99a1af]" />
          <input
            type="text"
            placeholder="Buscar ordens de servico..."
            className="w-full h-[38px] bg-white border border-[#e5e7eb] rounded-[8px] pl-9 pr-4 text-[13px] placeholder:text-[rgba(10,10,10,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20 focus:border-[#3b82f6]"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="h-[38px] px-3 bg-white border border-[#e5e7eb] rounded-[8px] flex items-center gap-2 hover:bg-gray-50 transition-colors text-[13px] font-medium text-[#4a5565]">
            <Filter size={14} />
            Filtrar
          </button>
          <div className="flex bg-[#f3f4f6] rounded-[8px] p-1">
            <button
              onClick={() => setViewMode("cards")}
              className={`px-3 h-[28px] rounded-[6px] text-[12px] font-medium transition-all ${viewMode === "cards" ? "bg-white text-[#101828] shadow-sm" : "text-[#6a7282]"}`}
            >
              Cards
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`px-3 h-[28px] rounded-[6px] text-[12px] font-medium transition-all ${viewMode === "table" ? "bg-white text-[#101828] shadow-sm" : "text-[#6a7282]"}`}
            >
              Tabela
            </button>
          </div>
        </div>
      </div>

      {/* Cards View */}
      {viewMode === "cards" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ordensServico.map((os) => {
            const sc = statusConfig[os.status];
            const StatusIcon = sc.icon;
            return (
              <div key={os.id} className="bg-white rounded-[14px] border border-[#e5e7eb] p-5 hover:shadow-sm transition-shadow">
                {/* Card Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-[10px] bg-[#f3f4f6] flex items-center justify-center">
                      <Wrench size={16} className="text-[#6a7282]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#101828] text-[14px] font-semibold">{os.id}</span>
                        <span className={`inline-flex items-center gap-1 px-2 h-[20px] rounded-full ${sc.bg}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
                          <span className={`text-[11px] font-medium ${sc.text}`}>{os.status}</span>
                        </span>
                      </div>
                      <p className="text-[#6a7282] text-[11px] mt-0.5">Ref: {os.occurrenceId}</p>
                    </div>
                  </div>
                  <button className="w-7 h-7 rounded-[6px] flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <MoreHorizontal size={16} className="text-[#99a1af]" />
                  </button>
                </div>

                {/* Title */}
                <h3 className="text-[#364153] text-[14px] font-medium leading-[20px] mb-1">{os.title}</h3>
                <p className="text-[#6a7282] text-[12px] leading-[18px] mb-4">{os.description}</p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[#6a7282] text-[11px] font-medium">Progresso</span>
                    <span className="text-[#364153] text-[11px] font-semibold">{os.progress}%</span>
                  </div>
                  <div className="h-[6px] bg-[#f3f4f6] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${os.progress === 100 ? "bg-[#22c55e]" : "bg-[#3b82f6]"}`}
                      style={{ width: `${os.progress}%` }}
                    />
                  </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-3 text-[12px]">
                  <div className="flex items-center gap-1.5 text-[#6a7282]">
                    <MapPin size={13} className="text-[#99a1af] shrink-0" />
                    <span className="truncate">{os.address}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#6a7282]">
                    <User size={13} className="text-[#99a1af] shrink-0" />
                    <span className="truncate">{os.assignedTeam}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#6a7282]">
                    <Calendar size={13} className="text-[#99a1af] shrink-0" />
                    <span>{os.createdDate}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#6a7282]">
                    <Clock size={13} className="text-[#99a1af] shrink-0" />
                    <span>Prazo: {os.dueDate}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Table View */}
      {viewMode === "table" && (
        <div className="bg-white rounded-[14px] border border-[#e5e7eb] overflow-hidden">
          <div className="hidden lg:grid grid-cols-[90px_1fr_1fr_130px_110px_110px_48px] gap-3 px-4 py-3 border-b border-[#e5e7eb] bg-[#f9fafb]">
            {["ID", "Titulo", "Equipe", "Criacao", "Prazo", "Status", ""].map((h, i) => (
              <span key={i} className="text-[#6a7282] text-[11px] font-semibold uppercase tracking-[0.5px]">{h}</span>
            ))}
          </div>
          <div className="divide-y divide-[#e5e7eb]">
            {ordensServico.map((os) => {
              const sc = statusConfig[os.status];
              return (
                <div key={os.id} className="grid grid-cols-1 lg:grid-cols-[90px_1fr_1fr_130px_110px_110px_48px] gap-2 lg:gap-3 px-4 py-3 hover:bg-[#f9fafb]/60 transition-colors items-center">
                  <span className="text-[#101828] text-[13px] font-semibold">{os.id}</span>
                  <div>
                    <p className="text-[#364153] text-[13px] font-medium truncate">{os.title}</p>
                    <p className="text-[#99a1af] text-[11px]">Ref: {os.occurrenceId}</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User size={13} className="text-[#99a1af] shrink-0" />
                    <span className="text-[#4a5565] text-[13px] truncate">{os.assignedTeam}</span>
                  </div>
                  <span className="text-[#6a7282] text-[13px]">{os.createdDate}</span>
                  <span className="text-[#6a7282] text-[13px]">{os.dueDate}</span>
                  <span className={`inline-flex items-center gap-1.5 px-2.5 h-[22px] rounded-full ${sc.bg} w-fit`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
                    <span className={`text-[12px] font-medium ${sc.text}`}>{os.status}</span>
                  </span>
                  <button className="w-7 h-7 rounded-[6px] flex items-center justify-center hover:bg-gray-100 transition-colors justify-self-end">
                    <MoreHorizontal size={15} className="text-[#99a1af]" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
