import { useState, useCallback } from "react";
import { usePasswordLogin } from "@/features/auth/hooks/usePasswordLogin";
import { useSocialLogin } from "@/features/auth/hooks/useSocialLogin";

export function useLogin() {
  const [selectedAcc, setSelectedAcc] = useState(null);

  const { loading, error, loginWithPassword } = usePasswordLogin();
  const { loginWithSocial } = useSocialLogin();

  const handlePasswordLogin = loginWithPassword;

  const handleRecentLogin = useCallback(
    async (account) => {
      if (!account?.email || !account?.password) {
        return;
      }
      await loginWithPassword(account.email, account.password);
    },
    [loginWithPassword]
  );

  const handleSocialLogin = loginWithSocial;

  return {
    loading,
    error,
    selectedAcc,
    setSelectedAcc,
    handlePasswordLogin,
    handleRecentLogin,
    handleSocialLogin,
  };
}
