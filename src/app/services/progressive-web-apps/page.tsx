
"use client";
import React, { useState } from "react";
import "../custom-web-applications/customWebAppPage.css";

const features = [
  {
    title: "Works Offline",
    desc: "Your app stays functional even without internet—ideal for rural areas and on-the-go users.",
  },
  {
    title: "Mobile-First Experience",
    desc: "Fast, responsive design for smartphones and tablets, ensuring seamless user journeys everywhere.",
  },
  {
    title: "Smart Push Notifications",
    desc: "Send timely updates and offers to keep your audience engaged and coming back.",
  },
];

export default function ProgressiveWebAppsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalForm, setModalForm] = useState({
    name: "",
    email: "",
    businessType: "",
    company: "",
    useCase: "",
  });
  const [feedback, setFeedback] = useState<null | { type: "success" | "error"; message: string }>(null);

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  function formatMessage(form: typeof modalForm) {
    return `PWA Lead\n\nName: ${form.name}\nEmail: ${form.email}\nBusiness Type: ${form.businessType}\nCompany: ${form.company}\nUse Case: ${form.useCase}`;
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
    window.open(`mailto:apexkelabs@gmail.com?subject=PWA Lead&body=${msg}`, "_blank");
    setFeedback({ type: "success", message: "Your request was sent! We will contact you soon." });
    setModalForm({ name: "", email: "", businessType: "", company: "", useCase: "" });
    setTimeout(() => setModalOpen(false), 2000);
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
            <h2 style={{ fontWeight: 800, fontSize: "1.3rem", marginBottom: 10, color: "#19977a" }}>Register PWA Interest</h2>
            <form style={{ display: "flex", flexDirection: "column", gap: 14 }} onSubmit={handleModalSubmit}>
              <input name="name" type="text" placeholder="Full Name *" required value={modalForm.name} onChange={e => setModalForm(f => ({ ...f, name: e.target.value }))} style={{ padding: "0.9rem", borderRadius: 8, border: "1.5px solid #e0f7fa", fontSize: "1rem", minWidth: 0, width: "100%" }} />
              <input name="email" type="email" placeholder="Email Address *" required value={modalForm.email} onChange={e => setModalForm(f => ({ ...f, email: e.target.value }))} style={{ padding: "0.9rem", borderRadius: 8, border: "1.5px solid #e0f7fa", fontSize: "1rem", minWidth: 0, width: "100%" }} />
              <input name="businessType" type="text" placeholder="Business Type" value={modalForm.businessType} onChange={e => setModalForm(f => ({ ...f, businessType: e.target.value }))} style={{ padding: "0.9rem", borderRadius: 8, border: "1.5px solid #e0f7fa", fontSize: "1rem", minWidth: 0, width: "100%" }} />
              <input name="company" type="text" placeholder="Company Name" value={modalForm.company} onChange={e => setModalForm(f => ({ ...f, company: e.target.value }))} style={{ padding: "0.9rem", borderRadius: 8, border: "1.5px solid #e0f7fa", fontSize: "1rem", minWidth: 0, width: "100%" }} />
              <textarea name="useCase" placeholder="What would you use a PWA for?" rows={3} value={modalForm.useCase} onChange={e => setModalForm(f => ({ ...f, useCase: e.target.value }))} style={{ padding: "0.9rem", borderRadius: 8, border: "1.5px solid #e0f7fa", fontSize: "1rem", minWidth: 0, width: "100%" }} />
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
            <h1>Progressive Web Apps (PWAs)</h1>
            <p className="hero-subtitle">
              Next-generation web experiences for Kenya—offline, installable, and lightning fast.
            </p>
            <div className="hero-cta-row">
              <button className="hero-cta-btn" onClick={() => setModalOpen(true)}>
                Register Interest
              </button>
            </div>
          </div>
        </section>
        <section className="included-section">
          <h2 className="section-title" style={{ color: '#17977a', fontWeight: 800, fontSize: '2.5rem', textAlign: 'center', marginBottom: 0 }}>What&apos;s Included</h2>
          <hr style={{ width: 120, height: 8, background: '#e53935', border: 'none', borderRadius: 4, margin: '12px auto 16px auto' }} />
          <p className="section-desc" style={{ textAlign: 'center' }}>PWAs deliver app-like experiences, offline access, and push notifications for Kenyan businesses.</p>
          <div className="included-cards">
            {features.map((f, i) => (
              <div className="included-card" key={i} style={{ transition: 'transform 0.25s cubic-bezier(.4,2,.6,1), box-shadow 0.25s', boxShadow: '0 2px 12px #e5393522' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.045)'; e.currentTarget.style.boxShadow = '0 8px 32px #e5393544'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 2px 12px #e5393522'; }}>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <footer className="custom-web-app-footer">
          <span>
            © 2024 Apex Webs. All rights reserved. PWAs for Kenya.
          </span>
        </footer>
      </main>
    </div>
  );
}
