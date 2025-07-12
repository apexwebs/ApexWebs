import React from 'react';
import '../custom-web-applications/customWebAppPage.css';

export default function CybersecuritySolutionsPage() {
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
          <h1>Cybersecurity Solutions</h1>
          <p className="hero-subtitle">
            Enterprise-grade security for Kenyan businesses—coming soon.
          </p>
        </div>
      </section>
      <section className="included-section">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h2 className="section-title">What's Included</h2>
        <div className="features-list">
          <div className="included-card">
            <span className="feature-title">Real-Time Threat Detection</span>
            <span className="feature-desc">AI-powered monitoring to spot and block cyber threats before they impact your business.</span>
          </div>
          <div className="included-card">
            <span className="feature-title">Advanced Data Encryption</span>
            <span className="feature-desc">Keep sensitive information safe with military-grade encryption and secure data storage.</span>
          </div>
          <div className="included-card">
            <span className="feature-title">Comprehensive Security Audits</span>
            <span className="feature-desc">Regular reviews and compliance checks to ensure your systems meet the highest standards.</span>
          </div>
      </div>
      </section>
      <section className="contact-section">
        <h2 className="section-title">Enterprise Inquiry</h2>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Company Name" />
            <input type="text" placeholder="Role/Position" />
          </div>
          <div className="form-row">
            <textarea placeholder="Describe your cybersecurity needs" rows={3} />
          </div>
          <button type="submit" className="submit-btn">Contact Us</button>
        </form>
      </section>
      <footer className="custom-web-app-footer">
        <span>© 2024 Apex Webs. All rights reserved. Cybersecurity for Kenya coming soon.</span>
      </footer>
    </main>
  );
}
