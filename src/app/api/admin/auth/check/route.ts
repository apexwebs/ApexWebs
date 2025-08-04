/**
 * Admin Authentication Check API Route
 * Verifies if user is authenticated for ApexWebs Admin Portal
 * GET /api/admin/auth/check
 */

import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/app/admin/lib/auth';

export async function GET(request: NextRequest) {
  try {
    // Get authentication cookie
    const token = request.cookies.get('apex-admin-session')?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, error: 'No authentication token found' },
        { status: 401 }
      );
    }

    // Verify token
    const user = await verifyToken(token);

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Invalid or expired token' },
        { status: 401 }
      );
    }

    // Return user information (without sensitive data)
    return NextResponse.json({
      success: true,
      authenticated: true,
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
        loginTime: user.loginTime
      }
    });

  } catch (error) {
    console.error('Auth check API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
