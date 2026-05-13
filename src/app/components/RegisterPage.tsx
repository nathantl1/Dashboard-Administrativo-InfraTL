import { useState } from "react";
import { useNavigate } from "react-router";
import { Eye, EyeOff, Mail, Lock, User, Building2 } from "lucide-react";
import logoImg from "figma:asset/b156916a241399c8d5c27c4d2b23c0e1e09fa077.png";

export function RegisterPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const update = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div
      className="min-h-screen flex bg-[#fafbfc]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-[480px] xl:w-[540px] relative bg-[#1f2937] flex-col items-center justify-center p-12">
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
            Junte-se a plataforma
          </h2>
          <p className="text-[rgba(249,250,251,0.6)] text-[14px] leading-[22px] max-w-[360px]">
            Cadastre-se para colaborar com a gestao e zeladoria urbana do
            municipio de Tres Lagoas.
          </p>

          {/* Feature list */}
          <div className="mt-10 space-y-4 text-left w-full max-w-[320px]">
            {[
              "Registre ocorrencias em tempo real",
              "Acompanhe ordens de servico",
              "Acesse relatorios e indicadores",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#22c55e]/20 flex items-center justify-center shrink-0">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M2.5 6L5 8.5L9.5 3.5"
                      stroke="#22c55e"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-[rgba(249,250,251,0.7)] text-[13px] leading-[18px]">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-[rgba(249,250,251,0.4)] text-[12px] leading-[16px]">
            &copy; 2026 InfraTL - Prefeitura de Tres Lagoas - MS
          </p>
        </div>
      </div>

      {/* Right side - Register Form */}
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
              Criar sua conta
            </h1>
            <p className="text-[#4a5565] text-[14px] leading-[20px] mt-2">
              Preencha os dados abaixo para solicitar acesso ao sistema.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-[#364153] text-[14px] font-medium leading-[20px] tracking-[-0.15px] mb-1.5">
                Nome completo
              </label>
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#99a1af]"
                />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Seu nome completo"
                  className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] pl-10 pr-4 text-[14px] tracking-[-0.15px] text-[#101828] placeholder:text-[rgba(10,10,10,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
                />
              </div>
            </div>

            {/* Department */}
            <div>
              <label className="block text-[#364153] text-[14px] font-medium leading-[20px] tracking-[-0.15px] mb-1.5">
                Secretaria / Departamento
              </label>
              <div className="relative">
                <Building2
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#99a1af]"
                />
                <select
                  value={formData.department}
                  onChange={(e) => update("department", e.target.value)}
                  className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] pl-10 pr-4 text-[14px] tracking-[-0.15px] text-[#101828] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all appearance-none"
                >
                  <option value="" disabled>
                    Selecione o departamento
                  </option>
                  <option value="obras">Secretaria de Obras</option>
                  <option value="meio-ambiente">Meio Ambiente</option>
                  <option value="transito">Transito e Mobilidade</option>
                  <option value="limpeza">Limpeza Publica</option>
                  <option value="iluminacao">Iluminacao Publica</option>
                  <option value="admin">Administracao</option>
                </select>
                <svg
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#99a1af] pointer-events-none"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-[#364153] text-[14px] font-medium leading-[20px] tracking-[-0.15px] mb-1.5">
                E-mail institucional
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#99a1af]"
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="seu.email@prefeitura.gov.br"
                  className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] pl-10 pr-4 text-[14px] tracking-[-0.15px] text-[#101828] placeholder:text-[rgba(10,10,10,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
                />
              </div>
            </div>

            {/* Password row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    value={formData.password}
                    onChange={(e) => update("password", e.target.value)}
                    placeholder="Min. 8 caracteres"
                    className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] pl-10 pr-10 text-[14px] tracking-[-0.15px] text-[#101828] placeholder:text-[rgba(10,10,10,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#99a1af] hover:text-[#4a5565] transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-[#364153] text-[14px] font-medium leading-[20px] tracking-[-0.15px] mb-1.5">
                  Confirmar
                </label>
                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#99a1af]"
                  />
                  <input
                    type={showConfirm ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) => update("confirmPassword", e.target.value)}
                    placeholder="Repita a senha"
                    className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] pl-10 pr-10 text-[14px] tracking-[-0.15px] text-[#101828] placeholder:text-[rgba(10,10,10,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#99a1af] hover:text-[#4a5565] transition-colors"
                  >
                    {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2.5 cursor-pointer pt-1">
              <input
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={(e) => update("agreeTerms", e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded border-[#e5e7eb] text-[#3b82f6] focus:ring-[#3b82f6]/30 cursor-pointer shrink-0"
              />
              <span className="text-[#4a5565] text-[13px] leading-[18px]">
                Li e concordo com os{" "}
                <button
                  type="button"
                  className="text-[#3b82f6] font-medium hover:text-[#2563eb]"
                >
                  Termos de Uso
                </button>{" "}
                e a{" "}
                <button
                  type="button"
                  className="text-[#3b82f6] font-medium hover:text-[#2563eb]"
                >
                  Politica de Privacidade
                </button>
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-[48px] bg-[#3b82f6] hover:bg-[#2563eb] text-white text-[16px] font-medium leading-[24px] tracking-[-0.31px] rounded-[10px] transition-colors shadow-sm shadow-[#3b82f6]/20 mt-2"
            >
              Criar conta
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

          {/* Login link */}
          <p className="text-center text-[#4a5565] text-[14px] leading-[20px]">
            Ja possui uma conta?{" "}
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
