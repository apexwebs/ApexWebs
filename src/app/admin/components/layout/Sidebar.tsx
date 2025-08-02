"use client";
// src/app/admin/components/layout/Sidebar.tsx
// Sidebar navigation for the admin dashboard
// Uses Lucide icons and Next.js Link for navigation

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

export function Sidebar({ activeSection, setActiveSection }: { activeSection: string, setActiveSection: (name: string) => void }) {
  return (
    <div className="w-60 bg-white border-r border-gray-200 shadow-sm flex flex-col h-full">
      {/* Logo and title at top left */}
      <div className="flex items-center gap-3 px-6 pt-6 pb-4">
        <div className="bg-teal-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg shadow">AW</div>
        <span className="text-xl font-bold text-gray-900">Apex Admin</span>
      </div>
      <nav className="p-4 flex-1">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const isActive = activeSection === item.name.toLowerCase()
            return (
              <li key={item.name}>
                <button
                  onClick={() => setActiveSection(item.name.toLowerCase())}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/25 transform scale-[1.02]'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:shadow-sm'
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                  <span className={isActive ? 'text-white font-bold' : ''}>{item.name}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
      {/* User profile at bottom left */}
      <div className="mt-auto flex items-center gap-3 px-6 py-4 border-t border-gray-100 bg-gray-50">
        <div className="bg-teal-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-sm">AK</div>
        <div className="flex flex-col">
          <span className="font-semibold text-gray-800 text-sm leading-tight">Alex Kamau</span>
          <span className="text-xs text-gray-500 leading-tight">Administrator</span>
        </div>
      </div>
    </div>
  )
}
