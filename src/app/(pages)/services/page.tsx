import Link from 'next/link';
import React from 'react';

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