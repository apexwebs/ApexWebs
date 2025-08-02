import { NextResponse } from 'next/server'

export async function GET() {
  // Mock dashboard statistics data
  const stats = {
    totalLeads: 142,
    newLeads: 23,
    conversionRate: 8.2,
    avgResponseTime: 1.8,
    monthlyRevenue: 450000,
    activeProjects: 12
  }

  return NextResponse.json(stats)
}
