import { SignJWT, jwtVerify } from 'jose';

import bcrypt from 'bcryptjs';
import { AUTH_CONFIG } from './auth-config';

const JWT_SECRET = new TextEncoder().encode(AUTH_CONFIG.JWT_SECRET);

export interface AdminUser {
    username: string;
    role: 'admin';
}

export async function verifyCredentials(username: string, password: string): Promise<boolean> {
    if (username !== AUTH_CONFIG.CREDENTIALS.username) {
        return false;
    }
    return bcrypt.compare(password, AUTH_CONFIG.CREDENTIALS.passwordHash);
}

export async function createToken(user: AdminUser): Promise<string> {
    return new SignJWT({ 
        username: user.username, 
        role: user.role 
    })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('24h')
        .sign(JWT_SECRET);
}

export async function verifyToken(token: string): Promise<AdminUser | null> {
    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);
        return {
            username: payload.username as string,
            role: 'admin'
        };
    } catch {
        return null;
    }
}