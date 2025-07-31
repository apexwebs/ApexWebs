Apex Webs Admin Portal - Complete Implementation Guide
Version: 1.0
 Created: July 2025
 Platform: Vercel → GCP Migration Ready
 Timeline: 12 weeks (3 phases)

Table of Contents
Executive Summary
Technical Architecture
Phase 1: MVP Admin Portal (Weeks 1-4)
Phase 2: CRM Integration (Weeks 5-8)
Phase 3: AI Integration (Weeks 9-12)
Database Schema & Setup
Security Implementation
Migration Readiness
Testing Strategy
Deployment Guide
Cost Analysis
Maintenance & Monitoring

Additional Recommendations

Additional Recommendations
--------------------------------
To further strengthen the Apex Webs Admin Portal, consider the following enhancements:

1. Role-Based Access Control (RBAC):
   - Define and enforce granular user roles (e.g., super admin, sales, support, read-only) for different portal sections and actions.

2. Audit Logging & Compliance:
   - Ensure all sensitive actions (login, data export, permission changes) are logged for compliance and security audits.

3. Backup & Disaster Recovery:
   - Implement regular database and file backup strategies, and document recovery procedures for data loss or migration failure.

4. API Rate Limiting & Abuse Protection:
   - Add rate limiting and monitoring to API endpoints to prevent abuse, especially for public-facing or sensitive admin APIs.

5. Error Tracking & Monitoring:
   - Integrate tools like Sentry or LogRocket for real-time error tracking and user session replay, plus uptime monitoring for critical services.

6. Documentation & Onboarding:
   - Maintain up-to-date developer and admin user documentation, including setup, deployment, and troubleshooting guides.

7. Accessibility (a11y):
   - Ensure UI components meet accessibility standards (WCAG), including keyboard navigation and screen reader support.

8. Data Privacy & GDPR:
   - Document and implement data privacy policies, consent management, and data deletion/export features if handling user/client data.

9. Notification System:
   - Add in-app or email notifications for key events (new lead, status change, failed integration, etc.).

10. API Versioning:
    - Plan for API versioning to avoid breaking changes for clients or integrations as the platform evolves.

Executive Summary
Project Overview
The Apex Webs Admin Portal is a comprehensive management system that integrates:
Lead Management System with automated scoring
CRM functionality for client relationship tracking
AI-powered insights for business intelligence
Content management for website updates
Analytics dashboard for performance monitoring
Success Metrics
Lead Response Time: < 1 hour during business hours
Data Processing: Real-time lead scoring and qualification
User Experience: Sub-3-second page load times
Conversion Tracking: 15-25% improvement in lead conversion
Operational Efficiency: 20+ hours/week time savings
Technology Stack
Frontend: Next.js 14, React 18, Tailwind CSS, shadcn/ui
Backend: Next.js API Routes, NextAuth.js
Database: Vercel Postgres (Phase 1) → GCP Cloud SQL (Phase 2)
Cache: Vercel KV (Phase 1) → GCP Memorystore (Phase 2)
AI: OpenAI API with custom agents
Analytics: Google Analytics 4, custom dashboards
Email: Resend API with automated workflows

Technical Architecture
System Architecture Diagram
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Admin Panel   │    │   Main Website  │    │   AI Services   │
│   (Protected)   │    │  (apexwebs.co.ke)│   │   (OpenAI API)  │
└─────┬───────────┘    └─────┬───────────┘    └─────┬───────────┘
      │                      │                      │
      └──────────┬───────────┴──────────────────────┘
                 │
    ┌────────────▼─────────────┐
    │     Shared Database      │
    │   (Postgres + Redis)     │
    └──────────────────────────┘

Core Components Structure
/admin-portal/
├── /components/
│   ├── /dashboard/
│   ├── /leads/
│   ├── /crm/
│   ├── /analytics/
│   ├── /content/
│   └── /ai/
├── /lib/
│   ├── /database/
│   ├── /ai/
│   ├── /email/
│   └── /analytics/
├── /pages/api/admin/
└── /middleware/

Database Architecture
-- Core Tables Relationship
Users (Admin) → Sessions → Audit_Logs
     ↓
