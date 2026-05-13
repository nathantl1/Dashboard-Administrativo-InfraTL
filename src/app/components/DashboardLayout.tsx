import { StatsCards } from "./StatsCards";
import { OccurrencesTable } from "./OccurrencesTable";

export function DashboardLayout() {
  return (
    <div className="px-6 pt-6 pb-8">
      <div className="mb-6">
        <h1 className="text-[#101828] text-[20px] font-semibold leading-[28px] tracking-[-0.45px]">
          Visao Geral
        </h1>
        <p className="text-[#4a5565] text-[12px] leading-[16px] mt-1">
          Painel de controle do sistema de zeladoria urbana
        </p>
      </div>

      <div className="mb-6">
        <StatsCards />
      </div>

      <OccurrencesTable />
    </div>
  );
}
