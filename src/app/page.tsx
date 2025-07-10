"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

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
          <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#services" className="hero-btn" style={{ background: 'linear-gradient(90deg, #009688 0%, #43e97b 100%)', color: '#fff', padding: '1rem 2.5rem', borderRadius: 32, textDecoration: 'none', fontWeight: 700, fontSize: '1.15rem', boxShadow: '0 2px 8px #0ea5e955', transition: 'background 0.2s, box-shadow 0.2s', marginBottom: 8 }}>
              Explore Our Solutions
            </a>
            <a href="#contact" className="hero-btn" style={{ background: 'linear-gradient(90deg, #00704A 0%, #0ea5e9 100%)', color: '#fff', padding: '1rem 2.5rem', borderRadius: 32, textDecoration: 'none', fontWeight: 700, fontSize: '1.15rem', boxShadow: '0 2px 8px #0ea5e955', transition: 'background 0.2s, box-shadow 0.2s', marginBottom: 8 }}>
              Request Consultation
            </a>
          </div>
        </div>
      </section>



      {/* SERVICES SECTION */}
      <section id="services" style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1rem 2rem 1rem', textAlign: 'center' }}>
        <h2 style={{ color: '#00704A', fontWeight: 800, fontSize: '2rem', marginBottom: 8 }}>Our Services</h2>
        <p style={{ color: '#444', marginBottom: 32 }}>Jump straight to what you need. All solutions are purpose-built for the Kenyan market.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: 24 }}>
          <ServiceCard icon="/icons/web.svg" title="Custom Website Development" desc="Modern, responsive websites for SMEs, schools, and startups." />
          <ServiceCard icon="/icons/app.svg" title="Mobile App Development" desc="Android & iOS apps for business, education, and e-commerce." />
          <ServiceCard icon="/icons/ecommerce.svg" title="Ecommerce Solutions" desc="Sell online with secure payments, inventory, and delivery integration." />
          <ServiceCard icon="/icons/ux.svg" title="UI/UX Design" desc="User-focused design for better engagement and conversions." />
          <ServiceCard icon="/icons/marketing.svg" title="Digital Marketing" desc="SEO, social media, and digital campaigns for Kenyan audiences." />
          <ServiceCard icon="/icons/maintenance.svg" title="Website Maintenance" desc="Ongoing support, updates, and security for your site." />
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" style={{ maxWidth: 1100, margin: '0 auto', padding: '2.5rem 1rem', textAlign: 'center' }}>
        <h2 style={{ color: '#00704A', fontWeight: 800, fontSize: '2rem', marginBottom: 8 }}>Our Projects</h2>
        <p style={{ color: '#444', marginBottom: 32 }}>See some of our completed, ongoing, and featured work for Kenyan clients.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: 24 }}>
          <ProjectCard title="E-commerce Platform for Nairobi Mart" status="Completed" desc="A scalable e-commerce site for a local retailer, featuring secure payments and inventory management." />
          <ProjectCard title="School Portal for Green Valley Academy" status="In Progress" desc="A digital portal for school administration, parent-teacher communication, and fee management." />
          <ProjectCard title="Startup Landing Page for TechSavvy" status="Completed" desc="A modern, conversion-focused landing page for a Kenyan tech startup." />
          <ProjectCard title="NGO Website for Community Uplift" status="Featured" desc="A featured project empowering a local NGO with a digital presence and donation system." />
        </div>
      </section>

      {/* ABOUT/INTRO SECTION */}
      <section id="about" style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2.5rem', padding: '2.5rem 1rem' }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <h2 style={{ color: '#00704A', fontWeight: 800, fontSize: '1.7rem', marginBottom: 10 }}>Leading Web Development in Kenya</h2>
          <p style={{ color: '#222', fontSize: '1.08rem', marginBottom: 18, lineHeight: 1.6 }}>
            Apex Webs is a Kenyan tech startup dedicated to empowering local businesses, schools, and startups with world-class digital solutions. We believe in the power of technology to transform communities and drive economic growth.
          </p>
        </div>
        <div style={{ flex: 1, minWidth: 280, textAlign: 'center' }}>
          <Image src="/images/ApexLogo.jpg" alt="Apex Webs Team" width={220} height={140} style={{ borderRadius: 16, objectFit: 'cover', boxShadow: '0 2px 12px #00704A22' }} />
        </div>
      </section>

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

// Typewriter animation for hero headline
function TypewriterHeadline({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 38); // speed in ms per character
    return () => clearInterval(interval);
  }, [text]);
  return (
    <h1
      style={{
        fontSize: "2.5rem",
        fontWeight: 800,
        marginBottom: 12,
        letterSpacing: "-1px",
        minHeight: "3.2rem",
        fontFamily: "inherit",
        whiteSpace: "pre-line",
        textShadow: "0 2px 12px #00704A22",
        transition: "color 0.3s"
      }}
      aria-label={text}
    >
      {displayed}
      <span style={{
        display: "inline-block",
        width: 18,
        background: "#fff",
        height: "2.5rem",
        marginLeft: 2,
        opacity: 0.7,
        animation: "blink 1s steps(1) infinite"
      }}>
        &nbsp;
      </span>
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 0.7; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </h1>
  );
}

function ProjectCard({ title, status, desc }: { title: string; status: string; desc: string }) {
  const color = status === 'Completed' ? '#22c55e' : status === 'In Progress' ? '#eab308' : '#0ea5e9';
  return (
    <div style={{ background: '#fff', borderRadius: 14, boxShadow: '0 2px 8px #00704A11', padding: '2rem 1.2rem', textAlign: 'center', borderLeft: `6px solid ${color}` }}>
      <h3 style={{ color, fontWeight: 700, fontSize: '1.15rem', marginBottom: 8 }}>{title} <span style={{ fontSize: 13, fontWeight: 600, color, marginLeft: 8 }}>{status}</span></h3>
      <p style={{ color: '#444', fontSize: '1.02rem', margin: 0 }}>{desc}</p>
    </div>
  );
}

function ServiceCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div style={{ background: '#fff', borderRadius: 14, boxShadow: '0 2px 8px #00704A11', padding: '2rem 1.2rem', textAlign: 'center', transition: 'box-shadow 0.2s', border: '1.5px solid #e0f7fa' }}>
      <div style={{ marginBottom: 16 }}>
        <Image src={icon} alt={title} width={40} height={40} />
      </div>
      <h3 style={{ color: '#00704A', fontWeight: 700, fontSize: '1.15rem', marginBottom: 8 }}>{title}</h3>
      <p style={{ color: '#444', fontSize: '1.02rem', margin: 0 }}>{desc}</p>
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
