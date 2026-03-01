import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/app/context/AuthContext";
import { cognitoLogin } from "@/features/auth/services/cognitoAuth";

const API_BASE =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5189/api";

export function usePasswordLogin() {
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const loginWithPassword = useCallback(
    async (email, password) => {
      setError(null);

      if (!email || !password) {
        setError("Please enter both email and password.");
        return;
      }

      try {
        setLoading(true);

        const { idToken, accessToken, refreshToken } = await cognitoLogin(
          email,
          password
        );

        localStorage.setItem("idToken", idToken);
        localStorage.setItem("access_token", accessToken);
        if (refreshToken) {
          localStorage.setItem("refresh_token", refreshToken);
        }

        try {
          const res = await fetch(`${API_BASE}/auth/me`, {
            headers: { Authorization: `Bearer ${idToken}` },
          });

          if (res.ok) {
            const data = await res.json();
            setUser(data);
          } else {
            const text = await res.text();
            navigate("/error", {
              replace: true,
              state: {
                error: {
                  status: res.status,
                  message: text || "Fetch /auth/me failed.",
                },
              },
            });
            return;
          }
        } catch (err) {
          console.error("Fetch /auth/me error:", err);
          navigate("/error", {
            replace: true,
            state: { error: err },
          });
          return;
        }

        navigate("/", { replace: true });
      } catch (err) {
        console.error("Login error:", err);
        setError(err.message || "Login failed. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    [navigate, setUser]
  );

  return { loading, error, loginWithPassword };
}
