import { Search, SlidersHorizontal, Bell, Menu } from "lucide-react";
import { useAuth } from "../useAuth";

interface HeaderProps {
  onMenuToggle: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  const { usuario } = useAuth();

  const primeiroNome = usuario?.nome?.split(" ")[0] ?? "Usuário";
  const tipoUsuario = usuario?.tipo_usuario === "Admin" ? "Administrador" : "Cidadão";
  const iniciais = usuario?.nome
    ? usuario.nome.split(" ").slice(0, 2).map((n: string) => n[0]).join("").toUpperCase()
    : "??";

  return (
    <header
      className="bg-white border-b border-[#e5e7eb] px-4 py-4 flex items-center justify-between gap-4"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Menu button */}
      <button
        onClick={onMenuToggle}
        className="lg:hidden shrink-0 w-10 h-10 rounded-[10px] flex items-center justify-center hover:bg-gray-50"
      >
        <Menu size={24} className="text-[#364153]" />
      </button>

      {/* Search + Filters */}
      <div className="flex items-center gap-3 flex-1 max-w-[560px]">
        <div className="relative flex-1">
          <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#99a1af]" />
          <input
            type="text"
            placeholder="Buscar ocorrencias, enderecos, categorias..."
            className="w-full h-[42px] bg-[#f9fafb] border border-[#e5e7eb] rounded-[10px] pl-10 pr-4 text-[14px] tracking-[-0.15px] placeholder:text-[rgba(10,10,10,0.5)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6]"
          />
        </div>
        <button className="shrink-0 h-[46px] px-4 bg-white border border-[#e5e7eb] rounded-[10px] flex items-center gap-2 hover:bg-gray-50 transition-colors">
          <SlidersHorizontal size={20} className="text-[#4a5565]" />
          <span className="text-[#364153] text-[16px] font-medium leading-[24px] tracking-[-0.31px]">
            Filtros
          </span>
        </button>
      </div>

      {/* Notifications + Profile */}
      <div className="flex items-center gap-3">
        <div className="relative shrink-0">
          <button className="w-9 h-9 rounded-[10px] flex items-center justify-center hover:bg-gray-50 transition-colors">
            <Bell size={20} className="text-[#4a5565]" />
          </button>
          <div className="absolute top-1 right-1 w-2 h-2 bg-[#3b82f6] rounded-full" />
        </div>

        <div className="hidden sm:flex items-center gap-3 pl-3 border-l border-[#e5e7eb]">
          <div className="text-right">
            <p className="text-[#101828] text-[14px] font-medium leading-[20px] tracking-[-0.15px]">
              {primeiroNome}
            </p>
            <p className="text-[#6a7282] text-[12px] leading-[16px]">
              {tipoUsuario}
            </p>
          </div>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
            style={{ backgroundImage: "linear-gradient(135deg, #3b82f6 0%, #22c55e 100%)" }}
          >
            <span className="text-white text-[14px] font-medium leading-[20px] tracking-[-0.15px]">
              {iniciais}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}