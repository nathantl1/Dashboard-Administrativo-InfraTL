import { useEffect } from "react";
import { useNavigate } from "react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import logoImg from "figma:asset/b156916a241399c8d5c27c4d2b23c0e1e09fa077.png";

export function PasswordResetSuccessPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-redirect to login after 5 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="min-h-screen flex bg-[#fafbfc]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-[480px] xl:w-[540px] relative bg-[#1f2937] flex-col items-center justify-center p-12">
        {/* Background pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1758306101145-4c3f3fdde7bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjB2aWV3JTIwbW9kZXJuJTIwY2l0eSUyMHVyYmFuJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzczNzU4MjI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1f2937]/80 via-[#1f2937]/60 to-[#1f2937]/90" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <img
            src={logoImg}
            alt="InfraTL Logo"
            className="w-[220px] h-auto mb-8 drop-shadow-lg"
          />
          <h2 className="text-white text-[22px] font-semibold leading-[30px] tracking-[-0.4px] mb-3">
            Senha Redefinida com Sucesso
          </h2>
          <p className="text-[rgba(249,250,251,0.6)] text-[14px] leading-[22px] max-w-[360px]">
            Sua senha foi alterada com sucesso. Agora você pode fazer login com sua nova senha no sistema InfraTL.
          </p>

          {/* Decorative dots */}
          <div className="flex gap-2 mt-10">
            <div className="w-2 h-2 rounded-full bg-[#3b82f6]" />
            <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
            <div className="w-2 h-2 rounded-full bg-[#f59e0b]" />
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-[rgba(249,250,251,0.4)] text-[12px] leading-[16px]">
            &copy; 2026 InfraTL - Prefeitura de Tres Lagoas - MS
          </p>
        </div>
      </div>

      {/* Right side - Success message */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8">
        <div className="w-full max-w-[420px] text-center">
          {/* Mobile logo */}
          <div className="lg:hidden flex flex-col items-center mb-8">
            <img
              src={logoImg}
              alt="InfraTL Logo"
              className="w-[160px] h-auto mb-4"
            />
          </div>

          {/* Success icon */}
          <div className="w-20 h-20 bg-[#22c55e]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-16 h-16 bg-[#22c55e]/20 rounded-full flex items-center justify-center">
              <CheckCircle2 size={40} className="text-[#22c55e]" />
            </div>
          </div>

          {/* Success message */}
          <h1 className="text-[#101828] text-[24px] font-semibold leading-[32px] tracking-[-0.5px] mb-3">
            Senha redefinida com sucesso!
          </h1>
          <p className="text-[#4a5565] text-[14px] leading-[22px] mb-8">
            Sua senha foi alterada com sucesso. Você já pode acessar sua conta com a nova senha.
          </p>

          {/* Success box */}
          <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-[10px] p-4 mb-8">
            <p className="text-[#166534] text-[13px] leading-[18px]">
              Por questões de segurança, recomendamos que você faça login novamente com sua nova senha.
            </p>
          </div>

          {/* Action buttons */}
          <button
            onClick={() => navigate("/")}
            className="w-full h-[48px] bg-[#3b82f6] hover:bg-[#2563eb] text-white text-[16px] font-medium leading-[24px] tracking-[-0.31px] rounded-[10px] transition-colors shadow-sm shadow-[#3b82f6]/20 flex items-center justify-center gap-2 mb-4"
          >
            Ir para o login
            <ArrowRight size={18} />
          </button>

          {/* Auto-redirect info */}
          <p className="text-[#99a1af] text-[13px] leading-[18px]">
            Você será redirecionado automaticamente em 5 segundos...
          </p>
        </div>
      </div>
    </div>
  );
}
