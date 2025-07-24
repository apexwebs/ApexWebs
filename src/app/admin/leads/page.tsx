'use client'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { RefreshCw, User, Mail, Phone, Building, FileText, Calendar } from 'lucide-react'

interface Lead {
  id: string
  name: string
  email: string
  phone: string
  company?: string
  projectDetails?: string
  timestamp: string
  source?: string
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string|null>(null)

  const fetchLeads = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/leads')
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
      const data = await res.json()
      if (!data.success) throw new Error(data.error || 'Failed to fetch leads')
      setLeads(data.leads || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
      console.error('Fetch error:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchLeads() }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-KE', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) return (
    <div className="flex items-center justify-center h-screen">
      <RefreshCw className="animate-spin mr-2 h-6 w-6" />
      <span>Loading leads...</span>
    </div>
  )

  if (error) return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <div className="text-red-500 mb-4 text-center">
        <p className="font-bold">Error loading leads:</p>
        <p>{error}</p>
      </div>
      <Button onClick={fetchLeads}>
        <RefreshCw className="mr-2 h-4 w-4" />
        Try Again
      </Button>
    </div>
  )

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Leads Dashboard</h1>
        <div className="flex gap-2">
          <Button onClick={fetchLeads}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
        </div>
      </div>

      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium">Total Leads</h3>
              <p className="text-2xl font-bold mt-2">{leads.length}</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-medium">Today's Leads</h3>
              <p className="text-2xl font-bold mt-2">
                {leads.filter(lead => {
                  const today = new Date().toDateString()
                  return new Date(lead.timestamp).toDateString() === today
                }).length}
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-medium">This Week</h3>
              <p className="text-2xl font-bold mt-2">
                {leads.filter(lead => {
                  const weekAgo = new Date()
                  weekAgo.setDate(weekAgo.getDate() - 7)
                  return new Date(lead.timestamp) >= weekAgo
                }).length}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {leads.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <User className="mx-auto h-12 w-12 mb-4 text-gray-400" />
            <h3 className="text-lg font-medium">No leads found</h3>
            <p className="text-gray-500">Submit a lead through the contact form to see data here</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {leads.map((lead) => (
            <Card key={lead.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      {lead.name}
                    </CardTitle>
                    <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(lead.timestamp)}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span>{lead.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span>{lead.phone}</span>
                  </div>
                  {lead.company && (
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-gray-500" />
                      <span>{lead.company}</span>
                    </div>
                  )}
                </div>
                {lead.projectDetails && (
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <FileText className="h-4 w-4 text-gray-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-1">Project Details:</p>
                        <p className="text-sm text-gray-600">{lead.projectDetails}</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}