import { useState } from "react";
import {
  Download,
  Calendar,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart as PieChartIcon,
  FileText,
  Printer,
  ChevronDown,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
  Area,
  AreaChart,
} from "recharts";

const monthlyData = [
  { month: "Set", chamados: 142, concluidos: 118 },
  { month: "Out", chamados: 168, concluidos: 145 },
  { month: "Nov", chamados: 155, concluidos: 139 },
  { month: "Dez", chamados: 190, concluidos: 165 },
  { month: "Jan", chamados: 178, concluidos: 160 },
  { month: "Fev", chamados: 210, concluidos: 188 },
  { month: "Mar", chamados: 195, concluidos: 172 },
];

const categoryData = [
  { name: "Buraco na Via", value: 320, color: "#3b82f6" },
  { name: "Iluminacao", value: 245, color: "#f59e0b" },
  { name: "Coleta de Lixo", value: 190, color: "#22c55e" },
  { name: "Poda de Arvore", value: 155, color: "#8b5cf6" },
  { name: "Sinalizacao", value: 120, color: "#ef4444" },
  { name: "Outros", value: 95, color: "#99a1af" },
];

const neighborhoodData = [
  { bairro: "Centro", total: 245 },
  { bairro: "Jardim", total: 189 },
  { bairro: "Vila Nova", total: 156 },
  { bairro: "Industrial", total: 132 },
  { bairro: "Parque Verde", total: 118 },
  { bairro: "Sao Jose", total: 98 },
  { bairro: "Colinos", total: 78 },
];

const resolutionTimeData = [
  { month: "Set", dias: 5.2 },
  { month: "Out", dias: 4.8 },
  { month: "Nov", dias: 4.5 },
  { month: "Dez", dias: 5.1 },
  { month: "Jan", dias: 4.2 },
  { month: "Fev", dias: 3.8 },
  { month: "Mar", dias: 3.5 },
];

const kpiCards = [
  { label: "Total de Chamados", value: "1.847", change: "+12%", positive: true, icon: BarChart3, iconBg: "bg-[#dbeafe]", iconColor: "text-[#3b82f6]" },
  { label: "Taxa de Resolucao", value: "89.2%", change: "+3.1%", positive: true, icon: TrendingUp, iconBg: "bg-[#dcfce7]", iconColor: "text-[#22c55e]" },
  { label: "Tempo Medio (dias)", value: "3.5", change: "-1.7d", positive: true, icon: TrendingDown, iconBg: "bg-[#dbeafe]", iconColor: "text-[#3b82f6]" },
  { label: "Satisfacao", value: "4.6/5", change: "+0.3", positive: true, icon: TrendingUp, iconBg: "bg-[#fef3c7]", iconColor: "text-[#f59e0b]" },
];

