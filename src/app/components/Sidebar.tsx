import { useLocation, useNavigate } from "react-router";
import {
  LayoutDashboard,
  AlertTriangle,
  ClipboardList,
  FileText,
  Settings,
  X,
  LogOut,
} from "lucide-react";
import logoImg from "figma:asset/b156916a241399c8d5c27c4d2b23c0e1e09fa077.png";

const navItems = [
  { label: "Visao Geral", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Ocorrencias", icon: AlertTriangle, path: "/dashboard/ocorrencias" },
  { label: "Ordens de Servico", icon: ClipboardList, path: "/dashboard/ordens" },
  { label: "Relatorios", icon: FileText, path: "/dashboard/relatorios" },
  { label: "Configuracoes", icon: Settings, path: "/dashboard/configuracoes" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === "/dashboard") return location.pathname === "/dashboard";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-[256px] shrink-0 bg-[#1f2937] flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Logo */}
        <div className="border-b border-[#374151] px-6 pt-6 pb-6">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => { navigate("/dashboard"); onClose(); }}
            >
              <img
                src={logoImg}
                alt="InfraTL Logo"
                className="w-10 h-10 rounded-[10px] object-contain bg-white/10 p-0.5"
              />
              <div>
                <h1 className="text-[#f9fafb] text-[18px] font-semibold leading-[28px] tracking-[-0.44px]">
                  InfraTL
                </h1>
                <p className="text-[rgba(249,250,251,0.6)] text-[12px] leading-[16px]">
                  Zeladoria Urbana
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden text-[#f9fafb] opacity-70 hover:opacity-100"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 pt-4 overflow-y-auto">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isActive(item.path);
              const IconComp = item.icon;
              return (
                <li key={item.path}>
                  <button
                    onClick={() => { navigate(item.path); onClose(); }}
                    className={`w-full flex items-center gap-3 px-4 h-12 rounded-[10px] transition-colors ${
                      active
                        ? "bg-[#3b82f6] text-white"
                        : "text-[rgba(249,250,251,0.7)] hover:bg-[rgba(255,255,255,0.08)]"
                    }`}
                  >
                    <IconComp size={20} strokeWidth={1.67} />
                    <span className="text-[16px] font-medium leading-[24px] tracking-[-0.31px]">
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-[#374151] px-4 py-3 space-y-2">
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center gap-3 px-4 h-10 rounded-[10px] text-[rgba(249,250,251,0.5)] hover:bg-[rgba(255,255,255,0.08)] hover:text-[rgba(249,250,251,0.7)] transition-colors"
          >
            <LogOut size={18} strokeWidth={1.67} />
            <span className="text-[14px] font-medium leading-[20px]">Sair</span>
          </button>
          <p className="text-[rgba(249,250,251,0.4)] text-[11px] leading-[16px] text-center">
            &copy; 2026 InfraTL - Tres Lagoas
          </p>
        </div>
      </aside>
    </>
  );
}
