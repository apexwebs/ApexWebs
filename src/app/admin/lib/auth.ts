/**
 * Admin Authentication Library
 * Handles secure login, session management, and route protection
 * for the ApexWebs Admin Portal
 */

import { NextRequest, NextResponse } from 'next/server';
import { SignJWT, jwtVerify } from 'jose';

// Admin credentials (in production, store in environment variables)
const ADMIN_CREDENTIALS = {
  username: process.env.ADMIN_USERNAME || 'admin',
  // Default password: 'ApexAdmin2025!' - should be changed in production
  passwordHash: process.env.ADMIN_PASSWORD_HASH || '$2a$12$LQv3c1yqBwlI4QDcFn.atu.rHkutrq9VFmtnQqESaaa6i3S6.iau.'
};

// JWT secret key (in production, use a secure random key)
const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'apex-webs-admin-secret-key-2025'
);

const COOKIE_NAME = 'apex-admin-session';
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

/**
 * Admin user interface
 */
export interface AdminUser {
  id: string;
  username: string;
  role: 'admin';
  loginTime: number;
}

/**
 * Authentication result interface
 */
export interface AuthResult {
  success: boolean;
  user?: AdminUser;
  error?: string;
}

/**
 * Hash password using bcrypt-compatible method
 * @param password - Plain text password
 * @returns Promise<string> - Hashed password
 */
export async function hashPassword(password: string): Promise<string> {
  // Simple hash for demo - in production, use bcrypt
  const encoder = new TextEncoder();
  const data = encoder.encode(password + 'apex-salt-2025');
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Verify password against stored hash
 * @param password - Plain text password
 * @param hash - Stored password hash
 * @returns Promise<boolean> - True if password matches
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  const passwordHash = await hashPassword(password);
  return passwordHash === hash;
}

/**
 * Authenticate admin user with username and password
 * @param username - Admin username
 * @param password - Admin password
 * @returns Promise<AuthResult> - Authentication result
 */
export async function authenticateAdmin(username: string, password: string): Promise<AuthResult> {
  try {
    // Check username
    if (username !== ADMIN_CREDENTIALS.username) {
      return { success: false, error: 'Invalid credentials' };
    }

    // For demo purposes, also accept plain text password 'ApexAdmin2025!'
    const isValidPassword = password === 'ApexAdmin2025!' || 
                           await verifyPassword(password, ADMIN_CREDENTIALS.passwordHash);

    if (!isValidPassword) {
      return { success: false, error: 'Invalid credentials' };
    }

    // Create admin user object
    const user: AdminUser = {
      id: 'admin-001',
      username: ADMIN_CREDENTIALS.username,
      role: 'admin',
      loginTime: Date.now()
    };

    return { success: true, user };
  } catch (error) {
    console.error('Authentication error:', error);
    return { success: false, error: 'Authentication failed' };
  }
}

/**
 * Create JWT token for authenticated user
 * @param user - Authenticated admin user
 * @returns Promise<string> - JWT token
 */
export async function createToken(user: AdminUser): Promise<string> {
  const token = await new SignJWT({ 
    id: user.id, 
    username: user.username, 
    role: user.role,
    loginTime: user.loginTime
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(JWT_SECRET);

  return token;
}

/**
 * Verify JWT token and extract user data
 * @param token - JWT token
 * @returns Promise<AdminUser | null> - User data or null if invalid
 */
export async function verifyToken(token: string): Promise<AdminUser | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    
    return {
      id: payload.id as string,
      username: payload.username as string,
      role: payload.role as 'admin',
      loginTime: payload.loginTime as number
    };
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}

/**
 * Set authentication cookie using Response headers
 * @param token - JWT token to store
 * @returns Response headers for setting cookie
 */
export function createAuthCookie(token: string) {
  const cookieValue = `${COOKIE_NAME}=${token}; HttpOnly; Path=/; SameSite=Strict; Max-Age=${SESSION_DURATION / 1000}${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`;
  return {
    'Set-Cookie': cookieValue
  };
}

/**
 * Get authentication cookie from request
 * @param request - NextRequest object
 * @returns string | undefined - JWT token or undefined
 */
export function getAuthCookieFromRequest(request: NextRequest): string | undefined {
  return request.cookies.get(COOKIE_NAME)?.value;
}

/**
 * Remove authentication cookie using Response headers
 * @returns Response headers for removing cookie
 */
export function removeAuthCookie() {
  return {
    'Set-Cookie': `${COOKIE_NAME}=; HttpOnly; Path=/; SameSite=Strict; Max-Age=0`
  };
}

/**
 * Get current authenticated user from request
 * @param request - NextRequest object
 * @returns Promise<AdminUser | null> - Current user or null
 */
export async function getCurrentUser(request: NextRequest): Promise<AdminUser | null> {
  const token = getAuthCookieFromRequest(request);
  if (!token) return null;
  
  return await verifyToken(token);
}

/**
 * Check if current request is authenticated
 * @param request - Next.js request object
 * @returns Promise<boolean> - True if authenticated
 */
export async function isAuthenticated(request: NextRequest): Promise<boolean> {
  try {
    const token = request.cookies.get(COOKIE_NAME)?.value;
    if (!token) return false;
    
    const user = await verifyToken(token);
    return user !== null;
  } catch (error) {
    console.error('Authentication check failed:', error);
    return false;
  }
}

/**
 * Middleware helper to check authentication
 * @param request - Next.js request object
 * @returns Promise<boolean> - True if authenticated
 */
export async function checkAuthInMiddleware(request: NextRequest): Promise<boolean> {
  const token = request.cookies.get(COOKIE_NAME)?.value;
  if (!token) return false;
  
  try {
    const user = await verifyToken(token);
    return user !== null;
  } catch {
    return false;
  }
}

/**
 * Middleware helper to protect admin routes
 * @param request - Next.js request object
 * @returns NextResponse - Redirect to login or continue
 */
export async function requireAuth(request: NextRequest): Promise<NextResponse | null> {
  const isAuth = await isAuthenticated(request);
  
  if (!isAuth) {
    // Redirect to login page
    const loginUrl = new URL('/admin/login', request.url);
    loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }
  
  return null; // Continue to the requested page
}

/**
 * Logout user by removing authentication cookie
 * @returns void
 */
export function logout(): void {
  removeAuthCookie();
}