import { NextResponse } from 'next/server'

export async function GET() {
  // Mock recent leads data that matches your design mockup
  const recentLeads = [
    {
      id: "1",
      name: "Jane Muthoni",
      email: "jane@kaumischool.edu",
      phone: "+254712345678",
      company: "Kaumi Primary School",
      project_type: "School Management System",
      priority: "high",
      lead_score: 85,
      timestamp: new Date().toISOString(),
      source: "Website Contact"
    },
    {
      id: "2", 
      name: "Samuel Maina",
      email: "samuel@nairobisolutions.co.ke",
      phone: "+254723456789",
      company: "Nairobi Solutions Ltd",
      project_type: "Custom Web Application",
      priority: "medium",
      lead_score: 72,
      timestamp: new Date().toISOString(),
      source: "Referral"
    },
    {
      id: "3",
      name: "Peter Kariuki", 
      email: "peter@techstartup.co.ke",
      phone: "+254734567890",
      company: "Tech Startup Co",
      project_type: "API Integration",
      priority: "low",
      lead_score: 58,
      timestamp: new Date().toISOString(),
      source: "Social Media"
    },
    {
      id: "4",
      name: "Mary Njoroge",
      email: "njoroge@retailgroup.co.ke", 
      phone: "+254745678901",
      company: "Retail Group Kenya",
      project_type: "E-commerce Website",
      priority: "high",
      lead_score: 91,
      timestamp: new Date().toISOString(),
      source: "Google Ads"
    }
  ]

  return NextResponse.json(recentLeads)
}
