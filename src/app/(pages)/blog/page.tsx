import React from 'react';
import Image from 'next/image';

export default function BlogPage() {
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
          .apex-blog-card { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
      <h2 style={{ color: '#00704A', fontSize: '2.2rem', fontWeight: 800, marginBottom: '1.2rem', letterSpacing: '-1px', textAlign: 'center' }}>Apex Webs Blog</h2>
      <p style={{ fontSize: '1.15rem', color: '#222', marginBottom: 18, lineHeight: 1.6, textAlign: 'center' }}>
        Insights, tips, and stories on web development, digital marketing, and tech for Kenyan businesses.
      </p>
      {/* Sample blog post card */}
      <div className="apex-blog-card" style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 6px #00704A11', padding: '1.5rem', margin: '2rem 0', display: 'flex', alignItems: 'center', gap: '1.5rem', transition: 'box-shadow 0.2s' }}>
        <Image src="/images/ApexLogo.jpg" alt="Sample Blog" width={60} height={60} style={{ borderRadius: 8 }} />
        <div>
          <h3 style={{ color: '#0ea5e9', fontSize: '1.25rem', margin: 0 }}>How to Choose the Right Web Partner in Kenya</h3>
          <p style={{ color: '#444', margin: '0.5rem 0 0.5rem 0' }}>
            Learn what to look for in a web development partner, from local expertise to support and pricing. <a href="#" style={{ color: '#00704A', fontWeight: 600 }}>Read more &rarr;</a>
          </p>
          <span style={{ color: '#888', fontSize: '0.95rem' }}>Posted on May 2024</span>
        </div>
      </div>
      <section style={{ marginTop: '3rem', padding: '1rem', background: '#f4f4f4', borderRadius: 8 }}>
        <h3 style={{ color: '#00704A' }}>Legal & Compliance</h3>
        <p style={{ color: '#444' }}>
          This website is operated in compliance with Kenyan ICT regulations. For privacy, terms, and monetization details, see our upcoming legal section.
        </p>
      </section>
    </section>
  );
}