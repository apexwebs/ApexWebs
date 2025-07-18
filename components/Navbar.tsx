import React from 'react';

export default function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar-logo">
				Apex Webs
			</div>
			<div className="navbar-menu">
				<a href="/about">About</a>
				<a href="/services">Services</a>
				<a href="/projects">Projects</a>
				<a href="/blog">Blog</a>
				<a href="/contact">Contact</a>
			</div>
		</nav>
	);
}