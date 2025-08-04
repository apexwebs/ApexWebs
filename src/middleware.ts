/**
 * Next.js Middleware for ApexWebs
 * Handles route protection and authentication for admin portal
 */

// Middleware temporarily disabled to restore clean state
// Will be restored once admin portal is working properly

import { NextResponse } from 'next/server';

export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
