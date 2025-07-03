import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  // eslint-disable-next-line react/no-unescaped-entities
  return (
    <section
      style={{
        maxWidth: 900,
        margin: '3rem auto',
        padding: '2.5rem',
        background: 'rgba(255,255,255,0.97)',
        borderRadius: 18,
        boxShadow: '0 4px 24px #00704A22',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
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
      `}</style>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', zIndex: 1, position: 'relative' }}>
        <Image src="/images/ApexLogo.jpg" alt="Apex Webs Logo" width={70} height={70} style={{ borderRadius: '14px', boxShadow: '0 2px 8px #00704A33' }} />
        <div>
          <h2 style={{ margin: 0, fontSize: '2.2rem', color: '#00704A', fontWeight: 800, letterSpacing: '-1px' }}>About Apex Webs</h2>
          <p style={{ margin: 0, fontWeight: 600, color: '#0ea5e9', fontSize: '1.05rem' }}>Empowering Kenya&apos;s Digital Future</p>
        </div>
      </div>
      <p style={{ fontSize: '1.15rem', color: '#222', marginBottom: 18, lineHeight: 1.6 }}>
        Apex Webs is a Kenyan tech startup dedicated to empowering local businesses, schools, and startups with world-class digital solutions. We believe in the power of technology to transform communities and drive economic growth.
      </p>
      <ul style={{ margin: '1.5rem 0', paddingLeft: 24, color: '#222', fontSize: '1.08rem', lineHeight: 1.7 }}>
        <li><strong>Mission:</strong> Provide innovative, user-centric web solutions for Kenyan businesses.</li>
        <li><strong>Vision:</strong> Be the catalyst for a digitally empowered, globally competitive Kenyan business environment.</li>
        <li><strong>Values:</strong> Innovation, Local Understanding, Affordability, Customer-Centricity, Community Empowerment.</li>
      </ul>
      <p style={{ color: '#00704A', fontSize: '1.08rem', fontWeight: 500, textAlign: 'center', marginTop: 18 }}>
        Founded in Nairobi. <strong>Let&apos;s bridge the digital gap together!</strong>
      </p>
    </section>
  );
} 