import Link from 'next/link';

export default function CybersecurityPage() {
  return (
    <section style={{ maxWidth: 800, margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #eee' }}>
      <h2 style={{ color: '#00704A', fontSize: '2rem', marginBottom: '1rem' }}>Cybersecurity Solutions</h2>
      <p>
        Protect your business with enterprise-grade cybersecurity. Our solutions are designed for Kenyan SMEs and large organizations. <strong>Enterprise solutions coming soon.</strong>
      </p>
      <div style={{ margin: '2rem 0' }}>
        <Link href="/contact" style={{ background: '#00704A', color: '#fff', padding: '1rem 2rem', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>
          Enterprise Inquiry
        </Link>
      </div>
    </section>
  );
} 