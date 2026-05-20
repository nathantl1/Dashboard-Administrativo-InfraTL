import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Search, Download, Plus, MapPin, Calendar,
  Eye, MoreHorizontal, ArrowUpDown, AlertTriangle,
  Lightbulb, Trash2, TreePine, TrafficCone, Droplets,
  LayoutGrid, List,
} from "lucide-react";

type Status = "Pendente" | "Em Execucao" | "Concluido" | "Cancelado";
type Priority = "Alta" | "Media" | "Baixa";

interface Occurrence {
  id: string;
  category: string;
  categoryIcon: typeof AlertTriangle;
  address: string;
  neighborhood: string;
  date: string;
  status: Status;
  priority: Priority;
  reporter: string;
}

const occurrences: Occurrence[] = [
  { id: "#2847", category: "Buraco na Via", categoryIcon: AlertTriangle, address: "Av. Principal, 1245", neighborhood: "Centro", date: "10/03/2026", status: "Pendente", priority: "Alta", reporter: "Maria S." },
  { id: "#2846", category: "Iluminacao Publica", categoryIcon: Lightbulb, address: "Rua das Flores, 856", neighborhood: "Jardim", date: "10/03/2026", status: "Em Execucao", priority: "Media", reporter: "Jose P." },
  { id: "#2845", category: "Coleta de Lixo", categoryIcon: Trash2, address: "Rua Santos Dumont, 234", neighborhood: "Vila Nova", date: "09/03/2026", status: "Concluido", priority: "Baixa", reporter: "Ana L." },
  { id: "#2844", category: "Poda de Arvore", categoryIcon: TreePine, address: "Av. dos Estados, 3456", neighborhood: "Industrial", date: "09/03/2026", status: "Concluido", priority: "Media", reporter: "Carlos M." },
  { id: "#2843", category: "Buraco na Via", categoryIcon: AlertTriangle, address: "Rua 7 de Setembro, 789", neighborhood: "Centro", date: "08/03/2026", status: "Em Execucao", priority: "Alta", reporter: "Pedro R." },
  { id: "#2842", category: "Limpeza de Bueiro", categoryIcon: Droplets, address: "Rua Amazonas, 1123", neighborhood: "Sao Jose", date: "08/03/2026", status: "Pendente", priority: "Alta", reporter: "Lucia F." },
  { id: "#2841", category: "Sinalizacao de Transito", categoryIcon: TrafficCone, address: "Av. Brasil, 2890", neighborhood: "Centro", date: "07/03/2026", status: "Concluido", priority: "Baixa", reporter: "Roberto A." },
  { id: "#2840", category: "Iluminacao Publica", categoryIcon: Lightbulb, address: "Rua das Acacias, 445", neighborhood: "Parque Verde", date: "07/03/2026", status: "Em Execucao", priority: "Media", reporter: "Fernanda G." },
  { id: "#2839", category: "Buraco na Via", categoryIcon: AlertTriangle, address: "Rua Parana, 332", neighborhood: "Colinos", date: "06/03/2026", status: "Cancelado", priority: "Baixa", reporter: "Marcos T." },
  { id: "#2838", category: "Poda de Arvore", categoryIcon: TreePine, address: "Rua Goias, 1890", neighborhood: "Jardim Alvorada", date: "06/03/2026", status: "Pendente", priority: "Media", reporter: "Sandra B." },
];

const statusConfig: Record<Status, { bg: string; dot: string; text: string }> = {
  Pendente: { bg: "bg-[#fef9c2]", dot: "bg-[#f0b100]", text: "text-[#a65f00]" },
  "Em Execucao": { bg: "bg-[#dbeafe]", dot: "bg-[#2b7fff]", text: "text-[#1447e6]" },
  Concluido: { bg: "bg-[#dcfce7]", dot: "bg-[#00c950]", text: "text-[#008236]" },
  Cancelado: { bg: "bg-[#f3f4f6]", dot: "bg-[#99a1af]", text: "text-[#4a5565]" },
};

const priorityConfig: Record<Priority, { bg: string; text: string }> = {
  Alta: { bg: "bg-[#fee2e2]", text: "text-[#dc2626]" },
  Media: { bg: "bg-[#fef3c7]", text: "text-[#d97706]" },
  Baixa: { bg: "bg-[#f0fdf4]", text: "text-[#16a34a]" },
};

