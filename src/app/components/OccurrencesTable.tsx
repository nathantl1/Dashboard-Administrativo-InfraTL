import { MoreHorizontal } from "lucide-react";

type Status = "Pendente" | "Em Execucao" | "Concluido";

interface Occurrence {
  id: string;
  category: string;
  address: string;
  date: string;
  status: Status;
}

const occurrences: Occurrence[] = [
  {
    id: "#2847",
    category: "Buraco na Via",
    address: "Av. Principal, 1245 - Centro",
    date: "10/03/2026",
    status: "Pendente",
  },
  {
    id: "#2846",
    category: "Iluminacao Publica",
    address: "Rua das Flores, 856 - Jardim",
    date: "10/03/2026",
    status: "Em Execucao",
  },
  {
    id: "#2845",
    category: "Coleta de Lixo",
    address: "Rua Santos Dumont, 234 - Vila Nova",
    date: "09/03/2026",
    status: "Concluido",
  },
  {
    id: "#2844",
    category: "Poda de Arvore",
    address: "Av. dos Estados, 3456 - Industrial",
    date: "09/03/2026",
    status: "Concluido",
  },
  {
    id: "#2843",
    category: "Buraco na Via",
    address: "Rua 7 de Setembro, 789 - Centro",
    date: "08/03/2026",
    status: "Em Execucao",
  },
  {
    id: "#2842",
    category: "Limpeza de Bueiro",
    address: "Rua Amazonas, 1123 - Sao Jose",
    date: "08/03/2026",
    status: "Pendente",
  },
  {
    id: "#2841",
    category: "Sinalizacao de Transito",
    address: "Av. Brasil, 2890 - Centro",
    date: "07/03/2026",
    status: "Concluido",
  },
  {
    id: "#2840",
    category: "Iluminacao Publica",
    address: "Rua das Acacias, 445 - Parque Verde",
    date: "07/03/2026",
    status: "Em Execucao",
  },
];

const statusConfig: Record<
  Status,
  { bg: string; dotColor: string; textColor: string; label: string }
> = {
  Pendente: {
    bg: "bg-[#fef9c2]",
    dotColor: "bg-[#f0b100]",
    textColor: "text-[#a65f00]",
    label: "Pendente",
  },
  "Em Execucao": {
    bg: "bg-[#dbeafe]",
    dotColor: "bg-[#2b7fff]",
    textColor: "text-[#1447e6]",
    label: "Em Execucao",
  },
  Concluido: {
    bg: "bg-[#dcfce7]",
    dotColor: "bg-[#00c950]",
    textColor: "text-[#008236]",
    label: "Concluido",
  },
};

function StatusBadge({ status }: { status: Status }) {
  const config = statusConfig[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 h-5 rounded-full ${config.bg}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dotColor}`} />
      <span
        className={`text-[12px] font-medium leading-[16px] ${config.textColor}`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {config.label}
      </span>
    </span>
  );
}

export function OccurrencesTable() {
  return (
    <div
      className="bg-white rounded-[14px] border border-[#e5e7eb] overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Header */}
      <div className="px-4 pt-4 pb-4 border-b border-[#e5e7eb]">
        <h2 className="text-[#101828] text-[16px] font-semibold leading-[24px] tracking-[-0.31px]">
          Ocorrencias Recentes
        </h2>
        <p className="text-[#6a7282] text-[12px] leading-[16px] mt-1">
          Acompanhe as solicitacoes de zeladoria urbana
        </p>
      </div>

      {/* List */}
      <div className="divide-y divide-[#e5e7eb]">
        {occurrences.map((item) => (
          <div
            key={item.id}
            className="px-4 py-4 flex items-start justify-between hover:bg-[#f9fafb] transition-colors"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#101828] text-[14px] font-medium leading-[20px] tracking-[-0.15px]">
                  {item.id}
                </span>
                <StatusBadge status={item.status} />
              </div>
              <p className="text-[#364153] text-[14px] font-medium leading-[20px] tracking-[-0.15px]">
                {item.category}
              </p>
              <p className="text-[#4a5565] text-[12px] leading-[16px] mt-0.5">
                {item.address}
              </p>
              <p className="text-[#6a7282] text-[12px] leading-[16px] mt-0.5">
                {item.date}
              </p>
            </div>
            <button className="shrink-0 w-7 h-7 rounded flex items-center justify-center hover:bg-gray-100 transition-colors">
              <MoreHorizontal size={20} className="text-[#99a1af]" />
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="bg-[#f9fafb] border-t border-[#e5e7eb] px-4 py-3 flex items-center justify-between">
        <p className="text-[#4a5565] text-[12px] leading-[16px]">
          Mostrando{" "}
          <span className="font-medium">8</span> de{" "}
          <span className="font-medium">8</span> ocorrencias
        </p>
        <div className="flex items-center gap-2">
          <button className="text-[#4a5565] text-[12px] font-medium leading-[16px] px-2 h-6 rounded hover:bg-gray-200 transition-colors">
            Anterior
          </button>
          <button className="bg-[#3b82f6] text-white text-[12px] font-medium leading-[16px] px-2.5 h-6 rounded min-w-[28px]">
            1
          </button>
          <button className="text-[#4a5565] text-[12px] font-medium leading-[16px] px-2.5 h-6 rounded hover:bg-gray-200 transition-colors min-w-[28px]">
            2
          </button>
          <button className="text-[#4a5565] text-[12px] font-medium leading-[16px] px-2 h-6 rounded hover:bg-gray-200 transition-colors">
            Proximo
          </button>
        </div>
      </div>
    </div>
  );
}
