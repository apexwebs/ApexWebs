
"use client";
import React, { useState } from "react";
import "../custom-web-applications/customWebAppPage.css";

const whyChooseUs = [
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" fill="#19977a" />
        <path d="M12 20l6 6 10-10" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
    title: "Reliable Hosting",
    desc: "99.9% uptime and fast servers for Kenyan businesses.",
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" fill="#e53935" />
        <path d="M20 12v16M12 20h16" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
    title: "Top Security",
    desc: "SSL, backups, and protection against threats.",
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" fill="#1dbf73" />
        <path d="M14 26l6-12 6 12" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
    title: "Local Support",
    desc: "Friendly help and fast response for Kenyan clients.",
  },
];

const testimonials = [
  {
    name: "Brian Otieno",
    company: "Online Shop",
    quote: "Our site is always online and secure. Apex Webs support is excellent!",
  },
  {
    name: "Grace Muthoni",
    company: "Consulting Agency",
    quote: "We never worry about downtime or hacks. Highly recommended.",
  },
  {
    name: "IT Manager",
    company: "Nairobi",
    quote: "Backups and SSL were set up perfectly. Great value.",
  },
];

const packages = [
  {
    name: "Starter",
    price: "KSh 8,000/yr",
    features: ["1 website", "SSL", "Daily backups", "Email hosting", "Basic support"],
    button: "Get Started",
  },
  {
    name: "Business",
    price: "KSh 15,000/yr",
    features: ["Up to 5 websites", "Advanced security", "Priority support", "Malware protection", "Monitoring"],
    button: "Most Popular",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "KSh 30,000/yr",
    features: ["Unlimited websites", "Custom solutions", "Dedicated support", "Scalable resources", "24/7 monitoring"],
    button: "Contact Us",
  },
];

