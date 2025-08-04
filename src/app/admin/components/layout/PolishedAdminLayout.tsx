"use client";
// src/app/admin/components/layout/PolishedAdminLayout.tsx
// Highly polished admin layout with modern design and professional styling

import React, { useState } from 'react';
import AdminSessionProvider from '../AdminSessionProvider';
import '@/app/globals.css';

// Import components
import { MockupDashboard } from '../dashboard/MockupDashboard';
import { LeadsTable } from '../leads/LeadsTable';
import { ContentManagement } from '../content/ContentManagement';
import { Analytics } from '../analytics/Analytics';
import { CRM } from '../crm/CRM';

// Import Lucide React icons
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  BarChart3,
  FileText,
  Bot,
  Settings,
  Search,
  Bell,
  Plus,
  ChevronDown,
  LogOut
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, key: 'dashboard' },
  { name: 'Leads', icon: Users, key: 'leads' },
  { name: 'CRM', icon: MessageSquare, key: 'crm' },
  { name: 'Analytics', icon: BarChart3, key: 'analytics' },
  { name: 'Content', icon: FileText, key: 'content' },
  { name: 'AI Assistant', icon: Bot, key: 'ai' },
  { name: 'Settings', icon: Settings, key: 'settings' },
];

function PolishedAdminLayout() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  function AISection() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Bot className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent mb-4">
              AI Assistant
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get AI-powered insights, automate workflows, and enhance your productivity with intelligent assistance.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
              <p className="text-gray-500 mb-6">AI assistant features coming soon...</p>
              <div className="flex items-center justify-center gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg">
                  Get Early Access
                </button>
                <button className="px-6 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function SettingsSection() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Settings className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent mb-4">
              Settings
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Configure your admin portal settings, preferences, and system configurations.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
              <p className="text-gray-500 mb-6">Settings panel coming soon...</p>
              <div className="flex items-center justify-center gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-200 shadow-lg">
                  Configure Now
                </button>
                <button className="px-6 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200">
                  View Documentation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Determine which component to render based on active section
  let SectionComponent;
  switch (activeSection) {
    case 'dashboard':
      SectionComponent = <MockupDashboard />;
      break;
    case 'leads':
      SectionComponent = <LeadsTable />;
      break;
    case 'crm':
      SectionComponent = <CRM />;
      break;
    case 'analytics':
      SectionComponent = <Analytics />;
      break;
    case 'content':
      SectionComponent = <ContentManagement />;
      break;
    case 'ai':
      SectionComponent = <AISection />;
      break;
    case 'settings':
      SectionComponent = <SettingsSection />;
      break;
    default:
      SectionComponent = <MockupDashboard />;
  }

  return (
    <AdminSessionProvider>
      <div className="flex h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Polished Sidebar */}
        <aside className={`${sidebarCollapsed ? 'w-20' : 'w-72'} transition-all duration-300 flex flex-col bg-white/80 backdrop-blur-xl border-r border-white/20 shadow-2xl relative`}>
          {/* Sidebar Header */}
          <div className="px-6 py-6 border-b border-gray-100/50">
            <div className="flex items-center justify-between">
              {!sidebarCollapsed && (
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      Apex Admin
                    </h1>
                    <p className="text-xs text-gray-500">Professional Dashboard</p>
                  </div>
                </div>
              )}
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${sidebarCollapsed ? 'rotate-90' : '-rotate-90'}`} />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.key;
                return (
                  <li key={item.key}>
                    <button
                      onClick={() => setActiveSection(item.key)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${
                        isActive
                          ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/25 transform scale-[1.02]'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:shadow-sm'
                      }`}
                    >
                      <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500'} transition-colors`} />
                      {!sidebarCollapsed && (
                        <span className={isActive ? 'text-white font-bold' : ''}>{item.name}</span>
                      )}
                      {isActive && !sidebarCollapsed && (
                        <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* User Profile */}
          {!sidebarCollapsed && (
            <div className="px-4 py-4 border-t border-gray-100/50">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                  AK
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm truncate">Alex Kamau</p>
                  <p className="text-xs text-gray-500 truncate">Administrator</p>
                </div>
                <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Polished Header */}
          <header className="bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg sticky top-0 z-10">
            <div className="flex items-center justify-between px-8 py-4">
              {/* Search Bar */}
              <div className="flex-1 max-w-xl">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search leads, projects, or content..."
                    className="w-full pl-12 pr-4 py-3 bg-white/70 border border-gray-200/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500/30 transition-all duration-200 shadow-sm backdrop-blur-sm"
                  />
                </div>
              </div>

              {/* Header Actions */}
              <div className="flex items-center gap-4">
                <button className="relative p-3 bg-white/70 rounded-xl hover:bg-white transition-all duration-200 shadow-sm border border-gray-200/50 group">
                  <Bell className="w-5 h-5 text-gray-600 group-hover:text-teal-600 transition-colors" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-lg hover:shadow-xl font-medium">
                  <Plus className="w-4 h-4" />
                  New Lead
                </button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto">
            {SectionComponent}
          </main>

          {/* Polished Footer */}
          <footer className="bg-white/80 backdrop-blur-xl border-t border-white/20 px-8 py-4">
            <div className="flex items-center justify-between text-sm">
              <div className="text-gray-500">
                © 2025 Apex Webs Admin Portal | Version 1.0
              </div>
              <div className="flex items-center gap-6 text-gray-500">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  System Online
                </span>
                <span>&quot;Pamoja Tunaweza&quot; - Together We Can</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </AdminSessionProvider>
  );
}

export default PolishedAdminLayout;
