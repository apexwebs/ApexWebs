"use client";
// src/app/admin/components/analytics/Analytics.tsx
// Analytics component for admin portal
// Website traffic, performance metrics, and insights

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  TrendingUp,
  TrendingDown,
  Users,
  Eye,
  Clock,
  MousePointer,
  Globe,
  Smartphone,
  Monitor
} from 'lucide-react'

interface AnalyticsData {
  totalVisitors: number
  pageViews: number
  bounceRate: number
  avgSessionDuration: string
  conversionRate: number
  topPages: Array<{ page: string; views: number; change: number }>
  deviceBreakdown: Array<{ device: string; percentage: number; visitors: number }>
  trafficSources: Array<{ source: string; visitors: number; percentage: number }>
}

export function Analytics() {
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [timeRange, setTimeRange] = useState('7d')

  useEffect(() => {
    // Mock analytics data
    const mockData: AnalyticsData = {
      totalVisitors: 12847,
      pageViews: 34521,
      bounceRate: 34.2,
      avgSessionDuration: '3m 42s',
      conversionRate: 4.8,
      topPages: [
        { page: '/services', views: 8934, change: 12.3 },
        { page: '/', views: 7821, change: -2.1 },
        { page: '/about', views: 5432, change: 8.7 },
        { page: '/contact', views: 4123, change: 15.2 },
        { page: '/portfolio', views: 3876, change: -5.4 }
      ],
      deviceBreakdown: [
        { device: 'Desktop', percentage: 58.3, visitors: 7490 },
        { device: 'Mobile', percentage: 35.2, visitors: 4522 },
        { device: 'Tablet', percentage: 6.5, visitors: 835 }
      ],
      trafficSources: [
        { source: 'Organic Search', visitors: 6423, percentage: 50.0 },
        { source: 'Direct', visitors: 3211, percentage: 25.0 },
        { source: 'Social Media', visitors: 1927, percentage: 15.0 },
        { source: 'Referral', visitors: 1286, percentage: 10.0 }
      ]
    }

    setTimeout(() => {
      setData(mockData)
      setLoading(false)
    }, 800)
  }, [timeRange])

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        </div>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
        </div>
      </div>
    )
  }

  if (!data) return null

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-1">Website traffic, performance metrics, and user insights</p>
        </div>
        <div className="flex gap-2">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-md text-sm"
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Visitors</p>
                <p className="text-2xl font-bold text-gray-900">{data.totalVisitors.toLocaleString()}</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-green-600">+12.3%</span>
                </div>
              </div>
              <Users className="w-8 h-8 text-teal-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Page Views</p>
                <p className="text-2xl font-bold text-gray-900">{data.pageViews.toLocaleString()}</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-green-600">+8.7%</span>
                </div>
              </div>
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Bounce Rate</p>
                <p className="text-2xl font-bold text-gray-900">{data.bounceRate}%</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingDown className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-green-600">-2.1%</span>
                </div>
              </div>
              <MousePointer className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg. Session</p>
                <p className="text-2xl font-bold text-gray-900">{data.avgSessionDuration}</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-green-600">+5.4%</span>
                </div>
              </div>
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Conversion Rate</p>
                <p className="text-2xl font-bold text-gray-900">{data.conversionRate}%</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-green-600">+1.2%</span>
                </div>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <Card>
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
            <CardDescription>Most visited pages on your website</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.topPages.map((page, index) => (
                <div key={page.page} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-500 w-4">#{index + 1}</span>
                    <div>
                      <p className="font-medium text-gray-900">{page.page}</p>
                      <p className="text-sm text-gray-500">{page.views.toLocaleString()} views</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {page.change > 0 ? (
                      <TrendingUp className="w-3 h-3 text-green-500" />
                    ) : (
                      <TrendingDown className="w-3 h-3 text-red-500" />
                    )}
                    <span className={`text-xs ${page.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {page.change > 0 ? '+' : ''}{page.change}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Device Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Device Breakdown</CardTitle>
            <CardDescription>Visitor distribution by device type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.deviceBreakdown.map((device) => (
                <div key={device.device} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {device.device === 'Desktop' && <Monitor className="w-4 h-4 text-gray-600" />}
                    {device.device === 'Mobile' && <Smartphone className="w-4 h-4 text-gray-600" />}
                    {device.device === 'Tablet' && <Monitor className="w-4 h-4 text-gray-600" />}
                    <div>
                      <p className="font-medium text-gray-900">{device.device}</p>
                      <p className="text-sm text-gray-500">{device.visitors.toLocaleString()} visitors</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-teal-600 h-2 rounded-full" 
                        style={{ width: `${device.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-12 text-right">
                      {device.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Traffic Sources */}
      <Card>
        <CardHeader>
          <CardTitle>Traffic Sources</CardTitle>
          <CardDescription>Where your visitors are coming from</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.trafficSources.map((source) => (
              <div key={source.source} className="text-center p-4 border border-gray-200 rounded-lg">
                <Globe className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <h3 className="font-medium text-gray-900 mb-1">{source.source}</h3>
                <p className="text-2xl font-bold text-gray-900 mb-1">{source.visitors.toLocaleString()}</p>
                <p className="text-sm text-gray-500">{source.percentage}% of traffic</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