Leads → Interactions → Projects → Invoices
     ↓
Analytics → AI_Insights → Reports


Phase 1: MVP Admin Portal (Weeks 1-4)
Week 1: Foundation Setup
1.1 Project Initialization
# Create admin portal directory structure
npx create-next-app@latest apex-admin --typescript --tailwind --eslint --app
cd apex-admin

# Install core dependencies
npm install @next-auth/prisma-adapter prisma @prisma/client
npm install @radix-ui/react-* lucide-react class-variance-authority
npm install recharts date-fns react-hook-form @hookform/resolvers zod
npm install @vercel/postgres @vercel/kv

# Install shadcn/ui
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input label table badge
npx shadcn-ui@latest add dialog dropdown-menu select textarea

1.2 Environment Configuration
# .env.local
NEXTAUTH_URL=https://admin.apexwebs.co.ke
NEXTAUTH_SECRET=your-secret-key-here

# Database
POSTGRES_URL=your-vercel-postgres-url
POSTGRES_PRISMA_URL=your-prisma-url
POSTGRES_URL_NON_POOLING=your-non-pooling-url

# Redis Cache
KV_URL=your-vercel-kv-url
KV_REST_API_URL=your-kv-rest-url
KV_REST_API_TOKEN=your-kv-token

# Email
RESEND_API_KEY=your-resend-key

# Analytics
GOOGLE_ANALYTICS_ID=your-ga4-id

# OpenAI (Phase 3)
OPENAI_API_KEY=your-openai-key

1.3 Authentication Setup
// lib/auth.ts
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { sql } from '@vercel/postgres'
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        
        const { rows } = await sql`
          SELECT * FROM admin_users 
          WHERE email = ${credentials.email}
        `
        
        if (rows.length === 0) return null
        
        const user = rows[0]
        const isValid = await bcrypt.compare(credentials.password, user.password)
        
        if (!isValid) return null
        
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role
        }
      }
    })
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      session.user.role = token.role
      return session
    }
  }
}

Week 2: Database Schema & API Routes
2.1 Database Schema Implementation
-- Execute in Vercel Postgres console

