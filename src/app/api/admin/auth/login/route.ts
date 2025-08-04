/**
 * Admin Login API Route
 * Handles authentication requests for ApexWebs Admin Portal
 * POST /api/admin/auth/login
 */

import { NextRequest, NextResponse } from 'next/server';
import { authenticateAdmin, createToken } from '@/app/admin/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    // Validate input
    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: 'Username and password are required' },
        { status: 400 }
      );
    }

    // Authenticate user
    const result = await authenticateAdmin(username, password);
    
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 401 }
      );
    }

    // Create JWT token
    const token = await createToken(result.user!);
    
    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Failed to create authentication token' },
        { status: 500 }
      );
    }

    // Create response with authentication cookie
    const response = NextResponse.json(
      { success: true, message: 'Login successful', user: result.user },
      { status: 200 }
    );

    // Set authentication cookie
    response.cookies.set('apex-admin-session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60, // 24 hours in seconds
      path: '/'
    });

    return response;

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
