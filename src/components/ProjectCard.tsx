import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
  tags: string[];
}

export default function ProjectCard({ imageSrc, alt, title, description, tags }: ProjectCardProps) {
  return (
    <div className="apex-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Project Image */}
      <div style={{ position: 'relative', width: '100%', height: '200px', marginBottom: '1rem', borderRadius: '0.5rem', overflow: 'hidden' }}>
        <Image
          src={imageSrc}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          onError={(e) => {
            // Fallback to a placeholder if image fails to load
            const target = e.target as HTMLImageElement;
            target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YwZmRmYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMwZDk0ODgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9qZWN0IEltYWdlPC90ZXh0Pjwvc3ZnPg==';
          }}
        />
      </div>

      {/* Project Content */}
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 className="apex-text-h3 apex-mb-sm" style={{ color: 'var(--apex-primary)' }}>
          {title}
        </h3>
        
        <p className="apex-text-body apex-mb-md" style={{ flexGrow: 1 }}>
          {description}
        </p>

        {/* Project Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="apex-text-small"
              style={{
                background: 'var(--apex-primary-100)',
                color: 'var(--apex-primary-700)',
                padding: '0.25rem 0.75rem',
                borderRadius: '1rem',
                fontSize: '0.75rem',
                fontWeight: 'var(--apex-weight-medium)'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
