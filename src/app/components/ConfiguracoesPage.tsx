import { useState } from "react";
import {
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Database,
  Mail,
  Phone,
  Building2,
  Camera,
  Save,
  ChevronRight,
  Check,
  Moon,
  Sun,
  Monitor,
} from "lucide-react";
import logoImg from "figma:asset/b156916a241399c8d5c27c4d2b23c0e1e09fa077.png";

type SettingsTab = "perfil" | "notificacoes" | "seguranca" | "aparencia" | "sistema";

const tabs: { id: SettingsTab; label: string; icon: typeof User }[] = [
  { id: "perfil", label: "Perfil", icon: User },
  { id: "notificacoes", label: "Notificacoes", icon: Bell },
  { id: "seguranca", label: "Seguranca", icon: Shield },
  { id: "aparencia", label: "Aparencia", icon: Palette },
  { id: "sistema", label: "Sistema", icon: Database },
];

function Toggle({ enabled, onChange }: { enabled: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`relative w-[42px] h-[24px] rounded-full transition-colors ${enabled ? "bg-[#3b82f6]" : "bg-[#d1d5db]"}`}
    >
      <span
        className={`absolute top-[3px] w-[18px] h-[18px] bg-white rounded-full shadow-sm transition-transform ${
          enabled ? "translate-x-[21px]" : "translate-x-[3px]"
        }`}
      />
    </button>
  );
}

