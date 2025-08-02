import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import ConditionalNavbar from './ConditionalNavbar';
import { Providers } from './providers';

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
      <body className="m-0 p-0">
        <Providers>
          <ConditionalNavbar>{children}</ConditionalNavbar>
          <footer className="text-center p-4 border-t border-gray-200 mt-8 text-gray-500">
            &copy; {new Date().getFullYear()} Apex Webs. All rights reserved.
          </footer>
        </Providers>
      </body>
    </html>
  );
}
