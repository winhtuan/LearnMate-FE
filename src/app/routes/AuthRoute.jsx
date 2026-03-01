import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import GuestRoute from "@/app/routes/GuestRoute";

const LoginPage        = lazy(() => import("@/features/auth/pages/LoginPage"));
const RegisterPage     = lazy(() => import("@/features/auth/pages/RegisterPage"));
const AuthCallbackPage = lazy(() => import("@/features/auth/pages/AuthCallbackPage"));

export default function AuthRoute() {
  return (
    <Routes>
      <Route path="login"    element={<GuestRoute><LoginPage /></GuestRoute>} />
      <Route path="register" element={<GuestRoute><RegisterPage /></GuestRoute>} />
      <Route path="callback" element={<AuthCallbackPage />} />
    </Routes>
  );
}
