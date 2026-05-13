import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Lock, Eye, EyeOff, CheckCircle2 } from "lucide-react";
import logoImg from "figma:asset/b156916a241399c8d5c27c4d2b23c0e1e09fa077.png";

export function ResetPasswordPage() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ newPassword?: string; confirmPassword?: string }>({});

  const email = sessionStorage.getItem("reset_email");
  const codeVerified = sessionStorage.getItem("code_verified");

  useEffect(() => {
    // Check if user completed previous steps
    if (!email || !codeVerified) {
      navigate("/esqueceu-senha");
    }
  }, [email, codeVerified, navigate]);

  const validatePassword = (password: string) => {
    const errors: string[] = [];
    
    if (password.length < 8) {
      errors.push("mínimo 8 caracteres");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("uma letra maiúscula");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("uma letra minúscula");
    }
    if (!/[0-9]/.test(password)) {
      errors.push("um número");
    }
    
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: { newPassword?: string; confirmPassword?: string } = {};
    
    // Validate new password
    const passwordErrors = validatePassword(newPassword);
    if (passwordErrors.length > 0) {
      newErrors.newPassword = `A senha deve conter: ${passwordErrors.join(", ")}`;
    }
    
    // Validate password match
    if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = "As senhas não coincidem";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    // Simulate password reset
    setTimeout(() => {
      // Clear session storage
      sessionStorage.removeItem("reset_email");
      sessionStorage.removeItem("reset_code");
      sessionStorage.removeItem("code_verified");
      sessionStorage.removeItem("code_sent_at");
      
      console.log(`Senha redefinida com sucesso para ${email}`);
      
      setIsLoading(false);
      
      // Show success and redirect to login
      navigate("/senha-redefinida");
    }, 1500);
  };

  const passwordStrength = (password: string) => {
    const errors = validatePassword(password);
    if (password.length === 0) return { strength: 0, label: "", color: "" };
    if (errors.length === 0) return { strength: 100, label: "Forte", color: "bg-[#22c55e]" };
    if (errors.length <= 2) return { strength: 60, label: "Média", color: "bg-[#f59e0b]" };
    return { strength: 30, label: "Fraca", color: "bg-[#ef4444]" };
  };

  const strength = passwordStrength(newPassword);

  if (!email || !codeVerified) {
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
            Redefinir Senha
          </h2>
          <p className="text-[rgba(249,250,251,0.6)] text-[14px] leading-[22px] max-w-[360px]">
            Crie uma nova senha segura para sua conta no sistema InfraTL. Use uma combinação de letras, números e caracteres.
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

          {/* Form header */}
          <div className="mb-8">
            <h1 className="text-[#101828] text-[24px] font-semibold leading-[32px] tracking-[-0.5px]">
              Crie uma nova senha
            </h1>
            <p className="text-[#4a5565] text-[14px] leading-[20px] mt-2">
              Sua nova senha deve ser diferente das senhas anteriores e conter no mínimo 8 caracteres.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* New Password */}
            <div>
              <label className="block text-[#364153] text-[14px] font-medium leading-[20px] tracking-[-0.15px] mb-1.5">
                Nova senha
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#99a1af]"
                />
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                    setErrors((prev) => ({ ...prev, newPassword: undefined }));
                  }}
                  placeholder="Digite sua nova senha"
                  className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] pl-10 pr-11 text-[14px] tracking-[-0.15px] text-[#101828] placeholder:text-[rgba(10,10,10,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#99a1af] hover:text-[#4a5565] transition-colors"
                >
                  {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.newPassword && (
                <p className="text-[#dc2626] text-[13px] mt-1.5">{errors.newPassword}</p>
              )}
              
              {/* Password strength indicator */}
              {newPassword && (
                <div className="mt-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[#4a5565] text-[12px]">Força da senha:</span>
                    <span className={`text-[12px] font-medium ${
                      strength.strength === 100 ? "text-[#22c55e]" :
                      strength.strength === 60 ? "text-[#f59e0b]" :
                      "text-[#ef4444]"
                    }`}>
                      {strength.label}
                    </span>
                  </div>
                  <div className="h-1.5 bg-[#e5e7eb] rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${strength.color}`}
                      style={{ width: `${strength.strength}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-[#364153] text-[14px] font-medium leading-[20px] tracking-[-0.15px] mb-1.5">
                Confirmar nova senha
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#99a1af]"
                />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setErrors((prev) => ({ ...prev, confirmPassword: undefined }));
                  }}
                  placeholder="Confirme sua nova senha"
                  className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] pl-10 pr-11 text-[14px] tracking-[-0.15px] text-[#101828] placeholder:text-[rgba(10,10,10,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#99a1af] hover:text-[#4a5565] transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-[#dc2626] text-[13px] mt-1.5">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Password requirements */}
            <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-[10px] p-4">
              <p className="text-[#364153] text-[13px] font-medium mb-2">
                Requisitos da senha:
              </p>
              <ul className="space-y-1">
                <li className={`text-[12px] flex items-center gap-2 ${
                  newPassword.length >= 8 ? "text-[#22c55e]" : "text-[#6b7280]"
                }`}>
                  <CheckCircle2 size={14} />
                  Mínimo de 8 caracteres
                </li>
                <li className={`text-[12px] flex items-center gap-2 ${
                  /[A-Z]/.test(newPassword) ? "text-[#22c55e]" : "text-[#6b7280]"
                }`}>
                  <CheckCircle2 size={14} />
                  Uma letra maiúscula
                </li>
                <li className={`text-[12px] flex items-center gap-2 ${
                  /[a-z]/.test(newPassword) ? "text-[#22c55e]" : "text-[#6b7280]"
                }`}>
                  <CheckCircle2 size={14} />
                  Uma letra minúscula
                </li>
                <li className={`text-[12px] flex items-center gap-2 ${
                  /[0-9]/.test(newPassword) ? "text-[#22c55e]" : "text-[#6b7280]"
                }`}>
                  <CheckCircle2 size={14} />
                  Um número
                </li>
              </ul>
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
                  Redefinindo senha...
                </>
              ) : (
                <>
                  <Lock size={18} />
                  Redefinir senha
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
