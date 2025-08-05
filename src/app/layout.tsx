import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import "../styles/apex-design-system.css";
import ConditionalNavbar from './ConditionalNavbar';

export const metadata: Metadata = {
  title: "Apex Webs",
  description: "Professional web solutions for Kenyan businesses",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/ApexLogo.jpg" type="image/jpeg" />
        <title>Apex Webs | Professional Web Solutions in Kenya</title>
        <meta name="description" content="Kenyan web solutions for SMEs, schools, and startups. Custom websites, hosting, and API integrations." />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <ConditionalNavbar>{children}</ConditionalNavbar>
        <footer className="apex-font-family" style={{ 
          background: 'var(--apex-bg-secondary)', 
          borderTop: '3px solid var(--apex-accent-red)', 
          padding: '2rem 1rem', 
          textAlign: 'center',
          marginTop: '0'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p className="apex-text-body" style={{ 
              color: 'var(--apex-primary-700)', 
              fontWeight: 'var(--apex-weight-medium)',
              marginBottom: '0.5rem'
            }}>
              &copy; 2025 Apex Webs. All rights reserved.
            </p>
            <p className="apex-text-small" style={{ color: '#64748b', margin: 0 }}>
              Building innovative web solutions for Kenyan businesses • Pamoja Twaweza
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
