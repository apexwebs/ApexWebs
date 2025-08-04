/**
 * Admin Logout API Route
 * Handles secure logout for ApexWebs Admin Portal
 * POST /api/admin/auth/logout
 */

import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Create response with success message
    const response = NextResponse.json({
      success: true,
      message: 'Logout successful'
    });

    // Remove authentication cookie
    response.cookies.set('apex-admin-session', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0, // Expire immediately
      path: '/admin'
    });

    return response;

  } catch (error) {
    console.error('Logout API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
