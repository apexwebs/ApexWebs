"use client";
import React, { useState } from "react";
import Link from 'next/link';

export default function ProgressiveWebAppsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalForm, setModalForm] = useState({
    name: "",
    email: "",
    businessType: "",
    company: "",
    useCase: "",
  });
  const [feedback, setFeedback] = useState<null | { type: "success" | "error"; message: string }>(null);

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function formatMessage(form: typeof modalForm) {
    return `PWA Development Lead\n\nName: ${form.name}\nEmail: ${form.email}\nBusiness Type: ${form.businessType}\nCompany: ${form.company}\nUse Case: ${form.useCase}`;
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
    window.open(`mailto:apexkelabs@gmail.com?subject=PWA Development Lead&body=${msg}`, "_blank");
    setFeedback({ type: "success", message: "Your request was sent! We will contact you soon." });
    setModalForm({ name: "", email: "", businessType: "", company: "", useCase: "" });
    setTimeout(() => setModalOpen(false), 2000);
  }

  const features = [
    {
      icon: '📱',
      title: "Works Offline",
      desc: "Your app stays functional even without internet—ideal for rural areas and on-the-go users.",
    },
    {
      icon: '⚡',
      title: "Mobile-First Experience",
      desc: "Fast, responsive design for smartphones and tablets, ensuring seamless user journeys everywhere.",
    },
    {
      icon: '🔔',
      title: "Smart Push Notifications",
      desc: "Send timely updates and offers to keep your audience engaged and coming back.",
    },
    {
      icon: '🚀',
      title: "App-Like Performance",
      desc: "Lightning-fast loading and smooth interactions that rival native mobile apps.",
    },
    {
      icon: '💾',
      title: "Automatic Updates",
      desc: "Users always get the latest version without manual app store downloads.",
    },
    {
      icon: '🔒',
      title: "Secure by Default",
      desc: "HTTPS-only with modern security features built into every PWA.",
    },
  ];

  const benefits = [
    {
      title: "Cost-Effective Development",
      desc: "One codebase works across all platforms - no need for separate iOS and Android apps."
    },
    {
      title: "Improved User Engagement",
      desc: "Push notifications and offline functionality keep users coming back."
    },
    {
      title: "Better Performance",
      desc: "Faster loading times and smoother interactions than traditional websites."
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
              Get PWA Development Quote
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
                  placeholder="Describe your PWA use case"
                  value={modalForm.useCase}
                  onChange={(e) => setModalForm({...modalForm, useCase: e.target.value})}
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
              Progressive Web Apps
            </h1>
            <div className="apex-section-highlight" />
            <p className="apex-text-body" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              App-like experiences that work everywhere, even offline
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="apex-py-xl">
        <div className="apex-container">
          <div className="apex-text-center apex-mb-lg">
            <h2 className="apex-text-h1 apex-mb-sm">
              PWA Features
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
              Why Choose PWAs?
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
              Ready to Build Your PWA?
            </h2>
            <div className="apex-section-highlight" />
            <p className="apex-text-body apex-mb-lg" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
              Let's create a progressive web app that delivers native app performance with web accessibility.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => setModalOpen(true)}
                className="apex-btn apex-btn-primary"
              >
                Get PWA Quote
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
