import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getUserRole, hasPermission, type Permission } from '@/app/lib/auth/roles';

// Define protected routes and their required permissions
const PROTECTED_ROUTES: Record<string, Permission[]> = {
  '/dashboard': ['view_dashboard'],
  '/reports/create': ['create_reports'],
  '/reports/edit': ['edit_reports'],
  '/admin': ['admin_access'],
  '/analytics': ['view_analytics'],
  '/users': ['manage_users'],
  '/export': ['export_data'],
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Skip auth check for public routes
  if (pathname.startsWith('/api/auth') || pathname.startsWith('/api/test-env') || pathname === '/' || pathname === '/login') {
    return NextResponse.next();
  }

  // Get user profile from cookie
  const userProfileCookie = request.cookies.get('user_profile');
  const accessToken = request.cookies.get('access_token');

  // Redirect to login if no auth
  if (!userProfileCookie || !accessToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    const userProfile = JSON.parse(userProfileCookie.value);
    const userRole = userProfile.role || getUserRole(userProfile.micamusertype);

    // Check permissions for protected routes
    for (const [route, permissions] of Object.entries(PROTECTED_ROUTES)) {
      if (pathname.startsWith(route)) {
        const hasRequiredPermission = permissions.some(permission => 
          hasPermission(userRole, permission)
        );

        if (!hasRequiredPermission) {
          // Redirect to unauthorized page or dashboard
          return NextResponse.redirect(new URL('/unauthorized', request.url));
        }
      }
    }

    // Add user info to headers for server components
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-role', userRole);
    requestHeaders.set('x-user-id', userProfile.micamusername);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch (error) {
    console.error('Middleware auth error:', error);
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: [
    // Match all routes except static files and api/auth
    '/((?!_next/static|_next/image|favicon.ico|api/auth).*)',
  ],
};