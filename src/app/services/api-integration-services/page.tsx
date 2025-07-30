"use client";
import React, { useState } from "react";
import "../custom-web-applications/customWebAppPage.css";

const features = [
  {
    title: "Payment Gateway Integration",
    desc: "Accept M-Pesa, card, and mobile payments directly on your website or app.",
  },
  {
    title: "Third-Party API Connections",
    desc: "Connect to CRMs, ERPs, SMS, email, and more for business automation.",
  },
  {
    title: "Custom API Development",
    desc: "We build secure, scalable APIs tailored to your business needs.",
  },
];

export default function ApiIntegrationServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalForm, setModalForm] = useState({
    name: "",
    email: "",
    businessType: "",
    company: "",
    apiNeeds: "",
  });
  const [feedback, setFeedback] = useState<null | { type: "success" | "error"; message: string }>(null);

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  function formatMessage(form: typeof modalForm) {
    return `API Integration Lead\n\nName: ${form.name}\nEmail: ${form.email}\nBusiness Type: ${form.businessType}\nCompany: ${form.company}\nAPI Needs: ${form.apiNeeds}`;
  }
  function handleModalSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!modalForm.name || !modalForm.email) {
      setFeedback({ type: "error", message: "Please fill all required fields." });
      return;
    }
    if (!validateEmail(modalForm.email)) {
      setFeedback({ type: "error", message: "Please enter a valid email address." });
      return;
    }
    const msg = encodeURIComponent(formatMessage(modalForm));
    window.open(`https://wa.me/254706154142?text=${msg}`, "_blank");
    window.open(`mailto:apexkelabs@gmail.com?subject=API Integration Lead&body=${msg}`, "_blank");
    setFeedback({ type: "success", message: "Your request was sent! We will contact you soon." });
    setModalForm({ name: "", email: "", businessType: "", company: "", apiNeeds: "" });
    setTimeout(() => setModalOpen(false), 2000);
  }

  return (
    <div className="page-container">
      <main className="custom-web-app-page">
        <section className="hero-section" style={{ background: 'linear-gradient(90deg, #19977a 0%, #e0f7fa 100%)', padding: '3rem 0 2.5rem 0', marginBottom: 32 }}>
          <div className="hero-content">
            <h1 style={{ color: '#fff', fontWeight: 900, fontSize: '2.5rem', marginBottom: 10 }}>API Integration Services</h1>
            <p className="hero-subtitle" style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 500, marginBottom: 0 }}>
              Connect your business to the world. We build, integrate, and automate APIs for Kenyan businesses.
            </p>
          </div>
        </section>
        <section className="included-section">
          <h2 className="section-title" style={{ color: '#17977a', fontWeight: 800, fontSize: '2.1rem', textAlign: 'center', marginBottom: 0 }}>What We Offer</h2>
          <hr style={{ width: 120, height: 8, background: '#e53935', border: 'none', borderRadius: 4, margin: '12px auto 16px auto' }} />
          <p className="section-desc" style={{ textAlign: 'center' }}>Key API integration services for modern Kenyan businesses.</p>
          <div className="included-cards">
            {features.map((f, i) => (
              <div className="included-card" key={i}>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="process-section">
          <h2 className="section-title" style={{ color: '#17977a', fontWeight: 800, fontSize: '2.1rem', textAlign: 'center', marginBottom: 0 }}>How It Works</h2>
          <hr style={{ width: 120, height: 8, background: '#e53935', border: 'none', borderRadius: 4, margin: '12px auto 16px auto' }} />
          <p className="section-desc" style={{ textAlign: 'center', marginBottom: '2.5rem', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>Our process ensures seamless API integration, from planning to deployment and support.</p>
          <div className="process-steps">
            <div className="process-step">
              <div className="process-step-number">1</div>
              <div className="process-step-title">Consultation</div>
              <div className="process-step-desc">We discuss your integration needs and business goals.</div>
            </div>
            <div className="process-step">
              <div className="process-step-number">2</div>
              <div className="process-step-title">Design & Planning</div>
              <div className="process-step-desc">We architect the best solution for your requirements.</div>
            </div>
            <div className="process-step">
              <div className="process-step-number">3</div>
              <div className="process-step-title">Implementation</div>
              <div className="process-step-desc">We build, test, and integrate APIs securely and efficiently.</div>
            </div>
            <div className="process-step">
              <div className="process-step-number">4</div>
              <div className="process-step-title">Launch & Support</div>
              <div className="process-step-desc">We deploy, monitor, and support your integrations.</div>
            </div>
          </div>
        </section>
        <section className="cta-section" style={{ textAlign: 'center', margin: '2.5rem 0' }}>
          <button
            onClick={() => setModalOpen(true)}
            style={{
              background: '#19977a',
              color: '#fff',
              padding: '1rem 2.2rem',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: '1.1rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 2px 8px #19977a33',
              marginBottom: 24,
            }}
          >
            Register API Integration Interest
          </button>
        </section>
        {modalOpen && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: '#000a',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
            onWheel={e => e.stopPropagation()}
          >
            <style>{`body { overflow: hidden !important; }`}</style>
            <div
              style={{
                background: '#fff',
                borderRadius: 16,
                boxShadow: '0 4px 24px #1db7a422',
                padding: '2rem 1.5rem',
                minWidth: 320,
                maxWidth: 440,
                width: '100%',
                position: 'relative',
                maxHeight: '90vh',
                overflowY: 'auto',
              }}
            >
              <button
                onClick={() => setModalOpen(false)}
                style={{
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  background: '#e53935',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 6,
                  padding: '0.3rem 0.7rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                X
              </button>
              <h2 style={{ fontWeight: 800, fontSize: '1.3rem', marginBottom: 10, color: '#19977a' }}>Register API Integration Interest</h2>
              <form style={{ display: 'flex', flexDirection: 'column', gap: 14 }} onSubmit={handleModalSubmit}>
                <input name="name" type="text" placeholder="Full Name *" required value={modalForm.name} onChange={e => setModalForm(f => ({ ...f, name: e.target.value }))} style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #e0f7fa', fontSize: '1rem', minWidth: 0, width: '100%' }} />
                <input name="email" type="email" placeholder="Email Address *" required value={modalForm.email} onChange={e => setModalForm(f => ({ ...f, email: e.target.value }))} style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #e0f7fa', fontSize: '1rem', minWidth: 0, width: '100%' }} />
                <input name="businessType" type="text" placeholder="Business Type" value={modalForm.businessType} onChange={e => setModalForm(f => ({ ...f, businessType: e.target.value }))} style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #e0f7fa', fontSize: '1rem', minWidth: 0, width: '100%' }} />
                <input name="company" type="text" placeholder="Company Name" value={modalForm.company} onChange={e => setModalForm(f => ({ ...f, company: e.target.value }))} style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #e0f7fa', fontSize: '1rem', minWidth: 0, width: '100%' }} />
                <textarea name="apiNeeds" placeholder="What API integrations do you need?" rows={3} value={modalForm.apiNeeds} onChange={e => setModalForm(f => ({ ...f, apiNeeds: e.target.value }))} style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #e0f7fa', fontSize: '1rem', minWidth: 0, width: '100%' }} />
                <button type="submit" style={{ background: '#e53935', color: '#fff', padding: '1rem', borderRadius: 8, fontWeight: 700, fontSize: '1.08rem', border: 'none', marginTop: 10, cursor: 'pointer', boxShadow: '0 2px 8px #e5393555', transition: 'background 0.2s, box-shadow 0.2s' }}>Submit Request</button>
                {feedback && (
                  <div style={{ color: feedback?.type === 'success' ? '#19977a' : '#e53935', fontWeight: 600, marginTop: 8 }}>
                    {feedback?.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}




