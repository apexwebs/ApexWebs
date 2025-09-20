import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key");

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Only run middleware for admin routes
  if (!path.startsWith("/admin")) {
    return NextResponse.next();
  }

  const token = request.cookies.get("adminToken")?.value;
  const isLoginPage = path === "/admin/login";

  // If we have a valid token
  if (token) {
    try {
      await jwtVerify(token, JWT_SECRET);
      // If on login page, redirect to dashboard
      if (isLoginPage) {
        return NextResponse.redirect(new URL("/admin/dashboard", request.url));
      }
      // Otherwise, allow access to admin routes
      return NextResponse.next();
    } catch {
      // Invalid token, clear it
      const response = NextResponse.next();
      response.cookies.delete("adminToken");
      if (!isLoginPage) {
        // Redirect to login if not already there
        return NextResponse.redirect(new URL("/admin/login", request.url));
      }
      return response;
    }
  }

  // No token
  if (!isLoginPage) {
    // Redirect to login for any admin route except login page
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  // Allow access to login page
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*" // Match all admin routes
  ]
};