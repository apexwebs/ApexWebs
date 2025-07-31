"use client";
import React from "react";
// src/app/admin/components/layout/AdminLayout.tsx
// Main layout for the admin dashboard, including sidebar and header
// Uses session for authentication and site theming

import { useSession } from 'next-auth/react'

import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { DashboardOverview } from '../dashboard/DashboardOverview';
import { LeadsTable } from '../leads/LeadsTable';

// Styled placeholders for each section
function CRMSection() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h2 className="text-2xl font-bold mb-2 text-teal-700">CRM</h2>
      <p className="text-gray-600 mb-4">Manage your customer relationships, track interactions, and view contact history here.</p>
      <div className="w-full max-w-xl bg-white rounded-xl shadow p-8 border border-gray-100">
        <p className="text-gray-400">CRM features coming soon...</p>
      </div>
    </div>
  );
}
function AnalyticsSection() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h2 className="text-2xl font-bold mb-2 text-indigo-700">Analytics</h2>
      <p className="text-gray-600 mb-4">Visualize your data, monitor KPIs, and gain insights into your business performance.</p>
      <div className="w-full max-w-xl bg-white rounded-xl shadow p-8 border border-gray-100">
        <p className="text-gray-400">Analytics dashboard coming soon...</p>
      </div>
    </div>
  );
}
function ContentSection() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h2 className="text-2xl font-bold mb-2 text-purple-700">Content Management</h2>
      <p className="text-gray-600 mb-4">Create, edit, and organize your website content and resources here.</p>
      <div className="w-full max-w-xl bg-white rounded-xl shadow p-8 border border-gray-100">
        <p className="text-gray-400">Content management tools coming soon...</p>
      </div>
    </div>
  );
}
function AISection() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h2 className="text-2xl font-bold mb-2 text-pink-700">AI Assistant</h2>
      <p className="text-gray-600 mb-4">Leverage AI to automate tasks, get recommendations, and enhance productivity.</p>
      <div className="w-full max-w-xl bg-white rounded-xl shadow p-8 border border-gray-100">
        <p className="text-gray-400">AI features coming soon...</p>
      </div>
    </div>
  );
}
function SettingsSection() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h2 className="text-2xl font-bold mb-2 text-gray-700">Settings</h2>
      <p className="text-gray-600 mb-4">Configure your admin portal, manage users, and set preferences here.</p>
      <div className="w-full max-w-xl bg-white rounded-xl shadow p-8 border border-gray-100">
        <p className="text-gray-400">Settings options coming soon...</p>
      </div>
    </div>
  );
}


export function AdminLayout() {
  const sessionResult = useSession();
  const session = sessionResult?.data;
  const status = sessionResult?.status;
  const [activeSection, setActiveSection] = React.useState('Dashboard');

  if (status === 'loading') {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  }

  if (!session) {
    return <div>Access Denied</div>
  }

  let SectionComponent;
  switch (activeSection) {
    case 'Dashboard':
      SectionComponent = <DashboardOverview />;
      break;
    case 'Leads':
      SectionComponent = <LeadsTable />;
      break;
    case 'CRM':
      SectionComponent = <CRMSection />;
      break;
    case 'Analytics':
      SectionComponent = <AnalyticsSection />;
      break;
    case 'Content':
      SectionComponent = <ContentSection />;
      break;
    case 'AI Assistant':
      SectionComponent = <AISection />;
      break;
    case 'Settings':
      SectionComponent = <SettingsSection />;
      break;
    default:
      SectionComponent = <DashboardOverview />;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          {SectionComponent}
        </main>
      </div>
    </div>
  )
}