export function RelatoriosPage() {
  const [period, setPeriod] = useState("7m");

  return (
    <div className="px-6 pt-6 pb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-[#101828] text-[20px] font-semibold leading-[28px] tracking-[-0.45px]">
            Relatorios
          </h1>
          <p className="text-[#4a5565] text-[12px] leading-[16px] mt-1">
            Analise de dados e indicadores de desempenho da zeladoria urbana
          </p>
        </div>
        <div className="flex items-center gap-3">
          {/* Period selector */}
          <div className="flex bg-[#f3f4f6] rounded-[8px] p-1">
            {[
              { label: "30d", value: "30d" },
              { label: "3m", value: "3m" },
              { label: "7m", value: "7m" },
              { label: "1a", value: "1a" },
            ].map((p) => (
              <button
                key={p.value}
                onClick={() => setPeriod(p.value)}
                className={`px-3 h-[30px] rounded-[6px] text-[12px] font-medium transition-all ${
                  period === p.value ? "bg-white text-[#101828] shadow-sm" : "text-[#6a7282]"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
          <button className="h-[40px] px-4 bg-white border border-[#e5e7eb] rounded-[10px] flex items-center gap-2 hover:bg-gray-50 transition-colors text-[14px] font-medium text-[#364153]">
            <Printer size={16} />
            Imprimir
          </button>
          <button className="h-[40px] px-4 bg-[#3b82f6] rounded-[10px] flex items-center gap-2 hover:bg-[#2563eb] transition-colors text-[14px] font-medium text-white shadow-sm shadow-[#3b82f6]/20">
            <Download size={16} />
            Exportar PDF
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {kpiCards.map((kpi) => {
          const IconComp = kpi.icon;
          return (
            <div key={kpi.label} className="bg-white rounded-[14px] border border-[#e5e7eb] p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[#6a7282] text-[12px] leading-[16px]">{kpi.label}</p>
                  <p className="text-[#101828] text-[24px] font-semibold leading-[32px] mt-1">{kpi.value}</p>
                  <span className={`text-[12px] font-medium ${kpi.positive ? "text-[#00a63e]" : "text-[#e7000b]"}`}>
                    {kpi.change} <span className="text-[#99a1af] font-normal">vs. anterior</span>
                  </span>
                </div>
                <div className={`w-10 h-10 rounded-[10px] ${kpi.iconBg} flex items-center justify-center`}>
                  <IconComp size={20} className={kpi.iconColor} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        {/* Chamados vs Concluidos */}
        <div className="lg:col-span-2 bg-white rounded-[14px] border border-[#e5e7eb] p-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-[#101828] text-[16px] font-semibold leading-[24px] tracking-[-0.31px]">
                Chamados vs Concluidos
              </h3>
              <p className="text-[#6a7282] text-[12px] leading-[16px] mt-0.5">Evolucao mensal de chamados abertos e resolvidos</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={monthlyData} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#6a7282" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: "#6a7282" }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ borderRadius: "10px", border: "1px solid #e5e7eb", fontSize: "12px", fontFamily: "Inter" }}
              />
              <Bar dataKey="chamados" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Chamados" />
              <Bar dataKey="concluidos" fill="#22c55e" radius={[4, 4, 0, 0]} name="Concluidos" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Categorias Pie */}
        <div className="bg-white rounded-[14px] border border-[#e5e7eb] p-5">
          <h3 className="text-[#101828] text-[16px] font-semibold leading-[24px] tracking-[-0.31px] mb-1">
            Por Categoria
          </h3>
          <p className="text-[#6a7282] text-[12px] leading-[16px] mb-4">Distribuicao de ocorrencias</p>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={3}
                dataKey="value"
              >
                {categoryData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ borderRadius: "10px", border: "1px solid #e5e7eb", fontSize: "12px", fontFamily: "Inter" }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
            {categoryData.map((cat) => (
              <div key={cat.name} className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
                <span className="text-[#6a7282] text-[11px] truncate">{cat.name}</span>
                <span className="text-[#101828] text-[11px] font-semibold ml-auto">{cat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Resolution Time */}
        <div className="bg-white rounded-[14px] border border-[#e5e7eb] p-5">
          <h3 className="text-[#101828] text-[16px] font-semibold leading-[24px] tracking-[-0.31px] mb-1">
            Tempo Medio de Resolucao
          </h3>
          <p className="text-[#6a7282] text-[12px] leading-[16px] mb-5">Em dias uteis por mes</p>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={resolutionTimeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#6a7282" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: "#6a7282" }} axisLine={false} tickLine={false} domain={[0, 7]} />
              <Tooltip
                contentStyle={{ borderRadius: "10px", border: "1px solid #e5e7eb", fontSize: "12px", fontFamily: "Inter" }}
              />
              <defs>
                <linearGradient id="gradientBlue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="dias" stroke="#3b82f6" fill="url(#gradientBlue)" strokeWidth={2} name="Dias" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Bairros Ranking */}
        <div className="bg-white rounded-[14px] border border-[#e5e7eb] p-5">
          <h3 className="text-[#101828] text-[16px] font-semibold leading-[24px] tracking-[-0.31px] mb-1">
            Ranking por Bairro
          </h3>
          <p className="text-[#6a7282] text-[12px] leading-[16px] mb-5">Bairros com mais ocorrencias</p>
          <div className="space-y-3">
            {neighborhoodData.map((nb, i) => {
              const maxVal = neighborhoodData[0].total;
              const pct = (nb.total / maxVal) * 100;
              return (
                <div key={nb.bairro}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[#99a1af] text-[11px] font-semibold w-4">{i + 1}.</span>
                      <span className="text-[#364153] text-[13px] font-medium">{nb.bairro}</span>
                    </div>
                    <span className="text-[#101828] text-[13px] font-semibold">{nb.total}</span>
                  </div>
                  <div className="h-[6px] bg-[#f3f4f6] rounded-full overflow-hidden ml-6">
                    <div
                      className="h-full rounded-full bg-[#3b82f6]"
                      style={{ width: `${pct}%`, opacity: 1 - i * 0.1 }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
