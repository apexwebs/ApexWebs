import { NextRequest, NextResponse } from 'next/server';

// In-memory settings store (replace with DB/Redis in production)
const adminSettings = {
  email: 'admin@example.com',
  phone: '0700000000',
  password: '', // hashed in production
};

export async function GET() {
  // Return settings without the password field
  const publicSettings = {
    email: adminSettings.email,
    phone: adminSettings.phone
  };
  return NextResponse.json(publicSettings);
}

export async function POST(request: NextRequest) {
  try {
    const { email, phone } = await request.json();
    if (email) adminSettings.email = email;
    if (phone) adminSettings.phone = phone;
    // Password handling removed as it's not being used
    return NextResponse.json({ success: true, message: 'Settings updated.' });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to update settings.' }, { status: 400 });
  }
}
