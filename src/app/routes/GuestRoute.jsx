import { Navigate } from "react-router-dom";
import { useAuth } from "@/app/context/AuthContext";

export default function GuestRoute({ children }) {
  const { user, loading } = useAuth();

  console.log("[GuestRoute] loading:", loading, "user:", !!user);

  if (loading) return null;

  if (user) {
    console.log("[GuestRoute] user found, redirecting to /");
    return <Navigate to="/" replace />;
  }

  console.log("[GuestRoute] rendering children");
  return children;
}
