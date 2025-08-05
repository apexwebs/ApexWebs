import React from 'react';
import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      icon: '💻',
      title: 'Custom Web Applications',
      description: 'Tailored web applications built with modern technologies for your specific business needs.',
      features: ['React/Next.js Development', 'Database Integration', 'API Development', 'User Authentication'],
      link: '/services/custom-web-applications',
      color: 'var(--apex-primary)'
    },
    {
      icon: '🔒',
      title: 'Web Hosting & Security',
      description: 'Reliable hosting solutions with enterprise-grade security for your peace of mind.',
      features: ['SSL Certificates', '99.9% Uptime', 'Daily Backups', 'Security Monitoring'],
      link: '/services/web-hosting-security',
      color: 'var(--apex-primary-600)'
    },
    {
      icon: '📱',
      title: 'Progressive Web Apps',
      description: 'Modern web applications that work like native mobile apps across all devices.',
      features: ['Offline Functionality', 'Push Notifications', 'App-like Experience', 'Cross-platform'],
      link: '/services/progressive-web-apps',
      color: 'var(--apex-primary-700)'
    },
    {
      icon: '🔗',
      title: 'API Integration Services',
      description: 'Seamless integration with third-party services and custom API development.',
      features: ['Payment Gateways', 'Social Media APIs', 'Business Tools', 'Custom Integrations'],
      link: '/services/api-integration-services',
      color: 'var(--apex-primary-500)'
    },
    {
      icon: '📈',
      title: 'SEO & Digital Marketing',
      description: 'Boost your online presence with our comprehensive SEO and digital marketing services.',
      features: ['Search Optimization', 'Content Strategy', 'Analytics Setup', 'Performance Tracking'],
      link: '/services/seo-digital-marketing',
      color: 'var(--apex-primary-600)'
    },
    {
      icon: '🛡️',
      title: 'Cybersecurity Solutions',
      description: 'Protect your digital assets with our comprehensive cybersecurity services.',
      features: ['Security Audits', 'Threat Monitoring', 'Data Protection', 'Compliance Support'],
      link: '/services/cybersecurity-solutions',
      color: 'var(--apex-primary-800)'
    }
  ];

  return (
    <section className="apex-section">
      <div className="apex-container">
        {/* Section Header */}
        <div className="apex-text-center apex-mb-lg">
          <h2 className="apex-text-h1 apex-mb-sm">
            Our Services
          </h2>
          <div className="apex-section-highlight" />
          <p className="apex-text-body" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
            Comprehensive web solutions designed to help Kenyan businesses thrive in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="apex-grid apex-grid-3" style={{ gap: '2rem' }}>
          {services.map((service, index) => (
            <Link key={index} href={service.link} className="apex-card apex-card-clickable apex-slide-up" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              {/* Service Icon & Title */}
              <div className="apex-text-center apex-mb-sm">
                <div 
                  style={{ 
                    fontSize: '2.5rem', 
                    marginBottom: '0.75rem',
                    background: `linear-gradient(135deg, ${service.color} 0%, var(--apex-primary-light) 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {service.icon}
                </div>
                <h3 className="apex-text-h3 apex-mb-xs" style={{ color: 'var(--apex-primary-700)', fontSize: '1.25rem' }}>
                  {service.title}
                </h3>
              </div>

              {/* Service Description */}
              <div className="apex-mb-sm">
                <p className="apex-text-body" style={{ color: '#64748b', textAlign: 'center', lineHeight: '1.5', fontSize: '0.9rem' }}>
                  {service.description}
                </p>
              </div>

              {/* Service Features */}
              <div className="apex-mb-sm">
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="apex-mb-xs" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: service.color, fontWeight: 'bold' }}>✓</span>
                      <span className="apex-text-small" style={{ color: '#64748b', fontSize: '0.85rem' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service CTA - Card is now clickable */}
              <div className="apex-text-center" style={{ marginTop: 'auto' }}>
                <div 
                  className="apex-btn apex-btn-secondary"
                  style={{ 
                    background: `linear-gradient(135deg, ${service.color} 0%, var(--apex-primary-light) 100%)`,
                    color: 'white',
                    border: 'none',
                    pointerEvents: 'none'
                  }}
                >
                  Learn More
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="apex-text-center apex-mt-lg">
          <div className="apex-card-compact" style={{ background: 'var(--apex-bg-hero)', border: '2px solid var(--apex-primary-200)', maxWidth: '600px', margin: '0 auto' }}>
            <h3 className="apex-text-h2 apex-mb-md" style={{ color: 'var(--apex-primary)' }}>
              Need Something Custom?
            </h3>
            <p className="apex-text-body apex-mb-md">
              Every business is unique. Let's discuss your specific requirements and create a tailored solution that fits your needs perfectly.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#contact" className="apex-btn apex-btn-primary">
                Get Free Consultation
              </a>
              <Link href="/projects" className="apex-btn apex-btn-secondary">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
