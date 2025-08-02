"use client";
// src/app/admin/components/dashboard/MockupDashboard.tsx
// Dashboard that exactly matches the provided mockup

import { useState } from 'react'
import {
  TrendingUp,
  Target,
  Phone,
  Mail,
  MoreHorizontal,
  RefreshCw
} from 'lucide-react'

interface Lead {
  id: string
  name: string
  email: string
  company: string
  projectType: string
  budget: string
  priority: 'High' | 'Medium' | 'Low'
  status: 'New' | 'Contacted' | 'Qualified'
}

export function MockupDashboard() {
  const [leads] = useState<Lead[]>([
    {
      id: '1',
      name: 'Jane Muthoni',
      email: 'jane@kaumischool.edu',
      company: 'Kaumi School',
      projectType: 'School Management System',
      budget: 'KES 200k-500k',
      priority: 'High',
      status: 'New'
    },
    {
      id: '2',
      name: 'Samuel Maina',
      email: 'samuel@nairobisolutions.co.ke',
      company: 'Nairobi Solutions',
      projectType: 'Custom Web Application',
      budget: 'KES 500k+',
      priority: 'Medium',
      status: 'Contacted'
    },
    {
      id: '3',
      name: 'Peter Kariuki',
      email: 'peter@techstartup.co.ke',
      company: 'Tech Startup',
      projectType: 'API Integration',
      budget: 'KES 50k-200k',
      priority: 'Low',
      status: 'New'
    },
    {
      id: '4',
      name: 'Mary Njoroge',
      email: 'mary@retailgroup.co.ke',
      company: 'Retail Group',
      projectType: 'E-commerce Website',
      budget: 'KES 200k-500k',
      priority: 'High',
      status: 'Qualified'
    }
  ])

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-700'
      case 'Medium': return 'bg-yellow-100 text-yellow-700'
      case 'Low': return 'bg-green-100 text-green-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return 'bg-blue-100 text-blue-700'
      case 'Contacted': return 'bg-purple-100 text-purple-700'
      case 'Qualified': return 'bg-green-100 text-green-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Monitor your key metrics and performance</p>
      </div>

      {/* Column Layout - Left and Right Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Leads Overview Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-teal-600 mb-4">Leads Overview</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">142</div>
                <div className="text-sm text-gray-600 mb-1">Total Leads</div>
                <div className="text-sm text-teal-600 font-medium">↗12% this month</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-1">68</div>
                <div className="text-sm text-gray-600 mb-1">Qualified Leads</div>
                <div className="text-sm text-teal-600 font-medium">↗8% this month</div>
              </div>
            </div>
          </div>

          {/* Lead Acquisition Chart */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-teal-600 mb-4">Lead Acquisition</h3>
            <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Lead Acquisition Chart</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Performance Metrics Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-teal-600 mb-4">Performance Metrics</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-1">8.2%</div>
                <div className="text-sm text-gray-600 mb-1">Conversion Rate</div>
                <div className="text-sm text-teal-600 font-medium">↗2.1% improvement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">1.8h</div>
                <div className="text-sm text-gray-600 mb-1">Avg Response Time</div>
                <div className="text-sm text-red-600 font-medium">↘0.3h faster</div>
              </div>
            </div>
          </div>

          {/* Lead Sources Chart */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-teal-600 mb-4">Lead Sources</h3>
            <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Target className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Lead Sources Distribution</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Leads Table - Full Width Below Columns */}
      <div className="mt-6 bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-teal-600">Recent Leads</h3>
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-teal-600 hover:text-teal-700 border border-teal-200 rounded-md hover:bg-teal-50">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lead</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-medium text-sm mr-3">
                        {getInitials(lead.name)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                        <div className="text-sm text-gray-500">{lead.email}</div>
                        <div className="text-sm text-gray-500">{lead.company}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {lead.projectType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {lead.budget}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(lead.priority)}`}>
                      {lead.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-400 hover:text-teal-600">
                        <Phone className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-teal-600">
                        <Mail className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
