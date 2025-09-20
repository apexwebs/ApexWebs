import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/app/admin/lib/auth';
import { AUTH_CONFIG } from '@/app/admin/lib/auth-config';

export async function GET(request: NextRequest) {
    const token = request.cookies.get(AUTH_CONFIG.COOKIE.name)?.value;
    
    if (!token) {
        return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    const user = await verifyToken(token);
    if (!user) {
        return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    return NextResponse.json({ authenticated: true, user });
}