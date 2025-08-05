import React, { useState } from 'react';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'Contact Modal - Homepage',
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
          budget: '',
          timeline: ''
        });
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1rem'
    }}>
      <div className="apex-card" style={{
        maxWidth: '600px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#64748b',
            zIndex: 1001
          }}
        >
          ×
        </button>

        {/* Modal Header */}
        <div className="apex-text-center apex-mb-lg">
          <h2 className="apex-text-h2 apex-mb-sm" style={{ color: 'var(--apex-primary)' }}>
            Get Your Free Consultation
          </h2>
          <p className="apex-text-body">
            Tell us about your project and we'll get back to you within 24 hours with a detailed proposal.
          </p>
        </div>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="apex-card-compact apex-mb-md" style={{ 
            background: 'var(--apex-primary-50)', 
            border: '2px solid var(--apex-primary-200)',
            color: 'var(--apex-primary-700)'
          }}>
            <p className="apex-text-body">
              ✅ Thank you! We've received your inquiry and will contact you within 24 hours.
            </p>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="apex-card-compact apex-mb-md" style={{ 
            background: '#fef2f2', 
            border: '2px solid #fecaca',
            color: '#dc2626'
          }}>
            <p className="apex-text-body">
              ❌ Something went wrong. Please try again or contact us directly.
            </p>
          </div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          <div className="apex-grid apex-grid-2 apex-mb-md">
            <div>
              <label className="apex-text-body apex-mb-sm" style={{ display: 'block', fontWeight: 'var(--apex-weight-medium)' }}>
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="apex-text-body"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid var(--apex-primary-200)',
                  borderRadius: 'var(--apex-input-radius)',
                  fontSize: '1rem',
                  fontFamily: 'var(--apex-font-family)'
                }}
              />
            </div>
            <div>
              <label className="apex-text-body apex-mb-sm" style={{ display: 'block', fontWeight: 'var(--apex-weight-medium)' }}>
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="apex-text-body"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid var(--apex-primary-200)',
                  borderRadius: 'var(--apex-input-radius)',
                  fontSize: '1rem',
                  fontFamily: 'var(--apex-font-family)'
                }}
              />
            </div>
          </div>

          <div className="apex-grid apex-grid-2 apex-mb-md">
            <div>
              <label className="apex-text-body apex-mb-sm" style={{ display: 'block', fontWeight: 'var(--apex-weight-medium)' }}>
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+254 7XX XXX XXX"
                className="apex-text-body"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid var(--apex-primary-200)',
                  borderRadius: 'var(--apex-input-radius)',
                  fontSize: '1rem',
                  fontFamily: 'var(--apex-font-family)'
                }}
              />
            </div>
            <div>
              <label className="apex-text-body apex-mb-sm" style={{ display: 'block', fontWeight: 'var(--apex-weight-medium)' }}>
                Company/Organization
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="apex-text-body"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid var(--apex-primary-200)',
                  borderRadius: 'var(--apex-input-radius)',
                  fontSize: '1rem',
                  fontFamily: 'var(--apex-font-family)'
                }}
              />
            </div>
          </div>

          <div className="apex-mb-md">
            <label className="apex-text-body apex-mb-sm" style={{ display: 'block', fontWeight: 'var(--apex-weight-medium)' }}>
              Service Interest *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
              className="apex-text-body"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid var(--apex-primary-200)',
                borderRadius: 'var(--apex-input-radius)',
                fontSize: '1rem',
                fontFamily: 'var(--apex-font-family)'
              }}
            >
              <option value="">Select a service...</option>
              <option value="custom-web-applications">Custom Web Applications</option>
              <option value="web-hosting-security">Web Hosting & Security</option>
              <option value="progressive-web-apps">Progressive Web Apps</option>
              <option value="api-integration">API Integration Services</option>
              <option value="seo-digital-marketing">SEO & Digital Marketing</option>
              <option value="cybersecurity">Cybersecurity Solutions</option>
              <option value="consultation">General Consultation</option>
            </select>
          </div>

          <div className="apex-mb-md">
            <label className="apex-text-body apex-mb-sm" style={{ display: 'block', fontWeight: 'var(--apex-weight-medium)' }}>
              Project Details *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              placeholder="Tell us about your project requirements, goals, and any specific features you need..."
              className="apex-text-body"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid var(--apex-primary-200)',
                borderRadius: 'var(--apex-input-radius)',
                fontSize: '1rem',
                fontFamily: 'var(--apex-font-family)',
                resize: 'vertical'
              }}
            />
          </div>

          <div className="apex-grid apex-grid-2 apex-mb-lg">
            <div>
              <label className="apex-text-body apex-mb-sm" style={{ display: 'block', fontWeight: 'var(--apex-weight-medium)' }}>
                Budget Range
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="apex-text-body"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid var(--apex-primary-200)',
                  borderRadius: 'var(--apex-input-radius)',
                  fontSize: '1rem',
                  fontFamily: 'var(--apex-font-family)'
                }}
              >
                <option value="">Select budget range...</option>
                <option value="under-50k">Under KSh 50,000</option>
                <option value="50k-100k">KSh 50,000 - 100,000</option>
                <option value="100k-250k">KSh 100,000 - 250,000</option>
                <option value="250k-500k">KSh 250,000 - 500,000</option>
                <option value="500k-1m">KSh 500,000 - 1,000,000</option>
                <option value="over-1m">Over KSh 1,000,000</option>
              </select>
            </div>
            <div>
              <label className="apex-text-body apex-mb-sm" style={{ display: 'block', fontWeight: 'var(--apex-weight-medium)' }}>
                Timeline
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="apex-text-body"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid var(--apex-primary-200)',
                  borderRadius: 'var(--apex-input-radius)',
                  fontSize: '1rem',
                  fontFamily: 'var(--apex-font-family)'
                }}
              >
                <option value="">Select timeline...</option>
                <option value="asap">ASAP</option>
                <option value="1-month">Within 1 month</option>
                <option value="2-3-months">2-3 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="6-months-plus">6+ months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="apex-text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="apex-btn apex-btn-primary"
              style={{
                minWidth: '200px',
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer'
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Inquiry'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
