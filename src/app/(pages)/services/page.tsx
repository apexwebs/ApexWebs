import Link from 'next/link';

const services = [
  {
    name: 'Custom Web Applications',
    slug: 'custom-web-applications',
    description: 'Bespoke web applications tailored to your business needs. Inventory, portals, bookings, and more.',
    comingSoon: false,
  },
  {
    name: 'Web Hosting & Security',
    slug: 'web-hosting-security',
    description: 'Reliable hosting with SSL, backups, malware protection, and 99.9% uptime for Kenyan businesses.',
    comingSoon: false,
  },
  {
    name: 'API Integration Services',
    slug: 'api-integration',
    description: 'Integrate M-PESA, banking, and government APIs for seamless business operations.',
    comingSoon: false,
  },
  {
    name: 'Progressive Web Apps (PWAs)',
    slug: 'progressive-web-apps',
    description: 'Modern, installable web apps for mobile and desktop. Available in Phase 2.',
    comingSoon: true,
  },
  {
    name: 'SEO & Digital Marketing',
    slug: 'seo-digital-marketing',
    description: 'Boost your online presence. Launching Q3 2025.',
    comingSoon: true,
  },
  {
    name: 'Cybersecurity Solutions',
    slug: 'cybersecurity',
    description: 'Enterprise-grade security for your business. Solutions coming soon.',
    comingSoon: true,
  },
];

export default function ServicesPage() {
  return (
    <section style={{ maxWidth: 900, margin: '2rem auto', padding: '2rem' }}>
      <h2 style={{ color: '#00704A', fontSize: '2rem', marginBottom: '1.5rem' }}>Our Services</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {services.map((service) => (
          <div key={service.slug} style={{ background: '#f9f9f9', borderRadius: 10, padding: '1.5rem', boxShadow: '0 1px 4px #eee' }}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#222' }}>{service.name}</h3>
            <p style={{ color: '#555', minHeight: 48 }}>{service.description}</p>
            {service.comingSoon ? (
              <span style={{ color: '#888', fontWeight: 600 }}>Coming Soon</span>
            ) : (
              <Link href={`/services/${service.slug}`} style={{ color: '#fff', background: '#00704A', padding: '0.5rem 1.2rem', borderRadius: 6, textDecoration: 'none', fontWeight: 600 }}>
                Learn More
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 