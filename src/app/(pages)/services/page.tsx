import Link from 'next/link';
import React from 'react';

const services = [
  {
    name: 'Custom Web Applications',
    slug: 'custom-web-applications',
    description: 'Bespoke web applications tailored to your business needs. Inventory, portals, bookings, and more.',
    comingSoon: false,
  },
  {
    name: 'Web Hosting & Security',
    slug: 'web-hosting-security',
    description: 'Reliable hosting with SSL, backups, malware protection, and 99.9% uptime for Kenyan businesses.',
    comingSoon: false,
  },
  {
    name: 'API Integration Services',
    slug: 'api-integration',
    description: 'Integrate M-PESA, banking, and government APIs for seamless business operations.',
    comingSoon: false,
  },
  {
    name: 'Progressive Web Apps (PWAs)',
    slug: 'progressive-web-apps',
    description: 'Modern, installable web apps for mobile and desktop. Available in Phase 2.',
    comingSoon: true,
  },
  {
    name: 'SEO & Digital Marketing',
    slug: 'seo-digital-marketing',
    description: 'Boost your online presence. Launching Q3 2025.',
    comingSoon: true,
  },
  {
    name: 'Cybersecurity Solutions',
    slug: 'cybersecurity',
    description: 'Enterprise-grade security for your business. Solutions coming soon.',
    comingSoon: true,
  },
];

export default function ServicesPage() {
  return (
    <section style={{ maxWidth: 900, margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #eee' }}>
      <h2 style={{ color: '#00704A', fontSize: '2rem', marginBottom: '1rem' }}>Our Services</h2>
      <p style={{ fontSize: '1.1rem', color: '#444' }}>
        Explore our range of digital solutions tailored for Kenyan businesses, schools, and startups.
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: '2rem 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <li><Link href="/services/custom-web-applications" style={serviceLinkStyle}>Custom Web Applications</Link></li>
        <li><Link href="/services/api-integration" style={serviceLinkStyle}>API Integration</Link></li>
        <li><Link href="/services/progressive-web-apps" style={serviceLinkStyle}>Progressive Web Apps</Link></li>
        <li><Link href="/services/seo-digital-marketing" style={serviceLinkStyle}>SEO & Digital Marketing</Link></li>
        <li><Link href="/services/web-hosting-security" style={serviceLinkStyle}>Web Hosting & Security</Link></li>
        <li><Link href="/services/cybersecurity" style={serviceLinkStyle}>Cybersecurity (Coming Soon)</Link></li>
      </ul>
    </section>
  );
}

const serviceLinkStyle = {
  display: 'block',
  padding: '1rem',
  background: '#f8f8f8',
  borderRadius: 8,
  color: '#00704A',
  fontWeight: 600,
  textDecoration: 'none',
  boxShadow: '0 1px 4px #eee',
  transition: 'background 0.2s',
}; 