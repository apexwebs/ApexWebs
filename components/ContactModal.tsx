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
    
    try {
      // Submit lead to API
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          company: form.company,
          projectDetails: form.details
        }),
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", company: "", details: "" });
        
        // Also send to WhatsApp and Gmail for immediate notification
        const msg = encodeURIComponent(
          `New Lead from Website\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCompany: ${form.company}\nDetails: ${form.details}`
        );
        window.open(`https://wa.me/254706154142?text=${msg}`, "_blank");
        window.open(`mailto:apexkelabs@gmail.com?subject=New Website Lead&body=${msg}`, "_blank");
        
        // Dismiss modal after 3 seconds
        setTimeout(() => {
          if (typeof onClose === 'function') onClose();
        }, 3000);
      } else {
        setError(result.error || 'Failed to submit lead. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting lead:', err);
      setError("Network error. Please check your connection and try again.");
    }
    setLoading(false);
  };

  if (!open) return null;
  
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  return (
    <div 
      style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100vw", 
        height: "100vh", 
        background: "rgba(0,0,0,0.6)", 
        zIndex: 9999, 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        padding: "20px",
        overflowY: "auto"
      }}
      onClick={handleBackdropClick}
    >
      <div 
        style={{ 
          background: "#fff", 
          borderRadius: 16, 
          boxShadow: "0 4px 24px rgba(29, 183, 164, 0.15)", 
          padding: "2rem 1.5rem", 
          minWidth: 320, 
          maxWidth: 500, 
          width: "100%", 
          position: "relative",
          maxHeight: "90vh",
          overflowY: "auto"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          style={{ 
            position: "absolute", 
            top: 12, 
            right: 12, 
            background: "#ef4444", 
            color: "#fff", 
            border: "none", 
            borderRadius: 6, 
            padding: "0.5rem 0.8rem", 
            fontWeight: 700, 
            cursor: "pointer",
            fontSize: "14px"
          }}
        >
          ✕
        </button>
        
        <h2 style={{ 
          fontWeight: 800, 
          fontSize: "1.5rem", 
          marginBottom: 16, 
          color: "#0d9488",
          paddingRight: "40px"
        }}>
          Contact ApexWebs
        </h2>
        
        <form 
          style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: 16 
          }} 
          onSubmit={handleSubmit}
        >
          <input 
            name="name" 
            type="text" 
            placeholder="Full Name *" 
            required 
            value={form.name} 
            onChange={handleChange} 
            style={{ 
              padding: "12px", 
              borderRadius: 8, 
              border: "2px solid #e0f2f1", 
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.2s"
            }} 
          />
          
          <input 
            name="email" 
            type="email" 
            placeholder="Email Address *" 
            required 
            value={form.email} 
            onChange={handleChange} 
            style={{ 
              padding: "12px", 
              borderRadius: 8, 
              border: "2px solid #e0f2f1", 
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.2s"
            }} 
          />
          
          <input 
            name="phone" 
            type="text" 
            placeholder="Phone Number * (e.g. 0712345678)" 
            required 
            value={form.phone} 
            onChange={handleChange} 
            style={{ 
              padding: "12px", 
              borderRadius: 8, 
              border: "2px solid #e0f2f1", 
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.2s"
            }} 
          />
          
          <input 
            name="company" 
            type="text" 
            placeholder="Company Name (Optional)" 
            value={form.company} 
            onChange={handleChange} 
            style={{ 
              padding: "12px", 
              borderRadius: 8, 
              border: "2px solid #e0f2f1", 
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.2s"
            }} 
          />
          
          <div>
            <label style={{ 
              fontWeight: 600, 
              color: "#0d9488", 
              marginBottom: 8, 
              display: "block",
              fontSize: "14px"
            }}>
              Project Details *
            </label>
            <textarea 
              name="details" 
              placeholder="Tell us about your project requirements..." 
              required 
              rows={4} 
              value={form.details} 
              onChange={handleChange} 
              style={{ 
                padding: "12px", 
                borderRadius: 8, 
                border: "2px solid #e0f2f1", 
                fontSize: "16px",
                width: "100%",
                resize: "vertical",
                minHeight: "100px",
                outline: "none",
                transition: "border-color 0.2s",
                fontFamily: "inherit"
              }} 
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading} 
            style={{ 
              background: loading ? "#94a3b8" : "#0d9488", 
              color: "#fff", 
              padding: "14px", 
              borderRadius: 8, 
              fontWeight: 700, 
              fontSize: "16px", 
              border: "none", 
              marginTop: 8, 
              cursor: loading ? "not-allowed" : "pointer", 
              boxShadow: "0 2px 8px rgba(13, 148, 136, 0.3)", 
              transition: "all 0.2s"
            }}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          
          {success && (
            <div style={{ 
              color: "#059669", 
              fontWeight: 600, 
              marginTop: 8,
              padding: "12px",
              background: "#ecfdf5",
              borderRadius: 6,
              border: "1px solid #a7f3d0"
            }}>
              ✅ Message sent! We&apos;ll get back to you soon.
            </div>
          )}
          
          {error && (
            <div style={{ 
              color: "#dc2626", 
              fontWeight: 600, 
              marginTop: 8,
              padding: "12px",
              background: "#fef2f2",
              borderRadius: 6,
              border: "1px solid #fecaca"
            }}>
              ❌ {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
