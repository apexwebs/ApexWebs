import Link from 'next/link';

export default function WebHostingSecurityPage() {
  return (
    <section style={{ maxWidth: 800, margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #eee' }}>
      <h2 style={{ color: '#00704A', fontSize: '2rem', marginBottom: '1rem' }}>Web Hosting & Security</h2>
      <p>
        Reliable, secure, and affordable web hosting for Kenyan businesses. Enjoy 99.9% uptime, SSL certificates, daily backups, and robust malware protection.
      </p>
      <ul style={{ margin: '1.5rem 0', paddingLeft: 20 }}>
        <li>Free SSL for all sites</li>
        <li>Daily automated backups</li>
        <li>Malware scanning and removal</li>
        <li>Flexible pricing for SMEs and startups</li>
      </ul>
      <p style={{ fontWeight: 500, color: '#222' }}>
        <strong>Hosting Tiers:</strong><br />
        - Starter: KES 2,000/year<br />
        - Business: KES 5,000/year<br />
        - Enterprise: Custom quote
      </p>
      <div style={{ margin: '2rem 0' }}>
        <Link href="/contact" style={{ background: '#00704A', color: '#fff', padding: '1rem 2rem', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>
          Get Hosting Now
        </Link>
      </div>
    </section>
  );
} 