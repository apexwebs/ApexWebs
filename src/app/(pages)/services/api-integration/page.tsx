import Link from 'next/link';

export default function ApiIntegrationPage() {
  return (
    <section style={{ maxWidth: 800, margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #eee' }}>
      <h2 style={{ color: '#00704A', fontSize: '2rem', marginBottom: '1rem' }}>API Integration Services</h2>
      <p>
        Seamlessly connect your business with Kenya's leading payment and government systems. We integrate M-PESA (Safaricom Daraja API), banking APIs, and government platforms for smooth, automated operations.
      </p>
      <ul style={{ margin: '1.5rem 0', paddingLeft: 20 }}>
        <li>M-PESA payments and disbursements</li>
        <li>Banking API integrations</li>
        <li>eCitizen and government system connections</li>
        <li>Custom API solutions for unique needs</li>
      </ul>
      <p style={{ fontWeight: 500, color: '#222' }}>
        <strong>Why integrate with Apex Webs?</strong><br />
        - Boost efficiency and reduce manual work<br />
        - Secure, reliable, and locally supported<br />
        - Stay ahead with digital transformation
      </p>
      <div style={{ margin: '2rem 0' }}>
        <Link href="/contact" style={{ background: '#00704A', color: '#fff', padding: '1rem 2rem', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>
          Start Your Integration
        </Link>
      </div>
    </section>
  );
} 