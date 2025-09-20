import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const ipRequests = new Map<string, { count: number; resetTime: number }>();
const MAX_REQUESTS = 5; // Maximum login attempts
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes window

export function rateLimit(request: NextRequest) {
    // Get IP from X-Forwarded-For header or fallback to a default
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'anonymous';
    const now = Date.now();
    const requestData = ipRequests.get(ip) || { count: 0, resetTime: now + WINDOW_MS };

    // Reset if window has expired
    if (now > requestData.resetTime) {
        requestData.count = 0;
        requestData.resetTime = now + WINDOW_MS;
    }

    requestData.count++;
    ipRequests.set(ip, requestData);

    const remaining = Math.max(0, MAX_REQUESTS - requestData.count);
    const reset = Math.ceil((requestData.resetTime - now) / 1000); // seconds until reset

    // Set rate limit headers
    const headers = new Headers({
        'X-RateLimit-Limit': MAX_REQUESTS.toString(),
        'X-RateLimit-Remaining': remaining.toString(),
        'X-RateLimit-Reset': reset.toString()
    });

    // If rate limit exceeded
    if (requestData.count > MAX_REQUESTS) {
        return NextResponse.json(
            { error: 'Too many login attempts. Please try again later.' },
            { 
                status: 429, 
                headers,
                statusText: 'Too Many Requests'
            }
        );
    }

    return null;
}