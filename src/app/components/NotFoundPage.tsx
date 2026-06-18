import { useNavigate } from "react-router";

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-[#fafbfc] gap-6"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="text-center">
        <p className="text-[#3b82f6] text-[14px] font-semibold uppercase tracking-widest mb-3">
          Erro 404
        </p>
        <h1 className="text-[#101828] text-[48px] font-bold leading-tight tracking-[-1px] mb-4">
          Página não encontrada
        </h1>
        <p className="text-[#4a5565] text-[16px] leading-[24px] max-w-[400px] mx-auto">
          A página que você está procurando não existe ou foi movida.
        </p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => navigate(-1 as any)}
          className="h-[44px] px-5 bg-white border border-[#e5e7eb] rounded-[10px] text-[14px] font-medium text-[#374151] hover:bg-[#f9fafb] transition-colors"
        >
          ← Voltar
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          className="h-[44px] px-5 bg-[#3b82f6] rounded-[10px] text-[14px] font-medium text-white hover:bg-[#2563eb] transition-colors"
        >
          Ir para o Dashboard
        </button>
      </div>
    </div>
  );
}
