import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  // Clear all auth cookies
  const response = NextResponse.json({ success: true });
  
  // Clear all authentication cookies
  response.cookies.delete('access_token');
  response.cookies.delete('refresh_token');
  response.cookies.delete('user_profile');
  response.cookies.delete('pkce_state');
  
  // Note: For a complete logout from MILogin, you might need to redirect to their logout endpoint
  // This depends on MILogin's specific logout implementation
  // Example: return NextResponse.redirect(`${process.env.NEXT_PUBLIC_IDP_DOMAIN}/logout?redirect_uri=${process.env.NEXT_PUBLIC_APP_URL}`);
  
  return response;
}

export async function GET(req: NextRequest) {
  // If MILogin supports a logout redirect endpoint, implement it here
  const logoutUrl = `${process.env.NEXT_PUBLIC_IDP_DOMAIN}/mga/sps/apiauthsvc?PolicyId=urn:ibm:security:authentication:asf:mechanism:oauth20:logout`;
  
  // Clear cookies and redirect to MILogin logout
  const response = NextResponse.redirect(logoutUrl);
  
  response.cookies.delete('access_token');
  response.cookies.delete('refresh_token');
  response.cookies.delete('user_profile');
  response.cookies.delete('pkce_state');
  
  return response;
}