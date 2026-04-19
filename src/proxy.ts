import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api/') && 
      !request.nextUrl.pathname.startsWith('/api/auth/') &&
      request.nextUrl.pathname !== '/api/get-token') {
    
    const accessToken = request.cookies.get('access_token')?.value;
    const tokenExpiresAt = request.cookies.get('token_expires_at')?.value;
    const refreshToken = request.cookies.get('refresh_token')?.value;

    if (!accessToken) {
      return NextResponse.json(
        { error: 'No access token' },
        { status: 401 }
      );
    }

    if (tokenExpiresAt) {
      const expiresAt = new Date(tokenExpiresAt);
      const now = new Date();
      const fiveMinutesFromNow = new Date(now.getTime() + 5 * 60 * 1000);

      if (expiresAt <= fiveMinutesFromNow) {
        if (refreshToken) {
          return NextResponse.json(
            { error: 'Token expired', needsRefresh: true },
            { status: 401 }
          );
        } else {
          return NextResponse.json(
            { error: 'Token expired and no refresh token' },
            { status: 401 }
          );
        }
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/api/:path*',
  ],
};
