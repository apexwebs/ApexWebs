"use client";
import React, { useState } from "react";
import Link from 'next/link';

export default function ApiIntegrationServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalForm, setModalForm] = useState({
    name: "",
    email: "",
    businessType: "",
    company: "",
    apiNeeds: "",
  });
  const [feedback, setFeedback] = useState<null | { type: "success" | "error"; message: string }>(null);

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function formatMessage(form: typeof modalForm) {
    return `API Integration Lead\n\nName: ${form.name}\nEmail: ${form.email}\nBusiness Type: ${form.businessType}\nCompany: ${form.company}\nAPI Needs: ${form.apiNeeds}`;
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
    window.open(`mailto:apexkelabs@gmail.com?subject=API Integration Lead&body=${msg}`, "_blank");
    setFeedback({ type: "success", message: "Your request was sent! We will contact you soon." });
    setModalForm({ name: "", email: "", businessType: "", company: "", apiNeeds: "" });
    setTimeout(() => setModalOpen(false), 2000);
  }

  const features = [
    {
      icon: '💳',
      title: "Payment Gateway Integration",
      desc: "Accept M-Pesa, card, and mobile payments directly on your website or app.",
    },
    {
      icon: '🔗',
      title: "Third-Party API Connections",
      desc: "Connect to CRMs, ERPs, SMS, email, and more for business automation.",
    },
    {
      icon: '⚙️',
      title: "Custom API Development",
      desc: "We build secure, scalable APIs tailored to your business needs.",
    },
    {
      icon: '📊',
      title: "Data Synchronization",
      desc: "Keep your systems in sync with real-time data exchange and updates.",
    },
    {
      icon: '🔒',
      title: "Secure Authentication",
      desc: "Implement OAuth, JWT, and other secure authentication methods.",
    },
    {
      icon: '📱',
      title: "Mobile API Services",
      desc: "APIs optimized for mobile applications and responsive web apps.",
    },
  ];

  const benefits = [
    {
      title: "Streamlined Operations",
      desc: "Automate workflows and reduce manual processes with seamless integrations."
    },
    {
      title: "Enhanced User Experience",
      desc: "Provide smooth, integrated experiences across all your digital touchpoints."
    },
    {
      title: "Scalable Solutions",
      desc: "APIs that grow with your business and handle increasing demand."
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
              Get API Integration Quote
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
                  <option value="Other">Other</option>
                </select>
                <textarea
                  placeholder="Describe your API integration needs"
                  value={modalForm.apiNeeds}
                  onChange={(e) => setModalForm({...modalForm, apiNeeds: e.target.value})}
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
              API Integration Services
            </h1>
            <div className="apex-section-highlight" />
            <p className="apex-text-body" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              Connect your systems seamlessly with powerful API integrations
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="apex-py-xl">
        <div className="apex-container">
          <div className="apex-text-center apex-mb-lg">
            <h2 className="apex-text-h1 apex-mb-sm">
              Our API Services
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

      {/* Benefits */}
      <section className="apex-py-xl apex-bg-secondary">
        <div className="apex-container">
          <div className="apex-text-center apex-mb-lg">
            <h2 className="apex-text-h1 apex-mb-sm">
              Why Choose Our API Services?
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
      <section className="apex-py-xl">
        <div className="apex-container">
          <div className="apex-card apex-text-center">
            <h2 className="apex-text-h1 apex-mb-sm">
              Ready to Integrate Your Systems?
            </h2>
            <div className="apex-section-highlight" />
            <p className="apex-text-body apex-mb-lg" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
              Let's discuss your integration needs and create seamless connections between your systems.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => setModalOpen(true)}
                className="apex-btn apex-btn-primary"
              >
                Get Integration Quote
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
