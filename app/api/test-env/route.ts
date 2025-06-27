import { NextResponse } from "next/server";

export async function GET() {
  const envCheck = {
    hasMiloginVar: !!process.env.NEXT_PUBLIC_MILOGIN_VAR,
    miloginVarLength: process.env.NEXT_PUBLIC_MILOGIN_VAR?.length || 0,
    nodeEnv: process.env.NODE_ENV,
    vercelEnv: process.env.VERCEL_ENV,
    isVercel: !!process.env.VERCEL,
    // Check all env vars containing certain keywords
    miloginKeys: Object.keys(process.env).filter(k => k.includes('MILOGIN')),
    clientKeys: Object.keys(process.env).filter(k => k.includes('CLIENT')),
    // Public vars should work
    publicVars: {
      clientId: process.env.NEXT_PUBLIC_MILOGIN_CLIENT_ID,
      appUrl: process.env.NEXT_PUBLIC_APP_URL,
      idpDomain: process.env.NEXT_PUBLIC_IDP_DOMAIN
    }
  };

  return NextResponse.json(envCheck);
}