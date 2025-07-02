import Link from 'next/link';

export default function CustomWebApplicationsPage() {
  return (
    <section style={{ maxWidth: 800, margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #eee' }}>
      <h2 style={{ color: '#00704A', fontSize: '2rem', marginBottom: '1rem' }}>Custom Web Applications</h2>
      <p>
        We build bespoke web applications tailored to your unique business needs. From inventory management to customer portals and booking platforms, our solutions empower Kenyan SMEs and startups to digitize and scale.
      </p>
      <ul style={{ margin: '1.5rem 0', paddingLeft: 20 }}>
        <li>Inventory management systems for Nairobi retailers</li>
        <li>Customer portals for local service providers</li>
        <li>Online booking platforms for Kenyan businesses</li>
        <li>Custom dashboards for data-driven decision making</li>
      </ul>
      <p style={{ fontWeight: 500, color: '#222' }}>
        <strong>Why choose Apex Webs?</strong> <br />
        - Local expertise and support<br />
        - Mobile-first, fast, and secure<br />
        - Affordable for Kenyan businesses
      </p>
      <div style={{ margin: '2rem 0' }}>
        <Link href="/contact" style={{ background: '#00704A', color: '#fff', padding: '1rem 2rem', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>
          Request a Free Quote
        </Link>
      </div>
    </section>
  );
} 