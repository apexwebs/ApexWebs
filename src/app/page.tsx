"use client";
import AboutPurposeSection from '../components/AboutPurposeSection';
import ServicesSection from '../components/ServicesSection';
import ProjectCard from '../components/ProjectCard';
import ContactModal from '../components/ContactModal';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const link = document.getElementById('contact-link');
    if (link) {
      link.onclick = (e) => {
        e.preventDefault();
        setContactOpen(true);
      };
    }
    return () => {
      if (link) link.onclick = null;
    };
  }, []);

  return (
    <div className="apex-font-family" style={{ background: 'var(--apex-bg-primary)', minHeight: '100vh' }}>
      {/* HERO SECTION */}
      <section id="hero" className="apex-hero-section apex-fade-in">
        <div className="apex-container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="apex-text-hero apex-text-center apex-mb-md">
              Innovative Web Solutions
              <span style={{ display: 'block', marginTop: '0.5rem' }}>for Kenyan Business Growth</span>
            </h1>
            <p className="apex-text-body apex-text-center apex-mb-lg" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
              Apex Webs provides cutting-edge web applications, development services, and hosting solutions designed specifically for the unique challenges and opportunities in the Kenyan market.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#services" className="apex-btn apex-btn-primary apex-slide-up">Explore Our Solutions</a>
              <a href="#contact" className="apex-btn apex-btn-secondary apex-slide-up">Request Consultation</a>
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT SECTION */}
      <section id="about" className="apex-py-xl">
        <AboutPurposeSection />
      </section>
      
      {/* SERVICES SECTION */}
      <section id="services" className="apex-py-xl apex-bg-secondary">
        <ServicesSection />
      </section>
      
      {/* PROJECTS SECTION */}
      <section id="projects" className="apex-py-xl">
        <div className="apex-container">
          <div className="apex-card" style={{ textAlign: 'center', borderTop: '4px solid var(--apex-accent-red)' }}>
            <h2 className="apex-text-h1 apex-text-center apex-mb-sm">
              Recent Projects
            </h2>
            <div className="apex-section-highlight" />
            <p className="apex-text-body apex-text-center apex-mb-lg" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
              See examples of our custom website development work for Kenyan businesses
            </p>
            
            <div className="apex-grid apex-grid-3 apex-mb-lg">
              {[
                {
                  imageSrc: "/images/ecommerce-sample.png",
                  alt: "E-commerce Platform",
                  title: "Modern E-commerce Platform",
                  description: "Complete online store with payment integration, inventory management, and customer portal for a fashion retailer.",
                  tags: ["E-commerce", "Responsive", "Payment Gateway"],
                },
                {
                  imageSrc: "/images/corporate-sample.jpeg",
                  alt: "Professional Service Website",
                  title: "Professional Service Website",
                  description: "Corporate website with service showcases, team profiles, and client testimonials for a consulting firm.",
                  tags: ["Corporate", "CMS", "SEO Optimized"],
                },
                {
                  imageSrc: "/images/startup-sample.jpeg",
                  alt: "Tech Startup Platform",
                  title: "Tech Startup Platform",
                  description: "Dynamic website with interactive features, blog integration, and user dashboard for a fintech startup.",
                  tags: ["Tech", "Interactive", "User Portal"],
                },
              ].map((card, idx) => (
                <div key={idx} className="apex-card-compact" style={{ textAlign: 'left', borderTop: '3px solid var(--apex-primary)' }}>
                  <ProjectCard {...card} />
                </div>
              ))}
            </div>
            
            <div className="apex-text-center">
              <a href="/projects" className="apex-btn apex-btn-primary">View More Projects</a>
            </div>
          </div>
        </div>
      </section>
      {/* CONTACT SECTION */}
      <section id="contact" className="apex-py-xl apex-slide-up" style={{ background: 'linear-gradient(135deg, var(--apex-primary) 0%, var(--apex-primary-dark) 100%)', color: '#fff', marginBottom: '0' }}>
        <div className="apex-container">
          <div className="apex-grid apex-grid-3" style={{ gap: '2rem' }}>
            {/* Brand/About */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Image src="/images/ApexLogo.jpg" alt="Apex Webs Logo" width={38} height={38} style={{ borderRadius: '50%', objectFit: 'cover', background: '#fff' }} />
                <span className="apex-text-h3" style={{ color: '#fff' }}>Apex <span style={{ color: 'var(--apex-primary-100)' }}>Webs</span></span>
              </div>
              <p className="apex-text-body apex-mb-sm" style={{ color: 'var(--apex-primary-100)', fontSize: '0.9rem' }}>
                Building innovative web solutions for Kenyan businesses since 2023.
              </p>
              <p className="apex-text-body apex-mb-md" style={{ color: 'var(--apex-primary-100)', fontSize: '0.9rem', fontWeight: '500' }}>
                Pamoja Twaweza: Together We Can
              </p>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a href="#" className="apex-card-compact" style={{ color: '#fff', background: 'var(--apex-primary-dark)', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0' }}>
                  <Image src="/twitter.svg" alt="Twitter" width={18} height={18} />
                </a>
                <a href="#" className="apex-card-compact" style={{ color: '#fff', background: 'var(--apex-primary-dark)', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0' }}>
                  <Image src="/linkedin.svg" alt="LinkedIn" width={18} height={18} />
                </a>
                <a href="#" className="apex-card-compact" style={{ color: '#fff', background: 'var(--apex-primary-dark)', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0' }}>
                  <Image src="/facebook.svg" alt="Facebook" width={18} height={18} />
                </a>
                <a href="#" className="apex-card-compact" style={{ color: '#fff', background: 'var(--apex-primary-dark)', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0' }}>
                  <Image src="/instagram.svg" alt="Instagram" width={18} height={18} />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="apex-text-h3 apex-mb-sm" style={{ color: '#fff' }}>Quick Links</h3>
              <div style={{ width: '40px', height: '3px', background: 'var(--apex-accent-red)', borderRadius: '2px', marginBottom: '1rem' }} />
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="apex-mb-sm">
                  <Link href="/" className="apex-text-body" style={{ color: 'var(--apex-primary-100)', textDecoration: 'none', transition: 'color var(--apex-transition-fast)' }}>Home</Link>
                </li>
                <li className="apex-mb-sm">
                  <Link href="/about" className="apex-text-body" style={{ color: 'var(--apex-primary-100)', textDecoration: 'none', transition: 'color var(--apex-transition-fast)' }}>About Us</Link>
                </li>
                <li className="apex-mb-sm">
                  <Link href="/services" className="apex-text-body" style={{ color: 'var(--apex-primary-100)', textDecoration: 'none', transition: 'color var(--apex-transition-fast)' }}>Services</Link>
                </li>
                <li className="apex-mb-sm">
                  <Link href="/projects" className="apex-text-body" style={{ color: 'var(--apex-primary-100)', textDecoration: 'none', transition: 'color var(--apex-transition-fast)' }}>Projects</Link>
                </li>
                <li className="apex-mb-sm">
                  <a href="#" id="contact-link" className="apex-text-body" style={{ color: 'var(--apex-primary-100)', textDecoration: 'none', transition: 'color var(--apex-transition-fast)' }}>Contact</a>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="apex-text-h3 apex-mb-sm" style={{ color: '#fff' }}>Contact Us</h3>
              <div style={{ width: '40px', height: '3px', background: 'var(--apex-accent-red)', borderRadius: '2px', marginBottom: '1rem' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <Image src="/globe.svg" alt="Email" width={18} height={18} />
                <span className="apex-text-body" style={{ color: 'var(--apex-primary-100)' }}>info@apexwebs.co.ke</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <Image src="/file.svg" alt="Location" width={18} height={18} />
                <span className="apex-text-body" style={{ color: 'var(--apex-primary-100)' }}>Mombasa, Kenya</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <Image src="/window.svg" alt="Phone" width={18} height={18} />
                <span className="apex-text-body" style={{ color: 'var(--apex-primary-100)' }}>+254 743 581 914</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <Image src="/globe.svg" alt="Website" width={18} height={18} />
                <span className="apex-text-body" style={{ color: 'var(--apex-primary-100)' }}>www.apexwebs.co.ke</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer removed as requested */}
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
