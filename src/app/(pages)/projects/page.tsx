import React from 'react';
import ProjectCard from '../../../components/ProjectCard';
import Link from 'next/link';

export default function ProjectsPage() {
  // Extended project portfolio
  const projectCards = [
    {
      imageSrc: '/images/ecommerce-sample.jpg',
      alt: 'E-commerce Platform',
      title: 'Modern E-commerce Platform',
      description: 'Complete online store with payment integration, inventory management, and customer portal for a fashion retailer.',
      tags: ['E-commerce', 'Responsive', 'Payment Gateway'],
    },
    {
      imageSrc: '/images/corporate-sample.jpg',
      alt: 'Professional Service Website',
      title: 'Professional Service Website',
      description: 'Corporate website with service showcases, team profiles, and client testimonials for a consulting firm.',
      tags: ['Corporate', 'CMS', 'SEO Optimized'],
    },
    {
      imageSrc: '/images/startup-sample.jpg',
      alt: 'Tech Startup Platform',
      title: 'Tech Startup Platform',
      description: 'Dynamic website with interactive features, blog integration, and user dashboard for a fintech startup.',
      tags: ['Tech', 'Interactive', 'User Portal'],
    },
    {
      imageSrc: '/images/ecommerce-sample.jpg',
      alt: 'School Management System',
      title: 'School Management System',
      description: 'Comprehensive educational platform with student portals, grade management, and parent communication tools.',
      tags: ['Education', 'Management', 'Portal'],
    },
    {
      imageSrc: '/images/corporate-sample.jpg',
      alt: 'Restaurant Website',
      title: 'Restaurant & Hospitality Site',
      description: 'Beautiful restaurant website with online ordering, reservation system, and menu management.',
      tags: ['Hospitality', 'Ordering', 'Reservations'],
    },
    {
      imageSrc: '/images/startup-sample.jpg',
      alt: 'Non-Profit Organization',
      title: 'Non-Profit Organization Site',
      description: 'Impactful website for NGO with donation integration, volunteer management, and impact tracking.',
      tags: ['Non-Profit', 'Donations', 'Community'],
    },
  ];

  return (
    <div className="apex-font-family" style={{ background: 'var(--apex-bg-primary)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="apex-py-xl apex-bg-secondary">
        <div className="apex-container">
          <div className="apex-text-center apex-mb-lg">
            <h1 className="apex-text-hero apex-mb-sm">
              Our Projects
            </h1>
            <div className="apex-section-highlight" />
            <p className="apex-text-body" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              Explore our portfolio of custom web solutions crafted for Kenyan businesses
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="apex-py-xl">
        <div className="apex-container">
          <div className="apex-text-center apex-mb-lg">
            <h2 className="apex-text-h1 apex-mb-sm">
              Featured Work
            </h2>
            <div className="apex-section-highlight" />
            <p className="apex-text-body" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              Each project is crafted for impact, performance, and growth
            </p>
          </div>
          
          <div className="apex-grid apex-grid-3" style={{ gap: '2rem' }}>
            {projectCards.map((card, idx) => (
              <div key={idx} className="apex-card-compact" style={{ textAlign: 'left', borderTop: '3px solid var(--apex-primary)' }}>
                <ProjectCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="apex-py-xl apex-bg-secondary">
        <div className="apex-container">
          <div className="apex-card apex-text-center">
            <h2 className="apex-text-h1 apex-mb-sm">
              Ready to Start Your Project?
            </h2>
            <div className="apex-section-highlight" />
            <p className="apex-text-body apex-mb-lg" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
              Let's discuss how we can help bring your vision to life with a custom web solution designed specifically for your business needs.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="apex-btn apex-btn-primary">
                Start Your Project
              </Link>
              <Link href="/services" className="apex-btn apex-btn-secondary">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="apex-py-xl">
        <div className="apex-container">
          <div className="apex-text-center apex-mb-lg">
            <h2 className="apex-text-h1 apex-mb-sm">
              Our Development Process
            </h2>
            <div className="apex-section-highlight" />
            <p className="apex-text-body" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              A proven methodology that ensures project success
            </p>
          </div>
          
          <div className="apex-grid apex-grid-4" style={{ gap: '2rem' }}>
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We understand your business goals, target audience, and technical requirements.'
              },
              {
                step: '02',
                title: 'Design',
                description: 'Create wireframes, mockups, and prototypes that align with your brand and objectives.'
              },
              {
                step: '03',
                title: 'Development',
                description: 'Build your solution using modern technologies and best practices for performance and security.'
              },
              {
                step: '04',
                title: 'Launch',
                description: 'Deploy your project with comprehensive testing, training, and ongoing support.'
              }
            ].map((process, index) => (
              <div key={index} className="apex-card apex-text-center apex-slide-up">
                <div style={{ 
                  fontSize: '2rem', 
                  fontWeight: 'var(--apex-weight-bold)', 
                  color: 'var(--apex-primary)', 
                  marginBottom: '1rem' 
                }}>
                  {process.step}
                </div>
                <h3 className="apex-text-h3 apex-mb-sm" style={{ color: 'var(--apex-primary-700)' }}>
                  {process.title}
                </h3>
                <p className="apex-text-body" style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
