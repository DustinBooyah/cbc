"use client";
import React from "react";
import { AuthProvider } from "react-oidc-context";

const oidcConfig = {
  authority: process.env.NEXT_PUBLIC_COGNITO_AUTHORITY_URL!,
  client_id: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID!,
  redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`,
  response_type: "code",
  scope: "openid email phone profile",

  overrideConfig: {
    userStore: null,       
    metadataUrl: undefined,
  },
  // // NEW
  //   extraQueryParams: {
  //   identity_provider: process.env.NEXT_PUBLIC_SAML_PROVIDER_NAME
  // }
};

export function CognitoAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider {...oidcConfig}>{children}</AuthProvider>;
}