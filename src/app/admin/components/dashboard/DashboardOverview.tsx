"use client";
// src/app/admin/components/dashboard/DashboardOverview.tsx
// Dashboard overview component for admin portal
// Fetches and displays key stats and recent leads

import { useEffect, useState } from 'react'

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  projectDetails?: string;
  timestamp?: string;
  source?: string;
  project_type?: string;
  priority?: 'high' | 'medium' | 'low';
  lead_score?: number;
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  TrendingUp,
  Users,
  MessageCircle,
  DollarSign,
  Clock,
  Target
} from 'lucide-react'

interface DashboardStats {
  totalLeads: number
  newLeads: number
  conversionRate: number
  avgResponseTime: number
  monthlyRevenue: number
  activeProjects: number
}

export function DashboardOverview() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [recentLeads, setRecentLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      const [statsRes, leadsRes] = await Promise.all([
        fetch('/api/admin/dashboard/stats'),
        fetch('/api/admin/dashboard/recent-leads')
      ])
      const statsData = await statsRes.json()
      const leadsData = await leadsRes.json()
      setStats(statsData)
      setRecentLeads(leadsData)
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div>Loading dashboard...</div>
  }

  const statCards = [
    {
      title: "Total Leads",
      value: stats?.totalLeads || 0,
      change: "+12%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "New This Week",
      value: stats?.newLeads || 0,
      change: "+8%",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "Conversion Rate",
      value: `${stats?.conversionRate || 0}%`,
      change: "+2.1%",
      icon: Target,
      color: "text-purple-600"
    },
    {
      title: "Avg Response Time",
      value: `${stats?.avgResponseTime || 0}h`,
      change: "-0.5h",
      icon: Clock,
      color: "text-orange-600"
    },
    {
      title: "Monthly Revenue",
      value: `KES ${stats?.monthlyRevenue?.toLocaleString() || 0}`,
      change: "+15%",
      icon: DollarSign,
      color: "text-emerald-600"
    },
    {
      title: "Active Projects",
      value: stats?.activeProjects || 0,
      change: "+3",
      icon: MessageCircle,
      color: "text-indigo-600"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <Card key={index} className="shadow-sm rounded-xl border border-gray-100 bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-semibold text-gray-700">{stat.title}</CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs mt-1">
                <span className="text-green-600 font-medium">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Leads */}
      <Card className="shadow-sm rounded-xl border border-gray-100 bg-white">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-lg font-semibold text-gray-700">Recent Leads</CardTitle>
            <CardDescription className="text-gray-500">Latest leads that need attention</CardDescription>
          </div>
          <button className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-600 hover:bg-gray-200 transition">Refresh</button>
        </CardHeader>
        <CardContent>
          <div className="divide-y divide-gray-100">
            {recentLeads.map((lead: Lead) => (
              <div key={lead.id} className="flex items-center justify-between py-4">
                <div className="flex items-center gap-3">
                  <div className="bg-teal-100 text-teal-700 font-bold rounded-full w-10 h-10 flex items-center justify-center text-sm uppercase">
                    {lead.name.split(' ').map(n => n[0]).join('').slice(0,2)}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{lead.name}</p>
                    <p className="text-xs text-gray-500">{lead.email}</p>
                    <p className="text-xs text-gray-400">{lead.project_type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={
                    lead.priority === 'high' ? 'destructive' :
                    lead.priority === 'medium' ? 'default' : 'secondary'
                  }>
                    {lead.priority}
                  </Badge>
                  <Badge variant="outline">
                    Score: {lead.lead_score}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
