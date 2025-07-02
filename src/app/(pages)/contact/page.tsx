"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const validateKenyanPhone = (phone: string) => {
  // Kenyan phone numbers: +2547XXXXXXXX or 07XXXXXXXX
  const regex = /^(\+254|0)7\d{8}$/;
  return regex.test(phone);
};

const validateEmail = (email: string) => {
  // Simple email regex
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    if (!form.name) newErrors.name = 'Name is required.';
    if (!form.email || !validateEmail(form.email)) newErrors.email = 'Valid email is required.';
    if (!form.phone || !validateKenyanPhone(form.phone)) newErrors.phone = 'Valid Kenyan phone is required.';
    if (!form.message) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      // Here you would handle sending the form data
    }
  };

  return (
    <section
      style={{
        maxWidth: 600,
        margin: '3rem auto',
        padding: '2.5rem',
        background: 'rgba(255,255,255,0.97)',
        borderRadius: 18,
        boxShadow: '0 4px 24px #00704A22',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Lively animated accent */}
      <div style={{
        position: 'absolute',
        top: -60,
        right: -60,
        width: 180,
        height: 180,
        background: 'radial-gradient(circle at 40% 40%, #0ea5e9 0%, #00704A 80%)',
        opacity: 0.12,
        borderRadius: '50%',
        zIndex: 0,
        animation: 'float 6s ease-in-out infinite',
      }} />
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(20px); }
          100% { transform: translateY(0); }
        }
      `}</style>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', zIndex: 1, position: 'relative' }}>
        <Image src="/images/ApexLogo.jpg" alt="Apex Webs Logo" width={60} height={60} style={{ borderRadius: '14px', boxShadow: '0 2px 8px #00704A33' }} />
        <div>
          <h1 style={{ margin: 0, fontSize: '2rem', color: '#00704A', fontWeight: 800, letterSpacing: '-1px' }}>Contact Us</h1>
          <p style={{ margin: 0, fontWeight: 600, color: '#0ea5e9', fontSize: '1.05rem' }}>We&apos;d love to hear from you!</p>
        </div>
      </div>
      {submitted ? (
        <div style={{ color: 'green', margin: '1rem 0', fontWeight: 600, fontSize: '1.1rem' }}>Thank you for reaching out! We will get back to you soon.</div>
      ) : (
        <form onSubmit={handleSubmit} noValidate style={{ zIndex: 1, position: 'relative' }}>
          <label htmlFor="name" style={{ fontWeight: 600, color: '#00704A' }}>Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby="name-error"
            required
            style={{ width: '100%', marginBottom: 8, padding: '0.7rem', borderRadius: 8, border: '1px solid #eee', fontSize: '1rem' }}
          />
          {errors.name && <div id="name-error" style={{ color: 'red' }}>{errors.name}</div>}

          <label htmlFor="email" style={{ fontWeight: 600, color: '#00704A' }}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
            required
            style={{ width: '100%', marginBottom: 8, padding: '0.7rem', borderRadius: 8, border: '1px solid #eee', fontSize: '1rem' }}
          />
          {errors.email && <div id="email-error" style={{ color: 'red' }}>{errors.email}</div>}

          <label htmlFor="phone" style={{ fontWeight: 600, color: '#00704A' }}>Kenyan Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
            aria-describedby="phone-error"
            required
            placeholder="e.g. 0712345678 or +254712345678"
            style={{ width: '100%', marginBottom: 8, padding: '0.7rem', borderRadius: 8, border: '1px solid #eee', fontSize: '1rem' }}
          />
          {errors.phone && <div id="phone-error" style={{ color: 'red' }}>{errors.phone}</div>}

          <label htmlFor="message" style={{ fontWeight: 600, color: '#00704A' }}>Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            aria-invalid={!!errors.message}
            aria-describedby="message-error"
            required
            rows={4}
            style={{ width: '100%', marginBottom: 8, padding: '0.7rem', borderRadius: 8, border: '1px solid #eee', fontSize: '1rem' }}
          />
          {errors.message && <div id="message-error" style={{ color: 'red' }}>{errors.message}</div>}

          <button type="submit" style={{ width: '100%', padding: '0.9rem', background: 'linear-gradient(90deg, #0ea5e9 0%, #00704A 100%)', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', marginTop: 8, boxShadow: '0 2px 8px #0ea5e955', transition: 'background 0.2s, box-shadow 0.2s' }}>
            Send Message
          </button>
        </form>
      )}
    </section>
  );
} 