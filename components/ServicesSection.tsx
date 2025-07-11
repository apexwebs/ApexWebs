import Link from 'next/link';
import './ServicesSection.css';

const services = [
	{
		href: '/services/custom-web-applications',
		icon: (
			<svg width="56" height="56" fill="none" viewBox="0 0 56 56">
				<rect width="56" height="56" rx="12" fill="#f4f8fb"/>
				<path d="M16 22h24v12a4 4 0 01-4 4H20a4 4 0 01-4-4V22z" fill="#fff" stroke="#19977a" strokeWidth="2"/>
				<rect x="22" y="28" width="12" height="4" rx="2" fill="#19977a"/>
				<circle cx="28" cy="34" r="2" fill="#e53935"/>
			</svg>
		),
		title: <>Custom Web<br />Applications</>,
		desc: "Tailor-made solutions designed specifically for Kenyan business challenges. From inventory systems to customer management, we build apps that grow with your business.",
	},
	{
		href: '/services/web-hosting-security',
		icon: (
			<svg width="56" height="56" fill="none" viewBox="0 0 56 56">
				<rect width="56" height="56" rx="12" fill="#f4f8fb"/>
				<rect x="18" y="20" width="20" height="6" rx="3" fill="#fff" stroke="#19977a" strokeWidth="2"/>
				<rect x="18" y="30" width="20" height="6" rx="3" fill="#fff" stroke="#19977a" strokeWidth="2"/>
				<circle cx="24" cy="23" r="1.5" fill="#e53935"/>
				<circle cx="24" cy="33" r="1.5" fill="#19977a"/>
			</svg>
		),
		title: <>Web Hosting & Security</>,
		desc: "Secure, reliable hosting on Google Cloud Platform with Kenyan performance optimization. Includes SSL certificates, daily backups, and 24/7 monitoring.",
		badge: "Most Popular",
	},
	{
		href: '/services/progressive-web-apps',
		icon: (
			<svg width="56" height="56" fill="none" viewBox="0 0 56 56">
				<rect width="56" height="56" rx="12" fill="#f4f8fb"/>
				<rect x="20" y="14" width="16" height="28" rx="3" fill="#fff" stroke="#19977a" strokeWidth="2"/>
				<circle cx="28" cy="38" r="2" fill="#e53935"/>
				<rect x="26" y="18" width="4" height="8" rx="2" fill="#19977a"/>
			</svg>
		),
		title: <>Progressive Web Apps</>,
		desc: "Offline-capable applications that work seamlessly even in areas with intermittent connectivity. Perfect for rural businesses and mobile users.",
	},
	{
		href: '/services/api-integration',
		icon: (
			<svg width="56" height="56" fill="none" viewBox="0 0 56 56">
				<rect width="56" height="56" rx="12" fill="#f4f8fb"/>
				<rect x="24" y="18" width="8" height="16" rx="3" fill="#fff" stroke="#19977a" strokeWidth="2"/>
				<rect x="22" y="30" width="12" height="6" rx="3" fill="#19977a"/>
				<rect x="26" y="14" width="2" height="6" rx="1" fill="#e53935"/>
				<rect x="30" y="14" width="2" height="6" rx="1" fill="#19977a"/>
			</svg>
		),
		title: <>API Integrations</>,
		desc: "Seamless integration with M-Pesa, iTax, e-Citizen and other essential Kenyan platforms. Connect your systems to the services that matter.",
	},
	{
		href: '/services/seo-digital-marketing',
		icon: (
			<svg width="56" height="56" fill="none" viewBox="0 0 56 56">
				<rect width="56" height="56" rx="12" fill="#f4f8fb"/>
				<circle cx="28" cy="26" r="8" fill="#fff" stroke="#19977a" strokeWidth="2"/>
				<rect x="34" y="32" width="8" height="2" rx="1" transform="rotate(45 34 32)" fill="#e53935"/>
			</svg>
		),
		title: <>SEO & Digital Marketing</>,
		desc: "Increase your online visibility in Kenya and beyond. Our strategies are tailored for the African digital landscape.",
	},
	{
		href: '/services/cybersecurity',
		icon: (
			<svg width="56" height="56" fill="none" viewBox="0 0 56 56">
				<rect width="56" height="56" rx="12" fill="#f4f8fb"/>
				<path d="M28 16l12 4v7c0 7.5-5.5 14-12 15-6.5-1-12-7.5-12-15v-7l12-4z" fill="#fff" stroke="#19977a" strokeWidth="2"/>
				<path d="M28 22v10" stroke="#e53935" strokeWidth="2"/>
				<circle cx="28" cy="30" r="2" fill="#19977a"/>
			</svg>
		),
		title: <>Cybersecurity Solutions</>,
		desc: "Protect your business data with our comprehensive security audits and implementation services designed for Kenyan regulatory requirements.",
	},
];

export default function ServicesSection() {
	return (
		<section id="services" style={{ background: '#f4f8fb', padding: '4rem 0' }}>
			<h2 style={{ color: '#19977a', fontWeight: 800, fontSize: '2.5rem', textAlign: 'center', marginBottom: 8 }}>
				Our Services
			</h2>
			<div style={{ width: 60, height: 5, background: '#e53935', borderRadius: 3, margin: '0 auto 2.5rem auto' }} />
			<div
				className="services-grid"
			>
				{services.map(({ href, icon, title, desc, badge }) => (
					<Link
						key={href}
						href={href}
						className="service-card"
					>
						<div className="service-card-header">
							{icon}
						</div>
						<div className="service-card-body">
							{badge && (
								<span className="service-badge">{badge}</span>
							)}
							<h3 className="service-title">{title}</h3>
							<p className="service-desc">{desc}</p>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
}
