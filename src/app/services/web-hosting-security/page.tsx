"use client";
import React, { useState } from "react";
import Link from 'next/link';

export default function WebHostingSecurityPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalForm, setModalForm] = useState({
    name: "",
    email: "",
    website: "",
    company: "",
    hostingType: "",
    requirements: "",
  });
  const [feedback, setFeedback] = useState<null | { type: "success" | "error"; message: string }>(null);

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function formatMessage(form: typeof modalForm) {
    return `Web Hosting & Security Lead\n\nName: ${form.name}\nEmail: ${form.email}\nWebsite: ${form.website}\nCompany: ${form.company}\nHosting Type: ${form.hostingType}\nRequirements: ${form.requirements}`;
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
    window.open(`mailto:apexkelabs@gmail.com?subject=Web Hosting & Security Lead&amp;body=${msg}`, "_blank");
    setFeedback({ type: "success", message: "Your request was sent! We will contact you soon." });
    setModalForm({ name: "", email: "", website: "", company: "", hostingType: "", requirements: "" });
    setTimeout(() => setModalOpen(false), 2000);
  }

  const features = [
    {
      icon: '🚀',
      title: "High-Performance Hosting",
      desc: "Lightning-fast SSD storage and optimized servers for maximum website speed.",
    },
    {
      icon: '🔒',
      title: "SSL Certificates",
      desc: "Free SSL certificates to secure your website and build customer trust.",
    },
    {
      icon: '🛡️',
      title: "Advanced Security",
      desc: "Firewall protection, malware scanning, and DDoS protection included.",
    },
    {
      icon: '📊',
      title: "99.9% Uptime",
      desc: "Reliable hosting with guaranteed uptime and 24/7 monitoring.",
    },
    {
      icon: '💾',
      title: "Automated Backups",
      desc: "Daily backups to keep your data safe and easily recoverable.",
    },
    {
      icon: '🎯',
      title: "Kenya-Based Servers",
      desc: "Local hosting for faster loading times for your Kenyan audience.",
    },
  ];

  const hostingPlans = [
    {
      name: "Starter Hosting",
      price: "KSh 2,500/month",
      features: [
        "5GB SSD Storage",
        "Free SSL Certificate",
        "Email Accounts",
        "Basic Security",
        "24/7 Support"
      ]
    },
    {
      name: "Business Hosting",
      price: "KSh 5,000/month",
      features: [
        "25GB SSD Storage",
        "Free SSL Certificate",
        "Unlimited Email",
        "Advanced Security",
        "Daily Backups",
        "Priority Support"
      ]
    },
    {
      name: "Enterprise Hosting",
      price: "KSh 12,000/month",
      features: [
        "100GB SSD Storage",
        "Premium SSL",
        "Dedicated Resources",
        "Enhanced Security",
        "Real-time Backups",
        "Dedicated Support"
      ]
    }
  ];

  const benefits = [
    {
      title: "Local Advantage",
      desc: "Kenya-based servers ensure fast loading times for your local audience."
    },
    {
      title: "Complete Security",
      desc: "Comprehensive protection against cyber threats and data breaches."
    },
    {
      title: "Expert Support",
      desc: "Local technical support team available 24/7 to help you succeed."
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
              Get Hosting Quote
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
                  value={modalForm.hostingType}
                  onChange={(e) => setModalForm({...modalForm, hostingType: e.target.value})}
                  className="apex-input"
                >
                  <option value="">Select Hosting Type</option>
                  <option value="Shared Hosting">Shared Hosting</option>
                  <option value="VPS Hosting">VPS Hosting</option>
                  <option value="Dedicated Server">Dedicated Server</option>
                  <option value="Cloud Hosting">Cloud Hosting</option>
                </select>
                <textarea
                  placeholder="Describe your hosting requirements"
                  value={modalForm.requirements}
                  onChange={(e) => setModalForm({...modalForm, requirements: e.target.value})}
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
              Web Hosting & Security
            </h1>
            <div className="apex-section-highlight" />
            <p className="apex-text-body" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              Reliable, secure, and fast hosting solutions for your business
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="apex-py-xl">
        <div className="apex-container">
          <div className="apex-text-center apex-mb-lg">
            <h2 className="apex-text-h1 apex-mb-sm">
              Hosting Features
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

      {/* Hosting Plans */}
      <section className="apex-py-xl apex-bg-secondary">
        <div className="apex-container">
          <div className="apex-text-center apex-mb-lg">
            <h2 className="apex-text-h1 apex-mb-sm">
              Hosting Plans
            </h2>
            <div className="apex-section-highlight" />
          </div>
          
          <div className="apex-grid apex-grid-3" style={{ gap: '2rem' }}>
            {hostingPlans.map((plan, index) => (
              <div key={index} className="apex-card">
                <h3 className="apex-text-h3 apex-mb-sm" style={{ color: 'var(--apex-primary-700)' }}>
                  {plan.name}
                </h3>
                <div className="apex-text-h2 apex-mb-md" style={{ color: 'var(--apex-primary)' }}>
                  {plan.price}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
                  {plan.features.map((feature, idx) => (
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
                  Choose Plan
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
              Why Choose Our Hosting?
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
              Ready to Host Your Website?
            </h2>
            <div className="apex-section-highlight" />
            <p className="apex-text-body apex-mb-lg" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
              Get reliable, secure hosting with local support and guaranteed uptime for your business.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => setModalOpen(true)}
                className="apex-btn apex-btn-primary"
              >
                Get Hosting Quote
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
