import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key");

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (!path.startsWith("/admin")) {
    return NextResponse.next();
  }

  const token = request.cookies.get("adminToken")?.value;
  const isLoginPage = path === "/admin/login";

  if (!token && !isLoginPage) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  if (token) {
    try {
      await jwtVerify(token, JWT_SECRET);
      if (isLoginPage) {
        return NextResponse.redirect(new URL("/admin/dashboard", request.url));
      }
    } catch {
      if (!isLoginPage) {
        return NextResponse.redirect(new URL("/admin/login", request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*"
};
