'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../components/auth/AuthProvider';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Dashboard from '../pages/Dashboard';
import Leads from '../pages/Leads';
import CRM from '../pages/CRM';
import Analytics from '../pages/Analytics';
import Content from '../pages/Content';
import AI from '../pages/AI';
import Settings from '../pages/Settings';

type PageName = "Dashboard" | "Leads" | "CRM" | "Analytics" | "Content" | "AI" | "Settings";
const pageMap: Record<PageName, React.ComponentType> = {
  Dashboard,
  Leads,
  CRM,
  Analytics,
  Content,
  AI,
  Settings,
};

export default function DashboardLayout() {
  const [activePage, setActivePage] = useState<PageName>("Dashboard");
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      router.push('/admin/login');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const PageComponent = pageMap[activePage];

  return (
    <div className="flex h-screen bg-[#f6f8fa]">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col min-h-0">
        <Header />
        <main className="flex-1 p-8 overflow-y-auto bg-[#f6f8fa]">
          <PageComponent />
        </main>
      </div>
    </div>
  );
}
