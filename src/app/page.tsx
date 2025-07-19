"use client";
import AboutPurposeSection from '../../components/AboutPurposeSection';
import ServicesSection from '../../components/ServicesSection';
import ProjectCard from '../../components/ProjectCard';
import ContactModal from '../../components/ContactModal';
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
    <div style={{ background: '#f8fafc' }}>
      {/* HERO SECTION */}
      <section id="hero" className="hero-section-bg">
        <div className="hero-section-content">
          <h1>
            Innovative Web Solutions<br />
            <span style={{ color: '#00704A', display: 'block' }}>for Kenyan Business<br />Growth</span>
          </h1>
          <p>
            Apex Webs provides cutting-edge web applications, development services, and hosting solutions designed specifically for the unique challenges and opportunities in the Kenyan market.
          </p>
          <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap', marginTop: 8 }}>
            <a href="#services" className="hero-btn">Explore Our Solutions</a>
            <a href="#contact" className="hero-btn">Request Consultation</a>
          </div>
        </div>
      </section>
      <section id="about">
        <AboutPurposeSection />
      </section>
      <ServicesSection />
      {/* PROJECTS SECTION */}
      <section id="projects" style={{ background: '#fff', padding: '3rem 1rem', margin: '2.5rem 0', borderRadius: 18, boxShadow: '0 4px 24px #00704A22', maxWidth: 1100, marginLeft: 'auto', marginRight: 'auto' }}>
        <h2 style={{ color: '#19977a', fontWeight: 800, fontSize: '2.5rem', textAlign: 'center', marginBottom: 8 }}>
          Recent Projects
        </h2>
        <div style={{ width: 60, height: 5, background: '#e53935', borderRadius: 3, margin: '0 auto 2.5rem auto' }} />
        <p style={{ color: '#444', fontWeight: 500, fontSize: '1.15rem', textAlign: 'center', marginBottom: 24 }}>
          See examples of our custom website development work for Kenyan businesses
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {[
            {
              imageSrc: "/images/ecommerce-sample.jpg",
              alt: "E-commerce Platform",
              title: "Modern E-commerce Platform",
              description: "Complete online store with payment integration, inventory management, and customer portal for a fashion retailer.",
              tags: ["E-commerce", "Responsive", "Payment Gateway"],
            },
            {
              imageSrc: "/images/corporate-sample.jpg",
              alt: "Professional Service Website",
              title: "Professional Service Website",
              description: "Corporate website with service showcases, team profiles, and client testimonials for a consulting firm.",
              tags: ["Corporate", "CMS", "SEO Optimized"],
            },
            {
              imageSrc: "/images/startup-sample.jpg",
              alt: "Tech Startup Platform",
              title: "Tech Startup Platform",
              description: "Dynamic website with interactive features, blog integration, and user dashboard for a fintech startup.",
              tags: ["Tech", "Interactive", "User Portal"],
            },
          ].map((card, idx) => (
            <ProjectCard key={idx} {...card} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href="/projects" className="view-projects-btn" style={{ background: 'linear-gradient(90deg, #00704A 0%, #0ea5e9 100%)', color: '#fff', fontWeight: 700, fontSize: '1.08rem', borderRadius: 8, padding: '0.9rem 2.2rem', boxShadow: '0 2px 8px #0ea5e955', border: 'none', outline: 'none', cursor: 'pointer', transition: 'background 0.22s, box-shadow 0.22s, transform 0.18s', display: 'inline-block', textDecoration: 'none' }}>View More Projects</a>
        </div>
      </section>
      {/* CONTACT SECTION - RESTORED */}
      <section id="contact" style={{ background: 'linear-gradient(135deg, #1db7a4 0%, #0f7c91 100%)', color: '#fff', padding: '3rem 1rem', marginTop: '2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '2.5rem', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          {/* Brand/About */}
          <div style={{ flex: 1, minWidth: 220 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
              <Image src="/images/ApexLogo.jpg" alt="Apex Webs Logo" width={38} height={38} style={{ borderRadius: '50%', objectFit: 'cover', background: '#fff' }} />
              <span style={{ fontWeight: 700, fontSize: '1.25rem', color: '#fff' }}>Apex <span style={{ color: '#e0f7fa' }}>Webs</span></span>
            </div>
            <div style={{ fontSize: 15, marginBottom: 8, color: '#e0f7fa' }}>Building innovative web solutions for Kenyan businesses since 2023.</div>
            <div style={{ fontSize: 15, marginBottom: 18, color: '#e0f7fa' }}>Pamoja Twaweza: Together We Can</div>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href="#" style={{ color: '#fff', background: '#19977a', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Image src="/twitter.svg" alt="Twitter" width={18} height={18} /></a>
              <a href="#" style={{ color: '#fff', background: '#19977a', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Image src="/linkedin.svg" alt="LinkedIn" width={18} height={18} /></a>
              <a href="#" style={{ color: '#fff', background: '#19977a', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Image src="/facebook.svg" alt="Facebook" width={18} height={18} /></a>
              <a href="#" style={{ color: '#fff', background: '#19977a', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Image src="/instagram.svg" alt="Instagram" width={18} height={18} /></a>
            </div>
          </div>
          {/* Quick Links */}
          <div style={{ flex: 1, minWidth: 180 }}>
            <div style={{ fontWeight: 700, fontSize: '1.08rem', marginBottom: 8 }}>Quick Links</div>
            <div style={{ width: 40, height: 3, background: '#e53935', borderRadius: 2, marginBottom: 14 }} />
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#e0f7fa', fontSize: 15 }}>
              <li style={{ marginBottom: 8 }}><Link href="/" style={{ color: '#e0f7fa' }}>Home</Link></li>
              <li style={{ marginBottom: 8 }}><Link href="/about" style={{ color: '#e0f7fa' }}>About Us</Link></li>
              <li style={{ marginBottom: 8 }}><Link href="/services" style={{ color: '#e0f7fa' }}>Services</Link></li>
              <li style={{ marginBottom: 8 }}><Link href="/projects" style={{ color: '#e0f7fa' }}>Projects</Link></li>
              <li style={{ marginBottom: 8 }}><a href="#" id="contact-link" style={{ color: '#e0f7fa' }}>Contact</a></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div style={{ flex: 1, minWidth: 220 }}>
            <div style={{ fontWeight: 700, fontSize: '1.08rem', marginBottom: 8 }}>Contact Us</div>
            <div style={{ width: 40, height: 3, background: '#e53935', borderRadius: 2, marginBottom: 14 }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <Image src="/globe.svg" alt="Email" width={18} height={18} />
              <span style={{ color: '#e0f7fa', fontSize: 15 }}>info@apexwebs.co.ke</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <Image src="/file.svg" alt="Location" width={18} height={18} />
              <span style={{ color: '#e0f7fa', fontSize: 15 }}>Mombasa, Kenya</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <Image src="/window.svg" alt="Phone" width={18} height={18} />
              <span style={{ color: '#e0f7fa', fontSize: 15 }}>+254 743 581 914</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <Image src="/globe.svg" alt="Website" width={18} height={18} />
              <span style={{ color: '#e0f7fa', fontSize: 15 }}>www.apexwebs.co.ke</span>
            </div>
          </div>
        </div>
      </section>
      {/* Simple Footer - seamless, no divider */}
      <footer style={{ background: '#26323a', color: '#e0f7fa', padding: '1.1rem 0', textAlign: 'center', fontSize: 16, marginTop: 0 }}>
        &copy; {new Date().getFullYear()} Apex Webs. All rights reserved. Empowering Kenyan businesses through innovative web solutions.
      </footer>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
