import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_CONFIG } from "@/app/admin/lib/auth-config";

export async function POST() {
    // Create a response that will clear the auth cookie
    const response = NextResponse.json({ success: true });
    
    // Clear the auth cookie
    response.cookies.delete(AUTH_CONFIG.COOKIE.name);
    
    return response;
}