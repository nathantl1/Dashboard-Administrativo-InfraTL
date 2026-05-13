import { useState } from "react";
import { useNavigate } from "react-router";
import { Eye, EyeOff, Mail, Lock, User, Briefcase } from "lucide-react";
import logoImg from "figma:asset/b156916a241399c8d5c27c4d2b23c0e1e09fa077.png";

export function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [userType, setUserType] = useState<"citizen" | "official">("citizen");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would validate credentials here
    // and potentially route to different dashboards based on userType
    navigate("/dashboard");
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
            Plataforma de Gestao e Colaboracao Municipal
          </h2>
          <p className="text-[rgba(249,250,251,0.6)] text-[14px] leading-[22px] max-w-[360px]">
            Sistema integrado de zeladoria urbana para gestao eficiente de
            ocorrencias e servicos municipais.
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

      {/* Right side - Login Form */}
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

          {/* Form header */}
          <div className="mb-8">
            <h1 className="text-[#101828] text-[24px] font-semibold leading-[32px] tracking-[-0.5px]">
              Bem-vindo de volta
            </h1>
            <p className="text-[#4a5565] text-[14px] leading-[20px] mt-2">
              Acesse sua conta para gerenciar o painel de zeladoria urbana.
            </p>
          </div>

          {/* User Type Toggle */}
          <div className="mb-6 bg-[#f3f4f6] rounded-[10px] p-1 flex gap-1">
            <button
              type="button"
              onClick={() => setUserType("citizen")}
              className={`flex-1 h-[44px] rounded-[8px] flex items-center justify-center gap-2 text-[14px] font-medium transition-all ${
                userType === "citizen"
                  ? "bg-white text-[#3b82f6] shadow-sm"
                  : "bg-transparent text-[#6b7280] hover:text-[#374151]"
              }`}
            >
              <User size={18} />
              Cidadão
            </button>
            <button
              type="button"
              onClick={() => setUserType("official")}
              className={`flex-1 h-[44px] rounded-[8px] flex items-center justify-center gap-2 text-[14px] font-medium transition-all ${
                userType === "official"
                  ? "bg-white text-[#6b7280] shadow-sm"
                  : "bg-transparent text-[#6b7280] hover:text-[#374151]"
              }`}
            >
              <Briefcase size={18} />
              Funcionário
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-[#364153] text-[14px] font-medium leading-[20px] tracking-[-0.15px] mb-1.5">
                E-mail
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
                  className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] pl-10 pr-4 text-[14px] tracking-[-0.15px] text-[#101828] placeholder:text-[rgba(10,10,10,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-[#364153] text-[14px] font-medium leading-[20px] tracking-[-0.15px] mb-1.5">
                Senha
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#99a1af]"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                  className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] pl-10 pr-11 text-[14px] tracking-[-0.15px] text-[#101828] placeholder:text-[rgba(10,10,10,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#99a1af] hover:text-[#4a5565] transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-[#e5e7eb] text-[#3b82f6] focus:ring-[#3b82f6]/30 cursor-pointer"
                />
                <span className="text-[#4a5565] text-[13px] leading-[16px]">
                  Lembrar de mim
                </span>
              </label>
              <button
                type="button"
                onClick={() => navigate("/esqueceu-senha")}
                className="text-[#3b82f6] text-[13px] font-medium leading-[16px] hover:text-[#2563eb] transition-colors"
              >
                Esqueceu a senha?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-[48px] bg-[#3b82f6] hover:bg-[#2563eb] text-white text-[16px] font-medium leading-[24px] tracking-[-0.31px] rounded-[10px] transition-colors shadow-sm shadow-[#3b82f6]/20"
            >
              Entrar
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

          {/* Register link */}
          <p className="text-center text-[#4a5565] text-[14px] leading-[20px]">
            Nao possui uma conta?{" "}
            <button
              onClick={() => navigate("/registro")}
              className="text-[#3b82f6] font-medium hover:text-[#2563eb] transition-colors"
            >
              Criar conta
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}