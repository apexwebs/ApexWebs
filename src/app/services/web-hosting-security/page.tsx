import React from 'react';
import '../custom-web-applications/customWebAppPage.css';

const whyChooseUs = [
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" fill="#19977a" />
        <path d="M12 20l6 6 10-10" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
    title: 'Reliable Hosting',
    desc: '99.9% uptime and fast servers for Kenyan businesses.'
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" fill="#e53935" />
        <path d="M20 12v16M12 20h16" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
    title: 'Top Security',
    desc: 'SSL, backups, and protection against threats.'
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" fill="#1dbf73" />
        <path d="M14 26l6-12 6 12" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
    title: 'Local Support',
    desc: 'Friendly help and fast response for Kenyan clients.'
  }
];

const testimonials = [
  {
    name: 'Brian Otieno',
    company: 'Online Shop',
    quote: 'Our site is always online and secure. Apex Webs support is excellent!'
  },
  {
    name: 'Grace Muthoni',
    company: 'Consulting Agency',
    quote: 'We never worry about downtime or hacks. Highly recommended.'
  },
  {
    name: 'IT Manager',
    company: 'Nairobi',
    quote: 'Backups and SSL were set up perfectly. Great value.'
  }
];

export default function WebHostingSecurityPage() {
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
          <h1>Web Hosting & Security</h1>
          <p className="hero-subtitle">
            Fast, secure, and reliable hosting for Kenyan businesses—plus expert security and support.
          </p>
        </div>
      </section>

      <section className="included-section">
        <h2 className="section-title">What's Included</h2>
        <p className="section-desc">
          All-in-one hosting and security: speed, backups, SSL, and more.
        </p>
        <div className="included-cards">
          {[
            { title: 'Fast Servers', desc: 'Quick load times for all visitors.' },
            { title: 'SSL Certificates', desc: 'Secure your site and build trust.' },
            { title: 'Daily Backups', desc: 'Automatic protection for your data.' },
            { title: 'Malware Protection', desc: 'Keep your site safe from threats.' },
            { title: 'Email Hosting', desc: 'Professional email addresses for your business.' },
            { title: '24/7 Monitoring', desc: 'We keep an eye on your site, always.' },
          ].map((item, i) => (
            <div className="included-card" key={i}>
              <div className="included-icon" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="process-section">
        <h2 className="section-title">How It Works</h2>
        <div className="process-steps">
          {[
            { step: '1', title: 'Setup', desc: 'We set up hosting and security for your site.' },
            { step: '2', title: 'Migration', desc: 'Move your site or data safely.' },
            { step: '3', title: 'Monitoring', desc: 'Continuous checks and updates.' },
            { step: '4', title: 'Support', desc: 'Help whenever you need it.' },
            { step: '5', title: 'Growth', desc: 'Scale your hosting as your business grows.' }
          ].map((item, i) => (
            <div className="process-step" key={i}>
              <div className="process-step-number">{item.step}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="projects-section">
        <h2 className="section-title">Client Success Stories</h2>
        <p className="section-desc">Real results for Kenyan businesses</p>
        <div className="projects-cards">
          {[
            { title: 'Online Shop Hosting', tags: ['Ecommerce', 'SSL', 'Backups'] },
            { title: 'Consulting Agency Security', tags: ['Malware Protection', 'Monitoring'] },
            { title: 'Corporate Email Hosting', tags: ['Email', 'Support', 'Reliability'] },
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
        <h2 className="section-title">Hosting Packages</h2>
        <p className="section-desc">Choose the best plan for your needs</p>
        <div className="packages-cards">
          {[
            {
              name: 'Starter', price: 'KSh 8,000/yr', features: [
                '1 website', 'SSL', 'Daily backups', 'Email hosting', 'Basic support'
              ], button: 'Get Started'
            },
            {
              name: 'Business', price: 'KSh 15,000/yr', features: [
                'Up to 5 websites', 'Advanced security', 'Priority support', 'Malware protection', 'Monitoring'
              ], button: 'Most Popular', highlight: true
            },
            {
              name: 'Enterprise', price: 'KSh 30,000/yr', features: [
                'Unlimited websites', 'Custom solutions', 'Dedicated support', 'Scalable resources', '24/7 monitoring'
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
        <h2 className="section-title">Get Hosting & Security</h2>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Business Type" required />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Preferred Package" required />
          </div>
          <div className="form-row">
            <input type="tel" placeholder="Phone Number" required />
            <input type="text" placeholder="Website URL" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Company Name" />
            <input type="text" placeholder="Budget Range" />
          </div>
          <div className="form-row">
            <textarea placeholder="Hosting/Security Needs" rows={3} />
          </div>
          <div className="form-row">
            <label>Features Needed:</label>
            <div className="features-checkboxes">
              {['SSL', 'Backups', 'Email Hosting', 'Malware Protection', 'Monitoring', 'Priority Support'].map((feature, i) => (
                <label key={i}>
                  <input type="checkbox" /> {feature}
                </label>
              ))}
            </div>
          </div>
          <div className="form-row">
            <textarea placeholder="Reference sites or special requests" rows={2} />
          </div>
          <button type="submit" className="submit-btn">Request Hosting</button>
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
        <h2 className="section-title">Testimonials</h2>
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
        <span>© 2024 Apex Webs. All rights reserved. Secure, reliable hosting for Kenya.</span>
      </footer>
    </main>
  );
}
