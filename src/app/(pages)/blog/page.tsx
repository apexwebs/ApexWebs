import React from 'react';

export default function BlogPage() {
  return (
    <section style={{ maxWidth: 800, margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #eee' }}>
      <h2 style={{ color: '#00704A', fontSize: '2rem', marginBottom: '1rem' }}>Apex Webs Blog</h2>
      <p style={{ fontSize: '1.1rem', color: '#444' }}>
        Insights, tips, and stories on web development, digital marketing, and tech for Kenyan businesses.
      </p>
      <div style={{ margin: '2rem 0', color: '#888', fontStyle: 'italic' }}>
        Blog posts coming soon. Stay tuned!
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