import React from 'react';
import './customWebAppPage.css';

const whyChooseUs = [
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" fill="#19977a" />
        <path d="M12 20l6 6 10-10" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
    title: 'Proven Results',
    desc: 'Our websites deliver measurable growth and engagement for Kenyan businesses.'
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" fill="#e53935" />
        <path d="M20 12v16M12 20h16" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
    title: 'Fast & Secure',
    desc: 'Optimized for speed, security, and reliability on every device.'
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" fill="#1dbf73" />
        <path d="M14 26l6-12 6 12" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
    title: 'Local Expertise',
    desc: 'We understand the Kenyan market and build solutions for local needs.'
  }
];

const testimonials = [
  {
    name: 'Jane Mwangi',
    company: 'Fashion Retailer',
    quote: 'Apex Webs built us a beautiful, fast online store. Our sales doubled in 3 months!'
  },
  {
    name: 'David Otieno',
    company: 'Consultancy',
    quote: 'The team understood our needs and delivered a site that attracts new clients every week.'
  },
  {
    name: 'Tech Startup',
    company: 'Nairobi',
    quote: 'Our platform is now the go-to for local users. Support is always responsive.'
  }
];

export default function CustomWebAppPage() {
  return (
    <main className="custom-web-app-page">
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
          <h1>Custom Web Applications</h1>
          <p className="hero-subtitle">
            Tailor-made solutions designed specifically for Kenyan business challenges. From inventory systems to customer management, we build apps that grow with your business.
          </p>
        </div>
      </section>

      <section className="included-section">
        <h2 className="section-title">What&apos;s Included</h2>
        <p className="section-desc">
          Comprehensive web development services designed to meet your business needs
        </p>
        <div className="included-cards">
          <div className="included-card">
            <span className="feature-popular">Most Popular</span>
            <h3>Responsive Design</h3>
            <p>Mobile-first websites that look perfect and perform flawlessly on every device.</p>
          </div>
          <div className="included-card">
            <h3>Fast Performance</h3>
            <p>Lightning-fast load times and optimized code for the best user experience.</p>
          </div>
          <div className="included-card">
            <h3>SEO Optimized</h3>
            <p>Built with search engine optimization in mind to help your business get found online.</p>
          </div>
          <div className="included-card">
            <h3>Custom Design</h3>
            <p>Unique, creative designs tailored to your brand and business goals.</p>
          </div>
          <div className="included-card">
            <h3>Secure & Safe</h3>
            <p>Industry-standard security best practices to protect your data and users.</p>
          </div>
          <div className="included-card">
            <h3>Analytics Ready</h3>
            <p>Google Analytics integration for actionable insights and growth tracking.</p>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <h2 className="section-title">Recent Projects</h2>
        <p className="section-desc">See examples of our custom website development work for Kenyan businesses</p>
        <div className="projects-cards">
          { [
            { title: 'Modern Ecommerce Platform', tags: ['Ecommerce', 'Responsive', 'Payment Gateway'] },
            { title: 'Professional Service Website', tags: ['Corporate', 'CMS', 'SEO Optimized'] },
            { title: 'Tech Startup Platform', tags: ['Dynamic', 'User Portal'] },
          ].map((proj, i) => (
            <div className="project-card" key={i}>
              <div className="project-img" />
              <h3>{proj.title}</h3>
              <div className="project-tags">
                {proj.tags.map((tag, j) => (
                  <span className="project-tag" key={j}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="packages-section">
        <h2 className="section-title">Choose Your Package</h2>
        <p className="section-desc">Flexible options to match your business needs and budget</p>
        <div className="packages-cards">
          {[
            {
              name: 'Starter', price: 'KSh 45,000', features: [
                'Up to 5 pages', 'Responsive design', 'Basic SEO setup', 'Social media integration', '3 months support'
              ], button: 'Get Started'
            },
            {
              name: 'Professional', price: 'KSh 85,000', features: [
                'Up to 10 pages', 'Custom design & branding', 'CMS integration', 'Advanced SEO', 'Analytics setup', 'Blog functionality', '6 months support'
              ], button: 'Most Popular', highlight: true
            },
            {
              name: 'Enterprise', price: 'KSh 150,000', features: [
                'Unlimited pages', 'Ecommerce functionality', 'User accounts & portal', 'Payment integration', 'Advanced support', '12 months support'
              ], button: 'Contact Us'
            },
          ].map((pkg, i) => (
            <div className={`package-card${pkg.highlight ? ' highlight' : ''}`} key={i}>
              <h3>{pkg.name}</h3>
              <div className="package-price">{pkg.price}</div>
              <ul className="package-features">
                {pkg.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
              <button className="package-btn">{pkg.button}</button>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <h2 className="section-title">Tell Us About Your Project</h2>
        <p className="section-desc">Help us understand your requirements so we can provide you with the best solution</p>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Type of Business" required />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Preferred Package" required />
          </div>
          <div className="form-row">
            <input type="tel" placeholder="Phone Number" required />
            <input type="text" placeholder="Project Timeline" required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Company/Business Name" />
            <input type="text" placeholder="Budget Range" />
          </div>
          <div className="form-row">
            <textarea placeholder="Project Description" rows={3} />
          </div>
          <div className="form-row">
            <label>Features Needed (check all that apply):</label>
            <div className="features-checkboxes">
              {['Online Store/Ecommerce', 'Blog/News Section', 'Photo Gallery', 'Online Booking', 'User Login/Portal', 'Multi-language', 'Payment Integration', 'Social Media Integration'].map((feature, i) => (
                <label key={i}>
                  <input type="checkbox" /> {feature}
                </label>
              ))}
            </div>
          </div>
          <div className="form-row">
            <textarea placeholder="Do you have any websites you like? (URLs or references)" rows={2} />
          </div>
          <button type="submit" className="submit-btn">Submit Project Request</button>
        </form>
      </section>

      <section className="why-choose-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="why-choose-cards">
          {whyChooseUs.map((item, i) => (
            <div className="why-choose-card" key={i}>
              <div className="why-choose-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-cards">
          {testimonials.map((item, i) => (
            <div className="testimonial-card" key={i}>
              <p className="testimonial-quote">“{item.quote}”</p>
              <div className="testimonial-author">- {item.name}, {item.company}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="custom-web-app-footer">
        <span>© 2024 Apex Webs. All rights reserved. Empowering Kenyan businesses through innovative web solutions.</span>
      </footer>
    </main>
  );
}
