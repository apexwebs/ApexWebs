import type { Metadata } from "next";
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar';
// import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apex Webs",
  description: "Professional web solutions for Kenyan businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/ApexLogo.jpg" type="image/jpeg" />
        <title>Apex Webs | Professional Web Solutions in Kenya</title>
        <meta name="description" content="Kenyan web solutions for SMEs, schools, and startups. Custom websites, hosting, and API integrations." />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{ margin: 0, padding: 0 }}>
        {/* Fixed Navbar with Logo and Title */}
        {/* Fixed Navbar with Logo and Title */}
        {/** Use dynamic import for Navbar as a Client Component */}
        <Navbar />
        {/* Spacer for fixed navbar - removed to eliminate black gap above hero */}
        <main style={{ minHeight: '70vh', background: 'linear-gradient(120deg, #f8fafc 60%, #e0f7fa 100%)', paddingBottom: '2rem' }}>{children}</main>
        <footer style={{ textAlign: 'center', padding: '1rem', borderTop: '1px solid #eee', marginTop: '2rem', color: '#888' }}>
          &copy; {new Date().getFullYear()} Apex Webs. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
