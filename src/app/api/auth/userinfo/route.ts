import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('access_token')?.value;
    const tokenExpiresAt = cookieStore.get('token_expires_at')?.value;

    if (!accessToken) {
      return NextResponse.json(
        { error: 'No access token available' },
        { status: 401 }
      );
    }

    if (tokenExpiresAt && new Date(tokenExpiresAt) <= new Date()) {
      return NextResponse.json(
        { error: 'Token expired' },
        { status: 401 }
      );
    }

    const userInfoResponse = await fetch('https://auth.spoons.su/api/oidc/userinfo', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (!userInfoResponse.ok) {
      console.error('Failed to get user info:', await userInfoResponse.text());
      return NextResponse.json(
        { error: 'Failed to get user info' },
        { status: 401 }
      );
    }

    const userInfo = await userInfoResponse.json();

    return NextResponse.json({
      success: true,
      user: userInfo,
      expires_at: tokenExpiresAt,
    });

  } catch (error) {
    console.error('User info error:', error);
    return NextResponse.json(
      { error: 'Failed to get user info' },
      { status: 500 }
    );
  }
}
