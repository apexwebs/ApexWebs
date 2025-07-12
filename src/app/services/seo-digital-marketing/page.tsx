import React from 'react';
import '../custom-web-applications/customWebAppPage.css';

export default function SeoDigitalMarketingPage() {
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
          <h1>SEO & Digital Marketing</h1>
          <p className="hero-subtitle">
            Launching Q3 2025: Get found online and grow your business with expert SEO and marketing.
          </p>
        </div>
      </section>
      <section className="included-section">
        <h2 className="section-title">What&apos s Included</h2>
        <div className="features-list">
          <div className="included-card">
            <span className="feature-title">SEO Optimization</span>
            <span className="feature-desc">Get your business found on Google and other search engines with expert keyword targeting and on-page SEO.</span>
          </div>
          <div className="included-card">
            <span className="feature-title">Digital Marketing Campaigns</span>
            <span className="feature-desc">Reach your ideal customers with creative, data-driven campaigns across social media, email, and more.</span>
          </div>
          <div className="included-card">
            <span className="feature-title">Analytics & Performance Reporting</span>
            <span className="feature-desc">Track every click, conversion, and ROI with clear, actionable reports to grow your business.</span>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <h2 className="section-title">Newsletter Signup</h2>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>
          <button type="submit" className="submit-btn">Sign Up for Updates</button>
        </form>
      </section>
      <footer className="custom-web-app-footer">
        <span>© 2024 Apex Webs. All rights reserved. SEO & Digital Marketing for Kenya launching soon.</span>
      </footer>
    </main>
  );
}
