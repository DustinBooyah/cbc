import { NextResponse, NextRequest } from "next/server";
import { getUserRole } from "@/app/lib/auth/roles";

// Force Node.js runtime instead of Edge
export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  
  const code  = searchParams.get("code");
  const grantId = searchParams.get("grant_id");
  const state = searchParams.get("state");

  // Get stored state from cookie
  const storedState = req.cookies.get("pkce_state")?.value;
  
  // Verify state to prevent CSRF attacks
  if (!code && !grantId) {
    return NextResponse.json(
      { error: "Missing authorization code or grant_id" },
      { status: 400 }
    );
  }
  
  if (state && storedState && state !== storedState) {
    return NextResponse.json(
      { error: "State mismatch - possible CSRF attack" },
      { status: 400 }
    );
  }

  // Update to use the POC IdP endpoints
  const tokenUrl = `${process.env.NEXT_PUBLIC_IDP_DOMAIN}/mga/sps/oauth/oauth20/token`;
  
  
  const params = new URLSearchParams({
    grant_type:   "authorization_code",
    client_id:    process.env.NEXT_PUBLIC_MILOGIN_CLIENT_ID!,
    redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`,
  });
  
  // Add the authorization code with the appropriate parameter name
  if (code) {
    params.append("code", code);
  } else if (grantId) {
    params.append("grant_id", grantId);
  }
  
  // Add client_secret - REQUIRED for MILogin
  // Try multiple possible variable names
  const miloginVar = process.env.NEXT_PUBLIC_MILOGIN_VAR || process.env.MILOGIN_CLIENT_SECRET;
  const debugInfo = {
    hasMLV: !!miloginVar,
    mlvLength: miloginVar?.length || 0,
    nodeEnv: process.env.NODE_ENV,
    vercelEnv: process.env.VERCEL_ENV,
    runtime: 'nodejs',
    allEnvKeys: Object.keys(process.env).filter(k => k.includes('MILOGIN') || k.includes('CLIENT')),
    publicVars: {
      clientId: process.env.NEXT_PUBLIC_MILOGIN_CLIENT_ID,
      appUrl: process.env.NEXT_PUBLIC_APP_URL,
      idpDomain: process.env.NEXT_PUBLIC_IDP_DOMAIN
    }
  };
  
  console.log('Environment debug:', debugInfo);
  
  if (!miloginVar || miloginVar.trim() === '') {
    return NextResponse.json(
      { 
        error: "Server configuration error: missing NEXT_PUBLIC_MILOGIN_VAR or MILOGIN_CLIENT_SECRET",
        debug: debugInfo // Always include debug info to help troubleshoot
      },
      { status: 500 }
    );
  }
  
  params.append('client_secret', miloginVar);

  const tokenRes = await fetch(tokenUrl, {
    method:  "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body:    params.toString(),
  });

  if (!tokenRes.ok) {
    const errText = await tokenRes.text();
    return NextResponse.json(
      { error: "Token exchange failed", details: errText },
      { status: 502 }
    );
  }

  const tokenData = await tokenRes.json() as { 
    access_token: string; 
    expires_in: number; 
    token_type: string; 
    refresh_token: string; 
    scope: string;
  };

  
  // Fetch user profile using the access token
  const userInfoUrl = `${process.env.NEXT_PUBLIC_IDP_DOMAIN}/mga/sps/oauth/oauth20/userinfo?scope=micamcustom`;
  
  const userInfoRes = await fetch(userInfoUrl, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${tokenData.access_token}`,
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });

  if (!userInfoRes.ok) {
    const errText = await userInfoRes.text();
    return NextResponse.json(
      { error: "Failed to fetch user profile", details: errText },
      { status: 502 }
    );
  }

  const userProfile = await userInfoRes.json() as {
    micamusername: string;
    firstname: string;
    lastname: string;
    email: string;
    mobile?: string;
    initials?: string;
    suffix?: string;
    micamusertype: string;
  };

  // Get user role based on MILogin user type
  const userRole = getUserRole(userProfile.micamusertype);

  // Create enhanced user data with role
  const userData = {
    ...userProfile,
    role: userRole
  };

  // Redirect into your dashboard and set the tokens in secure cookies
  const res = NextResponse.redirect(new URL("/dashboard", req.url));
  
  // Store access token
  res.cookies.set("access_token", tokenData.access_token, {
    httpOnly: true,
    secure:   process.env.NODE_ENV === "production",
    sameSite: "lax",
    path:     "/",
    maxAge:   tokenData.expires_in // Set expiry based on token lifetime
  });

  // Store refresh token (if you need it)
  res.cookies.set("refresh_token", tokenData.refresh_token, {
    httpOnly: true,
    secure:   process.env.NODE_ENV === "production",
    sameSite: "lax",
    path:     "/",
  });

  // Store user profile with role information
  res.cookies.set("user_profile", JSON.stringify(userData), {
    httpOnly: true,
    secure:   process.env.NODE_ENV === "production",
    sameSite: "lax",
    path:     "/",
  });

  return res;
}