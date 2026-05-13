import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, ShieldCheck, RotateCw } from "lucide-react";
import logoImg from "figma:asset/b156916a241399c8d5c27c4d2b23c0e1e09fa077.png";

export function VerifyCodePage() {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [canResend, setCanResend] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const email = sessionStorage.getItem("reset_email");

  useEffect(() => {
    // Check if user came from forgot password page
    if (!email) {
      navigate("/esqueceu-senha");
      return;
    }

    // Start countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [email, navigate]);

  const handleCodeChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setError("");

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (/^\d+$/.test(pastedData)) {
      const newCode = pastedData.split("");
      setCode([...newCode, ...Array(6 - newCode.length).fill("")]);
      // Focus last filled input
      const lastIndex = Math.min(newCode.length - 1, 5);
      inputRefs.current[lastIndex]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredCode = code.join("");

    if (enteredCode.length !== 6) {
      setError("Por favor, digite o código completo");
      return;
    }

    setIsLoading(true);

    // Verify code (mock)
    setTimeout(() => {
      const storedCode = sessionStorage.getItem("reset_code");
      
      if (enteredCode === storedCode) {
        // Code is correct, proceed to reset password
        sessionStorage.setItem("code_verified", "true");
        navigate("/redefinir-senha");
      } else {
        setError("Código inválido. Verifique e tente novamente.");
        setCode(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
      }
      
      setIsLoading(false);
    }, 1000);
  };

  const handleResend = () => {
    if (!canResend) return;

    setCanResend(false);
    setCountdown(60);
    setError("");
    setCode(["", "", "", "", "", ""]);

    // Generate new code
    const newCode = Math.floor(100000 + Math.random() * 900000).toString();
    sessionStorage.setItem("reset_code", newCode);
    sessionStorage.setItem("code_sent_at", Date.now().toString());
    
    console.log(`Novo código enviado para ${email}: ${newCode}`);

    // Restart countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  if (!email) {
    return null;
  }

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
            Verificação de Código
          </h2>
          <p className="text-[rgba(249,250,251,0.6)] text-[14px] leading-[22px] max-w-[360px]">
            Digite o código de 6 dígitos enviado para o seu e-mail para continuar com a recuperação de senha.
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

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8">
        <div className="w-full max-w-[420px]">
          {/* Mobile logo */}
          <div className="lg:hidden flex flex-col items-center mb-8">
            <img
              src={logoImg}
              alt="InfraTL Logo"
              className="w-[160px] h-auto mb-4"
            />
          </div>

          {/* Back button */}
          <button
            onClick={() => navigate("/esqueceu-senha")}
            className="flex items-center gap-2 text-[#4a5565] hover:text-[#101828] text-[14px] font-medium mb-6 transition-colors"
          >
            <ArrowLeft size={18} />
            Voltar
          </button>

          {/* Form header */}
          <div className="mb-8">
            <h1 className="text-[#101828] text-[24px] font-semibold leading-[32px] tracking-[-0.5px]">
              Digite o código de verificação
            </h1>
            <p className="text-[#4a5565] text-[14px] leading-[20px] mt-2">
              Enviamos um código de 6 dígitos para <span className="font-medium text-[#101828]">{email}</span>
            </p>
          </div>

          {/* Info box */}
          <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-[10px] p-4 mb-6 flex items-start gap-3">
            <ShieldCheck size={18} className="text-[#22c55e] mt-0.5 flex-shrink-0" />
            <p className="text-[#166534] text-[13px] leading-[18px]">
              Por questões de segurança, o código expira em 15 minutos.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Code inputs */}
            <div>
              <label className="block text-[#364153] text-[14px] font-medium leading-[20px] tracking-[-0.15px] mb-3">
                Código de verificação
              </label>
              <div className="flex gap-2 justify-between" onPaste={handlePaste}>
                {code.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-[60px] h-[60px] bg-white border border-[#e5e7eb] rounded-[10px] text-[24px] font-semibold text-center text-[#101828] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
                  />
                ))}
              </div>
              {error && (
                <p className="text-[#dc2626] text-[13px] mt-2">{error}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading || code.join("").length !== 6}
              className="w-full h-[48px] bg-[#3b82f6] hover:bg-[#2563eb] disabled:bg-[#93c5fd] disabled:cursor-not-allowed text-white text-[16px] font-medium leading-[24px] tracking-[-0.31px] rounded-[10px] transition-colors shadow-sm shadow-[#3b82f6]/20 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Verificando...
                </>
              ) : (
                <>
                  <ShieldCheck size={18} />
                  Verificar código
                </>
              )}
            </button>
          </form>

          {/* Resend code */}
          <div className="mt-6 text-center">
            <p className="text-[#4a5565] text-[13px] leading-[18px] mb-2">
              Não recebeu o código?
            </p>
            {canResend ? (
              <button
                onClick={handleResend}
                className="text-[#3b82f6] text-[14px] font-medium hover:text-[#2563eb] transition-colors flex items-center gap-2 mx-auto"
              >
                <RotateCw size={16} />
                Reenviar código
              </button>
            ) : (
              <p className="text-[#99a1af] text-[14px]">
                Aguarde {countdown}s para reenviar
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
