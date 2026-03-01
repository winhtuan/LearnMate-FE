import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Field from "@/shared/components/ui/Field";
import Button from "@/shared/components/ui/Button";
import PasswordField from "@/features/auth/components/PasswordField";
import SocialButton from "@/features/auth/components/SocialButton";
import AccountLoginModal from "@/features/auth/components/AccountLoginModal";
import ForgotPasswordModal from "@/features/auth/components/ForgotPasswordModal";
import AuthLeft from "@/features/auth/components/AuthLeft";
import { useLogin } from "@/features/auth/hooks/useLogin";

export default function LoginPage() {
  console.log("[LoginPage] rendering");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fpOpen, setFpOpen] = useState(false);

  const navigate = useNavigate();

  const {
    loading,
    error,
    selectedAcc,
    setSelectedAcc,
    handlePasswordLogin,
    handleRecentLogin,
    handleSocialLogin,
  } = useLogin();

  const accounts = [];

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left panel */}
      <AuthLeft
        brand="LearnMate"
        accounts={accounts}
        onRemove={(id) => console.log("remove recent", id)}
        onAddNew={() => console.log("add new recent")}
        onSelect={setSelectedAcc}
      />

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className="text-slate-900 text-xl font-semibold">
              LearnMate
            </span>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-2">Sign in</h2>
          <p className="text-slate-500 mb-10">
            Enter your credentials to continue
          </p>

          {/* Error message */}
          {error && (
            <p className="text-sm text-red-600 mb-4">{error}</p>
          )}

          {/* Email */}
          <Field
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@company.com"
          />

          {/* Password */}
          <PasswordField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            showForgot
            onForgot={() => setFpOpen(true)}
          />

          {/* Forgot password modal */}
          <ForgotPasswordModal
            open={fpOpen}
            onClose={() => setFpOpen(false)}
            defaultEmail={email}
            onResetSuccess={() => {
              setFpOpen(false);
            }}
          />

          {/* Sign in button */}
          <Button
            onClick={() => handlePasswordLogin(email, password)}
            fullWidth
            size="md"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </Button>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-slate-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social login — Google only */}
          <div className="pb-6">
            <SocialButton
              provider="google"
              fullWidth
              size="md"
              onClick={() => handleSocialLogin("Google")}
            >
              Google
            </SocialButton>
          </div>

          {/* Link to signup */}
          <p className="text-center text-sm text-slate-600">
            Don&apos;t have an account?{" "}
            <button
              className="text-slate-900 font-semibold hover:underline"
              onClick={() => navigate("/register")}
            >
              Sign up
            </button>
          </p>

          {/* Recent account quick login modal */}
          <AccountLoginModal
            open={!!selectedAcc}
            account={selectedAcc}
            onClose={() => setSelectedAcc(null)}
            onSubmit={handleRecentLogin}
          />
        </div>
      </div>
    </div>
  );
}
