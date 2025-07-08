import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ background: '#f8fafc' }}>
      {/* HERO SECTION */}
      <section id="hero" style={{ background: 'linear-gradient(120deg, #0ea5e9 0%, #00704A 100%)', color: '#fff', padding: '3.5rem 0 2.5rem 0', textAlign: 'center', position: 'relative' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 12, letterSpacing: '-1px' }}>Web Solutions for Kenyan Businesses</h1>
          <p style={{ fontSize: '1.18rem', marginBottom: 28, fontWeight: 500, color: '#e0f7fa' }}>
            Empowering local businesses, schools, and startups across Kenya with world-class digital solutions.
          </p>
          <a href="#contact" style={{ background: '#fff', color: '#00704A', padding: '1.1rem 2.5rem', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: '1.15rem', boxShadow: '0 2px 8px #0ea5e955', transition: 'background 0.2s, box-shadow 0.2s' }}>
            Get a Free Consultation
          </a>
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
            <h2 style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: 10 }}>Let's Build Something Amazing Together</h2>
            <p style={{ fontSize: '1.08rem', marginBottom: 18 }}>
              Ready to take your business digital? Fill out the form and our team will get in touch within 24 hours.
            </p>
            <ul style={{ color: '#e0f7fa', fontSize: '1.05rem', marginBottom: 0 }}>
              <li>Custom web & mobile solutions</li>
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

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 6px #00704A11', padding: '1.5rem 1.2rem', minWidth: 120, flex: 1, textAlign: 'center' }}>
      <div style={{ color: '#0ea5e9', fontWeight: 800, fontSize: '2rem', marginBottom: 4 }}>{value}</div>
      <div style={{ color: '#00704A', fontWeight: 600, fontSize: '1.08rem' }}>{label}</div>
    </div>
  );
}

function TestimonialCard({ name, text }: { name: string; text: string }) {
  return (
    <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 6px #00704A11', padding: '1.5rem 1.2rem', fontStyle: 'italic', color: '#222' }}>
      <div style={{ marginBottom: 8 }}>&ldquo;{text}&rdquo;</div>
      <div style={{ color: '#0ea5e9', fontWeight: 700, fontSize: '1.02rem', marginTop: 8 }}>{name}</div>
    </div>
  );
}

function FAQ() {
  const faqs = [
    { q: 'How long does it take to build a website?', a: 'Most projects are completed in 2-4 weeks, depending on complexity.' },
    { q: 'Do you support mobile and e-commerce solutions?', a: 'Yes! We build mobile apps and e-commerce platforms tailored for Kenya.' },
    { q: 'What platforms and technologies do you use?', a: 'We use Next.js, React, and modern cloud hosting for speed and reliability.' },
    { q: 'Do you provide ongoing support and updates?', a: 'Absolutely. We offer maintenance and support packages for all clients.' },
    { q: 'Are your costs and terms suitable for Kenya?', a: 'Yes, our pricing and contracts are designed for the Kenyan market.' },
  ];
  return (
    <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 6px #00704A11', padding: '1.5rem 1.2rem' }}>
      {faqs.map((faq, idx) => (
        <details key={idx} style={{ marginBottom: 12 }}>
          <summary style={{ cursor: 'pointer', fontWeight: 700, color: '#00704A', fontSize: '1.08rem', outline: 'none' }}>{faq.q}</summary>
          <div style={{ color: '#444', marginTop: 6, fontSize: '1.02rem' }}>{faq.a}</div>
        </details>
      ))}
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
