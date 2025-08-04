
"use client";


import React, { useState } from 'react';
import Image from 'next/image';
import './customWebAppPage.css';

const whyChooseUs = [
	{
		icon: (
			<svg width="40" height="40" fill="none" viewBox="0 0 40 40">
				<circle cx="20" cy="20" r="20" fill="#19977a" />
				<path d="M12 20l6 6 10-10" stroke="#fff" strokeWidth="2" />
			</svg>
		),
		title: 'Proven Results',
		desc: 'Our websites deliver measurable growth and engagement for Kenyan businesses.',
	},
	{
		icon: (
			<svg width="40" height="40" fill="none" viewBox="0 0 40 40">
				<circle cx="20" cy="20" r="20" fill="#e53935" />
				<path d="M20 12v16M12 20h16" stroke="#fff" strokeWidth="2" />
			</svg>
		),
		title: 'Fast & Secure',
		desc: 'Optimized for speed, security, and reliability on every device.',
	},
	{
		icon: (
			<svg width="40" height="40" fill="none" viewBox="0 0 40 40">
				<circle cx="20" cy="20" r="20" fill="#1dbf73" />
				<path d="M14 26l6-12 6 12" stroke="#fff" strokeWidth="2" />
			</svg>
		),
		title: 'Local Expertise',
		desc: 'We understand the Kenyan market and build solutions for local needs.',
	},
];

const testimonials = [
	{
		name: 'Jane Mwangi',
		company: 'Fashion Retailer',
		quote: 'Apex Webs built us a beautiful, fast online store. Our sales doubled in 3 months!',
	},
	{
		name: 'David Otieno',
		company: 'Consultancy',
		quote: 'The team understood our needs and delivered a site that attracts new clients every week.',
	},
	{
		name: 'Tech Startup',
		company: 'Nairobi',
		quote: 'Our platform is now the go-to for local users. Support is always responsive.',
	},
];

/**
 * CustomWebAppPage
 *
 * Service page for Custom Web Applications.
 * Now includes interactive modal lead capture for package cards.
 */
