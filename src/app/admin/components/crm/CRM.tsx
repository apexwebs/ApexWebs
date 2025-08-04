"use client";
// src/app/admin/components/crm/CRM.tsx
// CRM component for admin portal
// Customer relationship management and pipeline tracking

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import {
  Users,
  Building,
  DollarSign,
  Phone,
  Mail,
  Plus,
  Edit,
  Eye,
  TrendingUp
} from 'lucide-react'

interface Contact {
  id: string
  name: string
  email: string
  phone: string
  company: string
  position: string
  status: 'lead' | 'prospect' | 'customer' | 'inactive'
  value: number
  lastContact: string
  nextFollowUp?: string
  source: string
  tags: string[]
}

interface Deal {
  id: string
  title: string
  contact: string
  company: string
  value: number
  stage: 'qualification' | 'proposal' | 'negotiation' | 'closed-won' | 'closed-lost'
  probability: number
  expectedClose: string
  lastActivity: string
}

export function CRM() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [deals, setDeals] = useState<Deal[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'contacts' | 'deals' | 'pipeline'>('contacts')

  useEffect(() => {
    // Mock CRM data
    const mockContacts: Contact[] = [
      {
        id: '1',
        name: 'Sarah Johnson',
        email: 'sarah@techcorp.co.ke',
        phone: '+254 701 234 567',
        company: 'TechCorp Kenya',
        position: 'Marketing Director',
        status: 'prospect',
        value: 150000,
        lastContact: '2025-01-15',
        nextFollowUp: '2025-01-20',
        source: 'Website',
        tags: ['Enterprise', 'E-commerce']
      },
      {
        id: '2',
        name: 'David Mwangi',
        email: 'david@startupke.com',
        phone: '+254 722 345 678',
        company: 'StartupKE',
        position: 'CEO',
        status: 'customer',
        value: 85000,
        lastContact: '2025-01-10',
        source: 'Referral',
        tags: ['Startup', 'Mobile App']
      },
      {
        id: '3',
        name: 'Grace Wanjiku',
        email: 'grace@retailplus.co.ke',
        phone: '+254 733 456 789',
        company: 'RetailPlus',
        position: 'Operations Manager',
        status: 'lead',
        value: 75000,
        lastContact: '2025-01-12',
        nextFollowUp: '2025-01-18',
        source: 'Social Media',
        tags: ['Retail', 'POS System']
      }
    ]

    const mockDeals: Deal[] = [
      {
        id: '1',
        title: 'E-commerce Platform Development',
        contact: 'Sarah Johnson',
        company: 'TechCorp Kenya',
        value: 150000,
        stage: 'proposal',
        probability: 75,
        expectedClose: '2025-02-15',
        lastActivity: '2025-01-15'
      },
      {
        id: '2',
        title: 'Mobile App Development',
        contact: 'David Mwangi',
        company: 'StartupKE',
        value: 85000,
        stage: 'negotiation',
        probability: 90,
        expectedClose: '2025-01-30',
        lastActivity: '2025-01-14'
      },
      {
        id: '3',
        title: 'POS System Integration',
        contact: 'Grace Wanjiku',
        company: 'RetailPlus',
        value: 75000,
        stage: 'qualification',
        probability: 50,
        expectedClose: '2025-03-01',
        lastActivity: '2025-01-12'
      }
    ]

    setTimeout(() => {
      setContacts(mockContacts)
      setDeals(mockDeals)
      setLoading(false)
    }, 600)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'customer':
        return 'bg-green-100 text-green-800'
      case 'prospect':
        return 'bg-blue-100 text-blue-800'
      case 'lead':
        return 'bg-yellow-100 text-yellow-800'
      case 'inactive':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'closed-won':
        return 'bg-green-100 text-green-800'
      case 'negotiation':
        return 'bg-blue-100 text-blue-800'
      case 'proposal':
        return 'bg-purple-100 text-purple-800'
      case 'qualification':
        return 'bg-yellow-100 text-yellow-800'
      case 'closed-lost':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">CRM</h1>
        </div>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
        </div>
      </div>
    )
  }

  const totalValue = deals.reduce((sum, deal) => sum + deal.value, 0)
  const activeDeals = deals.filter(deal => !deal.stage.includes('closed')).length
  const conversionRate = contacts.filter(c => c.status === 'customer').length / contacts.length * 100

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">CRM</h1>
          <p className="text-gray-600 mt-1">Manage customer relationships and track your sales pipeline</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Contact
          </Button>
          <Button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700">
            <Plus className="w-4 h-4" />
            New Deal
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Contacts</p>
                <p className="text-2xl font-bold text-gray-900">{contacts.length}</p>
              </div>
              <Users className="w-8 h-8 text-teal-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Deals</p>
                <p className="text-2xl font-bold text-gray-900">{activeDeals}</p>
              </div>
              <Building className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pipeline Value</p>
                <p className="text-2xl font-bold text-gray-900">KSh {totalValue.toLocaleString()}</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Conversion Rate</p>
                <p className="text-2xl font-bold text-gray-900">{conversionRate.toFixed(1)}%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('contacts')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'contacts'
                ? 'border-teal-500 text-teal-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Contacts
          </button>
          <button
            onClick={() => setActiveTab('deals')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'deals'
                ? 'border-teal-500 text-teal-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Deals
          </button>
          <button
            onClick={() => setActiveTab('pipeline')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'pipeline'
                ? 'border-teal-500 text-teal-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Pipeline
          </button>
        </nav>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'contacts' && (
        <Card>
          <CardHeader>
            <CardTitle>Contacts</CardTitle>
            <CardDescription>Manage your customer and prospect database</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Last Contact</TableHead>
                  <TableHead>Next Follow-up</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts.map((contact) => (
                  <TableRow key={contact.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{contact.name}</p>
                        <p className="text-sm text-gray-500">{contact.position}</p>
                      </div>
                    </TableCell>
                    <TableCell>{contact.company}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(contact.status)}>
                        {contact.status}
                      </Badge>
                    </TableCell>
                    <TableCell>KSh {contact.value.toLocaleString()}</TableCell>
                    <TableCell>{contact.lastContact}</TableCell>
                    <TableCell>{contact.nextFollowUp || '-'}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Phone className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Mail className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {activeTab === 'deals' && (
        <Card>
          <CardHeader>
            <CardTitle>Active Deals</CardTitle>
            <CardDescription>Track your sales opportunities and progress</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Deal</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Stage</TableHead>
                  <TableHead>Probability</TableHead>
                  <TableHead>Expected Close</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {deals.map((deal) => (
                  <TableRow key={deal.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{deal.title}</p>
                        <p className="text-sm text-gray-500">{deal.company}</p>
                      </div>
                    </TableCell>
                    <TableCell>{deal.contact}</TableCell>
                    <TableCell>KSh {deal.value.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge className={getStageColor(deal.stage)}>
                        {deal.stage.replace('-', ' ')}
                      </Badge>
                    </TableCell>
                    <TableCell>{deal.probability}%</TableCell>
                    <TableCell>{deal.expectedClose}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {activeTab === 'pipeline' && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {['qualification', 'proposal', 'negotiation', 'closed-won', 'closed-lost'].map((stage) => (
            <Card key={stage}>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium capitalize">
                  {stage.replace('-', ' ')}
                </CardTitle>
                <CardDescription className="text-xs">
                  {deals.filter(deal => deal.stage === stage).length} deals
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {deals
                    .filter(deal => deal.stage === stage)
                    .map((deal) => (
                      <div key={deal.id} className="p-3 bg-gray-50 rounded-lg">
                        <p className="font-medium text-sm">{deal.title}</p>
                        <p className="text-xs text-gray-500 mb-1">{deal.company}</p>
                        <p className="text-sm font-medium text-teal-600">
                          KSh {deal.value.toLocaleString()}
                        </p>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
