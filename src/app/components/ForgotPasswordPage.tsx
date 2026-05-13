import { useState } from "react";
import { useNavigate } from "react-router";
import { Mail, ArrowLeft, Send } from "lucide-react";
import logoImg from "figma:asset/b156916a241399c8d5c27c4d2b23c0e1e09fa077.png";

export function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate sending verification code
    setTimeout(() => {
      // Generate a random 6-digit code
      const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
      
      // Store in sessionStorage for verification (mock)
      sessionStorage.setItem("reset_email", email);
      sessionStorage.setItem("reset_code", verificationCode);
      sessionStorage.setItem("code_sent_at", Date.now().toString());
      
      // In a real app, send email here
      console.log(`Código de verificação enviado para ${email}: ${verificationCode}`);
      
      setIsLoading(false);
      navigate("/verificar-codigo");
    }, 1500);
  };

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
            Recuperação de Senha
          </h2>
          <p className="text-[rgba(249,250,251,0.6)] text-[14px] leading-[22px] max-w-[360px]">
            Enviaremos um código de verificação para o seu e-mail cadastrado no sistema InfraTL.
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
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-[#4a5565] hover:text-[#101828] text-[14px] font-medium mb-6 transition-colors"
          >
            <ArrowLeft size={18} />
            Voltar ao login
          </button>

          {/* Form header */}
          <div className="mb-8">
            <h1 className="text-[#101828] text-[24px] font-semibold leading-[32px] tracking-[-0.5px]">
              Esqueceu sua senha?
            </h1>
            <p className="text-[#4a5565] text-[14px] leading-[20px] mt-2">
              Digite seu e-mail cadastrado e enviaremos um código de verificação para redefinir sua senha.
            </p>
          </div>

          {/* Info box */}
          <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-[10px] p-4 mb-6 flex items-start gap-3">
            <Send size={18} className="text-[#3b82f6] mt-0.5 flex-shrink-0" />
            <p className="text-[#1e40af] text-[13px] leading-[18px]">
              O código de verificação será enviado para o e-mail cadastrado no sistema. Verifique também sua caixa de spam.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-[#364153] text-[14px] font-medium leading-[20px] tracking-[-0.15px] mb-1.5">
                E-mail cadastrado
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#99a1af]"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu.email@prefeitura.gov.br"
                  required
                  className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] pl-10 pr-4 text-[14px] tracking-[-0.15px] text-[#101828] placeholder:text-[rgba(10,10,10,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-[48px] bg-[#3b82f6] hover:bg-[#2563eb] disabled:bg-[#93c5fd] disabled:cursor-not-allowed text-white text-[16px] font-medium leading-[24px] tracking-[-0.31px] rounded-[10px] transition-colors shadow-sm shadow-[#3b82f6]/20 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Enviando código...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Enviar código de verificação
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-[#e5e7eb]" />
            <span className="text-[#99a1af] text-[12px] leading-[16px]">
              ou
            </span>
            <div className="flex-1 h-px bg-[#e5e7eb]" />
          </div>

          {/* Help text */}
          <p className="text-center text-[#4a5565] text-[14px] leading-[20px]">
            Lembrou sua senha?{" "}
            <button
              onClick={() => navigate("/")}
              className="text-[#3b82f6] font-medium hover:text-[#2563eb] transition-colors"
            >
              Fazer login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
