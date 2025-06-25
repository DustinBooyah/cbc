import { NextResponse } from 'next/server'
import crypto from 'crypto'
import base64url from 'base64url'

export async function GET() {
  const state = base64url(crypto.randomBytes(16))

  // MILogin OAuth2 authorize endpoint
  const authorizeUrl = `${process.env.NEXT_PUBLIC_IDP_DOMAIN!}/mga/sps/oauth/oauth20/authorize`;
  
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: process.env.NEXT_PUBLIC_MILOGIN_CLIENT_ID!,
    redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`,
    scope: 'micamcustom', // MILogin custom scope for user profile
    state,
  });

  console.log('Redirecting to MILogin:', `${authorizeUrl}?${params.toString()}`);

  const res = NextResponse.redirect(`${authorizeUrl}?${params.toString()}`)
  
  res.cookies.set('pkce_state', state, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
  })
  
  return res
}