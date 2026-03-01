import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

const API_BASE =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5189/api";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("[AuthProvider] render — loading:", loading, "user:", !!user);

  useEffect(() => {
    const token =
      localStorage.getItem("idToken") || localStorage.getItem("access_token");

    console.log("[AuthProvider] useEffect — token present:", !!token);

    if (!token) {
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    fetch(`${API_BASE}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
      signal: controller.signal,
    })
      .then((r) => {
        if (!r.ok) {
          if (r.status === 401) {
            localStorage.removeItem("idToken");
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
          }
          throw new Error("Failed to fetch current user");
        }
        return r.json();
      })
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error("auth/me error:", err);
        }
        setUser(null);
      })
      .finally(() => {
        clearTimeout(timeoutId);
        setLoading(false);
      });

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
