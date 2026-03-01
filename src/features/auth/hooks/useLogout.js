import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/app/context/AuthContext";

const domain = import.meta.env.VITE_COGNITO_DOMAIN;
const clientId = import.meta.env.VITE_COGNITO_CLIENT_ID;
const logoutRedirectUri =
  import.meta.env.VITE_COGNITO_LOGOUT_REDIRECT_URI || window.location.origin;

export function useLogout() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const clearLocalSession = useCallback(() => {
    localStorage.removeItem("idToken");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
  }, [setUser]);

  const logout = useCallback(
    ({
      redirectTo = "/login",
      logoutFromCognito = true,
    } = {}) => {
      clearLocalSession();

      // If Cognito is configured, redirect to Cognito logout endpoint
      if (logoutFromCognito && domain && clientId) {
        const url = new URL(`${domain}/logout`);
        url.searchParams.set("client_id", clientId);
        url.searchParams.set("logout_uri", logoutRedirectUri);
        window.location.href = url.toString();
        return;
      }

      // Fallback: in-app redirect
      navigate(redirectTo, { replace: true });
    },
    [clearLocalSession, navigate]
  );

  return { logout };
}
