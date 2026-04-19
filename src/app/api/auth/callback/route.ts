import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const cookieStorePre = await cookies();
    const existingAccessToken = cookieStorePre.get('access_token')?.value;
    const existingExpiresAt = cookieStorePre.get('token_expires_at')?.value;
    if (existingAccessToken && existingExpiresAt) {
      const notExpired = new Date(existingExpiresAt) > new Date();
      if (notExpired) {
        return NextResponse.redirect(new URL('/panel', 'https://spoons.su'));
      }
    }

    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const error = searchParams.get('error');

    if (error) {
      console.error('OAuth error:', error);
      return NextResponse.redirect(new URL('/auth?error=oauth_error', 'https://spoons.su'));
    }

    if (!code) {
      return NextResponse.redirect(new URL('/auth?error=no_code', 'https://spoons.su'));
    }

    const redirectUri = 'https://spoons.su/api/auth/callback';

    const AUTH_BASE_URL = process.env.AUTH_BASE_URL || 'https://auth.spoons.su';
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), Number(process.env.AUTH_FETCH_TIMEOUT_MS || 7000));
    let tokenResponse: Response;
    try {
      tokenResponse = await fetch(`${AUTH_BASE_URL}/api/oidc/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          client_id: 'spoons',
          client_secret: process.env.OAUTH_CLIENT_SECRET || '',
          code: code,
          redirect_uri: redirectUri,
        }),
        signal: controller.signal,
      });
    } catch (fetchErr) {
      console.error('Token exchange request failed:', fetchErr);
      return NextResponse.redirect(new URL('/auth?error=auth_unreachable', 'https://spoons.su'));
    } finally {
      clearTimeout(timeout);
    }

    if (!tokenResponse.ok) {
      console.error('Token exchange failed:', await tokenResponse.text());
      return NextResponse.redirect(new URL('/auth?error=token_exchange_failed', 'https://spoons.su'));
    }

    const tokenData = await tokenResponse.json();
    
    const expiresIn = tokenData.expires_in || 3600; // Default to 1 hour
    const expiresAt = new Date(Date.now() + expiresIn * 1000);

    const cookieStore = await cookies();
    
    cookieStore.set('access_token', tokenData.access_token, {
      expires: expiresAt,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
    });

    if (tokenData.refresh_token) {
      cookieStore.set('refresh_token', tokenData.refresh_token, {
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
      });
    }

    if (tokenData.id_token) {
      cookieStore.set('id_token', tokenData.id_token, {
        expires: expiresAt,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
      });
    }

    cookieStore.set('token_type', tokenData.token_type || 'Bearer', {
      expires: expiresAt,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
    });

    cookieStore.set('token_expires_at', expiresAt.toISOString(), {
      expires: expiresAt,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
    });

    if (state) {
      cookieStore.set('oauth_state', state, {
        expires: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
      });
    }
    
    return NextResponse.redirect(new URL('/panel', 'https://spoons.su'));

  } catch (error) {
    console.error('OAuth callback error:', error);
    return NextResponse.redirect(new URL('/auth?error=callback_error', 'https://spoons.su'));
  }
}
