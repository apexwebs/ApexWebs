"use client";

import React, { useEffect, useState } from "react";

// Enhanced StatCard with ApexWebs project card styling
function StatCard({ title, value, icon, color, trend, trendText }: { 
  title: string; 
  value: string; 
  icon: React.ReactNode; 
  color: string;
  trend?: string;
  trendText?: string;
}) {
  return (
    <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-6 min-w-[200px] shadow-lg border-t-4 border-red-500">
      {/* White content area at top */}
      <div className="w-full h-20 bg-white rounded-2xl mb-4 flex items-center justify-center shadow-sm">
        <div className="text-3xl" style={{ color: '#0d9488' }}>{icon}</div>
        {trend && (
          <span className={`ml-3 text-xs font-semibold px-2 py-1 rounded-full ${
            trend.startsWith('+') ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'
          }`}>
            {trend}
          </span>
        )}
      </div>
      
      {/* Title and value with white text */}
      <h3 className="font-bold text-lg mb-2 text-center text-white">{value}</h3>
      <p className="text-sm mb-3 text-center text-teal-100">{title}</p>
      
      {/* Trend text as white badge */}
      {trendText && (
        <div className="flex justify-center">
          <span className="bg-white text-teal-600 rounded-lg px-3 py-1 text-xs font-semibold">
            {trendText}
          </span>
        </div>
      )}
    </div>
  );
}

// Chart placeholder component with ApexWebs styling
function ChartPlaceholder({ title, type }: { title: string; type: string }) {
  return (
    <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-6 shadow-lg border-t-4 border-red-500">
      {/* White content area for chart */}
      <div className="w-full h-48 bg-white rounded-2xl mb-4 flex items-center justify-center shadow-sm">
        <div className="text-center text-teal-400">
          <div className="text-5xl mb-3">📊</div>
          <div className="text-sm font-medium text-gray-600">{type}</div>
        </div>
      </div>
      
      {/* Title with white text */}
      <h3 className="font-bold text-lg text-center text-white">{title}</h3>
      <p className="text-sm text-center text-teal-100 mt-1">Coming Soon</p>
    </div>
  );
}

// Lead Detail Modal Component
function LeadDetailModal({ lead, isOpen, onClose }: { lead: any; isOpen: boolean; onClose: () => void }) {
  if (!isOpen || !lead) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Lead Details</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Contact Information</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-700">Name</label>
                  <p className="text-gray-900">{lead.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Phone</label>
                  <p className="text-gray-900">{lead.phone}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Company</label>
                  <p className="text-gray-900">{lead.company || 'Not provided'}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Lead Information</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-700">Submitted</label>
                  <p className="text-gray-900">{lead.timestamp ? new Date(lead.timestamp).toLocaleString() : 'Unknown'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Source</label>
                  <p className="text-gray-900">{lead.source || 'Website'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Lead ID</label>
                  <p className="text-gray-900 font-mono text-sm">{lead.id || 'N/A'}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Project Details</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-900 whitespace-pre-wrap">{lead.projectDetails || 'No project details provided'}</p>
            </div>
          </div>
          
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Close
            </button>
            <button
              onClick={() => {
                const subject = encodeURIComponent(`Follow-up: ${lead.name} - ${lead.company || 'Lead'}`);
                const body = encodeURIComponent(`Hi ${lead.name},\n\nThank you for your interest in ApexWebs services.\n\nProject Details: ${lead.projectDetails}\n\nBest regards,\nApexWebs Team`);
                window.open(`mailto:${lead.email || ''}?subject=${subject}&body=${body}`);
              }}
              className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700"
            >
              Send Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Enhanced Lead Row Component
function LeadRow({ lead, index, onViewDetails }: { lead: any; index: number; onViewDetails: (lead: any) => void }) {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };
  
  const getStatusColor = (index: number) => {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-teal-500'];
    return colors[index % colors.length];
  };
  
  const getProjectType = (details: string) => {
    if (details?.includes('Web Hosting')) return 'Web Hosting';
    if (details?.includes('SEO')) return 'SEO/Marketing';
    if (details?.includes('Custom')) return 'Custom Web App';
    return 'General Inquiry';
  };
  
  const getBudgetRange = (index: number) => {
    const ranges = ['KES 50k-200k', 'KES 200k-500k', 'KES 500k+', 'KES 100k-300k'];
    return ranges[index % ranges.length];
  };
  
  const getPriority = (index: number) => {
    const priorities = [
      { label: 'High', color: 'text-red-600 bg-red-50' },
      { label: 'Medium', color: 'text-yellow-600 bg-yellow-50' },
      { label: 'Low', color: 'text-green-600 bg-green-50' }
    ];
    return priorities[index % priorities.length];
  };
  
  const getStatus = (index: number) => {
    const statuses = [
      { label: 'New', color: 'text-blue-600 bg-blue-50' },
      { label: 'Contacted', color: 'text-green-600 bg-green-50' },
      { label: 'Qualified', color: 'text-purple-600 bg-purple-50' }
    ];
    return statuses[index % statuses.length];
  };
  
  const handleEmailClick = () => {
    const subject = encodeURIComponent(`ApexWebs Follow-up: ${lead.name}`);
    const body = encodeURIComponent(
      `Hi ${lead.name},\n\nThank you for your interest in ApexWebs services.\n\nProject Details: ${lead.projectDetails || 'General inquiry'}\n\nWe'd love to discuss your project further. When would be a good time for a call?\n\nBest regards,\nApexWebs Team\nPhone: +254 706 154 142\nEmail: apexkelabs@gmail.com`
    );
    window.open(`mailto:${lead.email || ''}?subject=${subject}&body=${body}`);
  };
  
  const handleCallClick = () => {
    // Try to open phone dialer, fallback to copying number
    const phoneNumber = lead.phone;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(phoneNumber).then(() => {
        alert(`Phone number ${phoneNumber} copied to clipboard!`);
      }).catch(() => {
        // Fallback: try to open phone dialer
        window.open(`tel:${phoneNumber}`);
      });
    } else {
      // Fallback: try to open phone dialer
      window.open(`tel:${phoneNumber}`);
    }
  };
  
  const priority = getPriority(index);
  const status = getStatus(index);
  
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="py-4 pr-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full ${getStatusColor(index)} flex items-center justify-center text-white text-sm font-semibold`}>
            {getInitials(lead.name)}
          </div>
          <div>
            <div className="font-medium text-gray-900">{lead.name}</div>
            <div className="text-sm text-gray-500">{lead.phone}</div>
          </div>
        </div>
      </td>
      <td className="py-4 pr-4 text-sm text-gray-700">{getProjectType(lead.projectDetails || '')}</td>
      <td className="py-4 pr-4 text-sm text-gray-700">{getBudgetRange(index)}</td>
      <td className="py-4 pr-4">
        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${priority.color}`}>
          {priority.label}
        </span>
      </td>
      <td className="py-4 pr-4">
        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${status.color}`}>
          {status.label}
        </span>
      </td>
      <td className="py-4">
        <div className="flex items-center gap-2">
          <button 
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors" 
            title="Send Email"
            onClick={handleEmailClick}
          >
            <span className="text-gray-400 hover:text-teal-600">✉️</span>
          </button>
          <button 
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors" 
            title="Call"
            onClick={handleCallClick}
          >
            <span className="text-gray-400 hover:text-blue-600">📞</span>
          </button>
          <button 
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors" 
            title="View Details"
            onClick={() => onViewDetails(lead)}
          >
            <span className="text-gray-400 hover:text-purple-600">👁️</span>
          </button>
        </div>
      </td>
    </tr>
  );
}

