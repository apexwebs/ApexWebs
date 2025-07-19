import React from 'react';
import ProjectCard from '../../../../components/ProjectCard';

type ProjectStatus = 'completed' | 'in-progress' | 'featured';

interface Project {
  title: string;
  status: ProjectStatus;
  description: string;
  link: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: 'E-commerce Platform for Nairobi Mart',
    status: 'completed',
    description: 'A scalable e-commerce site for a local retailer, featuring secure payments and inventory management.',
    link: '#',
    featured: true,
  },
  {
    title: 'School Portal for Green Valley Academy',
    status: 'in-progress',
    description: 'A digital portal for school administration, parent-teacher communication, and fee management.',
    link: '#',
    featured: false,
  },
  {
    title: 'Startup Landing Page for TechSavvy',
    status: 'completed',
    description: 'A modern, conversion-focused landing page for a Kenyan tech startup.',
    link: '#',
    featured: false,
  },
  {
    title: 'NGO Website for Community Uplift',
    status: 'featured',
    description: 'A featured project empowering a local NGO with a digital presence and donation system.',
    link: '#',
    featured: true,
  },
];

const statusColors: Record<ProjectStatus, string> = {
  completed: '#22c55e',
  'in-progress': '#eab308',
  featured: '#0ea5e9',
};

export default function ProjectsPage() {
  // Sample images and tags for each project
  const projectCards = [
    {
      imageSrc: '/images/ecommerce-sample.jpg',
      alt: 'E-commerce Platform',
      title: 'Modern E-commerce Platform',
      description: 'Complete online store with payment integration, inventory management, and customer portal for a fashion retailer.',
      tags: ['E-commerce', 'Responsive', 'Payment Gateway'],
    },
    {
      imageSrc: '/images/corporate-sample.jpg',
      alt: 'Professional Service Website',
      title: 'Professional Service Website',
      description: 'Corporate website with service showcases, team profiles, and client testimonials for a consulting firm.',
      tags: ['Corporate', 'CMS', 'SEO Optimized'],
    },
    {
      imageSrc: '/images/startup-sample.jpg',
      alt: 'Tech Startup Platform',
      title: 'Tech Startup Platform',
      description: 'Dynamic website with interactive features, blog integration, and user dashboard for a fintech startup.',
      tags: ['Tech', 'Interactive', 'User Portal'],
    },
  ];

  return (
    <section style={{ background: '#fff', maxWidth: 1100, margin: '3rem auto', padding: '3rem 1rem', borderRadius: 18, boxShadow: '0 4px 24px #00704A22' }}>
      <h2 style={{ color: '#19977a', fontWeight: 800, fontSize: '2.5rem', textAlign: 'center', marginBottom: 8 }}>
        Recent Projects
      </h2>
      <div style={{ width: 60, height: 5, background: '#e53935', borderRadius: 3, margin: '0 auto 2.5rem auto' }} />
      <p style={{ color: '#444', fontWeight: 500, fontSize: '1.15rem', textAlign: 'center', marginBottom: 24 }}>
        Explore our portfolio of custom web solutions for Kenyan businesses. Each project is crafted for impact, performance, and growth.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {projectCards.map((card, idx) => (
          <ProjectCard key={idx} {...card} />
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <a href="/contact" className="view-projects-btn" style={{ background: 'linear-gradient(90deg, #00704A 0%, #0ea5e9 100%)', color: '#fff', fontWeight: 700, fontSize: '1.08rem', borderRadius: 8, padding: '0.9rem 2.2rem', boxShadow: '0 2px 8px #0ea5e955', border: 'none', outline: 'none', cursor: 'pointer', transition: 'background 0.22s, box-shadow 0.22s, transform 0.18s', display: 'inline-block', textDecoration: 'none' }}>Contact Us for a Custom Project</a>
      </div>
    </section>
  );
}