-- Admin Users Table
CREATE TABLE admin_users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Leads Table (Enhanced from main site)
CREATE TABLE leads (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  company VARCHAR(255),
  project_type VARCHAR(100) NOT NULL,
  budget_range VARCHAR(50),
  timeline VARCHAR(50),
  message TEXT NOT NULL,
  lead_score INTEGER DEFAULT 0,
  status VARCHAR(50) DEFAULT 'new',
  source VARCHAR(100) DEFAULT 'website',
  assigned_to INTEGER REFERENCES admin_users(id),
  priority VARCHAR(20) DEFAULT 'medium',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Interactions Table
CREATE TABLE interactions (
  id SERIAL PRIMARY KEY,
  lead_id INTEGER REFERENCES leads(id) ON DELETE CASCADE,
  type VARCHAR(50) NOT NULL, -- email, call, meeting, note
  subject VARCHAR(255),
  content TEXT NOT NULL,
  scheduled_at TIMESTAMP,
  completed_at TIMESTAMP,
  created_by INTEGER REFERENCES admin_users(id),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Analytics Table
CREATE TABLE analytics_events (
  id SERIAL PRIMARY KEY,
  event_type VARCHAR(100) NOT NULL,
  event_data JSONB,
  page_url VARCHAR(500),
  user_agent TEXT,
  ip_address INET,
  session_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX idx_interactions_lead_id ON interactions(lead_id);
CREATE INDEX idx_analytics_events_type ON analytics_events(event_type);
CREATE INDEX idx_analytics_events_created_at ON analytics_events(created_at DESC);

2.2 Database Service Layer
// lib/database/leads.ts
import { sql } from '@vercel/postgres'

export interface Lead {
  id: number
  name: string
  email: string
  phone?: string
  company?: string
  project_type: string
  budget_range?: string
  timeline?: string
  message: string
  lead_score: number
  status: string
  source: string
  assigned_to?: number
  priority: string
  created_at: Date
  updated_at: Date
}

export class LeadService {
  static async getAll(filters?: {
    status?: string
    priority?: string
    assigned_to?: number
    dateFrom?: Date
    dateTo?: Date
  }): Promise<Lead[]> {
    let query = `SELECT * FROM leads WHERE 1=1`
    const params = []
    
    if (filters?.status) {
      query += ` AND status = $${params.length + 1}`
      params.push(filters.status)
    }
    
    if (filters?.priority) {
      query += ` AND priority = $${params.length + 1}`
      params.push(filters.priority)
    }
    
    if (filters?.assigned_to) {
      query += ` AND assigned_to = $${params.length + 1}`
      params.push(filters.assigned_to)
    }
    
    if (filters?.dateFrom) {
      query += ` AND created_at >= $${params.length + 1}`
      params.push(filters.dateFrom)
    }
    
    if (filters?.dateTo) {
      query += ` AND created_at <= $${params.length + 1}`
      params.push(filters.dateTo)
    }
    
    query += ` ORDER BY created_at DESC`
    
    const { rows } = await sql.query(query, params)
    return rows as Lead[]
  }

  static async getById(id: number): Promise<Lead | null> {
    const { rows } = await sql`SELECT * FROM leads WHERE id = ${id}`
    return rows[0] as Lead || null
  }

  static async updateStatus(id: number, status: string, userId: number): Promise<void> {
    await sql`
      UPDATE leads 
      SET status = ${status}, 
          updated_at = NOW(),
          assigned_to = ${userId}
      WHERE id = ${id}
    `
    
    // Log the status change
    await sql`
      INSERT INTO interactions (lead_id, type, content, created_by)
      VALUES (${id}, 'status_change', ${`Status changed to ${status}`}, ${userId})
    `
  }

  static async calculateLeadScore(leadData: Partial<Lead>): Promise<number> {
    let score = 0
    
    // Budget scoring
    if (leadData.budget_range === '500k+') score += 25
    else if (leadData.budget_range === '200k-500k') score += 20
    else if (leadData.budget_range === '50k-200k') score += 15
    else if (leadData.budget_range === '<50k') score += 10
    
    // Timeline scoring
    if (leadData.timeline === 'urgent') score += 20
    else if (leadData.timeline === '1-month') score += 15
    else if (leadData.timeline === '2-3-months') score += 10
    else if (leadData.timeline === 'flexible') score += 5
    
    // Project type scoring
    if (leadData.project_type === 'custom-web-app') score += 20
    else if (leadData.project_type === 'api-integration') score += 15
    else if (leadData.project_type === 'website') score += 10
    
    // Company presence scoring
    if (leadData.company) score += 10
    
    // Message quality scoring (simple length check)
    if (leadData.message && leadData.message.length > 100) score += 10
    else if (leadData.message && leadData.message.length > 50) score += 5
    
    return Math.min(score, 100) // Cap at 100
  }

  static async updateLeadScore(id: number): Promise<void> {
    const lead = await this.getById(id)
    if (!lead) return
    
    const newScore = await this.calculateLeadScore(lead)
    
    await sql`
      UPDATE leads 
      SET lead_score = ${newScore}, updated_at = NOW()
      WHERE id = ${id}
    `
  }
}

Week 3: Core Dashboard Components
3.1 Dashboard Layout
// components/layout/AdminLayout.tsx
import { useSession } from 'next-auth/react'
import { Sidebar } from './Sidebar'
import { Header } from './Header'

interface AdminLayoutProps {
  children: React.ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  }

  if (!session) {
    return <div>Access Denied</div>
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

3.2 Sidebar Navigation
// components/layout/Sidebar.tsx
import Link from 'next/link'
import { useRouter } from 'next/router'
import { 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  BarChart3, 
  Settings,
  FileText,
  Bot
} from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Leads', href: '/admin/leads', icon: Users },
  { name: 'CRM', href: '/admin/crm', icon: MessageSquare },
  { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  { name: 'Content', href: '/admin/content', icon: FileText },
  { name: 'AI Assistant', href: '/admin/ai', icon: Bot },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
]

export function Sidebar() {
  const router = useRouter()

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6 border-b">
        <h1 className="text-xl font-bold text-gray-900">Apex Webs Admin</h1>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const isActive = router.pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

3.3 Dashboard Overview
// components/dashboard/DashboardOverview.tsx
import { useEffect, useState } from 'react'
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
  const [recentLeads, setRecentLeads] = useState([])
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
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Leads */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Leads</CardTitle>
          <CardDescription>Latest leads that need attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentLeads.map((lead: any) => (
              <div key={lead.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <p className="font-medium">{lead.name}</p>
                  <p className="text-sm text-gray-500">{lead.email}</p>
                  <p className="text-sm">{lead.project_type}</p>
                </div>
                <div className="flex items-center space-x-2">
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

Week 4: Lead Management System
4.1 Leads Table Component
// components/leads/LeadsTable.tsx
import { useState, useEffect } from 'react'
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Eye, MessageSquare, Phone, Mail } from 'lucide-react'

interface Lead {
  id: number
  name: string
  email: string
  phone?: string
  company?: string
  project_type: string
  budget_range?: string
  lead_score: number
  status: string
  priority: string
  created_at: string
}

export function LeadsTable() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all'
  })

  useEffect(() => {
    fetchLeads()
  }, [filters])

  const fetchLeads = async () => {
    try {
      const params = new URLSearchParams()
      if (filters.status !== 'all') params.set('status', filters.status)
      if (filters.priority !== 'all') params.set('priority', filters.priority)
      
      const response = await fetch(`/api/admin/leads?${params}`)
      const data = await response.json()
      setLeads(data)
    } catch (error) {
      console.error('Failed to fetch leads:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateLeadStatus = async (leadId: number, newStatus: string) => {
    try {
      const response = await fetch(`/api/admin/leads/${leadId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      })
      
      if (response.ok) {
        fetchLeads() // Refresh the table
      }
    } catch (error) {
      console.error('Failed to update lead status:', error)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800'
      case 'contacted': return 'bg-yellow-100 text-yellow-800'
      case 'qualified': return 'bg-green-100 text-green-800'
      case 'converted': return 'bg-purple-100 text-purple-800'
      case 'lost': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return <div>Loading leads...</div>
  }

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex space-x-4">
        <Select value={filters.status} onValueChange={(value) => 
          setFilters(prev => ({ ...prev, status: value }))}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="contacted">Contacted</SelectItem>
            <SelectItem value="qualified">Qualified</SelectItem>
            <SelectItem value="converted">Converted</SelectItem>
            <SelectItem value="lost">Lost</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.priority} onValueChange={(value) => 
          setFilters(prev => ({ ...prev, priority: value }))}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Priority</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Leads Table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell className="font-medium">
                  <div>
                    <p>{lead.name}</p>
                    {lead.company && (
                      <p className="text-sm text-gray-500">{lead.company}</p>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <p className="text-sm">{lead.email}</p>
                    {lead.phone && (
                      <p className="text-sm text-gray-500">{lead.phone}</p>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p className="capitalize">{lead.project_type.replace('-', ' ')}</p>
                    {lead.budget_range && (
                      <p className="text-sm text-gray-500">{lead.budget_range}</p>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="font-mono">
                    {lead.lead_score}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Select
                    value={lead.status}
                    onValueChange={(value) => updateLeadStatus(lead.id, value)}
                  >
                    <SelectTrigger className="w-32">
                      <Badge className={getStatusColor(lead.status)}>
                        {lead.status}
                      </Badge>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="contacted">Contacted</SelectItem>
                      <SelectItem value="qualified">Qualified</SelectItem>
                      <SelectItem value="converted">Converted</SelectItem>
                      <SelectItem value="lost">Lost</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Badge className={getPriorityColor(lead.priority)}>
                    {lead.priority}
                  </Badge>
                </TableCell>
                <TableCell>
                  {new Date(lead.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}


Phase 2: CRM Integration (Weeks 5-8)
Week 5: Interaction Tracking System
5.1 Interaction Management
// components/crm/InteractionManager.tsx
import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Calendar as CalendarIcon, 
  Plus,
  Clock,
  CheckCircle
} from 'lucide-react'

interface Interaction {
  id: number
  lead_id: number
  type: 'email' | 'call' | 'meeting' | 'note'
  subject?: string
  content: string
  scheduled_at?: string
  completed_at?: string
  created_by: number
  created_at: string
  creator_name?: string
}

interface InteractionManagerProps {
  leadId: number
  leadName: string
}

export function InteractionManager({ leadId, leadName }: InteractionManagerProps) {
  const [interactions, setInteractions] = useState<Interaction[]>([])
  const [showAddForm, setShowAddForm] = useState(false)
  const [loading, setLoading] = useState(true)
  const [newInteraction, setNewInteraction] = useState({
    type: 'note' as const,
    subject: '',
    content: '',
    scheduled_at: null as Date | null
  })

  useEffect(() => {
    fetchInteractions()
  }, [leadId])

  const fetchInteractions = async () => {
    try {
      const response = await fetch(`/api/admin/leads/${leadId}/interactions`)
      const data = await response.json()
      setInteractions(data)
    } catch (error) {
      console.error('Failed to fetch interactions:', error)
    } finally {
      setLoading(false)
    }
  }

  const addInteraction = async () => {
    try {
      const response = await fetch(`/api/admin/leads/${leadId}/interactions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newInteraction)
      })

      if (response.ok) {
        setNewInteraction({ type: 'note', subject: '', content: '', scheduled_at: null })
        setShowAddForm(false)
        fetchInteractions()
      }
    } catch (error) {
      console.error('Failed to add interaction:', error)
    }
  }

  const markCompleted = async (interactionId: number) => {
    try {
      const response = await fetch(`/api/admin/interactions/${interactionId}/complete`, {
        method: 'PATCH'
      })

      if (response.ok) {
        fetchInteractions()
      }
    } catch (error) {
      console.error('Failed to mark interaction as completed:', error)
    }
  }

  const getInteractionIcon = (type: string) => {
    switch (type) {
      case 'email': return <Mail className="h-4 w-4" />
      case 'call': return <Phone className="h-4 w-4" />
      case 'meeting': return <CalendarIcon className="h-4 w-4" />
      default: return <MessageSquare className="h-4 w-4" />
    }
  }

  const getInteractionColor = (type: string) => {
    switch (type) {
      case 'email': return 'bg-blue-100 text-blue-800'
      case 'call': return 'bg-green-100 text-green-800'
      case 'meeting': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Interactions - {leadName}</CardTitle>
            <CardDescription>Track all communications and activities</CardDescription>
          </div>
          <Button onClick={() => setShowAddForm(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Interaction
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Add Interaction Form */}
        {showAddForm && (
          <Card className="border-2 border-dashed">
            <CardHeader>
              <CardTitle className="text-lg">New Interaction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Type</label>
                  <Select
                    value={newInteraction.type}
                    onValueChange={(value: any) => 
                      setNewInteraction(prev => ({ ...prev, type: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="call">Phone Call</SelectItem>
                      <SelectItem value="meeting">Meeting</SelectItem>
                      <SelectItem value="note">Note</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium">Subject</label>
                  <Input
                    value={newInteraction.subject}
                    onChange={(e) => setNewInteraction(prev => ({ 
                      ...prev, subject: e.target.value 
                    }))}
                    placeholder="Brief subject or title"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Content</label>
                <Textarea
                  value={newInteraction.content}
                  onChange={(e) => setNewInteraction(prev => ({ 
                    ...prev, content: e.target.value 
                  }))}
                  placeholder="Detailed description of the interaction..."
                  rows={4}
                />
              </div>

              {(newInteraction.type === 'meeting' || newInteraction.type === 'call') && (
                <div>
                  <label className="text-sm font-medium">Schedule Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {newInteraction.scheduled_at 
                          ? newInteraction.scheduled_at.toDateString()
                          : "Pick a date"
                        }
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={newInteraction.scheduled_at}
                        onSelect={(date) => setNewInteraction(prev => ({ 
                          ...prev, scheduled_at: date 
                        }))}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              )}

              <div className="flex space-x-2">
                <Button onClick={addInteraction}>
                  Save Interaction
                </Button>
                <Button variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Interactions Timeline */}
        <div className="space-y-4">
          {loading ? (
            <div>Loading interactions...</div>
          ) : interactions.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No interactions yet. Add one to get started!
            </div>
          ) : (
            interactions.map((interaction) => (
              <div key={interaction.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="mt-1">
                      {getInteractionIcon(interaction.type)}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Badge className={getInteractionColor(interaction.type)}>
                          {interaction.type}
                        </Badge>
                        {interaction.subject && (
                          <span className="font-medium">{interaction.subject}</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{interaction.content}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>By {interaction.creator_name || 'Unknown'}</span>
                        <span>{new Date(interaction.created_at).toLocaleString()}</span>
                        {interaction.scheduled_at && (
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            Scheduled: {new Date(interaction.scheduled_at).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  {interaction.scheduled_at && !interaction.completed_at && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => markCompleted(interaction.id)}
                    >
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Mark Complete
                    </Button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}

Week 6: Email Automation System
6.1 Email Template Management
// lib/email/templates.ts
export interface EmailTemplate {
  id: string
  name: string
  subject: string
  content: string
  variables: string[]
}

export const emailTemplates: EmailTemplate[] = [
  {
    id: 'welcome',
    name: 'Welcome & Initial Response',
    subject: 'Thank you for your inquiry - Apex Webs',
    content: `
Hi {{name}},

Thank you for reaching out to Apex Webs! We've received your inquiry about {{project_type}} and are excited to help bring your vision to life.

**Your Inquiry Details:**
- Project Type: {{project_type}}
- Budget Range: {{budget_range}}
- Timeline: {{timeline}}
- Company: {{company}}

We understand that {{project_description}} is important to your business, and we're committed to delivering exceptional results that exceed your expectations.

**Next Steps:**
1. Our team will review your requirements within 24 hours
2. We'll schedule a discovery call to better understand your needs
3. We'll provide a detailed proposal with timeline and pricing

**Why Choose Apex Webs:**
- Local expertise with global standards
- Transparent communication and pricing
- Proven track record with Kenyan businesses
- Ongoing support and maintenance

We'll be in touch within 24 hours to schedule your discovery call. In the meantime, feel free to check out our recent work at apexwebs.co.ke/portfolio.

Best regards,
The Apex Webs Team

---
Pamoja Tunaweza - Together We Can
`,
    variables: ['name', 'project_type', 'budget_range', 'timeline', 'company', 'project_description']
  },
  {
    id: 'follow_up',
    name: 'Follow-up Reminder',
    subject: 'Following up on your {{project_type}} project - Apex Webs',
    content: `
Hi {{name}},

I hope this email finds you well. I wanted to follow up on our previous conversation about your {{project_type}} project.

We're still very interested in working with {{company}} and believe we can deliver exceptional results for your business.

**Quick Recap:**
- Project: {{project_type}}
- Discussed: {{last_interaction_date}}
- Budget: {{budget_range}}

If you have any questions or would like to move forward, I'm here to help. We can schedule a quick 15-minute call to address any concerns and discuss next steps.

Best regards,
{{sender_name}}
`,
    variables: ['name', 'project_type', 'company', 'budget_range', 'last_interaction_date', 'sender_name']
  },
  {
    id: 'proposal',
    name: 'Proposal Delivery',
    subject: 'Your Custom Proposal - {{project_type}} Solution',
    content: `
Hi {{name}},

Attached you'll find our detailed proposal for your {{project_type}} project. We've carefully reviewed your requirements and created a solution that aligns with your goals and budget.

**Proposal Highlights:**
- Custom solution designed for {{company}}
- Timeline: {{proposed_timeline}}
- Investment: {{proposed_budget}}
- Includes: {{included_features}}

**Next Steps:**
1. Review the attached proposal
2. Schedule a call to discuss any questions
3. We can start as early as {{start_date}}

We're confident this solution will drive real results for your business. Let's schedule a call this week to discuss the details and answer any questions.

Best regards,
{{sender_name}}
`,
    variables: ['name', 'project_type', 'company', 'proposed_timeline', 'proposed_budget', 'included_features', 'start_date', 'sender_name']
  }
]

// lib/email/automation.ts
import { Resend } from 'resend'
import { LeadService } from '@/lib/database/leads'

const resend = new Resend(process.env.RESEND_API_KEY)

export class EmailAutomation {
  static async sendTemplateEmail(
    leadId: number, 
    templateId: string, 
    customVariables?: Record<string, string>
  ) {
    const lead = await LeadService.getById(leadId)
    if (!lead) throw new Error('Lead not found')

    const template = emailTemplates.find(t => t.id === templateId)
    if (!template) throw new Error('Template not found')

    // Prepare variables
    const variables = {
      name: lead.name,
      email: lead.email,
      company: lead.company || 'your company',
      project_type: lead.project_type.replace('-', ' '),
      budget_range: lead.budget_range || 'not specified',
      timeline: lead.timeline || 'flexible',
      project_description: lead.message,
      sender_name: 'Alex from Apex Webs',
      ...customVariables
    }

    // Replace variables in template
    let subject = template.subject
    let content = template.content

    Object.entries(variables).forEach(([key, value]) => {
      const regex = new RegExp(`{{${key}}}`, 'g')
      subject = subject.replace(regex, value)
      content = content.replace(regex, value)
    })

    // Send email
    const emailResult = await resend.emails.send({
      from: 'Apex Webs <hello@apexwebs.co.ke>',
      to: [lead.email],
      subject,
      text: content,
      html: content.replace(/\n/g, '<br>'),
    })

    // Log interaction
    await fetch('/api/admin/leads/${leadId}/interactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'email',
        subject,
        content: `Email sent using template: ${template.name}\n\n${content}`
      })
    })

    return emailResult
  }

  static async scheduleFollowUp(leadId: number, days: number) {
    // This would integrate with a job queue system
    // For now, we'll store it as a scheduled interaction
    const followUpDate = new Date()
    followUpDate.setDate(followUpDate.getDate() + days)

    await fetch(`/api/admin/leads/${leadId}/interactions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'email',
        subject: 'Follow-up scheduled',
        content: `Follow-up email scheduled for ${followUpDate.toDateString()}`,
        scheduled_at: followUpDate.toISOString()
      })
    })
  }
}

6.2 Email Campaign Manager
// components/crm/EmailCampaignManager.tsx
import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Mail, Send, Clock, Users } from 'lucide-react'
import { emailTemplates } from '@/lib/email/templates'

export function EmailCampaignManager() {
  const [selectedLeads, setSelectedLeads] = useState<number[]>([])
  const [selectedTemplate, setSelectedTemplate] = useState('')
  const [customVariables, setCustomVariables] = useState<Record<string, string>>({})
  const [previewContent, setPreviewContent] = useState('')
  const [sending, setSending] = useState(false)

  const sendBulkEmails = async () => {
    if (selectedLeads.length === 0 || !selectedTemplate) return

    setSending(true)
    try {
      const promises = selectedLeads.map(leadId => 
        fetch('/api/admin/email/send-template', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            leadId,
            templateId: selectedTemplate,
            customVariables
          })
        })
      )

      await Promise.all(promises)
      alert(`Successfully sent emails to ${selectedLeads.length} leads`)
      setSelectedLeads([])
    } catch (error) {
      console.error('Failed to send bulk emails:', error)
      alert('Failed to send some emails')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Mail className="h-5 w-5 mr-2" />
            Email Campaign Manager
          </CardTitle>
          <CardDescription>
            Send targeted emails to leads based on their status and requirements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Lead Selection */}
          <div>
            <h3 className="font-medium mb-3">Select Recipients</h3>
            <LeadSelector 
              selectedLeads={selectedLeads}
              onSelectionChange={setSelectedLeads}
            />
          </div>

          {/* Template Selection */}
          <div>
            <h3 className="font-medium mb-3">Email Template</h3>
            <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
              <SelectTrigger>
                <SelectValue placeholder="Choose an email template" />
              </SelectTrigger>
              <SelectContent>
                {emailTemplates.map(template => (
                  <SelectItem key={template.id} value={template.id}>
                    {template.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Custom Variables */}
          {selectedTemplate && (
            <div>
              <h3 className="font-medium mb-3">Customize Variables</h3>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Sender Name"
                  value={customVariables.sender_name || ''}
                  onChange={(e) => setCustomVariables(prev => ({
                    ...prev, sender_name: e.target.value
                  }))}
                />
                <Input
                  placeholder="Start Date"
                  value={customVariables.start_date || ''}
                  onChange={(e) => setCustomVariables(prev => ({
                    ...prev, start_date: e.target.value
                  }))}
                />
              </div>
            </div>
          )}

          {/* Send Button */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={sendBulkEmails}
              disabled={selectedLeads.length === 0 || !selectedTemplate || sending}
              className="flex items-center"
            >
              <Send className="h-4 w-4 mr-2" />
              {sending ? 'Sending...' : `Send to ${selectedLeads.length} leads`}
            </Button>
            <Badge variant="outline">
              <Users className="h-3 w-3 mr-1" />
              {selectedLeads.length} selected
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Campaign History */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <EmailCampaignHistory />
        </CardContent>
      </Card>
    </div>
  )
}

Week 7: Advanced Analytics & Reporting
7.1 Analytics Dashboard
// components/analytics/AnalyticsDashboard.tsx
import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts'

interface AnalyticsData {
  leads: {
    total: number
    byMonth: Array<{ month: string; count: number }>
    bySource: Array<{ source: string; count: number }>
    byStatus: Array<{ status: string; count: number }>
    conversionFunnel: Array<{ stage: string; count: number; rate: number }>
  }
  performance: {
    avgResponseTime: number
    conversionRate: number
    leadQualityScore: number
    revenueGenerated: number
  }
  website: {
    visitors: number
    pageViews: number
    bounceRate: number
    avgSessionDuration: number
  }
}

export function AnalyticsDashboard() {
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [timeRange, setTimeRange] = useState('30d')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAnalytics()
  }, [timeRange])

  const fetchAnalytics = async () => {
    try {
      const response = await fetch(`/api/admin/analytics?range=${timeRange}`)
      const analyticsData = await response.json()
      setData(analyticsData)
    } catch (error) {
      console.error('Failed to fetch analytics:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div>Loading analytics...</div>
  }

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.leads.total || 0}</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.performance.conversionRate || 0}%</div>
            <p className="text-xs text-muted-foreground">
              +2.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.performance.avgResponseTime || 0}h</div>
            <p className="text-xs text-muted-foreground">
              -0.5h from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue Generated</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              KES {data?.performance.revenueGenerated?.toLocaleString() || 0}
            </div>
            <p className="text-xs text-muted-foreground">
              +15% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Leads Over Time */}
        <Card>
          <CardHeader>
            <CardTitle>Leads Over Time</CardTitle>
            <CardDescription>Monthly lead generation trends</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data?.leads.byMonth || []}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="count" 
                  stroke="#8884d8" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Lead Sources */}
        <Card>
          <CardHeader>
            <CardTitle>Lead Sources</CardTitle>
            <CardDescription>Where your leads are coming from</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data?.leads.bySource || []}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {(data?.leads.bySource || []).map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Lead Status Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Lead Status Distribution</CardTitle>
            <CardDescription>Current status of all leads</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data?.leads.byStatus || []}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="status" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Conversion Funnel */}
        <Card>
          <CardHeader>
            <CardTitle>Conversion Funnel</CardTitle>
            <CardDescription>Lead progression through sales stages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {(data?.leads.conversionFunnel || []).map((stage, index) => (
                <div key={stage.stage} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center">
                      {index + 1}
                    </div>
                    <span className="font-medium">{stage.stage}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">{stage.count} leads</span>
                    <span className="text-sm font-medium">{stage.rate}%</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all"
                        style={{ width: `${stage.rate}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

Week 8: Project Management Integration
8.1 Project Tracking System
// components/projects/ProjectManager.tsx
import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/


