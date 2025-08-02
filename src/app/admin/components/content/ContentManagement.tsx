"use client";
// src/app/admin/components/content/ContentManagement.tsx
// Content management component for admin portal
// Manage website content, pages, and resources

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
  FileText,
  Image,
  Video,
  Plus,
  Edit,
  Trash2,
  Eye,
  Upload,
  Filter
} from 'lucide-react'

interface ContentItem {
  id: string
  title: string
  type: 'page' | 'post' | 'image' | 'video' | 'document'
  status: 'published' | 'draft' | 'archived'
  author: string
  lastModified: string
  views?: number
  size?: string
}

export function ContentManagement() {
  const [content, setContent] = useState<ContentItem[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState({
    type: 'all',
    status: 'all'
  })

  // Mock data for demonstration
  useEffect(() => {
    const mockContent: ContentItem[] = [
      {
        id: '1',
        title: 'About Apex Webs',
        type: 'page',
        status: 'published',
        author: 'Alex Kamau',
        lastModified: '2025-01-15',
        views: 1250
      },
      {
        id: '2',
        title: 'Our Services Overview',
        type: 'page',
        status: 'published',
        author: 'Alex Kamau',
        lastModified: '2025-01-10',
        views: 890
      },
      {
        id: '3',
        title: 'Hero Section Background',
        type: 'image',
        status: 'published',
        author: 'Alex Kamau',
        lastModified: '2025-01-08',
        size: '2.4 MB'
      },
      {
        id: '4',
        title: 'Company Introduction Video',
        type: 'video',
        status: 'draft',
        author: 'Alex Kamau',
        lastModified: '2025-01-05',
        size: '45.2 MB'
      },
      {
        id: '5',
        title: 'SEO Best Practices Guide',
        type: 'post',
        status: 'published',
        author: 'Alex Kamau',
        lastModified: '2025-01-03',
        views: 567
      }
    ]
    
    setTimeout(() => {
      setContent(mockContent)
      setLoading(false)
    }, 500)
  }, [])

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'page':
      case 'post':
        return <FileText className="w-4 h-4" />
      case 'image':
        // eslint-disable-next-line jsx-a11y/alt-text
        return <Image className="w-4 h-4" />
      case 'video':
        return <Video className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800'
      case 'draft':
        return 'bg-yellow-100 text-yellow-800'
      case 'archived':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredContent = content.filter(item => {
    if (filter.type !== 'all' && item.type !== filter.type) return false
    if (filter.status !== 'all' && item.status !== filter.status) return false
    return true
  })

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Content Management</h1>
        </div>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Content Management</h1>
          <p className="text-gray-600 mt-1">Create, edit, and organize your website content and resources</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Upload className="w-4 h-4" />
            Upload Media
          </Button>
          <Button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700">
            <Plus className="w-4 h-4" />
            New Content
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Content</p>
                <p className="text-2xl font-bold text-gray-900">{content.length}</p>
              </div>
              <FileText className="w-8 h-8 text-teal-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Published</p>
                <p className="text-2xl font-bold text-green-600">
                  {content.filter(item => item.status === 'published').length}
                </p>
              </div>
              <Eye className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Drafts</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {content.filter(item => item.status === 'draft').length}
                </p>
              </div>
              <Edit className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Views</p>
                <p className="text-2xl font-bold text-blue-600">
                  {content.reduce((sum, item) => sum + (item.views || 0), 0).toLocaleString()}
                </p>
              </div>
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filters:</span>
            </div>
            <select
              value={filter.type}
              onChange={(e) => setFilter(prev => ({ ...prev, type: e.target.value }))}
              className="px-3 py-1 border border-gray-200 rounded-md text-sm"
            >
              <option value="all">All Types</option>
              <option value="page">Pages</option>
              <option value="post">Posts</option>
              <option value="image">Images</option>
              <option value="video">Videos</option>
            </select>
            <select
              value={filter.status}
              onChange={(e) => setFilter(prev => ({ ...prev, status: e.target.value }))}
              className="px-3 py-1 border border-gray-200 rounded-md text-sm"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="archived">Archived</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Content Table */}
      <Card>
        <CardHeader>
          <CardTitle>Content Items</CardTitle>
          <CardDescription>
            Manage your website pages, posts, and media files
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Last Modified</TableHead>
                <TableHead>Views/Size</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredContent.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getTypeIcon(item.type)}
                      <span className="font-medium">{item.title}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="capitalize">
                      {item.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(item.status)}>
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{item.author}</TableCell>
                  <TableCell>{item.lastModified}</TableCell>
                  <TableCell>
                    {item.views ? `${item.views.toLocaleString()} views` : item.size}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
