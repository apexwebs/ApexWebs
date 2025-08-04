import type { Metadata } from "next";
import React from "react";
import "./globals.css";
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
        <footer style={{ textAlign: 'center', padding: '1rem', borderTop: '1px solid #eee', marginTop: '2rem', color: '#888' }}>
          &copy; 2025 Apex Webs. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
