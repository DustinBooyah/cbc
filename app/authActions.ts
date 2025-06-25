import { useAuth as useOidcAuth } from "react-oidc-context";
import { useAuth as useMILoginAuth } from "./api/auth/milogin-provider";

// Determine which auth system is being used
const USE_COGNITO = !!(
  process.env.NEXT_PUBLIC_COGNITO_AUTHORITY_URL && 
  process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID
);

export function useAuthActions() {
  // Always call both hooks to satisfy React's rules of hooks
  const oidcAuth = useOidcAuth();
  const miloginAuth = useMILoginAuth();

  const signIn = () => {
    if (USE_COGNITO && oidcAuth) {
      oidcAuth.signinRedirect();
    } else if (miloginAuth) {
      miloginAuth.signinRedirect();
    }
  };

  const signOut = () => {
    if (USE_COGNITO) {
      const clientId = process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID!;
      const logoutUri = `${process.env.NEXT_PUBLIC_APP_URL}/loggedout`;
      const cognitoDomain = process.env.NEXT_PUBLIC_COGNITO_DOMAIN!;
      window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
    } else if (miloginAuth) {
      miloginAuth.signoutRedirect();
    }
  };

  // Provide a unified auth object
  const auth = USE_COGNITO ? oidcAuth : {
    user: miloginAuth?.user,
    isAuthenticated: miloginAuth?.isAuthenticated || false,
    isLoading: miloginAuth?.isLoading || false,
    signinRedirect: signIn,
    signoutRedirect: signOut,
  };

  return {
    signIn,
    signOut,
    auth,
  };
}
