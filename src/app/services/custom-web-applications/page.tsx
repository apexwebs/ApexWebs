"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function CustomWebAppPage() {
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  
  // Form state for modal
  const [modalForm, setModalForm] = useState({
    name: '',
    businessType: '',
    email: '',
    packageType: '',
    phone: '',
    timeline: '',
    company: '',
    budget: '',
    description: '',
    features: [] as string[],
    urls: '',
  });

  // Helper functions
  function formatMessage(form: typeof modalForm) {
    return `New Web Project Request\n\nName: ${form.name}\nBusiness Type: ${form.businessType}\nEmail: ${form.email}\nPhone: ${form.phone}\nCompany: ${form.company}\nBudget: ${form.budget}\nSelected Package: ${selectedPackage || ''}\nTimeline: ${form.timeline}\nDescription: ${form.description}\nFeatures Needed: ${form.features.join(', ')}\nReference URLs: ${form.urls}`;
  }

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateKenyanPhone(phone: string) {
    return /^(\+254|0)7\d{8}$/.test(phone);
  }

  // Modal form submit handler
  async function handleModalSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    if (!modalForm.name || !modalForm.email || !modalForm.phone) {
      setFeedback({ type: 'error', message: 'Please fill all required fields.' });
      return;
    }
    if (!validateEmail(modalForm.email)) {
      setFeedback({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }
    if (!validateKenyanPhone(modalForm.phone)) {
      setFeedback({ type: 'error', message: 'Please enter a valid Kenyan phone number (e.g. 0712345678 or +254712345678).' });
      return;
    }
    
    try {
      const leadData = {
        name: modalForm.name,
        phone: modalForm.phone,
        company: modalForm.company,
        projectDetails: `${modalForm.packageType} Package - ${modalForm.description}\n\nBusiness: ${modalForm.businessType}\nTimeline: ${modalForm.timeline}\nBudget: ${modalForm.budget}\nFeatures: ${modalForm.features.join(', ')}\nURLs: ${modalForm.urls}`
      };
      
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const msg = encodeURIComponent(formatMessage(modalForm));
      window.open(`https://wa.me/254706154142?text=${msg}`, '_blank');
      window.open(`mailto:apexkelabs@gmail.com?subject=New Web Project Request&body=${msg}`, '_blank');
      
      setFeedback({ type: 'success', message: 'Your request was sent! We will contact you soon.' });
      setModalForm({
        name: '', businessType: '', email: '', packageType: '', phone: '', timeline: '', company: '', budget: '', description: '', features: [], urls: ''
      });
      setTimeout(() => setModalOpen(false), 2000);
    } catch (error) {
      console.error('Error submitting lead:', error);
      const msg = encodeURIComponent(formatMessage(modalForm));
      window.open(`https://wa.me/254706154142?text=${msg}`, '_blank');
      window.open(`mailto:apexkelabs@gmail.com?subject=New Web Project Request&body=${msg}`, '_blank');
      
      setFeedback({ type: 'success', message: 'Your request was sent! We will contact you soon.' });
      setModalForm({
        name: '', businessType: '', email: '', packageType: '', phone: '', timeline: '', company: '', budget: '', description: '', features: [], urls: ''
      });
      setTimeout(() => setModalOpen(false), 2000);
    }
  }

  function openModalForPackage(pkg: string) {
    setSelectedPackage(pkg);
    setModalForm((f) => ({ ...f, packageType: pkg }));
    setFeedback(null);
    setModalOpen(true);
  }

  // Package data
  const packages = [
    {
      name: 'Starter Package',
      price: 'KSh 25,000 - 45,000',
      description: 'Perfect for small businesses and startups',
      features: [
        'Responsive Design (Mobile & Desktop)',
        'Up to 5 Pages',
        'Contact Forms',
        'Basic SEO Setup',
        'Social Media Integration',
        '3 Months Support'
      ],
      popular: false
    },
    {
      name: 'Professional Package',
      price: 'KSh 50,000 - 85,000',
      description: 'Ideal for growing businesses',
      features: [
        'Everything in Starter',
        'Up to 10 Pages',
        'Content Management System',
        'Advanced SEO',
        'Analytics Integration',
        'Payment Gateway Integration',
        '6 Months Support'
      ],
      popular: true
    },
    {
      name: 'Enterprise Package',
      price: 'KSh 100,000+',
      description: 'For large businesses and complex needs',
      features: [
        'Everything in Professional',
        'Unlimited Pages',
        'Custom Functionality',
        'API Integrations',
        'Advanced Security',
        'Performance Optimization',
        '12 Months Support'
      ],
      popular: false
    }
  ];

  const whyChooseUs = [
    {
      icon: '🎯',
      title: 'Proven Results',
      desc: 'Our websites deliver measurable growth and engagement for Kenyan businesses.',
    },
    {
      icon: '⚡',
      title: 'Fast & Secure',
      desc: 'Optimized for speed, security, and reliability on every device.',
    },
    {
      icon: '🌍',
      title: 'Local Expertise',
      desc: 'We understand the Kenyan market and build solutions for local needs.',
    },
  ];

  const testimonials = [
    {
      name: 'Jane Mwangi',
      company: 'Fashion Retailer',
      quote: 'Apex Webs built us a beautiful, fast online store. Our sales doubled in 3 months!',
    },
    {
      name: 'David Otieno',
      company: 'Consultancy',
      quote: 'The team understood our needs and delivered a site that attracts new clients every week.',
    },
    {
      name: 'Sarah Kimani',
      company: 'Restaurant Owner',
      quote: 'Our online ordering system has been a game-changer for our business growth.',
    },
  ];

  return (
    <div className="apex-font-family" style={{ background: 'var(--apex-bg-primary)', minHeight: '100vh' }}>
      {/* Modal */}
      {modalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.7)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}>
          <div className="apex-card" style={{
            maxWidth: '500px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative'
          }}>
            <button
              onClick={() => setModalOpen(false)}
              className="apex-btn"
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'var(--apex-accent-red)',
                color: 'white',
                padding: '0.5rem',
                minWidth: 'auto',
                width: '32px',
                height: '32px',
                borderRadius: '50%'
              }}
            >
              ×
            </button>
            
            <h3 className="apex-text-h3 apex-mb-md" style={{ color: 'var(--apex-primary-700)' }}>
              Get Started with {selectedPackage}
            </h3>
            
            {feedback && (
              <div style={{
                padding: '0.75rem',
                borderRadius: '0.5rem',
                marginBottom: '1rem',
                background: feedback.type === 'success' ? '#d4edda' : '#f8d7da',
                color: feedback.type === 'success' ? '#155724' : '#721c24',
                border: `1px solid ${feedback.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
              }}>
                {feedback.message}
              </div>
            )}
            
            <form onSubmit={handleModalSubmit}>
              <div style={{ display: 'grid', gap: '1rem' }}>
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={modalForm.name}
                  onChange={(e) => setModalForm({...modalForm, name: e.target.value})}
                  className="apex-input"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  value={modalForm.email}
                  onChange={(e) => setModalForm({...modalForm, email: e.target.value})}
                  className="apex-input"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={modalForm.phone}
                  onChange={(e) => setModalForm({...modalForm, phone: e.target.value})}
                  className="apex-input"
                  required
                />
                <input
                  type="text"
                  placeholder="Company/Business Name"
                  value={modalForm.company}
                  onChange={(e) => setModalForm({...modalForm, company: e.target.value})}
                  className="apex-input"
                />
                <select
                  value={modalForm.businessType}
                  onChange={(e) => setModalForm({...modalForm, businessType: e.target.value})}
                  className="apex-input"
                >
                  <option value="">Select Business Type</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Service Business">Service Business</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Education">Education</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Non-Profit">Non-Profit</option>
                  <option value="Other">Other</option>
                </select>
                <textarea
                  placeholder="Project Description"
                  value={modalForm.description}
                  onChange={(e) => setModalForm({...modalForm, description: e.target.value})}
                  className="apex-input"
                  rows={3}
                />
                <button type="submit" className="apex-btn apex-btn-primary">
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="apex-py-xl apex-bg-secondary">
        <div className="apex-container">
          <div className="apex-text-center apex-mb-lg">
            <h1 className="apex-text-hero apex-mb-sm">
              Custom Web Applications
            </h1>
            <div className="apex-section-highlight" />
            <p className="apex-text-body" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              Powerful, scalable web applications tailored for Kenyan businesses
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="apex-py-xl">
        <div className="apex-container">
          <div className="apex-text-center apex-mb-lg">
            <h2 className="apex-text-h1 apex-mb-sm">
              Why Choose Apex Webs?
            </h2>
            <div className="apex-section-highlight" />
          </div>
          
          <div className="apex-grid apex-grid-3" style={{ gap: '2rem' }}>
            {whyChooseUs.map((item, index) => (
              <div key={index} className="apex-card apex-text-center">
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                  {item.icon}
                </div>
                <h3 className="apex-text-h3 apex-mb-sm" style={{ color: 'var(--apex-primary-700)' }}>
                  {item.title}
                </h3>
                <p className="apex-text-body" style={{ color: '#64748b' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="apex-py-xl apex-bg-secondary">
        <div className="apex-container">
          <div className="apex-text-center apex-mb-lg">
            <h2 className="apex-text-h1 apex-mb-sm">
              Our Packages
            </h2>
            <div className="apex-section-highlight" />
            <p className="apex-text-body" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              Choose the perfect package for your business needs
            </p>
          </div>
          
          <div className="apex-grid apex-grid-3" style={{ gap: '2rem' }}>
            {packages.map((pkg, index) => (
              <div key={index} className="apex-card" style={{ position: 'relative' }}>
                {pkg.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--apex-accent-red)',
                    color: 'white',
                    padding: '0.25rem 1rem',
                    borderRadius: '1rem',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    Most Popular
                  </div>
                )}
                
                <h3 className="apex-text-h3 apex-mb-sm" style={{ color: 'var(--apex-primary-700)' }}>
                  {pkg.name}
                </h3>
                <div className="apex-text-h2 apex-mb-sm" style={{ color: 'var(--apex-primary)' }}>
                  {pkg.price}
                </div>
                <p className="apex-text-body apex-mb-md" style={{ color: '#64748b' }}>
                  {pkg.description}
                </p>
                
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="apex-mb-xs" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--apex-accent-red)', fontWeight: 'bold' }}>✓</span>
                      <span className="apex-text-small" style={{ color: '#64748b' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => openModalForPackage(pkg.name)}
                  className="apex-btn apex-btn-primary"
                  style={{ width: '100%' }}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="apex-py-xl">
        <div className="apex-container">
          <div className="apex-text-center apex-mb-lg">
            <h2 className="apex-text-h1 apex-mb-sm">
              What Our Clients Say
            </h2>
            <div className="apex-section-highlight" />
          </div>
          
          <div className="apex-grid apex-grid-3" style={{ gap: '2rem' }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="apex-card">
                <p className="apex-text-body apex-mb-md" style={{ fontStyle: 'italic', color: '#64748b' }}>
                  "{testimonial.quote}"
                </p>
                <div>
                  <h4 className="apex-text-h4" style={{ color: 'var(--apex-primary-700)', margin: 0 }}>
                    {testimonial.name}
                  </h4>
                  <p className="apex-text-small" style={{ color: 'var(--apex-primary-500)', margin: 0 }}>
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="apex-py-xl apex-bg-secondary">
        <div className="apex-container">
          <div className="apex-card apex-text-center">
            <h2 className="apex-text-h1 apex-mb-sm">
              Ready to Transform Your Business?
            </h2>
            <div className="apex-section-highlight" />
            <p className="apex-text-body apex-mb-lg" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
              Let's discuss your project and create a custom web application that drives your business forward.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => window.open('https://wa.me/254706154142?text=Hi! I want a quote for a custom web application.', '_blank')}
                className="apex-btn apex-btn-primary"
              >
                Get Free Quote
              </button>
              <Link href="/contact" className="apex-btn apex-btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
