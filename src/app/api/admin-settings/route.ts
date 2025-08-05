import { NextRequest, NextResponse } from 'next/server';

// In-memory settings store (replace with DB/Redis in production)
const adminSettings = {
  email: 'admin@example.com',
  phone: '0700000000',
  password: '', // hashed in production
};

export async function GET() {
  // Never return password in real app
  const { password, ...publicSettings } = adminSettings;
  return NextResponse.json(publicSettings);
}

export async function POST(request: NextRequest) {
  try {
    const { email, phone, password } = await request.json();
    if (email) adminSettings.email = email;
    if (phone) adminSettings.phone = phone;
    if (password) adminSettings.password = password; // hash in production
    return NextResponse.json({ success: true, message: 'Settings updated.' });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to update settings.' }, { status: 400 });
  }
}