export default function WebHostingSecurityPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [modalForm, setModalForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    needs: "",
    features: [] as string[],
    packageType: "",
  });
  const [feedback, setFeedback] = useState<null | { type: "success" | "error"; message: string }>(null);

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  function validateKenyanPhone(phone: string) {
    return /^(\+254|0)7\d{8}$/.test(phone);
  }
  function formatMessage(form: typeof modalForm) {
    return `Web Hosting/Security Lead\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCompany: ${form.company}\nWebsite: ${form.website}\nSelected Package: ${selectedPackage || form.packageType}\nNeeds: ${form.needs}\nFeatures: ${form.features.join(", ")}`;
  }
  async function handleModalSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!modalForm.name || !modalForm.email || !modalForm.phone) {
      setFeedback({ type: "error", message: "Please fill all required fields." });
      return;
    }
    if (!validateEmail(modalForm.email)) {
      setFeedback({ type: "error", message: "Please enter a valid email address." });
      return;
    }
    if (!validateKenyanPhone(modalForm.phone)) {
      setFeedback({ type: "error", message: "Please enter a valid Kenyan phone number (e.g. 0712345678 or +254712345678)." });
      return;
    }
    
    try {
      // Submit lead to API first
      const leadData = {
        name: modalForm.name,
        phone: modalForm.phone,
        company: modalForm.company,
        projectDetails: `Web Hosting/Security Service - Package: ${selectedPackage || modalForm.packageType}, Website: ${modalForm.website}, Needs: ${modalForm.needs}, Features: ${modalForm.features.join(", ")}`
      };
      
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        // Lead saved successfully, now send notifications
        const msg = encodeURIComponent(formatMessage(modalForm));
        window.open(`https://wa.me/254706154142?text=${msg}`, "_blank");
        window.open(`mailto:apexkelabs@gmail.com?subject=Web Hosting/Security Lead&body=${msg}`, "_blank");
        
        setFeedback({ type: "success", message: "Your request was sent! We will contact you soon." });
        setModalForm({ name: "", email: "", phone: "", company: "", website: "", needs: "", features: [], packageType: "" });
        setTimeout(() => setModalOpen(false), 2000);
      } else {
        // API failed, but still send via WhatsApp/Gmail
        console.error('Lead API failed:', result.error);
        const msg = encodeURIComponent(formatMessage(modalForm));
        window.open(`https://wa.me/254706154142?text=${msg}`, "_blank");
        window.open(`mailto:apexkelabs@gmail.com?subject=Web Hosting/Security Lead&body=${msg}`, "_blank");
        
        setFeedback({ type: "success", message: "Your request was sent! We will contact you soon." });
        setModalForm({ name: "", email: "", phone: "", company: "", website: "", needs: "", features: [], packageType: "" });
        setTimeout(() => setModalOpen(false), 2000);
      }
    } catch (error) {
      // Network error, but still send via WhatsApp/Gmail as fallback
      console.error('Network error submitting lead:', error);
      const msg = encodeURIComponent(formatMessage(modalForm));
      window.open(`https://wa.me/254706154142?text=${msg}`, "_blank");
      window.open(`mailto:apexkelabs@gmail.com?subject=Web Hosting/Security Lead&body=${msg}`, "_blank");
      
      setFeedback({ type: "success", message: "Your request was sent! We will contact you soon." });
      setModalForm({ name: "", email: "", phone: "", company: "", website: "", needs: "", features: [], packageType: "" });
      setTimeout(() => setModalOpen(false), 2000);
    }
  }
  function openModalForPackage(pkg: string) {
    setSelectedPackage(pkg);
    setModalForm(f => ({ ...f, packageType: pkg }));
    setFeedback(null);
    setModalOpen(true);
  }

  return (
    <div className="page-container">
      {modalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "#000a",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
          onWheel={e => e.stopPropagation()}
        >
          <style>{`body { overflow: hidden !important; }`}</style>
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 4px 24px #1db7a422",
              padding: "2rem 1.5rem",
              minWidth: 320,
              maxWidth: 440,
              width: "100%",
              position: "relative",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <button
              onClick={() => setModalOpen(false)}
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                background: "#e53935",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "0.3rem 0.7rem",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              X
            </button>
            <h2 style={{ fontWeight: 800, fontSize: "1.3rem", marginBottom: 10, color: "#19977a" }}>Request Hosting/Security</h2>
            <form style={{ display: "flex", flexDirection: "column", gap: 14 }} onSubmit={handleModalSubmit}>
              <input name="name" type="text" placeholder="Full Name *" required value={modalForm.name} onChange={e => setModalForm(f => ({ ...f, name: e.target.value }))} style={{ padding: "0.9rem", borderRadius: 8, border: "1.5px solid #e0f7fa", fontSize: "1rem", minWidth: 0, width: "100%" }} />
              <input name="email" type="email" placeholder="Email Address *" required value={modalForm.email} onChange={e => setModalForm(f => ({ ...f, email: e.target.value }))} style={{ padding: "0.9rem", borderRadius: 8, border: "1.5px solid #e0f7fa", fontSize: "1rem", minWidth: 0, width: "100%" }} />
              <input name="phone" type="text" placeholder="Kenyan Phone (e.g. 0712345678 or +254712345678) *" required value={modalForm.phone} onChange={e => setModalForm(f => ({ ...f, phone: e.target.value }))} style={{ padding: "0.9rem", borderRadius: 8, border: "1.5px solid #e0f7fa", fontSize: "1rem", minWidth: 0, width: "100%" }} />
              <input name="company" type="text" placeholder="Company Name" value={modalForm.company} onChange={e => setModalForm(f => ({ ...f, company: e.target.value }))} style={{ padding: "0.9rem", borderRadius: 8, border: "1.5px solid #e0f7fa", fontSize: "1rem", minWidth: 0, width: "100%" }} />
              <input name="website" type="text" placeholder="Website URL" value={modalForm.website} onChange={e => setModalForm(f => ({ ...f, website: e.target.value }))} style={{ padding: "0.9rem", borderRadius: 8, border: "1.5px solid #e0f7fa", fontSize: "1rem", minWidth: 0, width: "100%" }} />
              <select name="packageType" required value={modalForm.packageType} onChange={e => setModalForm(f => ({ ...f, packageType: e.target.value }))} style={{ padding: "0.9rem", borderRadius: 8, border: "1.5px solid #e0f7fa", fontSize: "1rem", minWidth: 0, width: "100%" }}>
                <option value="">Select Package</option>
                {packages.map((pkg, i) => (
                  <option key={i} value={pkg.name}>{pkg.name}</option>
                ))}
              </select>
              <textarea name="needs" placeholder="Hosting/Security Needs *" required rows={3} value={modalForm.needs} onChange={e => setModalForm(f => ({ ...f, needs: e.target.value }))} style={{ padding: "0.9rem", borderRadius: 8, border: "1.5px solid #e0f7fa", fontSize: "1rem", minWidth: 0, width: "100%" }} />
              <label style={{ fontWeight: 600, color: "#19977a", marginBottom: 4, marginTop: 8 }}>Features Needed</label>
              <div className="features-checkboxes" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 12px", color: "#222", marginBottom: 8, minWidth: 0, width: "100%" }}>
                {["SSL", "Backups", "Email Hosting", "Malware Protection", "Monitoring", "Priority Support"].map((feat) => (
                  <label key={feat} style={{ fontWeight: 400, color: "#222", display: "flex", alignItems: "center", gap: 6 }}>
                    <input type="checkbox" className="white-checkbox" checked={modalForm.features.includes(feat)} onChange={e => {
                      setModalForm(f => e.target.checked ? { ...f, features: [...f.features, feat] } : { ...f, features: f.features.filter(x => x !== feat) });
                    }} /> {feat}
                  </label>
                ))}
              </div>
              <button type="submit" style={{ background: "#e53935", color: "#fff", padding: "1rem", borderRadius: 8, fontWeight: 700, fontSize: "1.08rem", border: "none", marginTop: 10, cursor: "pointer", boxShadow: "0 2px 8px #e5393555", transition: "background 0.2s, box-shadow 0.2s" }}>Submit Request</button>
              {feedback && (
                <div style={{ color: feedback?.type === "success" ? "#19977a" : "#e53935", fontWeight: 600, marginTop: 8 }}>
                  {feedback?.message}
                </div>
              )}
            </form>
          </div>
        </div>
      )}
      <main className="custom-web-app-page">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Web Hosting & Security</h1>
            <p className="hero-subtitle">
              Fast, secure, and reliable hosting for Kenyan businesses—plus expert security and support.
            </p>
            <div className="hero-cta-row">
              <button className="hero-cta-btn" onClick={() => setModalOpen(true)}>
                Request Hosting
              </button>
            </div>
          </div>
        </section>
        <section className="included-section">
          <h2 className="section-title" style={{ color: '#17977a', fontWeight: 800, fontSize: '2.5rem', textAlign: 'center', marginBottom: 0 }}>What&apos;s Included</h2>
          <hr style={{ width: 120, height: 8, background: '#e53935', border: 'none', borderRadius: 4, margin: '12px auto 16px auto' }} />
          <p className="section-desc" style={{ textAlign: 'center' }}>All-in-one hosting and security: speed, backups, SSL, and more.</p>
          <div className="included-cards">
            <div className="included-card" style={{ transition: 'transform 0.25s cubic-bezier(.4,2,.6,1), box-shadow 0.25s', boxShadow: '0 2px 12px #e5393522' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.045)'; e.currentTarget.style.boxShadow = '0 8px 32px #e5393544'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 2px 12px #e5393522'; }}>
              <h3>SSL Security</h3>
              <p>Build trust with your customers using robust SSL certificates and secure connections for every site visitor.</p>
            </div>
            <div className="included-card" style={{ transition: 'transform 0.25s cubic-bezier(.4,2,.6,1), box-shadow 0.25s', boxShadow: '0 2px 12px #e5393522' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.045)'; e.currentTarget.style.boxShadow = '0 8px 32px #e5393544'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 2px 12px #e5393522'; }}>
              <h3>Automated Daily Backups</h3>
              <p>Never lose data—your website is backed up every day, with easy restore options for peace of mind.</p>
            </div>
            <div className="included-card" style={{ transition: 'transform 0.25s cubic-bezier(.4,2,.6,1), box-shadow 0.25s', boxShadow: '0 2px 12px #e5393522' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.045)'; e.currentTarget.style.boxShadow = '0 8px 32px #e5393544'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 2px 12px #e5393522'; }}>
              <h3>24/7 Uptime Monitoring</h3>
              <p>We keep a constant watch on your site, ensuring maximum uptime and instant alerts for any issues.</p>
            </div>
          </div>
        </section>
        <section className="packages-section">
          <h2 className="section-title" style={{ color: '#17977a', fontWeight: 800, fontSize: '2.5rem', textAlign: 'center', marginBottom: 0 }}>Hosting Packages</h2>
          <hr style={{ width: 120, height: 8, background: '#e53935', border: 'none', borderRadius: 4, margin: '12px auto 16px auto' }} />
          <p className="section-desc" style={{ textAlign: 'center' }}>Choose the best plan for your needs</p>
          <div className="packages-cards" style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
            {packages.map((pkg, i) => (
              <div className={`package-card${pkg.highlight ? ' highlight' : ''}`} key={i} style={{ transition: 'transform 0.25s cubic-bezier(.4,2,.6,1), box-shadow 0.25s', boxShadow: '0 2px 12px #e5393522' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.045)'; e.currentTarget.style.boxShadow = '0 8px 32px #e5393544'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 2px 12px #e5393522'; }}>
                {pkg.highlight && <span className="package-badge">Most Popular</span>}
                <h3>{pkg.name}</h3>
                <div className="package-price">{pkg.price}</div>
                <ul className="package-features">
                  {pkg.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
                <button className="package-btn" onClick={() => openModalForPackage(pkg.name)}>{pkg.button}</button>
              </div>
            ))}
          </div>
        </section>
        <section className="why-choose-section">
          <h2 className="section-title" style={{ color: '#17977a', fontWeight: 800, fontSize: '2.5rem', textAlign: 'center', marginBottom: 0 }}>Why Choose Us?</h2>
          <hr style={{ width: 120, height: 8, background: '#e53935', border: 'none', borderRadius: 4, margin: '12px auto 16px auto' }} />
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
          <h2 className="section-title" style={{ color: '#17977a', fontWeight: 800, fontSize: '2.5rem', textAlign: 'center', marginBottom: 0 }}>Testimonials</h2>
          <hr style={{ width: 120, height: 8, background: '#e53935', border: 'none', borderRadius: 4, margin: '12px auto 16px auto' }} />
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
          <span>
            © 2024 Apex Webs. All rights reserved. Secure, reliable hosting for Kenya.
          </span>
        </footer>
      </main>
    </div>
  );
}
