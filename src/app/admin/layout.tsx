'use client';

import React from 'react';
import { AuthProvider } from './components/auth/AuthProvider';
import "../globals.css";
import "./admin.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-100">
        {children}
      </div>
    </AuthProvider>
  );
}