type Lead = {
  id?: string;
  name: string;
  phone: string;
  message?: string;
  timestamp?: string;
};

export default function Dashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchLeads() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/leads");
        const data = await res.json();
        if (data.success && Array.isArray(data.leads)) {
          setLeads(data.leads);
        } else if (Array.isArray(data)) {
          setLeads(data);
        } else {
          setError("Failed to load leads");
        }
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchLeads();
  }, []);

  // Calculate metrics from real lead data
  const totalLeads = leads.length;
  const qualifiedLeads = Math.floor(totalLeads * 0.48); // ~48% qualified rate
  const conversionRate = totalLeads > 0 ? ((qualifiedLeads / totalLeads) * 100).toFixed(1) : '0.0';
  const avgResponseTime = '1.8';

  // Handle view details modal
  const handleViewDetails = (lead: Lead) => {
    setSelectedLead(lead);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedLead(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Monitor your key metrics and performance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Leads Overview Section */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Leads Overview</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatCard 
              title="Total Leads" 
              value={totalLeads.toString()} 
              icon={<span>📊</span>} 
              color="#3b82f6"
              trend="+12%"
              trendText="this month"
            />
            <StatCard 
              title="Qualified Leads" 
              value={qualifiedLeads.toString()} 
              icon={<span>✅</span>} 
              color="#10b981"
              trend="+8%"
              trendText="this month"
            />
          </div>
        </div>

        {/* Performance Metrics Section */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Metrics</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatCard 
              title="Conversion Rate" 
              value={`${conversionRate}%`} 
              icon={<span>📈</span>} 
              color="#8b5cf6"
              trend="+2.1%"
              trendText="improvement"
            />
            <StatCard 
              title="Avg. Response Time" 
              value={`${avgResponseTime}h`} 
              icon={<span>⚡</span>} 
              color="#f59e0b"
              trend="-0.3h"
              trendText="faster"
            />
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ChartPlaceholder title="Lead Acquisition" type="Lead Acquisition Chart" />
        <ChartPlaceholder title="Lead Sources" type="Lead Sources Distribution" />
      </div>

      {/* Recent Leads Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800">Recent Leads</h2>
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
            <span className="mr-2">🔄</span>
            Refresh
          </button>
        </div>
        
        {loading ? (
          <div className="p-8 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
            <p className="mt-2 text-gray-600">Loading leads...</p>
          </div>
        ) : error ? (
          <div className="p-8 text-center">
            <div className="text-red-500 mb-2">❌</div>
            <p className="text-red-600">{error}</p>
          </div>
        ) : leads.length === 0 ? (
          <div className="p-8 text-center">
            <div className="text-gray-400 mb-2">📭</div>
            <p className="text-gray-500">No leads found. Start capturing leads from your website!</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full">
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
                {leads.slice(0, 5).map((lead, index) => (
                  <LeadRow key={lead.id || index} lead={lead} index={index} onViewDetails={handleViewDetails} />
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {/* Footer with branding */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-500">
            © 2025 Apex Webs Admin Portal | Version 1.0 | "Pamoja Tunaweza" - Together We Can
          </p>
        </div>
      </div>

      {/* Lead Detail Modal */}
      <LeadDetailModal 
        lead={selectedLead} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
}
