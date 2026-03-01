const domain = import.meta.env.VITE_COGNITO_DOMAIN;
const clientId = import.meta.env.VITE_COGNITO_CLIENT_ID;
const redirectUri = import.meta.env.VITE_COGNITO_REDIRECT_URI;

/**
 * Build the Cognito Hosted UI OAuth2 authorize URL for a social provider.
 * @param {"Google"} provider
 */
export function getSocialLoginUrl(provider) {
  const base = `https://${domain}/oauth2/authorize`;

  const params = new URLSearchParams({
    response_type: "token",
    client_id: clientId,
    redirect_uri: redirectUri,
    identity_provider: provider,
    scope: "openid email profile",
    state: provider,
    prompt: "select_account",
  });

  return `${base}?${params.toString()}`;
}
