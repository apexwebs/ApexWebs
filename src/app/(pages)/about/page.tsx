import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="apex-font-family" style={{ background: 'var(--apex-bg-primary)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="apex-py-xl apex-bg-secondary">
        <div className="apex-container">
          <div className="apex-text-center apex-mb-lg">
            <h1 className="apex-text-hero apex-mb-sm">
              About Apex Webs
            </h1>
            <div className="apex-section-highlight" />
            <p className="apex-text-body" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              Empowering Kenya's Digital Future with Innovative Web Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="apex-py-xl">
        <div className="apex-container">
          <div className="apex-grid apex-grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <Image 
                  src="/images/ApexLogo.jpg" 
                  alt="Apex Webs Logo" 
                  width={80} 
                  height={80} 
                  style={{ borderRadius: '50%', objectFit: 'cover' }} 
                />
                <div>
                  <h2 className="apex-text-h1" style={{ color: 'var(--apex-primary-700)', marginBottom: '0.5rem' }}>
                    Our Story
                  </h2>
                  <p className="apex-text-body" style={{ color: 'var(--apex-primary-500)', fontWeight: 'var(--apex-weight-medium)', margin: 0 }}>
                    Pamoja Twaweza: Together We Can
                  </p>
                </div>
              </div>
              <p className="apex-text-body apex-mb-md" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                Apex Webs is a Kenyan tech startup dedicated to empowering local businesses, schools, and startups with world-class digital solutions. We believe in the power of technology to transform communities and drive economic growth.
              </p>
              <p className="apex-text-body" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#64748b' }}>
                Founded with the vision of bridging the digital divide in Kenya, we combine international best practices with deep local market understanding to deliver solutions that truly work for Kenyan businesses.
              </p>
            </div>
            <div className="apex-card">
              <h3 className="apex-text-h3 apex-mb-sm" style={{ color: 'var(--apex-primary-700)' }}>Our Mission</h3>
              <p className="apex-text-body apex-mb-md">
                To provide innovative, user-centric web solutions that help Kenyan businesses thrive in the digital economy.
              </p>
              <h3 className="apex-text-h3 apex-mb-sm" style={{ color: 'var(--apex-primary-700)' }}>Our Vision</h3>
              <p className="apex-text-body">
                To be Kenya's leading web development company, known for excellence, innovation, and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="apex-py-xl apex-bg-secondary">
        <div className="apex-container">
          <div className="apex-text-center apex-mb-lg">
            <h2 className="apex-text-h1 apex-mb-sm">
              Our Core Values
            </h2>
            <div className="apex-section-highlight" />
            <p className="apex-text-body" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="apex-grid apex-grid-3" style={{ gap: '2rem' }}>
            {[
              {
                icon: '🎯',
                title: 'Excellence',
                description: 'We strive for perfection in every project, delivering solutions that exceed expectations and set new standards in the industry.'
              },
              {
                icon: '🤝',
                title: 'Partnership',
                description: 'We work closely with our clients as trusted partners, understanding their unique needs and building long-term relationships.'
              },
              {
                icon: '🚀',
                title: 'Innovation',
                description: 'We embrace cutting-edge technologies and creative approaches to solve complex challenges and drive digital transformation.'
              },
              {
                icon: '🌍',
                title: 'Local Impact',
                description: 'We are committed to contributing to Kenya\'s economic growth by empowering local businesses with world-class digital solutions.'
              },
              {
                icon: '⚡',
                title: 'Agility',
                description: 'We adapt quickly to changing market needs and technology trends, ensuring our clients stay ahead of the competition.'
              },
              {
                icon: '🔒',
                title: 'Security',
                description: 'We prioritize the security and privacy of our clients\' data, implementing robust security measures in all our solutions.'
              }
            ].map((value, index) => (
              <div key={index} className="apex-card apex-slide-up">
                <div className="apex-text-center apex-mb-sm">
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>
                    {value.icon}
                  </div>
                  <h3 className="apex-text-h3 apex-mb-xs" style={{ color: 'var(--apex-primary-700)' }}>
                    {value.title}
                  </h3>
                </div>
                <p className="apex-text-body" style={{ textAlign: 'center', color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="apex-py-xl">
        <div className="apex-container">
          <div className="apex-text-center apex-mb-lg">
            <h2 className="apex-text-h1 apex-mb-sm">
              Meet Our Team
            </h2>
            <div className="apex-section-highlight" />
            <p className="apex-text-body" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              Passionate professionals dedicated to your success
            </p>
          </div>
          
          <div className="apex-card apex-text-center">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <Image 
                src="/images/ApexLogo.jpg" 
                alt="Team" 
                width={60} 
                height={60} 
                style={{ borderRadius: '50%', objectFit: 'cover' }} 
              />
              <div>
                <h3 className="apex-text-h3" style={{ color: 'var(--apex-primary-700)', margin: 0 }}>
                  Expert Development Team
                </h3>
                <p className="apex-text-body" style={{ color: 'var(--apex-primary-500)', margin: 0 }}>
                  Full-Stack Developers & Digital Strategists
                </p>
              </div>
            </div>
            <p className="apex-text-body apex-mb-md" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
              Our team combines years of international experience with deep understanding of the Kenyan market. We're passionate about technology and committed to helping local businesses succeed in the digital age.
            </p>
            <div className="apex-grid apex-grid-2" style={{ gap: '2rem', textAlign: 'left' }}>
              <div>
                <h4 className="apex-text-h4 apex-mb-sm" style={{ color: 'var(--apex-primary-700)' }}>Our Expertise</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'Full-Stack Web Development',
                    'UI/UX Design & Strategy',
                    'Cloud Infrastructure & DevOps',
                    'Digital Marketing & SEO'
                  ].map((skill, idx) => (
                    <li key={idx} className="apex-mb-xs" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--apex-accent-red)', fontWeight: 'bold' }}>✓</span>
                      <span className="apex-text-small" style={{ color: '#64748b' }}>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="apex-text-h4 apex-mb-sm" style={{ color: 'var(--apex-primary-700)' }}>Our Commitment</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    '24/7 Support & Maintenance',
                    'Transparent Communication',
                    'On-Time Project Delivery',
                    'Continuous Learning & Growth'
                  ].map((commitment, idx) => (
                    <li key={idx} className="apex-mb-xs" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--apex-accent-red)', fontWeight: 'bold' }}>✓</span>
                      <span className="apex-text-small" style={{ color: '#64748b' }}>{commitment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}