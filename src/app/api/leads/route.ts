import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

// Fallback to file storage for now
const LEADS_DIR = path.join(process.cwd(), 'data');
const LEADS_FILE = path.join(LEADS_DIR, 'leads.json');

// Ensure data directory exists
async function ensureDataDir() {
  if (!existsSync(LEADS_DIR)) {
    await mkdir(LEADS_DIR, { recursive: true });
  }
}

// Read leads from file
async function readLeads() {
  try {
    await ensureDataDir();
    if (!existsSync(LEADS_FILE)) {
      return [];
    }
    const data = await readFile(LEADS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading leads:', error);
    return [];
  }
}

// Write leads to file
async function writeLeads(leads: any[]) {
  try {
    await ensureDataDir();
    await writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));
  } catch (error) {
    console.error('Error writing leads:', error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, phone, company, projectDetails } = body;

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    // Validate Kenyan phone number format
    // Kenyan mobile numbers: +254 1XX XXX XXX, +254 7XX XXX XXX or 01XX XXX XXX, 07XX XXX XXX
    const kenyanPhoneRegex = /^(\+254|0)[17]\d{8}$/;
    if (!kenyanPhoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Please enter a valid Kenyan phone number (e.g. 0706154142 or +254706154142)' },
        { status: 400 }
      );
    }

    // Create lead object
    const lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name,
      phone,
      company: company || '',
      projectDetails: projectDetails || '',
      timestamp: new Date().toISOString(),
      source: 'contact_modal'
    };

    // Read existing leads and add new one
    const leads = await readLeads();
    leads.unshift(lead); // Add to beginning (most recent first)
    
    // Save updated leads
    await writeLeads(leads);

    return NextResponse.json({
      success: true,
      message: 'Lead saved successfully',
      leadId: lead.id
    });

  } catch (error) {
    console.error('Error saving lead:', error);
    return NextResponse.json(
      { error: 'Failed to save lead' },
      { status: 500 }
    );
  }
}

// GET method to retrieve leads (for admin purposes)
export async function GET() {
  try {
    const leads = await readLeads();
    
    return NextResponse.json({
      success: true,
      leads: leads, // Already sorted most recent first
      count: leads.length
    });

  } catch (error) {
    console.error('Error retrieving leads:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve leads' },
      { status: 500 }
    );
  }
}