export default function CustomWebAppPage() {
  // ...existing code...
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  // Which package was selected
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  // Feedback state
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  // Form state for modal
  const [modalForm, setModalForm] = useState({
	name: '',
	businessType: '',
	email: '',
	packageType: '',
	phone: '',
	timeline: '',
	company: '',
	budget: '',
	description: '',
	features: [] as string[],
	urls: '',
  });

  // Helper to format message for WhatsApp/Email
  function formatMessage(form: typeof modalForm) {
	// Always include the selected package (from the card) in the message
	return `New Web Project Request\n\nName: ${form.name}\nBusiness Type: ${form.businessType}\nEmail: ${form.email}\nPhone: ${form.phone}\nCompany: ${form.company}\nBudget: ${form.budget}\nSelected Package: ${selectedPackage || ''}\nTimeline: ${form.timeline}\nDescription: ${form.description}\nFeatures Needed: ${form.features.join(', ')}\nReference URLs: ${form.urls}`;
  }

  // Enhanced validation helpers
  function validateEmail(email: string) {
	// Simple email regex
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  function validateKenyanPhone(phone: string) {
	// Kenyan phone numbers: +2547XXXXXXXX or 07XXXXXXXX
	return /^(\+254|0)7\d{8}$/.test(phone);
  }

  // Modal form submit handler
  async function handleModalSubmit(e: React.FormEvent<HTMLFormElement>) {
	e.preventDefault();
	// Validation
  if (!modalForm.name || !modalForm.email || !modalForm.phone) {
	setFeedback({ type: 'error', message: 'Please fill all required fields.' });
	return;
  }
	if (!validateEmail(modalForm.email)) {
	  setFeedback({ type: 'error', message: 'Please enter a valid email address.' });
	  return;
	}
	if (!validateKenyanPhone(modalForm.phone)) {
	  setFeedback({ type: 'error', message: 'Please enter a valid Kenyan phone number (e.g. 0712345678 or +254712345678).' });
	  return;
	}
	
	try {
	  // Submit lead to API first
	  const leadData = {
		name: modalForm.name,
		phone: modalForm.phone,
		company: modalForm.company,
		projectDetails: `${modalForm.packageType} Package - ${modalForm.description}\n\nBusiness: ${modalForm.businessType}\nTimeline: ${modalForm.timeline}\nBudget: ${modalForm.budget}\nFeatures: ${modalForm.features.join(', ')}\nURLs: ${modalForm.urls}`
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
		// WhatsApp
		window.open(`https://wa.me/254706154142?text=${msg}`, '_blank');
		// Email
		window.open(`mailto:apexkelabs@gmail.com?subject=New Web Project Request&body=${msg}`, '_blank');
		
		setFeedback({ type: 'success', message: 'Your request was sent! We will contact you soon.' });
		setModalForm({
		  name: '', businessType: '', email: '', packageType: '', phone: '', timeline: '', company: '', budget: '', description: '', features: [], urls: ''
		});
		setTimeout(() => setModalOpen(false), 2000);
	  } else {
		// API failed, but still send via WhatsApp/Gmail
		console.error('Lead API failed:', result.error);
		const msg = encodeURIComponent(formatMessage(modalForm));
		window.open(`https://wa.me/254706154142?text=${msg}`, '_blank');
		window.open(`mailto:apexkelabs@gmail.com?subject=New Web Project Request&body=${msg}`, '_blank');
		
		setFeedback({ type: 'success', message: 'Your request was sent! We will contact you soon.' });
		setModalForm({
		  name: '', businessType: '', email: '', packageType: '', phone: '', timeline: '', company: '', budget: '', description: '', features: [], urls: ''
		});
		setTimeout(() => setModalOpen(false), 2000);
	  }
	} catch (error) {
	  // Network error, but still send via WhatsApp/Gmail as fallback
	  console.error('Network error submitting lead:', error);
	  const msg = encodeURIComponent(formatMessage(modalForm));
	  window.open(`https://wa.me/254706154142?text=${msg}`, '_blank');
	  window.open(`mailto:apexkelabs@gmail.com?subject=New Web Project Request&body=${msg}`, '_blank');
	  
	  setFeedback({ type: 'success', message: 'Your request was sent! We will contact you soon.' });
	  setModalForm({
		name: '', businessType: '', email: '', packageType: '', phone: '', timeline: '', company: '', budget: '', description: '', features: [], urls: ''
	  });
	  setTimeout(() => setModalOpen(false), 2000);
	}
  }

  // Modal open handler for each package
  function openModalForPackage(pkg: string) {
	setSelectedPackage(pkg);
	setModalForm((f) => ({ ...f, packageType: pkg }));
	setFeedback(null);
	setModalOpen(true);
  }

  // Button actions (for hero section, keep as is)
  function handleQuote() {
	window.open('https://wa.me/254706154142?text=Hi! I want a quote for a custom web application.', '_blank');
  }
  function handleContact() {
	window.open('mailto:apexkelabs@gmail.com?subject=Contact Request&body=Hi! I want to discuss a web project.', '_blank');
  }

  // Modal UI for package cards
  return (
	<div className="page-container">
	  {/* Interactive Contact Modal for Package Cards */}
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
	  {/* Prevent background scroll when modal is open */}
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
		<h2 style={{ fontWeight: 800, fontSize: '1.3rem', marginBottom: 10, color: '#19977a' }}>Request This Package</h2>
		<form style={{ display: 'flex', flexDirection: 'column', gap: 14 }} onSubmit={handleModalSubmit}>
		  <input name="name" type="text" placeholder="Full Name *" required value={modalForm.name} onChange={e => setModalForm(f => ({ ...f, name: e.target.value }))} style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #e0f7fa', fontSize: '1rem', minWidth: 0, width: '100%' }} />
		  <input name="email" type="email" placeholder="Email Address *" required value={modalForm.email} onChange={e => setModalForm(f => ({ ...f, email: e.target.value }))} style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #e0f7fa', fontSize: '1rem', minWidth: 0, width: '100%' }} />
		  <input name="phone" type="text" placeholder="Kenyan Phone (e.g. 0712345678 or +254712345678) *" required value={modalForm.phone} onChange={e => setModalForm(f => ({ ...f, phone: e.target.value }))} style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #e0f7fa', fontSize: '1rem', minWidth: 0, width: '100%' }} />
		  <input name="company" type="text" placeholder="Company Name" value={modalForm.company} onChange={e => setModalForm(f => ({ ...f, company: e.target.value }))} style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #e0f7fa', fontSize: '1rem', minWidth: 0, width: '100%' }} />
		  <select name="businessType" required value={modalForm.businessType} onChange={e => setModalForm(f => ({ ...f, businessType: e.target.value }))} style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #e0f7fa', fontSize: '1rem', minWidth: 0, width: '100%' }}>
			<option value="">Select your business type</option>
			<option>Retail/E-commerce</option>
			<option>Professional Services</option>
			<option>Restaurant/Food</option>
			<option>Healthcare</option>
			<option>Education</option>
			<option>Non-profit</option>
			<option>Technology</option>
			<option>Other</option>
		  </select>

		  <select name="timeline" required value={modalForm.timeline} onChange={e => setModalForm(f => ({ ...f, timeline: e.target.value }))} style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #e0f7fa', fontSize: '1rem' }}>
			<option value="">Project Timeline *</option>
			<option>1-2 weeks</option>
			<option>1 month</option>
			<option>2-3 months</option>
			<option>Flexible</option>
		  </select>
		  <select name="budget" value={modalForm.budget} onChange={e => setModalForm(f => ({ ...f, budget: e.target.value }))} style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #e0f7fa', fontSize: '1rem' }}>
			<option value="">Budget Range</option>
			<option>Below KSh 50,000</option>
			<option>KSh 50,000 - 100,000</option>
			<option>KSh 100,000 - 200,000</option>
			<option>Above KSh 200,000</option>
		  </select>
		  <textarea name="description" placeholder="Project Description *" required rows={3} value={modalForm.description} onChange={e => setModalForm(f => ({ ...f, description: e.target.value }))} style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #e0f7fa', fontSize: '1rem', minWidth: 0, width: '100%' }} />
		  <label style={{ fontWeight: 600, color: '#19977a', marginBottom: 4, marginTop: 8 }}>Features Needed</label>
		  {/* Improved features checkboxes: 2 columns, readable color, grouped */}
		  <div className="features-checkboxes" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 12px', color: '#222', marginBottom: 8, minWidth: 0, width: '100%' }}>
			{[
			  { group: 'Core', items: ['Online Store/E-commerce', 'Blog/News Section', 'Photo Gallery', 'Online Booking'] },
			  { group: 'Advanced', items: ['User Login/Portal', 'Multi-language', 'Payment Integration', 'Social Media Integration'] },
			].map(({ group, items }) => (
			  <div key={group} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
				<span style={{ fontWeight: 600, color: '#19977a', fontSize: 13, marginBottom: 2 }}>{group}</span>
				{items.map((feat) => (
				  <label key={feat} style={{ fontWeight: 400, color: '#222', display: 'flex', alignItems: 'center', gap: 6 }}>
					<input type="checkbox" className="white-checkbox" checked={modalForm.features.includes(feat)} onChange={e => {
					  setModalForm(f => e.target.checked ? { ...f, features: [...f.features, feat] } : { ...f, features: f.features.filter(x => x !== feat) });
					}} /> {feat}
				  </label>
				))}
			  </div>
			))}
		  </div>
		  <textarea name="urls" placeholder="Reference URLs (optional)" rows={2} value={modalForm.urls} onChange={e => setModalForm(f => ({ ...f, urls: e.target.value }))} style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #e0f7fa', fontSize: '1rem', minWidth: 0, width: '100%' }} />
		  <button type="submit" style={{ background: '#e53935', color: '#fff', padding: '1rem', borderRadius: 8, fontWeight: 700, fontSize: '1.08rem', border: 'none', marginTop: 10, cursor: 'pointer', boxShadow: '0 2px 8px #e5393555', transition: 'background 0.2s, box-shadow 0.2s' }}>Submit Project Request</button>
		  {feedback && <div style={{ color: feedback.type === 'success' ? '#19977a' : '#e53935', fontWeight: 600, marginTop: 8 }}>{feedback.message}</div>}
		</form>
	  </div>
	</div>
  )}
			<main className="custom-web-app-page">
				<section className="hero-section">
					<div className="hero-content">
						<h1>Web Solutions for Kenyan Businesses</h1>
						<p className="hero-subtitle">
							Empowering local businesses with custom web solutions that generate real growth and results.
							<br />
			  Apex Webs: Building Kenya&apos;s digital future, one business at a time.
						</p>
						<div className="hero-cta-row">
							<button className="hero-cta-btn" onClick={handleQuote}>
								Get a Quote
							</button>
							<button className="hero-cta-btn secondary" onClick={handleContact}>
								Contact Us
							</button>
						</div>
					</div>
				</section>

				<section className="included-section">
<h2 className="section-title" style={{ color: '#17977a', fontWeight: 800, fontSize: '2.5rem', textAlign: 'center', marginBottom: 0 }}>What&apos;s Included</h2>
			   <hr style={{ width: 120, height: 8, background: '#e53935', border: 'none', borderRadius: 4, margin: '12px auto 16px auto' }} />
				   <p className="section-desc" style={{ textAlign: 'center' }}>Discover the key features included in every custom web application we deliver.</p>
					<div className="included-cards">
						<div className="included-card">
							<span className="feature-popular">Most Popular</span>
							<h3>Responsive Design</h3>
							<p>Mobile-first websites that look perfect and perform flawlessly on every device.</p>
						</div>
						<div className="included-card">
							<h3>Fast Performance</h3>
							<p>Lightning-fast load times and optimized code for the best user experience.</p>
						</div>
						<div className="included-card">
							<h3>SEO Optimized</h3>
							<p>Built with search engine optimization in mind to help your business get found online.</p>
						</div>
						<div className="included-card">
							<h3>Custom Design</h3>
							<p>Unique, creative designs tailored to your brand and business goals.</p>
						</div>
						<div className="included-card">
							<h3>Secure & Safe</h3>
							<p>Industry-standard security best practices to protect your data and users.</p>
						</div>
						<div className="included-card">
							<h3>Analytics Ready</h3>
							<p>Google Analytics integration for actionable insights and growth tracking.</p>
						</div>
					</div>
				</section>

				<section className="process-section">
			   <h2 className="section-title" style={{ color: '#17977a', fontWeight: 800, fontSize: '2.5rem', textAlign: 'center', marginBottom: 0 }}>Our Development Process</h2>
			   <hr style={{ width: 120, height: 8, background: '#e53935', border: 'none', borderRadius: 4, margin: '12px auto 16px auto' }} />
				   <p className="section-desc" style={{ textAlign: 'center', marginBottom: '2.5rem', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>Our proven process ensures your website is delivered on time, on budget, and exceeds expectations.</p>
					<div className="process-steps">
						<div className="process-step">
							<div className="process-step-number">1</div>
							<div className="process-step-title">Discovery & Planning</div>
							<div className="process-step-desc">
								We understand your business goals, target audience, and project requirements through detailed
								consultation.
							</div>
						</div>
						<div className="process-step">
							<div className="process-step-number">2</div>
							<div className="process-step-title">Design & Wireframing</div>
							<div className="process-step-desc">
								Create visual mockups and wireframes that align with your brand and user experience goals.
							</div>
						</div>
						<div className="process-step">
							<div className="process-step-number">3</div>
							<div className="process-step-title">Development</div>
							<div className="process-step-desc">
								Build your website using modern technologies, ensuring responsiveness and optimal performance.
							</div>
						</div>
						<div className="process-step">
							<div className="process-step-number">4</div>
							<div className="process-step-title">Testing & Launch</div>
							<div className="process-step-desc">
								Thorough testing across devices and browsers, followed by deployment and go-live support.
							</div>
						</div>
						<div className="process-step">
							<div className="process-step-number">5</div>
							<div className="process-step-title">Ongoing Support</div>
							<div className="process-step-desc">
								Continued maintenance, updates, and support to keep your website secure and up-to-date.
							</div>
						</div>
					</div>
				</section>

				<section className="projects-section">
			   <h2 style={{ color: '#17977a', fontWeight: 800, fontSize: '2.5rem', textAlign: 'center', marginBottom: 0 }}>Recent Projects</h2>
			   <hr style={{ width: 120, height: 8, background: '#e53935', border: 'none', borderRadius: 4, margin: '12px auto 16px auto' }} />
				   <p className="section-desc" style={{ textAlign: 'center' }}>See examples of our custom website development work for Kenyan businesses.</p>
					<div className="projects-cards">
						<div className="project-card">
<div className="project-img">
  <Image
	src="/images/ecommerce-sample.jpg"
	alt="Modern E-commerce Platform"
	width={400}
	height={240}
	style={{
	  width: '100%',
	  height: '100%',
	  objectFit: 'cover',
	  borderRadius: '1rem 1rem 0 0',
	}}
	priority
  />
</div>
							<h3>Modern E-commerce Platform</h3>
							<p>
								Complete online store with payment integration, inventory management, and customer portal for a
								fashion retailer.
							</p>
							<div className="project-tags">
								<span className="project-tag">E-commerce</span>
								<span className="project-tag">Responsive</span>
								<span className="project-tag">Payment Gateway</span>
							</div>
						</div>
						<div className="project-card">
<div className="project-img">
  <Image
	src="/images/corporate-sample.jpg"
	alt="Professional Service Website"
	width={400}
	height={240}
	style={{
	  width: '100%',
	  height: '100%',
	  objectFit: 'cover',
	  borderRadius: '1rem 1rem 0 0',
	}}
	priority
  />
</div>
							<h3>Professional Service Website</h3>
							<p>
								Corporate website with service showcases, team profiles, and client testimonials for a consulting
								firm.
							</p>
							<div className="project-tags">
								<span className="project-tag">Corporate</span>
								<span className="project-tag">CMS</span>
								<span className="project-tag">SEO Optimized</span>
							</div>
						</div>
						<div className="project-card">
<div className="project-img">
  <Image
	src="/images/startup-sample.jpg"
	alt="Tech Startup Platform"
	width={400}
	height={240}
	style={{
	  width: '100%',
	  height: '100%',
	  objectFit: 'cover',
	  borderRadius: '1rem 1rem 0 0',
	}}
	priority
  />
</div>
							<h3>Tech Startup Platform</h3>
							<p>
								Dynamic website with interactive features, blog integration, and user dashboard for a fintech
								startup.
							</p>
							<div className="project-tags">
								<span className="project-tag">Tech</span>
								<span className="project-tag">Interactive</span>
								<span className="project-tag">User Portal</span>
							</div>
						</div>
					</div>
				</section>

				<section className="packages-section">
			   <h2 className="section-title" style={{ color: '#17977a', fontWeight: 800, fontSize: '2.5rem', textAlign: 'center', marginBottom: 0 }}>Choose Your Package</h2>
			   <hr style={{ width: 120, height: 8, background: '#e53935', border: 'none', borderRadius: 4, margin: '12px auto 16px auto' }} />
				   <p className="section-desc" style={{ textAlign: 'center' }}>Flexible options to match your business needs and budget. Choose the perfect package and get started today!</p>
				   <div className="packages-cards" style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
		{/* Package Cards with Modal Trigger */}
	   <div className="package-card" style={{ transition: 'transform 0.25s cubic-bezier(.4,2,.6,1), box-shadow 0.25s', boxShadow: '0 2px 12px #e5393522' }}
			onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.045)'; e.currentTarget.style.boxShadow = '0 8px 32px #e5393544'; }}
			onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 2px 12px #e5393522'; }}>
		  <h3>Starter</h3>
		  <div className="package-price">KSh 45,000</div>
		  <div style={{ color: '#888', marginBottom: '1.1rem' }}>Basic Business Website</div>
		  <ul className="package-features">
			<li>Up to 5 pages</li>
			<li>Responsive design</li>
			<li>Contact form</li>
			<li>Basic SEO setup</li>
			<li>Social media integration</li>
			<li>3 months support</li>
		  </ul>
		  <button className="package-btn" onClick={() => openModalForPackage('Starter')}>Get Started</button>
		</div>
	   <div className="package-card highlight" style={{ transition: 'transform 0.25s cubic-bezier(.4,2,.6,1), box-shadow 0.25s', boxShadow: '0 2px 12px #e5393522' }}
			onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.045)'; e.currentTarget.style.boxShadow = '0 8px 32px #e5393544'; }}
			onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 2px 12px #e5393522'; }}>
		  <span className="package-badge">Most Popular</span>
		  <h3>Professional</h3>
		  <div className="package-price">KSh 85,000</div>
		  <div style={{ color: '#e6f7f1', marginBottom: '1.1rem' }}>Advanced Business Website</div>
		  <ul className="package-features">
			<li>Up to 10 pages</li>
			<li>Custom design & branding</li>
			<li>CMS integration</li>
			<li>Advanced SEO</li>
			<li>Analytics setup</li>
			<li>Blog functionality</li>
			<li>6 months support</li>
		  </ul>
		  <button className="package-btn" onClick={() => openModalForPackage('Professional')}>Most Popular</button>
		</div>
	   <div className="package-card" style={{ transition: 'transform 0.25s cubic-bezier(.4,2,.6,1), box-shadow 0.25s', boxShadow: '0 2px 12px #e5393522' }}
			onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.045)'; e.currentTarget.style.boxShadow = '0 8px 32px #e5393544'; }}
			onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 2px 12px #e5393522'; }}>
		  <h3>Enterprise</h3>
		  <div className="package-price">KSh 150,000</div>
		  <div style={{ color: '#888', marginBottom: '1.1rem' }}>Complete Digital Solution</div>
		  <ul className="package-features">
			<li>Unlimited pages</li>
			<li>E-commerce functionality</li>
			<li>User accounts & portal</li>
			<li>Payment integration</li>
			<li>Advanced features</li>
			<li>Priority support</li>
			<li>12 months support</li>
		  </ul>
		  <button className="package-btn" onClick={() => openModalForPackage('Enterprise')}>Contact Us</button>
		</div>
					</div>
				</section>


				<section className="why-choose-section">
			   <h2 className="section-title" style={{ color: '#17977a', fontWeight: 800, fontSize: '2.5rem', textAlign: 'center', marginBottom: 0 }}>Why Choose Us?</h2>
			   <hr style={{ width: 120, height: 8, background: '#e53935', border: 'none', borderRadius: 4, margin: '12px auto 16px auto' }} />
				   <p className="section-desc" style={{ textAlign: 'center' }}>We’re passionate about helping Kenyan businesses thrive online. Here’s why our clients trust us to deliver results.</p>
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
			   <h2 style={{ color: '#17977a', fontWeight: 800, fontSize: '2.5rem', textAlign: 'center', marginBottom: 0 }}>What Our Clients Say</h2>
			   <hr style={{ width: 120, height: 8, background: '#e53935', border: 'none', borderRadius: 4, margin: '12px auto 16px auto' }} />
				   <p className="section-desc" style={{ textAlign: 'center' }}>Hear from real Kenyan business owners who have transformed their online presence with Apex Webs.</p>
				   <div className="testimonials-cards">
						{testimonials.map((t, i) => (
							<div className="testimonial-card" key={i}>
								<div className="testimonial-quote">“{t.quote}”</div>
								<div>
									<span className="testimonial-author">{t.name}</span>
									<span className="testimonial-company">{t.company}</span>
								</div>
							</div>
						))}
					</div>
				</section>

				<footer className="custom-web-app-footer">
					<span>
						© 2024 Apex Webs. All rights reserved. Empowering Kenyan businesses through innovative web solutions.
					</span>
				</footer>
			</main>
		</div>
	);
}
