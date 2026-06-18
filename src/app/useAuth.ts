import { useNavigate } from "react-router";

export function useAuth() {
  const navigate = useNavigate();

  const usuario = (() => {
    try {
      const raw = localStorage.getItem("usuario");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  })();

  const token = localStorage.getItem("access_token");
  const isAuthenticated = !!token && !!usuario;

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("usuario");
    navigate("/");
  };

  return { usuario, token, isAuthenticated, logout };
}
