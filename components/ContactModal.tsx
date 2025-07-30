"use client";
import React, { useState } from "react";

export default function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    details: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateKenyanPhone = (phone: string) => {
    // Kenyan phone numbers: +2547XXXXXXXX or 07XXXXXXXX
    const regex = /^(\+254|0)7\d{8}$/;
    return regex.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    if (!validateKenyanPhone(form.phone)) {
      setError("Please enter a valid Kenyan phone number (e.g. 0712345678 or +254712345678)");
      setLoading(false);
      return;
    }
    // Format message for WhatsApp and Gmail
    const msg = encodeURIComponent(
      `Contact Lead\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCompany: ${form.company}\nDetails: ${form.details}`
    );
    try {
      window.open(`https://wa.me/254706154142?text=${msg}`, "_blank");
      window.open(`mailto:apexkelabs@gmail.com?subject=Contact Lead&body=${msg}`, "_blank");
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", company: "", details: "" });
      // Dismiss modal after 2 seconds using onClose prop
      setTimeout(() => {
        if (typeof onClose === 'function') onClose();
      }, 2000);
    } catch {
      setError("Failed to open WhatsApp or Gmail. Try again.");
    }
    setLoading(false);
  };

  if (!open) return null;
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "#000a", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 4px 24px #1db7a422", padding: "2rem 1.5rem", minWidth: 320, maxWidth: 400, width: "100%", position: "relative" }}>
        <button onClick={onClose} style={{ position: "absolute", top: 12, right: 12, background: "#e53935", color: "#fff", border: "none", borderRadius: 6, padding: "0.3rem 0.7rem", fontWeight: 700, cursor: "pointer" }}>X</button>
        <h2 style={{ fontWeight: 800, fontSize: "1.3rem", marginBottom: 10, color: "#19977a" }}>Contact Us</h2>
        <form style={{ display: "flex", flexDirection: "column", gap: 14 }} onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Full Name" required value={form.name} onChange={handleChange} style={{ padding: "0.9rem", borderRadius: 8, border: "1.5px solid #e0f7fa", fontSize: "1rem" }} />
          <input name="email" type="email" placeholder="Email Address" required value={form.email} onChange={handleChange} style={{ padding: "0.9rem", borderRadius: 8, border: "1.5px solid #e0f7fa", fontSize: "1rem" }} />
          <input name="phone" type="text" placeholder="Kenyan Phone (e.g. 0712345678 or +254712345678)" required value={form.phone} onChange={handleChange} style={{ padding: "0.9rem", borderRadius: 8, border: "1.5px solid #e0f7fa", fontSize: "1rem" }} />
          <input name="company" type="text" placeholder="Company Name" value={form.company} onChange={handleChange} style={{ padding: "0.9rem", borderRadius: 8, border: "1.5px solid #e0f7fa", fontSize: "1rem" }} />
          <label style={{ fontWeight: 600, color: "#19977a", marginBottom: 4, marginTop: 8 }}>Project Details</label>
          <textarea name="details" placeholder="Tell us about your project requirements..." required rows={4} value={form.details} onChange={handleChange} style={{ padding: "0.9rem", borderRadius: 8, border: "1.5px solid #e0f7fa", fontSize: "1rem" }} />
          <button type="submit" disabled={loading} style={{ background: "#e53935", color: "#fff", padding: "1rem", borderRadius: 8, fontWeight: 700, fontSize: "1.08rem", border: "none", marginTop: 10, cursor: "pointer", boxShadow: "0 2px 8px #e5393555", transition: "background 0.2s, box-shadow 0.2s" }}>{loading ? "Sending..." : "Send Message"}</button>
          {success && <div style={{ color: "#19977a", fontWeight: 600, marginTop: 8 }}>Message sent! We&apos;ll get back to you soon.</div>}
          {error && <div style={{ color: "#e53935", fontWeight: 600, marginTop: 8 }}>{error}</div>}
        </form>
      </div>
    </div>
  );
}
