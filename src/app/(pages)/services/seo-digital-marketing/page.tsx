import Link from 'next/link';

export default function SeoDigitalMarketingPage() {
  return (
    <section style={{ maxWidth: 800, margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #eee' }}>
      <h2 style={{ color: '#00704A', fontSize: '2rem', marginBottom: '1rem' }}>SEO & Digital Marketing</h2>
      <p>
        Boost your online presence and reach more customers with our SEO and digital marketing services. <strong>Launching Q3 2025.</strong>
      </p>
      <div style={{ margin: '2rem 0' }}>
        <Link href="/newsletter" style={{ background: '#00704A', color: '#fff', padding: '1rem 2rem', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>
          Sign Up for Launch Updates
        </Link>
      </div>
    </section>
  );
} 