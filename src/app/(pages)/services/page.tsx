import Link from 'next/link';
import React from 'react';

export default function ServicesPage() {
  return (
    <section style={{
      maxWidth: 1100,
      margin: '2.5rem auto',
      padding: '2.5rem 1rem',
      background: 'rgba(255,255,255,0.97)',
      borderRadius: 18,
      boxShadow: '0 4px 24px #00704A22',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Lively animated accent */}
      <div style={{
        position: 'absolute',
        top: -60,
        right: -60,
        width: 180,
        height: 180,
        background: 'radial-gradient(circle at 40% 40%, #0ea5e9 0%, #00704A 80%)',
        opacity: 0.12,
        borderRadius: '50%',
        zIndex: 0,
        animation: 'float 6s ease-in-out infinite',
      }} />
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(20px); }
          100% { transform: translateY(0); }
        }
        @media (max-width: 700px) {
          .apex-services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <h2 style={{ color: '#00704A', fontSize: '2.2rem', fontWeight: 800, marginBottom: '1.2rem', letterSpacing: '-1px', textAlign: 'center' }}>Our Services</h2>
      <p style={{ fontSize: '1.15rem', color: '#222', marginBottom: 18, lineHeight: 1.6, textAlign: 'center' }}>
        Explore our range of digital solutions tailored for Kenyan businesses, schools, and startups.
      </p>
      <div className="apex-services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
        <ServiceCard href="/services/custom-web-applications" title="Custom Web Applications" desc="Bespoke web applications tailored to your business needs. Inventory, portals, bookings, and more." />
        <ServiceCard href="/services/api-integration" title="API Integration" desc="Integrate M-PESA, banking, and government APIs for seamless business operations." />
        <ServiceCard href="/services/progressive-web-apps" title="Progressive Web Apps" desc="Modern, installable web apps for mobile and desktop. Available in Phase 2." />
        <ServiceCard href="/services/seo-digital-marketing" title="SEO & Digital Marketing" desc="Boost your online presence. Launching Q3 2025." />
        <ServiceCard href="/services/web-hosting-security" title="Web Hosting & Security" desc="Reliable hosting with SSL, backups, malware protection, and 99.9% uptime for Kenyan businesses." />
        <ServiceCard href="/services/cybersecurity" title="Cybersecurity (Coming Soon)" desc="Enterprise-grade security for your business. Solutions coming soon." />
      </div>
    </section>
  );
}

function ServiceCard({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <Link href={href} style={{
      display: 'block',
      padding: '2rem 1.2rem',
      background: '#fff',
      borderRadius: 14,
      color: '#00704A',
      fontWeight: 600,
      textDecoration: 'none',
      boxShadow: '0 2px 8px #00704A11',
      transition: 'background 0.2s, box-shadow 0.2s',
      border: '1.5px solid #e0f7fa',
      minHeight: 120,
      marginBottom: 0,
      marginTop: 0,
      position: 'relative',
      overflow: 'hidden',
      marginLeft: 0,
      marginRight: 0,
      textAlign: 'center',
    }}>
      <h3 style={{ color: '#0ea5e9', fontSize: '1.18rem', margin: 0, marginBottom: 8 }}>{title}</h3>
      <p style={{ color: '#444', fontWeight: 400, fontSize: '1.02rem', margin: 0 }}>{desc}</p>
    </Link>
  );
}