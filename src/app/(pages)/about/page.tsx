import React from 'react';

export default function AboutPage() {
  return (
    <section style={{ maxWidth: 800, margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #eee' }}>
      <h2 style={{ color: '#00704A', fontSize: '2rem', marginBottom: '1rem' }}>About Apex Webs</h2>
      <p style={{ fontSize: '1.1rem', color: '#444' }}>
        Apex Webs is a Kenyan tech startup dedicated to empowering local businesses, schools, and startups with world-class digital solutions. We believe in the power of technology to transform communities and drive economic growth.
      </p>
      <ul style={{ margin: '1.5rem 0', paddingLeft: 20 }}>
        <li><strong>Mission:</strong> Provide innovative, user-centric web solutions for Kenyan businesses.</li>
        <li><strong>Vision:</strong> Be the catalyst for a digitally empowered, globally competitive Kenyan business environment.</li>
        <li><strong>Values:</strong> Innovation, Local Understanding, Affordability, Customer-Centricity, Community Empowerment.</li>
      </ul>
      <p style={{ color: '#888', fontSize: '0.95rem' }}>
        Founded in Nairobi, we are passionate about bridging the digital gap and helping our clients succeed online.
      </p>
    </section>
  );
} 