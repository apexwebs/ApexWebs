import React, { useState } from 'react';

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
    <main style={{ maxWidth: 500, margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #eee' }}>
      <h1>Contact Us</h1>
      {submitted ? (
        <div style={{ color: 'green', margin: '1rem 0' }}>Thank you for reaching out! We will get back to you soon.</div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby="name-error"
            required
            style={{ width: '100%', marginBottom: 8 }}
          />
          {errors.name && <div id="name-error" style={{ color: 'red' }}>{errors.name}</div>}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
            required
            style={{ width: '100%', marginBottom: 8 }}
          />
          {errors.email && <div id="email-error" style={{ color: 'red' }}>{errors.email}</div>}

          <label htmlFor="phone">Kenyan Phone</label>
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
            style={{ width: '100%', marginBottom: 8 }}
          />
          {errors.phone && <div id="phone-error" style={{ color: 'red' }}>{errors.phone}</div>}

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            aria-invalid={!!errors.message}
            aria-describedby="message-error"
            required
            rows={4}
            style={{ width: '100%', marginBottom: 8 }}
          />
          {errors.message && <div id="message-error" style={{ color: 'red' }}>{errors.message}</div>}

          <button type="submit" style={{ width: '100%', padding: '0.75rem', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 'bold', cursor: 'pointer' }}>
            Send Message
          </button>
        </form>
      )}
    </main>
  );
} 