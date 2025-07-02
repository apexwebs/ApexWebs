import Link from 'next/link';

export default function ProgressiveWebAppsPage() {
  return (
    <section style={{ maxWidth: 800, margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #eee' }}>
      <h2 style={{ color: '#00704A', fontSize: '2rem', marginBottom: '1rem' }}>Progressive Web Apps (PWAs)</h2>
      <p>
        Modern, installable web apps for mobile and desktop. Enjoy offline access, push notifications, and a native-like experience. <strong>Available in Phase 2.</strong>
      </p>
      <div style={{ margin: '2rem 0' }}>
        <Link href="/contact" style={{ background: '#00704A', color: '#fff', padding: '1rem 2rem', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>
          Register Early Interest
        </Link>
      </div>
    </section>
  );
} 