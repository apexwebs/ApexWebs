import React from 'react';

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
  return (
    <section style={{ maxWidth: 900, margin: '3rem auto', padding: '2.5rem', background: 'rgba(255,255,255,0.97)', borderRadius: 18, boxShadow: '0 4px 24px #00704A22' }}>
      <h2 style={{ color: '#00704A', fontWeight: 800, fontSize: '2.2rem', marginBottom: 8 }}>Our Projects</h2>
      <p style={{ color: '#0ea5e9', fontWeight: 600, marginBottom: 24 }}>Showcasing completed, ongoing, and featured work for Kenyan clients</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {projects.map((project, idx) => (
          <div key={idx} style={{ background: '#f8fafc', borderRadius: 12, padding: 20, boxShadow: '0 2px 8px #00704A11', borderLeft: `6px solid ${project.featured ? statusColors.featured : statusColors[project.status]}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
              <span style={{ fontWeight: 700, fontSize: '1.15rem', color: '#222' }}>{project.title}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: project.featured ? statusColors.featured : statusColors[project.status], background: '#fff', borderRadius: 6, padding: '2px 10px', marginLeft: 8 }}>
                {project.featured ? 'Featured' : project.status === 'completed' ? 'Completed' : 'In Progress'}
              </span>
            </div>
            <div style={{ color: '#444', fontSize: 15, marginBottom: 6 }}>{project.description}</div>
            {project.link && <a href={project.link} style={{ color: '#00704A', fontWeight: 500, fontSize: 14 }}>View Project</a>}
          </div>
        ))}
      </div>
    </section>
  );
}
