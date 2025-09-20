import { NextRequest, NextResponse } from 'next/server';
import Tokens from 'csrf';

const tokens = new Tokens();
const SECRET = process.env.CSRF_SECRET || 'your-csrf-secret-key';

// Store for CSRF tokens (in production, use Redis or similar)
const tokenStore = new Map<string, { token: string; expires: number }>();

export function generateCsrfToken(sessionId: string): string {
    const token = tokens.create(SECRET);
    tokenStore.set(sessionId, {
        token,
        expires: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
    });
    return token;
}

export function validateCsrfToken(request: NextRequest): boolean {
    const sessionId = request.cookies.get('adminToken')?.value;
    const csrfToken = request.headers.get('x-csrf-token');

    if (!sessionId || !csrfToken) {
        return false;
    }

    const storedData = tokenStore.get(sessionId);
    if (!storedData || Date.now() > storedData.expires) {
        tokenStore.delete(sessionId);
        return false;
    }

    return tokens.verify(SECRET, csrfToken);
}

export async function csrfProtection(request: NextRequest) {
    // Skip CSRF check for GET requests and login route
    if (request.method === 'GET' || request.nextUrl.pathname === '/api/admin/auth/login') {
        return null;
    }

    if (!validateCsrfToken(request)) {
        return NextResponse.json(
            { error: 'Invalid CSRF token' },
            { status: 403 }
        );
    }

    return null;
}