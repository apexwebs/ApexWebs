"use client";

import React, { useRef } from 'react';
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

export default function CustomWebAppPage() {
	const formRef = useRef<HTMLFormElement>(null);

	// Helper to format message
	function formatMessage(form: HTMLFormElement) {
		const name = form[0].value;
		const businessType = form[1].value;
		const email = form[2].value;
		const packageType = form[3].value;
		const phone = form[4].value;
		const timeline = form[5].value;
		const company = form[6].value;
		const budget = form[7].value;
		const description = form[8].value;
		const features = Array.from(
			form.querySelectorAll('.features-checkboxes input[type="checkbox"]:checked')
		)
			.map((el: any) => el.parentNode.textContent.trim())
			.join(', ');
		const urls = form[17].value;
		return `New Web Project Request\n\nName: ${name}\nBusiness Type: ${businessType}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nBudget: ${budget}\nPreferred Package: ${packageType}\nTimeline: ${timeline}\nDescription: ${description}\nFeatures Needed: ${features}\nReference URLs: ${urls}`;
	}

	// Form submit handler
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = formRef.current!;
		const msg = encodeURIComponent(formatMessage(form));
		// WhatsApp
		window.open(`https://wa.me/254706154142?text=${msg}`, '_blank');
		// Email
		window.open(`mailto:apexkelabs@gmail.com?subject=New Web Project Request&body=${msg}`, '_blank');
	}

	// Button actions
	function handleQuote() {
		window.open('https://wa.me/254706154142?text=Hi! I want a quote for a custom web application.', '_blank');
	}
	function handleContact() {
		window.open('mailto:apexkelabs@gmail.com?subject=Contact Request&body=Hi! I want to discuss a web project.', '_blank');
	}
	function scrollToForm() {
		document.querySelector('.contact-section')?.scrollInto
	}

	return (
		<div className="page-container">
			<main className="custom-web-app-page">
				<section className="hero-section">
					<div className="hero-content">
						<h1>Web Solutions for Kenyan Businesses</h1>
						<p className="hero-subtitle">
							Empowering local businesses with custom web solutions that generate real growth and results.
							<br />
							Apex Webs: Building Kenya’s digital future, one business at a time.
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
					<h2 className="section-title">What&apos;s Included</h2>
					<p className="section-desc">Comprehensive web development services designed to meet your business needs</p>
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
					<h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
						Our Development Process
					</h2>
					<p
						className="section-desc"
						style={{
							marginBottom: '2.5rem',
							maxWidth: 600,
							marginLeft: 'auto',
							marginRight: 'auto',
						}}
					>
						A structured approach that ensures your project is delivered on time and within budget
					</p>
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
					<h2>Recent Projects</h2>
					<p className="section-desc">See examples of our custom website development work for Kenyan businesses</p>
					<div className="projects-cards">
						<div className="project-card">
							<div className="project-img">
								<img
									src="/images/ecommerce-sample.jpg"
									alt="Modern E-commerce Platform"
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'cover',
										borderRadius: '1rem 1rem 0 0',
									}}
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
								<img
									src="/images/corporate-sample.jpg"
									alt="Professional Service Website"
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'cover',
										borderRadius: '1rem 1rem 0 0',
									}}
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
								<img
									src="/images/startup-sample.jpg"
									alt="Tech Startup Platform"
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'cover',
										borderRadius: '1rem 1rem 0 0',
									}}
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
					<h2 className="section-title">Choose Your Package</h2>
					<p className="section-desc">Flexible options to match your business needs and budget</p>
					<div className="packages-cards">
						<div className="package-card">
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
							<button className="package-btn" onClick={handleQuote}>Get Started</button>
						</div>
						<div className="package-card highlight">
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
							<button className="package-btn" onClick={handleQuote}>Most Popular</button>
						</div>
						<div className="package-card">
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
							<button className="package-btn" onClick={handleContact}>Contact Us</button>
						</div>
					</div>
				</section>

				<section className="contact-section">
					<h2>Tell Us About Your Project</h2>
					<p className="section-desc">Help us understand your requirements so we can provide you with the best solution</p>
					<form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
						<div className="form-row">
							<div className="form-group">
								<label className="form-label">Full Name *</label>
								<input type="text" required />
							</div>
							<div className="form-group">
								<label className="form-label">Type of Business *</label>
								<select required>
									<option value="">Select your business type</option>
									<option>Retail</option>
									<option>Service</option>
									<option>Startup</option>
									<option>Other</option>
								</select>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group">
								<label className="form-label">Email Address *</label>
								<input type="email" required />
							</div>
							<div className="form-group">
								<label className="form-label">Preferred Package *</label>
								<select required>
									<option value="">Select a package</option>
									<option>Starter</option>
									<option>Professional</option>
									<option>Enterprise</option>
								</select>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group">
								<label className="form-label">Phone Number *</label>
								<input type="tel" required />
							</div>
							<div className="form-group">
								<label className="form-label">Project Timeline *</label>
								<select required>
									<option value="">When do you need this completed?</option>
									<option>1-2 weeks</option>
									<option>1 month</option>
									<option>2-3 months</option>
									<option>Flexible</option>
								</select>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group">
								<label className="form-label">Company/Business Name</label>
								<input type="text" />
							</div>
							<div className="form-group">
								<label className="form-label">Budget Range</label>
								<select>
									<option value="">Select your budget range</option>
									<option>Below KSh 50,000</option>
									<option>KSh 50,000 - 100,000</option>
									<option>KSh 100,000 - 200,000</option>
									<option>Above KSh 200,000</option>
								</select>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group full-width">
								<label className="form-label">Project Description *</label>
								<textarea
									rows={4}
									required
									placeholder="Tell us about your project, goals, and any specific features you need..."
								/>
							</div>
						</div>
						<div className="form-row">
							<label
								className="form-label"
								style={{
									color: '#fff',
									fontWeight: 600,
									marginBottom: '0.5rem',
									width: '100%',
								}}
							>
								Features Needed (Check all that apply)
							</label>
							<div className="features-checkboxes">
								<label>
									<input type="checkbox" className="white-checkbox" /> Online Store/E-commerce
								</label>
								<label>
									<input type="checkbox" className="white-checkbox" /> Blog/News Section
								</label>
								<label>
									<input type="checkbox" className="white-checkbox" /> Photo Gallery
								</label>
								<label>
									<input type="checkbox" className="white-checkbox" /> Online Booking
								</label>
								<label>
									<input type="checkbox" className="white-checkbox" /> User Login/Portal
								</label>
								<label>
									<input type="checkbox" className="white-checkbox" /> Multi-language
								</label>
								<label>
									<input type="checkbox" className="white-checkbox" /> Payment Integration
								</label>
								<label>
									<input type="checkbox" className="white-checkbox" /> Social Media Integration
								</label>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group full-width">
								<label className="form-label">Do you have any websites you like? (URLs or references)</label>
								<textarea
									rows={2}
									className="url-area"
									placeholder="Share any websites you admire or want to use as inspiration..."
								/>
							</div>
						</div>
						<button type="submit" className="submit-btn">
							Submit Project Request
						</button>
					</form>
				</section>

				<section className="why-choose-section">
					<h2 className="section-title">Why Choose Us?</h2>
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
					<h2>What Our Clients Say</h2>
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
