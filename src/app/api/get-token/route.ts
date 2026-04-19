import { NextResponse } from 'next/server';
import crypto from 'crypto';

export const dynamic = 'force-dynamic';

export async function POST() {
  try {
    const token = crypto.randomBytes(32).toString('hex');

    return NextResponse.json({
      success: true,
      token: token
    });

  } catch (error) {
    console.error('Token generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate token' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Use POST method to generate a token',
    endpoint: '/api/auth/get-token',
    method: 'POST'
  });
}