function ProfileTab() {
  return (
    <div className="space-y-6">
      {/* Avatar */}
      <div className="flex items-center gap-5">
        <div className="relative">
          <div
            className="w-[72px] h-[72px] rounded-full flex items-center justify-center"
            style={{ backgroundImage: "linear-gradient(135deg, #3b82f6 0%, #22c55e 100%)" }}
          >
            <span className="text-white text-[24px] font-semibold">AM</span>
          </div>
          <button className="absolute -bottom-1 -right-1 w-7 h-7 bg-white border border-[#e5e7eb] rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors">
            <Camera size={14} className="text-[#6a7282]" />
          </button>
        </div>
        <div>
          <h3 className="text-[#101828] text-[16px] font-semibold">Admin Municipal</h3>
          <p className="text-[#6a7282] text-[13px]">Administrador do Sistema</p>
          <p className="text-[#3b82f6] text-[12px] font-medium mt-0.5">Alterar foto</p>
        </div>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[#364153] text-[13px] font-medium mb-1.5">Nome completo</label>
          <div className="relative">
            <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#99a1af]" />
            <input
              defaultValue="Admin Municipal"
              className="w-full h-[42px] bg-white border border-[#e5e7eb] rounded-[10px] pl-9 pr-4 text-[13px] text-[#101828] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20 focus:border-[#3b82f6] transition-all"
            />
          </div>
        </div>
        <div>
          <label className="block text-[#364153] text-[13px] font-medium mb-1.5">E-mail institucional</label>
          <div className="relative">
            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#99a1af]" />
            <input
              defaultValue="admin@prefeitura.gov.br"
              className="w-full h-[42px] bg-white border border-[#e5e7eb] rounded-[10px] pl-9 pr-4 text-[13px] text-[#101828] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20 focus:border-[#3b82f6] transition-all"
            />
          </div>
        </div>
        <div>
          <label className="block text-[#364153] text-[13px] font-medium mb-1.5">Telefone</label>
          <div className="relative">
            <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#99a1af]" />
            <input
              defaultValue="(67) 99999-0000"
              className="w-full h-[42px] bg-white border border-[#e5e7eb] rounded-[10px] pl-9 pr-4 text-[13px] text-[#101828] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20 focus:border-[#3b82f6] transition-all"
            />
          </div>
        </div>
        <div>
          <label className="block text-[#364153] text-[13px] font-medium mb-1.5">Secretaria</label>
          <div className="relative">
            <Building2 size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#99a1af]" />
            <input
              defaultValue="Administracao"
              className="w-full h-[42px] bg-white border border-[#e5e7eb] rounded-[10px] pl-9 pr-4 text-[13px] text-[#101828] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20 focus:border-[#3b82f6] transition-all"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-[#364153] text-[13px] font-medium mb-1.5">Cargo</label>
        <input
          defaultValue="Administrador Municipal - Secretario Adjunto"
          className="w-full h-[42px] bg-white border border-[#e5e7eb] rounded-[10px] px-4 text-[13px] text-[#101828] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20 focus:border-[#3b82f6] transition-all"
        />
      </div>

      <div className="flex justify-end">
        <button className="h-[40px] px-5 bg-[#3b82f6] rounded-[10px] flex items-center gap-2 hover:bg-[#2563eb] transition-colors text-[14px] font-medium text-white shadow-sm shadow-[#3b82f6]/20">
          <Save size={16} />
          Salvar Alteracoes
        </button>
      </div>
    </div>
  );
}

function NotificacoesTab() {
  const [notifs, setNotifs] = useState({
    emailNovaOcorrencia: true,
    emailStatusUpdate: true,
    emailRelatorioSemanal: false,
    pushNovaOcorrencia: true,
    pushOSAtribuida: true,
    pushPrazos: true,
    pushSistema: false,
  });

  const toggle = (key: keyof typeof notifs) => {
    setNotifs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6">
      {/* Email Notifications */}
      <div>
        <h3 className="text-[#101828] text-[14px] font-semibold mb-1">Notificacoes por E-mail</h3>
        <p className="text-[#6a7282] text-[12px] mb-4">Escolha quais notificacoes deseja receber por e-mail</p>
        <div className="space-y-0.5">
          {[
            { key: "emailNovaOcorrencia" as const, label: "Nova ocorrencia registrada", desc: "Receba um e-mail quando uma nova ocorrencia for registrada" },
            { key: "emailStatusUpdate" as const, label: "Atualizacao de status", desc: "Quando o status de uma ocorrencia for alterado" },
            { key: "emailRelatorioSemanal" as const, label: "Relatorio semanal", desc: "Resumo semanal das atividades de zeladoria" },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between py-3 border-b border-[#f3f4f6] last:border-0">
              <div>
                <p className="text-[#364153] text-[13px] font-medium">{item.label}</p>
                <p className="text-[#99a1af] text-[12px]">{item.desc}</p>
              </div>
              <Toggle enabled={notifs[item.key]} onChange={() => toggle(item.key)} />
            </div>
          ))}
        </div>
      </div>

      {/* Push Notifications */}
      <div>
        <h3 className="text-[#101828] text-[14px] font-semibold mb-1">Notificacoes Push</h3>
        <p className="text-[#6a7282] text-[12px] mb-4">Alertas em tempo real no painel</p>
        <div className="space-y-0.5">
          {[
            { key: "pushNovaOcorrencia" as const, label: "Novas ocorrencias", desc: "Alerta instantaneo para novas solicitacoes" },
            { key: "pushOSAtribuida" as const, label: "OS atribuida", desc: "Quando uma ordem de servico for atribuida a sua equipe" },
            { key: "pushPrazos" as const, label: "Alertas de prazo", desc: "Quando uma OS estiver proxima do vencimento" },
            { key: "pushSistema" as const, label: "Atualizacoes do sistema", desc: "Novas funcionalidades e manutencoes" },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between py-3 border-b border-[#f3f4f6] last:border-0">
              <div>
                <p className="text-[#364153] text-[13px] font-medium">{item.label}</p>
                <p className="text-[#99a1af] text-[12px]">{item.desc}</p>
              </div>
              <Toggle enabled={notifs[item.key]} onChange={() => toggle(item.key)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SegurancaTab() {
  return (
    <div className="space-y-6">
      {/* Change password */}
      <div>
        <h3 className="text-[#101828] text-[14px] font-semibold mb-1">Alterar Senha</h3>
        <p className="text-[#6a7282] text-[12px] mb-4">Atualize sua senha periodicamente para maior seguranca</p>
        <div className="space-y-3 max-w-[400px]">
          <div>
            <label className="block text-[#364153] text-[13px] font-medium mb-1.5">Senha atual</label>
            <input type="password" placeholder="Digite sua senha atual" className="w-full h-[42px] bg-white border border-[#e5e7eb] rounded-[10px] px-4 text-[13px] placeholder:text-[rgba(10,10,10,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20 focus:border-[#3b82f6] transition-all" />
          </div>
          <div>
            <label className="block text-[#364153] text-[13px] font-medium mb-1.5">Nova senha</label>
            <input type="password" placeholder="Min. 8 caracteres" className="w-full h-[42px] bg-white border border-[#e5e7eb] rounded-[10px] px-4 text-[13px] placeholder:text-[rgba(10,10,10,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20 focus:border-[#3b82f6] transition-all" />
          </div>
          <div>
            <label className="block text-[#364153] text-[13px] font-medium mb-1.5">Confirmar nova senha</label>
            <input type="password" placeholder="Repita a nova senha" className="w-full h-[42px] bg-white border border-[#e5e7eb] rounded-[10px] px-4 text-[13px] placeholder:text-[rgba(10,10,10,0.4)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20 focus:border-[#3b82f6] transition-all" />
          </div>
          <button className="h-[40px] px-5 bg-[#3b82f6] rounded-[10px] flex items-center gap-2 hover:bg-[#2563eb] transition-colors text-[14px] font-medium text-white shadow-sm shadow-[#3b82f6]/20 mt-2">
            <Shield size={16} />
            Atualizar Senha
          </button>
        </div>
      </div>

      {/* Sessions */}
      <div>
        <h3 className="text-[#101828] text-[14px] font-semibold mb-1">Sessoes Ativas</h3>
        <p className="text-[#6a7282] text-[12px] mb-4">Dispositivos conectados a sua conta</p>
        <div className="space-y-3">
          {[
            { device: "Chrome - Windows", location: "Tres Lagoas, MS", time: "Agora (sessao atual)", current: true },
            { device: "Safari - iPhone", location: "Tres Lagoas, MS", time: "Ha 2 horas", current: false },
            { device: "Firefox - macOS", location: "Campo Grande, MS", time: "Ha 3 dias", current: false },
          ].map((s, i) => (
            <div key={i} className="flex items-center justify-between py-3 px-4 bg-[#f9fafb] rounded-[10px] border border-[#e5e7eb]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-[8px] bg-white border border-[#e5e7eb] flex items-center justify-center">
                  <Monitor size={16} className="text-[#6a7282]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-[#364153] text-[13px] font-medium">{s.device}</p>
                    {s.current && (
                      <span className="inline-flex items-center gap-1 px-2 h-[18px] rounded-full bg-[#dcfce7] text-[#008236] text-[10px] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00c950]" />
                        Atual
                      </span>
                    )}
                  </div>
                  <p className="text-[#99a1af] text-[11px]">{s.location} · {s.time}</p>
                </div>
              </div>
              {!s.current && (
                <button className="text-[#e7000b] text-[12px] font-medium hover:text-[#c00] transition-colors">
                  Encerrar
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 2FA */}
      <div className="flex items-center justify-between p-4 bg-[#f9fafb] rounded-[10px] border border-[#e5e7eb]">
        <div>
          <h3 className="text-[#101828] text-[14px] font-semibold">Autenticacao de dois fatores</h3>
          <p className="text-[#6a7282] text-[12px] mt-0.5">Adicione uma camada extra de seguranca a sua conta</p>
        </div>
        <button className="h-[36px] px-4 bg-white border border-[#e5e7eb] rounded-[8px] text-[13px] font-medium text-[#364153] hover:bg-gray-50 transition-colors">
          Ativar
        </button>
      </div>
    </div>
  );
}

function AparenciaTab() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-[#101828] text-[14px] font-semibold mb-1">Tema</h3>
        <p className="text-[#6a7282] text-[12px] mb-4">Selecione o tema de preferencia para o painel</p>
        <div className="grid grid-cols-3 gap-3 max-w-[480px]">
          {[
            { id: "light", label: "Claro", icon: Sun },
            { id: "dark", label: "Escuro", icon: Moon },
            { id: "system", label: "Sistema", icon: Monitor },
          ].map((t) => {
            const IconComp = t.icon;
            const selected = theme === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={`relative flex flex-col items-center gap-2 py-5 rounded-[12px] border-2 transition-all ${
                  selected ? "border-[#3b82f6] bg-[#eff6ff]" : "border-[#e5e7eb] bg-white hover:border-[#d1d5db]"
                }`}
              >
                {selected && (
                  <div className="absolute top-2 right-2 w-5 h-5 bg-[#3b82f6] rounded-full flex items-center justify-center">
                    <Check size={12} className="text-white" />
                  </div>
                )}
                <IconComp size={24} className={selected ? "text-[#3b82f6]" : "text-[#6a7282]"} />
                <span className={`text-[13px] font-medium ${selected ? "text-[#3b82f6]" : "text-[#364153]"}`}>{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Brand Logo */}
      <div>
        <h3 className="text-[#101828] text-[14px] font-semibold mb-1">Logomarca do Sistema</h3>
        <p className="text-[#6a7282] text-[12px] mb-4">Logo utilizada no painel e relatorios</p>
        <div className="flex items-center gap-5 p-4 bg-[#f9fafb] rounded-[10px] border border-[#e5e7eb]">
          <img src={logoImg} alt="InfraTL Logo" className="w-16 h-16 object-contain" />
          <div>
            <p className="text-[#364153] text-[13px] font-medium">InfraTL Logo</p>
            <p className="text-[#99a1af] text-[12px]">PNG · 512 x 512px</p>
            <button className="text-[#3b82f6] text-[12px] font-medium mt-1 hover:text-[#2563eb] transition-colors">
              Alterar logomarca
            </button>
          </div>
        </div>
      </div>

      {/* Density */}
      <div>
        <h3 className="text-[#101828] text-[14px] font-semibold mb-1">Densidade da Interface</h3>
        <p className="text-[#6a7282] text-[12px] mb-4">Ajuste o espacamento entre os elementos</p>
        <div className="flex bg-[#f3f4f6] rounded-[8px] p-1 w-fit">
          {["Compacto", "Normal", "Confortavel"].map((d, i) => (
            <button
              key={d}
              className={`px-4 h-[32px] rounded-[6px] text-[13px] font-medium transition-all ${
                i === 1 ? "bg-white text-[#101828] shadow-sm" : "text-[#6a7282]"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function SistemaTab() {
  return (
    <div className="space-y-6">
      {/* System Info */}
      <div>
        <h3 className="text-[#101828] text-[14px] font-semibold mb-1">Informacoes do Sistema</h3>
        <p className="text-[#6a7282] text-[12px] mb-4">Dados gerais sobre a plataforma</p>
        <div className="bg-[#f9fafb] rounded-[10px] border border-[#e5e7eb] divide-y divide-[#e5e7eb]">
          {[
            { label: "Versao", value: "v2.4.1" },
            { label: "Ambiente", value: "Producao" },
            { label: "Ultima atualizacao", value: "14/03/2026" },
            { label: "Municipio", value: "Tres Lagoas - MS" },
            { label: "CNPJ", value: "XX.XXX.XXX/0001-XX" },
          ].map((info) => (
            <div key={info.label} className="flex items-center justify-between px-4 py-3">
              <span className="text-[#6a7282] text-[13px]">{info.label}</span>
              <span className="text-[#101828] text-[13px] font-medium">{info.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Data Management */}
      <div>
        <h3 className="text-[#101828] text-[14px] font-semibold mb-1">Gestao de Dados</h3>
        <p className="text-[#6a7282] text-[12px] mb-4">Configuracoes de backup e exportacao</p>
        <div className="space-y-3">
          {[
            { label: "Backup automatico", desc: "Ultimo backup: 17/03/2026 as 03:00", action: "Configurar" },
            { label: "Exportar dados", desc: "Exporte todos os dados em formato CSV ou JSON", action: "Exportar" },
            { label: "Logs de auditoria", desc: "Historico de acoes realizadas no sistema", action: "Ver logs" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between p-4 bg-[#f9fafb] rounded-[10px] border border-[#e5e7eb]">
              <div>
                <p className="text-[#364153] text-[13px] font-medium">{item.label}</p>
                <p className="text-[#99a1af] text-[12px]">{item.desc}</p>
              </div>
              <button className="h-[34px] px-3 bg-white border border-[#e5e7eb] rounded-[8px] text-[12px] font-medium text-[#364153] hover:bg-gray-50 transition-colors flex items-center gap-1.5">
                {item.action}
                <ChevronRight size={14} className="text-[#99a1af]" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* API */}
      <div>
        <h3 className="text-[#101828] text-[14px] font-semibold mb-1">Integracoes e API</h3>
        <p className="text-[#6a7282] text-[12px] mb-4">Gerencie chaves de API e integracoes externas</p>
        <div className="p-4 bg-[#f9fafb] rounded-[10px] border border-[#e5e7eb]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[#364153] text-[13px] font-medium">Chave de API</span>
            <button className="text-[#3b82f6] text-[12px] font-medium hover:text-[#2563eb] transition-colors">
              Regenerar
            </button>
          </div>
          <div className="flex items-center gap-2">
            <code className="flex-1 bg-white border border-[#e5e7eb] rounded-[8px] px-3 py-2 text-[12px] text-[#6a7282] font-mono">
              sk_live_••••••••••••••••••••••••••3f8a
            </code>
            <button className="h-[36px] px-3 bg-white border border-[#e5e7eb] rounded-[8px] text-[12px] font-medium text-[#364153] hover:bg-gray-50 transition-colors">
              Copiar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ConfiguracoesPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("perfil");

  const renderTab = () => {
    switch (activeTab) {
      case "perfil": return <ProfileTab />;
      case "notificacoes": return <NotificacoesTab />;
      case "seguranca": return <SegurancaTab />;
      case "aparencia": return <AparenciaTab />;
      case "sistema": return <SistemaTab />;
    }
  };

  return (
    <div className="px-6 pt-6 pb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-[#101828] text-[20px] font-semibold leading-[28px] tracking-[-0.45px]">
          Configuracoes
        </h1>
        <p className="text-[#4a5565] text-[12px] leading-[16px] mt-1">
          Gerencie suas preferencias e configuracoes do sistema
        </p>
      </div>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Tabs sidebar */}
        <div className="lg:w-[220px] shrink-0">
          <nav className="bg-white rounded-[14px] border border-[#e5e7eb] p-2">
            {tabs.map((tab) => {
              const IconComp = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-3 h-[42px] rounded-[10px] transition-colors mb-0.5 last:mb-0 ${
                    active
                      ? "bg-[#eff6ff] text-[#3b82f6]"
                      : "text-[#6a7282] hover:bg-[#f9fafb] hover:text-[#364153]"
                  }`}
                >
                  <IconComp size={18} strokeWidth={active ? 2 : 1.67} />
                  <span className="text-[14px] font-medium">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1 bg-white rounded-[14px] border border-[#e5e7eb] p-6">
          {renderTab()}
        </div>
      </div>
    </div>
  );
}