function StatusBadge({ status }: { status: Status }) {
  const c = statusConfig[status];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 h-[22px] rounded-full ${c.bg}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      <span className={`text-[12px] font-medium leading-[16px] ${c.text}`}>{status}</span>
    </span>
  );
}

function PriorityBadge({ priority }: { priority: Priority }) {
  const c = priorityConfig[priority];
  return (
    <span className={`inline-flex items-center px-2 h-[22px] rounded-[6px] text-[12px] font-medium ${c.bg} ${c.text}`}>
      {priority}
    </span>
  );
}

export function OcorrenciasPage() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<string>("Todos");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const filters = ["Todos", "Pendente", "Em Execucao", "Concluido", "Cancelado"];

  const filtered = activeFilter === "Todos"
    ? occurrences
    : occurrences.filter((o) => o.status === activeFilter);

  return (
    <div className="px-6 pt-6 pb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-[#101828] text-[20px] font-semibold leading-[28px] tracking-[-0.45px]">
            Ocorrencias
          </h1>
          <p className="text-[#4a5565] text-[12px] leading-[16px] mt-1">
            Gerencie todas as ocorrencias registradas no sistema
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="h-[40px] px-4 bg-white border border-[#e5e7eb] rounded-[10px] flex items-center gap-2 hover:bg-gray-50 transition-colors text-[14px] font-medium text-[#364153]">
            <Download size={16} />
            Exportar
          </button>
          <button
            onClick={() => navigate("/dashboard/ocorrencias/nova")}
            className="h-[40px] px-4 bg-[#3b82f6] rounded-[10px] flex items-center gap-2 hover:bg-[#2563eb] transition-colors text-[14px] font-medium text-white shadow-sm shadow-[#3b82f6]/20"
          >
            <Plus size={16} />
            Nova Ocorrencia
          </button>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white rounded-[14px] border border-[#e5e7eb] p-4 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="relative flex-1 max-w-[400px]">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#99a1af]" />
            <input
              type="text"
              placeholder="Buscar por ID, categoria ou endereco..."
              className="w-full h-[38px] bg-[#f9fafb] border border-[#e5e7eb] rounded-[8px] pl-9 pr-4 text-[13px] placeholder:text-[rgba(10,10,10,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20 focus:border-[#3b82f6]"
            />
          </div>

          <div className="flex items-center gap-1 bg-[#f3f4f6] rounded-[8px] p-1">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3 h-[30px] rounded-[6px] text-[12px] font-medium transition-all ${
                  activeFilter === f
                    ? "bg-white text-[#101828] shadow-sm"
                    : "text-[#6a7282] hover:text-[#364153]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 bg-[#f3f4f6] rounded-[8px] p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`w-[34px] h-[30px] rounded-[6px] flex items-center justify-center transition-all ${
                viewMode === "grid" ? "bg-white text-[#3b82f6] shadow-sm" : "text-[#6a7282] hover:text-[#364153]"
              }`}
            >
              <LayoutGrid size={16} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`w-[34px] h-[30px] rounded-[6px] flex items-center justify-center transition-all ${
                viewMode === "list" ? "bg-white text-[#3b82f6] shadow-sm" : "text-[#6a7282] hover:text-[#364153]"
              }`}
            >
              <List size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Grid View */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((item) => {
            const CatIcon = item.categoryIcon;
            return (
              <div key={item.id} className="bg-white rounded-[14px] border border-[#e5e7eb] p-5 hover:shadow-md hover:border-[#d1d5db] transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-[10px] bg-gradient-to-br from-[#3b82f6]/10 to-[#3b82f6]/5 flex items-center justify-center shrink-0">
                      <CatIcon size={20} className="text-[#3b82f6]" />
                    </div>
                    <div>
                      <p className="text-[#6a7282] text-[11px] font-medium uppercase tracking-[0.5px] mb-0.5">Ocorrência</p>
                      <p className="text-[#101828] text-[16px] font-semibold leading-[20px]">{item.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-7 h-7 rounded-[6px] flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <Eye size={15} className="text-[#99a1af]" />
                    </button>
                    <button className="w-7 h-7 rounded-[6px] flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <MoreHorizontal size={15} className="text-[#99a1af]" />
                    </button>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-[#364153] text-[15px] font-semibold leading-[20px] mb-1">{item.category}</p>
                  <div className="flex items-start gap-1.5 text-[#6a7282] text-[13px] leading-[18px]">
                    <MapPin size={14} className="text-[#99a1af] shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{item.address}, {item.neighborhood}</span>
                  </div>
                </div>
                <div className="space-y-2.5 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#99a1af]" />
                      <span className="text-[#6a7282] text-[12px]">Data</span>
                    </div>
                    <span className="text-[#364153] text-[13px] font-medium">{item.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6a7282] text-[12px]">Autor</span>
                    <span className="text-[#364153] text-[13px] font-medium">{item.reporter}</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-[#e5e7eb] flex items-center justify-between gap-2">
                  <StatusBadge status={item.status} />
                  <PriorityBadge priority={item.priority} />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* List View */}
      {viewMode === "list" && (
        <div className="bg-white rounded-[14px] border border-[#e5e7eb] overflow-hidden">
          <div className="hidden lg:grid grid-cols-[80px_1fr_1fr_120px_100px_100px_100px_48px] gap-3 px-4 py-3 border-b border-[#e5e7eb] bg-[#f9fafb]">
            {["ID", "Categoria", "Endereco", "Data", "Status", "Prioridade", "Autor", ""].map((h, i) => (
              <div key={i} className="flex items-center gap-1">
                <span className="text-[#6a7282] text-[11px] font-semibold uppercase tracking-[0.5px]">{h}</span>
                {h && <ArrowUpDown size={12} className="text-[#99a1af]" />}
              </div>
            ))}
          </div>
          <div className="divide-y divide-[#e5e7eb]">
            {filtered.map((item) => {
              const CatIcon = item.categoryIcon;
              return (
                <div key={item.id} className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1fr_120px_100px_100px_100px_48px] gap-2 lg:gap-3 px-4 py-3.5 hover:bg-[#f9fafb]/60 transition-colors items-center">
                  <span className="text-[#101828] text-[13px] font-semibold">{item.id}</span>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-[8px] bg-[#f3f4f6] flex items-center justify-center shrink-0">
                      <CatIcon size={14} className="text-[#6a7282]" />
                    </div>
                    <span className="text-[#364153] text-[13px] font-medium truncate">{item.category}</span>
                  </div>
                  <div className="flex items-center gap-1.5 min-w-0">
                    <MapPin size={13} className="text-[#99a1af] shrink-0" />
                    <span className="text-[#4a5565] text-[13px] truncate">{item.address} - {item.neighborhood}</span>
                  </div>
                  <span className="text-[#6a7282] text-[13px]">{item.date}</span>
                  <StatusBadge status={item.status} />
                  <PriorityBadge priority={item.priority} />
                  <span className="text-[#6a7282] text-[13px]">{item.reporter}</span>
                  <div className="flex items-center gap-1 justify-end">
                    <button className="w-7 h-7 rounded-[6px] flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <Eye size={15} className="text-[#99a1af]" />
                    </button>
                    <button className="w-7 h-7 rounded-[6px] flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <MoreHorizontal size={15} className="text-[#99a1af]" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Pagination */}
      <div className="mt-6 bg-white rounded-[14px] border border-[#e5e7eb] px-4 py-3 flex items-center justify-between">
        <p className="text-[#4a5565] text-[12px]">
          Mostrando <span className="font-medium">{filtered.length}</span> de <span className="font-medium">10</span> ocorrencias
        </p>
        <div className="flex items-center gap-2">
          <button className="text-[#4a5565] text-[12px] font-medium px-2.5 h-7 rounded-[6px] hover:bg-gray-200 transition-colors">Anterior</button>
          <button className="bg-[#3b82f6] text-white text-[12px] font-medium px-2.5 h-7 rounded-[6px] min-w-[28px]">1</button>
          <button className="text-[#4a5565] text-[12px] font-medium px-2.5 h-7 rounded-[6px] hover:bg-gray-200 transition-colors min-w-[28px]">2</button>
          <button className="text-[#4a5565] text-[12px] font-medium px-2.5 h-7 rounded-[6px] hover:bg-gray-200 transition-colors min-w-[28px]">3</button>
          <button className="text-[#4a5565] text-[12px] font-medium px-2.5 h-7 rounded-[6px] hover:bg-gray-200 transition-colors">Proximo</button>
        </div>
      </div>
    </div>
  );
}