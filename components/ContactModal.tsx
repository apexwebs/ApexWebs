"use client";
import React from "react";

export default function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "#000a", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 4px 24px #1db7a422", padding: "2rem 1.5rem", minWidth: 320, maxWidth: 400, width: "100%", position: "relative" }}>
        <button onClick={onClose} style={{ position: "absolute", top: 12, right: 12, background: "#e53935", color: "#fff", border: "none", borderRadius: 6, padding: "0.3rem 0.7rem", fontWeight: 700, cursor: "pointer" }}>X</button>
        <h2 style={{ fontWeight: 800, fontSize: "1.3rem", marginBottom: 10, color: "#19977a" }}>Contact Us</h2>
        <form style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <input type="text" placeholder="Full Name" required style={{ padding: "0.9rem", borderRadius: 8, border: "1.5px solid #e0f7fa", fontSize: "1rem" }} />
          <input type="email" placeholder="Email Address" required style={{ padding: "0.9rem", borderRadius: 8, border: "1.5px solid #e0f7fa", fontSize: "1rem" }} />
          <input type="text" placeholder="Company Name" style={{ padding: "0.9rem", borderRadius: 8, border: "1.5px solid #e0f7fa", fontSize: "1rem" }} />
          <label style={{ fontWeight: 600, color: "#19977a", marginBottom: 4, marginTop: 8 }}>Project Details</label>
          <textarea placeholder="Tell us about your project requirements..." required rows={4} style={{ padding: "0.9rem", borderRadius: 8, border: "1.5px solid #e0f7fa", fontSize: "1rem" }} />
          <button type="submit" style={{ background: "#e53935", color: "#fff", padding: "1rem", borderRadius: 8, fontWeight: 700, fontSize: "1.08rem", border: "none", marginTop: 10, cursor: "pointer", boxShadow: "0 2px 8px #e5393555", transition: "background 0.2s, box-shadow 0.2s" }}>Send Message</button>
        </form>
      </div>
    </div>
  );
}
