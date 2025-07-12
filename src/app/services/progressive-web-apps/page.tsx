import React from 'react';
import '../custom-web-applications/customWebAppPage.css';

export default function ProgressiveWebAppsPage() {
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
          <h1>Progressive Web Apps (PWAs)</h1>
          <p className="hero-subtitle">
            Next-generation web experiences for Kenya—offline, installable, and lightning fast.
          </p>
        </div>
      </section>
      <section className="included-section">
        <h2 className="section-title">Coming Soon</h2>
        <p className="section-desc">
          This service will be available in Phase 2. Register your interest below!
        </p>
        <h2 className="section-title">What &apos s Included</h2>
        <div className="features-list">
          <div className="included-card">
            <span className="feature-title">Works Offline</span>
            <span className="feature-desc">Your app stays functional even without internet—ideal for rural areas and on-the-go users.</span>
          </div>
          <div className="included-card">
            <span className="feature-title">Mobile-First Experience</span>
            <span className="feature-desc">Fast, responsive design for smartphones and tablets, ensuring seamless user journeys everywhere.</span>
          </div>
          <div className="included-card">
            <span className="feature-title">Smart Push Notifications</span>
            <span className="feature-desc">Send timely updates and offers to keep your audience engaged and coming back.</span>
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
            <textarea placeholder="What would you use a PWA for?" rows={3} />
          </div>
          <button type="submit" className="submit-btn">Register Interest</button>
        </form>
      </section>
      <footer className="custom-web-app-footer">
        <span>© 2024 Apex Webs. All rights reserved. PWAs for Kenya coming soon.</span>
      </footer>
    </main>
  );
}
