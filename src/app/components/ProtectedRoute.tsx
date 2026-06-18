import { Navigate } from "react-router";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem("access_token");
  const usuario = localStorage.getItem("usuario");

  if (!token || !usuario) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
