'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from 'react-oidc-context';

export default function OidcCallbackPage() {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (auth.isLoading) return;

    if (auth.isAuthenticated) {
      router.replace('/dashboard');
    } else if (!auth.isAuthenticated) {
      auth.signinRedirect();
    } else if (auth.error) {
      console.error('OIDC login error:', auth.error.message);
      router.replace('/error');
    }
  }, [auth.isLoading, auth.isAuthenticated, auth.error, router]);

  return <p>Checking login status...</p>;
}

// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useAuth } from "react-oidc-context";

// export default function OidcCallbackPage() {
//   const auth = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (auth.isAuthenticated) {
//       router.replace("/dashboard");
//     } else if (auth.error) {
//       console.error("OIDC error:", auth.error);
//       router.replace("/error");
//     }
//   }, [auth.isAuthenticated, auth.error, router]);

//   return <p>Signing you in...</p>;
// }


