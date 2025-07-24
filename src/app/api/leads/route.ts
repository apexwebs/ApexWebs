import { NextRequest, NextResponse } from 'next/server';
import { createClient } from 'redis';

// Create Redis client
const client = createClient({
  url: process.env.REDIS_URL
});

// Connect to Redis (handle connection state)
let isConnected = false;

async function connectRedis() {
  if (!isConnected) {
    await client.connect();
    isConnected = true;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, phone, company, projectDetails } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
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

    // Connect to Redis
    await connectRedis();

    // Create lead object
    const lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name,
      email,
      phone,
      company: company || '',
      projectDetails: projectDetails || '',
      timestamp: new Date().toISOString(),
      source: 'contact_modal'
    };

    // Store lead in Redis
    // Using a hash to store the lead data
    await client.hSet(`lead:${lead.id}`, lead);
    
    // Also add the lead ID to a list for easy retrieval of all leads
    await client.lPush('leads:all', lead.id);

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

// Optional: GET method to retrieve leads (for admin purposes)
export async function GET() {
  try {
    await connectRedis();
    
    // Get all lead IDs
    const leadIds = await client.lRange('leads:all', 0, -1);
    
    // Fetch all leads
    const leads = [];
    for (const leadId of leadIds) {
      const lead = await client.hGetAll(`lead:${leadId}`);
      if (Object.keys(lead).length > 0) {
        leads.push(lead);
      }
    }
    
    return NextResponse.json({
      success: true,
      leads: leads.reverse(), // Most recent first
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