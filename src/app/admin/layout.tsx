"use client";
// src/app/admin/layout.tsx
// Admin Portal Layout - uses site theme and provides sidebar navigation
import React from 'react';
import { usePathname } from 'next/navigation';
import AdminSessionProvider from './components/AdminSessionProvider';
import Link from 'next/link';
import '@/app/globals.css'; // Use site-wide theme

const navItems = [
  { name: 'Dashboard', href: '/admin', icon: '📊' },
  { name: 'Leads', href: '/admin/leads', icon: '👤' },
  { name: 'CRM', href: '/admin/crm', icon: '💬' },
  { name: 'Analytics', href: '/admin/analytics', icon: '📈' },
  { name: 'Content', href: '/admin/content', icon: '📝' },
  { name: 'AI Assistant', href: '/admin/ai', icon: '🤖' },
  { name: 'Settings', href: '/admin/settings', icon: '⚙️' },
];

function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <AdminSessionProvider>
      <div className="flex h-screen bg-[#f6f8fa]">
        {/* Sidebar */}
        <aside className="w-64 flex flex-col justify-between bg-white border-r border-gray-200 shadow-sm">
          <div>
            <div className="flex items-center gap-2 px-6 py-6 border-b border-gray-100">
              <div className="bg-teal-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg shadow">AW</div>
              <span className="text-lg font-bold text-gray-800">Apex Admin</span>
            </div>
            <nav className="mt-4 px-2">
              <ul className="space-y-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors text-gray-700 hover:bg-teal-50 hover:text-teal-700 ${isActive ? 'bg-teal-100 text-teal-700 font-semibold shadow-sm' : ''}`}
                        style={{ minHeight: '44px' }}
                      >
                        <span className="text-xl flex items-center justify-center w-6">{item.icon}</span>
                        <span className="truncate">{item.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          {/* User profile */}
          <div className="flex items-center gap-3 px-6 py-4 border-t border-gray-100 bg-gray-50 mt-2">
            <div className="bg-teal-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-sm">AK</div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-800 text-sm leading-tight">Alex Kamau</span>
              <span className="text-xs text-gray-500 leading-tight">Administrator</span>
            </div>
          </div>
        </aside>
        {/* Main dashboard area */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Top header */}
          <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200 rounded-b-xl shadow-sm sticky top-0 z-10">
            <div className="flex items-center gap-4 w-full max-w-lg">
              <input type="text" placeholder="Search..." className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-200 shadow-sm" />
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-700 transition shadow">+ New Lead</button>
              <button className="relative bg-gray-100 p-2 rounded-full hover:bg-gray-200 shadow">
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-500"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              </button>
            </div>
          </header>
          {/* Dashboard content */}
          <main className="flex-1 p-8 overflow-y-auto bg-[#f6f8fa]">{children}</main>
          <footer className="text-center text-xs text-gray-400 py-4 border-t border-gray-100 bg-white">
            © 2025 Apex Webs Admin Portal | Version 1.0 | "Pamoja Tunaweza" - Together We Can
          </footer>
        </div>
      </div>
    </AdminSessionProvider>
  );
}

export default AdminLayout;

// Documentation:
// - This layout uses the global site theme for consistency.
// - Sidebar navigation matches the plan's recommended sections.
// - Extend with authentication and RBAC as you build out features.
