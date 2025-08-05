"use client";
import React, { useState } from "react";
import Link from 'next/link';

export default function SeoDigitalMarketingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalForm, setModalForm] = useState({
    name: "",
    email: "",
    website: "",
    company: "",
    goals: "",
    budget: "",
  });
  const [feedback, setFeedback] = useState<null | { type: "success" | "error"; message: string }>(null);

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function formatMessage(form: typeof modalForm) {
    return `SEO & Digital Marketing Lead\n\nName: ${form.name}\nEmail: ${form.email}\nWebsite: ${form.website}\nCompany: ${form.company}\nGoals: ${form.goals}\nBudget: ${form.budget}`;
  }
  
  function handleModalSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!modalForm.name || !modalForm.email) {
      setFeedback({ type: "error", message: "Please fill all required fields." });
      return;
    }
    if (!validateEmail(modalForm.email)) {
      setFeedback({ type: "error", message: "Please enter a valid email address." });
      return;
    }
    const msg = encodeURIComponent(formatMessage(modalForm));
    window.open(`https://wa.me/254706154142?text=${msg}`, "_blank");
    window.open(`mailto:apexkelabs@gmail.com?subject=SEO & Digital Marketing Lead&amp;body=${msg}`, "_blank");
    setFeedback({ type: "success", message: "Your request was sent! We will contact you soon." });
    setModalForm({ name: "", email: "", website: "", company: "", goals: "", budget: "" });
    setTimeout(() => setModalOpen(false), 2000);
  }

  const features = [
    {
      icon: '🔍',
      title: "Search Engine Optimization",
      desc: "Improve your website's visibility and ranking on Google and other search engines.",
    },
    {
      icon: '📱',
      title: "Social Media Marketing",
      desc: "Build your brand presence across Facebook, Instagram, Twitter, and LinkedIn.",
    },
    {
      icon: '📧',
      title: "Email Marketing",
      desc: "Engage your customers with targeted email campaigns that drive conversions.",
    },
    {
      icon: '📊',
      title: "Analytics & Reporting",
      desc: "Track your marketing performance with detailed analytics and actionable insights.",
    },
    {
      icon: '💰',
      title: "Pay-Per-Click Advertising",
      desc: "Maximize ROI with targeted Google Ads and social media advertising campaigns.",
    },
    {
      icon: '📝',
      title: "Content Marketing",
      desc: "Create compelling content that attracts, engages, and converts your target audience.",
    },
  ];

  const benefits = [
    {
      title: "Increase Online Visibility",
      desc: "Get found by more potential customers when they search for your products or services."
    },
    {
      title: "Drive Quality Traffic",
      desc: "Attract visitors who are genuinely interested in what your business offers."
    },
    {
      title: "Boost Conversions",
      desc: "Turn more website visitors into paying customers with strategic marketing."
    }
  ];

  const packages = [
    {
      name: "Starter SEO",
      price: "KSh 15,000/month",
      features: [
        "Keyword Research",
        "On-Page Optimization",
        "Monthly Reports",
        "Basic Link Building"
      ]
    },
    {
      name: "Professional Marketing",
      price: "KSh 35,000/month",
      features: [
        "Everything in Starter",
        "Social Media Management",
        "Content Creation",
        "Email Marketing",
        "PPC Campaign Setup"
      ]
    },
    {
      name: "Enterprise Solution",
      price: "KSh 60,000+/month",
      features: [
        "Everything in Professional",
        "Advanced Analytics",
        "Multi-Platform Campaigns",
        "Dedicated Account Manager",
        "Custom Strategy"
      ]
    }
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
              Get Marketing Strategy
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
                  type="url"
                  placeholder="Current Website (if any)"
                  value={modalForm.website}
                  onChange={(e) => setModalForm({...modalForm, website: e.target.value})}
                  className="apex-input"
                />
                <input
                  type="text"
                  placeholder="Company/Business Name"
                  value={modalForm.company}
                  onChange={(e) => setModalForm({...modalForm, company: e.target.value})}
                  className="apex-input"
                />
                <select
                  value={modalForm.budget}
                  onChange={(e) => setModalForm({...modalForm, budget: e.target.value})}
                  className="apex-input"
                >
                  <option value="">Select Budget Range</option>
                  <option value="Under KSh 20,000">Under KSh 20,000</option>
                  <option value="KSh 20,000 - 50,000">KSh 20,000 - 50,000</option>
                  <option value="KSh 50,000 - 100,000">KSh 50,000 - 100,000</option>
                  <option value="Over KSh 100,000">Over KSh 100,000</option>
                </select>
                <textarea
                  placeholder="Describe your marketing goals"
                  value={modalForm.goals}
                  onChange={(e) => setModalForm({...modalForm, goals: e.target.value})}
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
              SEO & Digital Marketing
            </h1>
            <div className="apex-section-highlight" />
            <p className="apex-text-body" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              Grow your business with data-driven digital marketing strategies
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="apex-py-xl">
        <div className="apex-container">
          <div className="apex-text-center apex-mb-lg">
            <h2 className="apex-text-h1 apex-mb-sm">
              Our Marketing Services
            </h2>
            <div className="apex-section-highlight" />
          </div>
          
          <div className="apex-grid apex-grid-3" style={{ gap: '2rem' }}>
            {features.map((feature, index) => (
              <div key={index} className="apex-card apex-text-center">
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                  {feature.icon}
                </div>
                <h3 className="apex-text-h3 apex-mb-sm" style={{ color: 'var(--apex-primary-700)' }}>
                  {feature.title}
                </h3>
                <p className="apex-text-body" style={{ color: '#64748b' }}>
                  {feature.desc}
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
              Marketing Packages
            </h2>
            <div className="apex-section-highlight" />
          </div>
          
          <div className="apex-grid apex-grid-3" style={{ gap: '2rem' }}>
            {packages.map((pkg, index) => (
              <div key={index} className="apex-card">
                <h3 className="apex-text-h3 apex-mb-sm" style={{ color: 'var(--apex-primary-700)' }}>
                  {pkg.name}
                </h3>
                <div className="apex-text-h2 apex-mb-md" style={{ color: 'var(--apex-primary)' }}>
                  {pkg.price}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="apex-mb-xs" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--apex-accent-red)', fontWeight: 'bold' }}>✓</span>
                      <span className="apex-text-small" style={{ color: '#64748b' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setModalOpen(true)}
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

      {/* Benefits */}
      <section className="apex-py-xl">
        <div className="apex-container">
          <div className="apex-text-center apex-mb-lg">
            <h2 className="apex-text-h1 apex-mb-sm">
              Why Digital Marketing?
            </h2>
            <div className="apex-section-highlight" />
          </div>
          
          <div className="apex-grid apex-grid-3" style={{ gap: '2rem' }}>
            {benefits.map((benefit, index) => (
              <div key={index} className="apex-card">
                <h3 className="apex-text-h3 apex-mb-sm" style={{ color: 'var(--apex-primary-700)' }}>
                  {benefit.title}
                </h3>
                <p className="apex-text-body" style={{ color: '#64748b' }}>
                  {benefit.desc}
                </p>
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
              Ready to Grow Your Business?
            </h2>
            <div className="apex-section-highlight" />
            <p className="apex-text-body apex-mb-lg" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
              Let's create a custom digital marketing strategy that drives real results for your business.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => setModalOpen(true)}
                className="apex-btn apex-btn-primary"
              >
                Get Marketing Strategy
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
