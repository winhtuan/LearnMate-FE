import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const RAW_BASE = (import.meta.env.VITE_API_BASE_URL ?? "").trim();
const API_BASE = RAW_BASE === "" ? "/api" : RAW_BASE;

export default function AuthCallbackPage() {
  const navigate = useNavigate();
  const handledRef = useRef(false);

  useEffect(() => {
    if (handledRef.current) return;
    handledRef.current = true;

    const hash = window.location.hash.startsWith("#")
      ? window.location.hash.substring(1)
      : window.location.hash;

    const params = new URLSearchParams(hash);

    const accessToken = params.get("access_token");
    const idToken = params.get("id_token");
    const refreshToken = params.get("refresh_token");

    if (!accessToken && !idToken) {
      navigate("/login", { replace: true });
      return;
    }

    if (accessToken) {
      localStorage.setItem("access_token", accessToken);
    }
    if (idToken) {
      localStorage.setItem("idToken", idToken);
    }
    if (refreshToken) {
      localStorage.setItem("refresh_token", refreshToken);
    }

    // Clear hash from URL
    window.history.replaceState({}, document.title, window.location.pathname);

    const syncUser = async () => {
      try {
        const bearer = idToken || accessToken;

        const res = await fetch(`${API_BASE.replace(/\/+$/, "")}/auth/me`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${bearer}`,
          },
        });

        if (!res.ok) {
          const text = await res.text();
          navigate("/error", {
            replace: true,
            state: {
              error: {
                status: res.status,
                message: text || "Sync user failed.",
              },
            },
          });
          return;
        }

        navigate("/", { replace: true });
      } catch (e) {
        navigate("/error", {
          replace: true,
          state: { error: e },
        });
      }
    };

    syncUser();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex items-center gap-3">
        <div className="size-6 border-3 border-slate-300 border-t-slate-900 rounded-full animate-spin" />
        <p className="text-sm text-slate-600">Signing you in, please wait...</p>
      </div>
    </div>
  );
}
