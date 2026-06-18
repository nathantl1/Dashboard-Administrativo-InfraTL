import { useState } from "react";
import { useNavigate } from "react-router";
import { Eye, EyeOff, Mail, Lock, User, Briefcase } from "lucide-react";
import api from "../api";

const MOCK_USUARIO = {
  id: 1,
  nome: "Demo InfraTL",
  cpf: "00000000000",
  telefone: "67999999999",
  data_nascimento: "2000-01-01",
  email: "demo@infratl.com",
  id_endereco: 1,
  tipo_usuario: "Usuario",
  ativo: true,
};

export function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [identificador, setIdentificador] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [userType, setUserType] = useState<"citizen" | "official">("citizen");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post("/auth/login", {
        identificador,
        senha: password,
      });

      const { access_token, usuario } = response.data;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("usuario", JSON.stringify(usuario));
      navigate("/dashboard");
    } catch (err: any) {
      // Backend offline → usa mock pra apresentação
      if (!err.response) {
        localStorage.setItem("access_token", "mock-token-demo");
        localStorage.setItem("usuario", JSON.stringify({
          ...MOCK_USUARIO,
          tipo_usuario: userType === "official" ? "Admin" : "Usuario",
        }));
        navigate("/dashboard");
        return;
      }
      setError(err.response?.data?.detail || "Credenciais inválidas. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#fafbfc]" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Left side */}
      <div className="hidden lg:flex lg:w-[480px] xl:w-[540px] relative bg-[#1f2937] flex-col items-center justify-center p-12">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1758306101145-4c3f3fdde7bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjB2aWV3JTIwbW9kZXJuJTIwY2l0eSUyMHVyYmFuJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzczNzU4MjI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="" className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1f2937]/80 via-[#1f2937]/60 to-[#1f2937]/90" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-white text-[22px] font-semibold leading-[30px] tracking-[-0.4px] mb-3">
            Plataforma de Gestao e Colaboracao Municipal
          </h2>
          <p className="text-[rgba(249,250,251,0.6)] text-[14px] leading-[22px] max-w-[360px]">
            Sistema integrado de zeladoria urbana para gestao eficiente de ocorrencias e servicos municipais.
          </p>
          <div className="flex gap-2 mt-10">
            <div className="w-2 h-2 rounded-full bg-[#3b82f6]" />
            <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
            <div className="w-2 h-2 rounded-full bg-[#f59e0b]" />
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-[rgba(249,250,251,0.4)] text-[12px] leading-[16px]">
            &copy; 2026 InfraTL - Prefeitura de Tres Lagoas - MS
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8">
        <div className="w-full max-w-[420px]">
          <div className="mb-8">
            <h1 className="text-[#101828] text-[24px] font-semibold leading-[32px] tracking-[-0.5px]">
              Bem-vindo de volta
            </h1>
            <p className="text-[#4a5565] text-[14px] leading-[20px] mt-2">
              Acesse sua conta para gerenciar o painel de zeladoria urbana.
            </p>
          </div>

          {/* Toggle Cidadão / Funcionário */}
          <div className="mb-6 bg-[#f3f4f6] rounded-[10px] p-1 flex gap-1">
            <button
              type="button"
              onClick={() => setUserType("citizen")}
              className={`flex-1 h-[44px] rounded-[8px] flex items-center justify-center gap-2 text-[14px] font-medium transition-all ${
                userType === "citizen" ? "bg-white text-[#3b82f6] shadow-sm" : "bg-transparent text-[#6b7280] hover:text-[#374151]"
              }`}
            >
              <User size={18} /> Cidadão
            </button>
            <button
              type="button"
              onClick={() => setUserType("official")}
              className={`flex-1 h-[44px] rounded-[8px] flex items-center justify-center gap-2 text-[14px] font-medium transition-all ${
                userType === "official" ? "bg-white text-[#3b82f6] shadow-sm" : "bg-transparent text-[#6b7280] hover:text-[#374151]"
              }`}
            >
              <Briefcase size={18} /> Funcionário
            </button>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-[10px]">
              <p className="text-red-600 text-[13px]">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[#364153] text-[14px] font-medium leading-[20px] tracking-[-0.15px] mb-1.5">
                {userType === "citizen" ? "E-mail ou CPF" : "E-mail, CPF ou Matrícula"}
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#99a1af]" />
                <input
                  type="text"
                  value={identificador}
                  onChange={(e) => setIdentificador(e.target.value)}
                  placeholder={userType === "citizen" ? "seu@email.com ou CPF" : "seu.email@prefeitura.gov.br"}
                  required
                  className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] pl-10 pr-4 text-[14px] tracking-[-0.15px] text-[#101828] placeholder:text-[rgba(10,10,10,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#364153] text-[14px] font-medium leading-[20px] tracking-[-0.15px] mb-1.5">
                Senha
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#99a1af]" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                  required
                  className="w-full h-[46px] bg-white border border-[#e5e7eb] rounded-[10px] pl-10 pr-11 text-[14px] tracking-[-0.15px] text-[#101828] placeholder:text-[rgba(10,10,10,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#99a1af] hover:text-[#4a5565] transition-colors">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-[#e5e7eb] text-[#3b82f6] focus:ring-[#3b82f6]/30 cursor-pointer" />
                <span className="text-[#4a5565] text-[13px] leading-[16px]">Lembrar de mim</span>
              </label>
              <button type="button" onClick={() => navigate("/esqueceu-senha")}
                className="text-[#3b82f6] text-[13px] font-medium leading-[16px] hover:text-[#2563eb] transition-colors">
                Esqueceu a senha?
              </button>
            </div>

            <button type="submit" disabled={loading}
              className="w-full h-[48px] bg-[#3b82f6] hover:bg-[#2563eb] disabled:opacity-60 disabled:cursor-not-allowed text-white text-[16px] font-medium leading-[24px] tracking-[-0.31px] rounded-[10px] transition-colors shadow-sm shadow-[#3b82f6]/20">
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-[#e5e7eb]" />
            <span className="text-[#99a1af] text-[12px] leading-[16px]">ou</span>
            <div className="flex-1 h-px bg-[#e5e7eb]" />
          </div>

          <p className="text-center text-[#4a5565] text-[14px] leading-[20px]">
            Nao possui uma conta?{" "}
            <button onClick={() => navigate("/registro")}
              className="text-[#3b82f6] font-medium hover:text-[#2563eb] transition-colors">
              Criar conta
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
