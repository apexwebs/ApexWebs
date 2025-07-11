"use client";
import AboutPurposeSection from '../../components/AboutPurposeSection';
import ServicesSection from '../../components/ServicesSection';

export default function Home() {
  return (
    <div style={{ background: '#f8fafc' }}>
      {/* HERO SECTION */}
      <section
        id="hero"
        style={{
          background: `url('/images/HeroBackground.jpg') center/cover no-repeat`,
          backgroundBlendMode: 'normal',
          filter: 'brightness(1.08) contrast(1.12) saturate(1.15)',
          color: '#fff',
          padding: '7.5rem 0 2.5rem 0', // Increased top padding to push content below navbar
          textAlign: 'center',
          position: 'relative',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: 0, lineHeight: 1.1, color: '#fff', textShadow: '0 2px 12px #2228' }}>
            Innovative Web Solutions<br />
            <span style={{ color: '#00704A', display: 'block' }}>for Kenyan Business<br />Growth</span>
          </h1>
          <p style={{ fontSize: '1.18rem', margin: '32px 0 36px 0', fontWeight: 500, color: '#fff', textShadow: '0 2px 8px #2228' }}>
            Apex Webs provides cutting-edge web applications, development services, and hosting solutions designed specifically for the unique challenges and opportunities in the Kenyan market.
          </p>
          <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap', marginTop: 8 }}>
            <a
              href="#services"
              className="hero-btn"
              style={{
                background: 'linear-gradient(90deg, #009688 0%, #43e97b 100%)',
                color: '#fff',
                padding: '0.7rem 1.6rem',
                borderRadius: 28,
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1rem',
                boxShadow: '0 4px 18px #0ea5e955, 0 1.5px 0 #fff inset', // raised effect
                border: 'none',
                outline: 'none',
                marginBottom: 8,
                transition: 'background 0.2s, box-shadow 0.2s, transform 0.15s',
                willChange: 'transform',
              }}
              onMouseOver={e => (e.currentTarget.style.transform = 'translateY(-2px) scale(1.04)')}
              onMouseOut={e => (e.currentTarget.style.transform = 'none')}
            >
              Explore Our Solutions
            </a>
            <a
              href="#contact"
              className="hero-btn"
              style={{
                background: 'linear-gradient(90deg, #00704A 0%, #0ea5e9 100%)',
                color: '#fff',
                padding: '0.7rem 1.6rem',
                borderRadius: 28,
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1rem',
                boxShadow: '0 4px 18px #0ea5e955, 0 1.5px 0 #fff inset', // raised effect
                border: 'none',
                outline: 'none',
                marginBottom: 8,
                transition: 'background 0.2s, box-shadow 0.2s, transform 0.15s',
                willChange: 'transform',
              }}
              onMouseOver={e => (e.currentTarget.style.transform = 'translateY(-2px) scale(1.04)')}
              onMouseOut={e => (e.currentTarget.style.transform = 'none')}
            >
              Request Consultation
            </a>
          </div>
        </div>
      </section>
      <section id="about">
        <AboutPurposeSection />
      </section>
      <ServicesSection />
      {/* CONTACT SECTION */}
      <section id="contact" style={{ background: 'linear-gradient(90deg, #0ea5e9 0%, #00704A 100%)', color: '#fff', padding: '2.5rem 1rem', marginTop: '2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '2.5rem', alignItems: 'center' }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <h2 style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: 10 }}>Let&apos;s Build Something Amazing Together</h2>
            <p style={{ fontSize: '1.08rem', marginBottom: 18 }}>
              Ready to take your business digital? Fill out the form and our team will get in touch within 24 hours.
            </p>
            <ul style={{ color: '#e0f7fa', fontSize: '1.05rem', marginBottom: 0 }}>
              <li>Custom web &amp; mobile solutions</li>
              <li>Kenyan market expertise</li>
              <li>Fast, friendly support</li>
            </ul>
          </div>
          <div style={{ flex: 1, minWidth: 260 }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactForm() {
  // This is a placeholder. You can replace with your actual form logic/component.
  return (
    <form style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 6px #00704A11', padding: '1.5rem 1.2rem', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <input type="text" placeholder="Your Name" required style={{ padding: '0.8rem', borderRadius: 6, border: '1.5px solid #e0f7fa', fontSize: '1rem' }} />
      <input type="email" placeholder="Your Email" required style={{ padding: '0.8rem', borderRadius: 6, border: '1.5px solid #e0f7fa', fontSize: '1rem' }} />
      <input type="tel" placeholder="Your Phone (07XXXXXXXX)" required style={{ padding: '0.8rem', borderRadius: 6, border: '1.5px solid #e0f7fa', fontSize: '1rem' }} />
      <textarea placeholder="How can we help you?" required rows={3} style={{ padding: '0.8rem', borderRadius: 6, border: '1.5px solid #e0f7fa', fontSize: '1rem' }} />
      <button type="submit" style={{ background: 'linear-gradient(90deg, #0ea5e9 0%, #00704A 100%)', color: '#fff', padding: '0.9rem', borderRadius: 8, fontWeight: 700, fontSize: '1.08rem', border: 'none', marginTop: 8, cursor: 'pointer', boxShadow: '0 2px 8px #0ea5e955', transition: 'background 0.2s, box-shadow 0.2s' }}>Send Message</button>
    </form>
  );
}
