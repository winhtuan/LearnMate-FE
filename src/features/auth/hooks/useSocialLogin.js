import { useCallback } from "react";
import { getSocialLoginUrl } from "@/features/auth/services/cognitoHostedUi";

export function useSocialLogin() {
  const loginWithSocial = useCallback((provider) => {
    const url = getSocialLoginUrl(provider);
    window.location.href = url;
  }, []);

  return { loginWithSocial };
}
