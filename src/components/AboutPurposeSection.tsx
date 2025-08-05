import React from 'react';
import Image from 'next/image';

export default function AboutPurposeSection() {
  return (
    <section className="apex-section">
      <div className="apex-container">
        <div className="apex-card">
          {/* Section Header */}
          <div className="apex-text-center apex-mb-lg">
            <h2 className="apex-text-h1 apex-mb-sm">
              Our Purpose
            </h2>
            <div className="apex-section-highlight" />
            <p className="apex-text-body" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              Empowering Kenyan businesses with innovative web solutions that drive growth and success in the digital age.
            </p>
          </div>

          {/* Content Grid */}
          <div className="apex-grid apex-grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
            {/* Left Content */}
            <div>
              <h3 className="apex-text-h2 apex-mb-md">
                Why Choose Apex Webs?
              </h3>
              
              <div className="apex-mb-lg">
                <div className="apex-card-compact apex-mb-md" style={{ borderLeft: '4px solid var(--apex-primary)', paddingLeft: '1.5rem' }}>
                  <h4 className="apex-text-h3 apex-mb-sm" style={{ color: 'var(--apex-primary)' }}>
                    🇰🇪 Local Expertise
                  </h4>
                  <p className="apex-text-body">
                    Deep understanding of the Kenyan market, business culture, and regulatory requirements. We build solutions that work for local businesses.
                  </p>
                </div>

                <div className="apex-card-compact apex-mb-md" style={{ borderLeft: '4px solid var(--apex-primary)', paddingLeft: '1.5rem' }}>
                  <h4 className="apex-text-h3 apex-mb-sm" style={{ color: 'var(--apex-primary)' }}>
                    💡 Innovation First
                  </h4>
                  <p className="apex-text-body">
                    Cutting-edge technology solutions including AI integration, progressive web apps, and modern development practices.
                  </p>
                </div>

                <div className="apex-card-compact" style={{ borderLeft: '4px solid var(--apex-primary)', paddingLeft: '1.5rem' }}>
                  <h4 className="apex-text-h3 apex-mb-sm" style={{ color: 'var(--apex-primary)' }}>
                    🤝 Partnership Approach
                  </h4>
                  <p className="apex-text-body">
                    We do not just build websites - we partner with you for long-term success with ongoing support and growth strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="apex-text-center">
              <div className="apex-card-compact" style={{ background: 'var(--apex-bg-hero)', border: '2px solid var(--apex-primary-200)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Image 
                    src="/images/ApexLogo.jpg" 
                    alt="Apex Webs Logo" 
                    width={80} 
                    height={80} 
                    style={{ borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--apex-primary)' }} 
                  />
                </div>
                
                <h3 className="apex-text-h2 apex-mb-md" style={{ color: 'var(--apex-primary)' }}>
                  Pamoja Twaweza
                </h3>
                <p className="apex-text-body apex-mb-md" style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
                  "Together We Can"
                </p>
                <p className="apex-text-body">
                  Our Swahili motto reflects our commitment to collaborative success. We believe in working together with our clients to achieve extraordinary results.
                </p>
                
                <div className="apex-grid apex-grid-2 apex-mt-lg" style={{ gap: '1rem' }}>
                  <div className="apex-text-center">
                    <div className="apex-text-h2" style={{ color: 'var(--apex-primary)', fontWeight: 'var(--apex-weight-extrabold)' }}>50+</div>
                    <div className="apex-text-small" style={{ color: 'var(--apex-primary-700)' }}>Projects Delivered</div>
                  </div>
                  <div className="apex-text-center">
                    <div className="apex-text-h2" style={{ color: 'var(--apex-primary)', fontWeight: 'var(--apex-weight-extrabold)' }}>2+</div>
                    <div className="apex-text-small" style={{ color: 'var(--apex-primary-700)' }}>Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="apex-text-center apex-mt-lg">
            <p className="apex-text-body apex-mb-md" style={{ fontSize: '1.1rem' }}>
              Ready to transform your business with professional web solutions?
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#services" className="apex-btn apex-btn-primary">
                Explore Our Services
              </a>
              <a href="#contact" className="apex-btn apex-btn-secondary">
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
