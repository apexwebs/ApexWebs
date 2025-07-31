"use client";
import Navbar from '../components/Navbar';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function ConditionalNavbar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname.startsWith('/admin')) {
    return <main style={{ minHeight: '70vh', background: 'linear-gradient(120deg, #f8fafc 60%, #e0f7fa 100%)', paddingBottom: '2rem' }}>{children}</main>;
  }
  return <>
    <Navbar />
    <main style={{ minHeight: '70vh', background: 'linear-gradient(120deg, #f8fafc 60%, #e0f7fa 100%)', paddingBottom: '2rem' }}>{children}</main>
  </>;
}
