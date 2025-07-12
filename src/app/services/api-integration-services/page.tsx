import React from 'react';
import '../custom-web-applications/customWebAppPage.css';

export default function ApiIntegrationServicesPage() {
  return (
    <main className="custom-web-app-page" style={{ background: 'var(--background-white)', color: 'var(--text-body)' }}>
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-icon">
            <svg width="56" height="56" fill="none" viewBox="0 0 56 56">
              <rect width="56" height="56" rx="12" fill="#f4f8fb"/>
              <path d="M16 22h24v12a4 4 0 01-4 4H20a4 4 0 01-4-4V22z" fill="#fff" stroke="#19977a" strokeWidth="2"/>
              <rect x="22" y="28" width="12" height="4" rx="2" fill="#19977a"/>
              <circle cx="28" cy="34" r="2" fill="#e53935"/>
            </svg>
          </div>
          <h1>API Integration Services</h1>
          <p className="hero-subtitle">
            Connect your business to M-PESA, banks, and government platforms with secure, reliable APIs.
          </p>
        </div>
      </section>
      <section className="included-section">
        <h2 className="section-title">What &apos s Included</h2>
        <div className="features-list">
          <div className="included-card">
            <span className="feature-title">M-PESA & Bank Integration</span>
            <span className="feature-desc">Connect your business to Kenya’s leading payment platforms for instant, secure transactions.</span>
          </div>
          <div className="included-card">
            <span className="feature-title">Custom API Development</span>
            <span className="feature-desc">We build tailored endpoints to automate your workflows and connect with government, logistics, or CRM systems.</span>
          </div>
          <div className="included-card">
            <span className="feature-title">Data Security & Compliance</span>
            <span className="feature-desc">End-to-end encryption, audit trails, and compliance with local regulations to keep your data safe.</span>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <h2 className="section-title">Early Interest Registration</h2>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Business Type" />
            <input type="text" placeholder="Company Name" />
          </div>
          <div className="form-row">
            <textarea placeholder="Which API integrations do you need?" rows={3} />
          </div>
          <button type="submit" className="submit-btn">Register Interest</button>
        </form>
      </section>
      <footer className="custom-web-app-footer">
        <span>© 2024 Apex Webs. All rights reserved. API Integration for Kenya coming soon.</span>
      </footer>
    </main>
  );
}
