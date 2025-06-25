"use client";
import React from "react";
import { AuthProvider } from "react-oidc-context";
import { MILoginAuthProvider } from "./milogin-provider";

// Determine which auth provider to use based on environment configuration
const USE_COGNITO = !!(
  process.env.NEXT_PUBLIC_COGNITO_AUTHORITY_URL && 
  process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID
);

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
};

export function HybridAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use Cognito if configured, otherwise use MILogin
  if (USE_COGNITO) {
    return <AuthProvider {...oidcConfig}>{children}</AuthProvider>;
  }
  
  return <MILoginAuthProvider>{children}</MILoginAuthProvider>;
}