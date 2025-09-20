import { NextRequest, NextResponse } from 'next/server';
import { verifyCredentials, createToken } from '@/app/admin/lib/auth';
import { AUTH_CONFIG } from '@/app/admin/lib/auth-config';
import { rateLimit } from '@/app/admin/lib/rate-limit';

export async function POST(request: NextRequest) {
    try {
        // Check rate limit
        const rateLimitResponse = rateLimit(request);
        if (rateLimitResponse) {
            return rateLimitResponse;
        }

        const body = await request.json();
        const { username, password } = body;
        
        console.log('Login attempt:', { username });

        if (!username || !password) {
            console.log('Missing credentials');
            return NextResponse.json(
                { error: 'Username and password are required' },
                { status: 400 }
            );
        }

        console.log('Checking credentials...');
        const isValid = await verifyCredentials(username, password);
        console.log('Credentials valid:', isValid);
        
        if (!isValid) {
            return NextResponse.json(
                { error: 'Invalid credentials' },
                { status: 401 }
            );
        }

        console.log('Creating token...');
        const token = await createToken({ username, role: "admin" });
        console.log('Token created');
        
        const response = NextResponse.json(
            { success: true },
            { status: 200 }
        );

        console.log('Setting cookie...');
        response.cookies.set(
            AUTH_CONFIG.COOKIE.name,
            token,
            AUTH_CONFIG.COOKIE.options
        );

        return response;
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
