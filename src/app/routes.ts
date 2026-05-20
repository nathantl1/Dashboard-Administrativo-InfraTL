import { createBrowserRouter } from "react-router";
import { LoginPage } from "./components/LoginPage";
import { RegisterPage } from "./components/RegisterPage";
import { ForgotPasswordPage } from "./components/ForgotPasswordPage";
import { VerifyCodePage } from "./components/VerifyCodePage";
import { ResetPasswordPage } from "./components/ResetPasswordPage";
import { PasswordResetSuccessPage } from "./components/PasswordResetSuccessPage";
import { AppShell } from "./components/AppShell";
import { DashboardLayout } from "./components/DashboardLayout";
import { OcorrenciasPage } from "./components/OcorrenciasPage";
import { CadastroOcorrenciaPage } from "./components/CadastroOcorrenciaPage";
import { OrdensServicoPage } from "./components/OrdensServicoPage";
import { RelatoriosPage } from "./components/RelatoriosPage";
import { ConfiguracoesPage } from "./components/ConfiguracoesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage,
  },
  {
    path: "/registro",
    Component: RegisterPage,
  },
  {
    path: "/esqueceu-senha",
    Component: ForgotPasswordPage,
  },
  {
    path: "/verificar-codigo",
    Component: VerifyCodePage,
  },
  {
    path: "/redefinir-senha",
    Component: ResetPasswordPage,
  },
  {
    path: "/senha-redefinida",
    Component: PasswordResetSuccessPage,
  },
  {
    path: "/dashboard",
    Component: AppShell,
    children: [
      { index: true, Component: DashboardLayout },
      { path: "ocorrencias", Component: OcorrenciasPage },
      { path: "ocorrencias/nova", Component: CadastroOcorrenciaPage }, // ← NOVA ROTA
      { path: "ordens", Component: OrdensServicoPage },
      { path: "relatorios", Component: RelatoriosPage },
      { path: "configuracoes", Component: ConfiguracoesPage },
    ],
  },
]);