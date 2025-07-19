"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ProjectCardProps {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
  tags: string[];
}

export default function ProjectCard({ imageSrc, alt, title, description, tags }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="project-card">
      <div style={{ width: "100%", height: 120, background: "#fff", borderRadius: 16, marginBottom: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {!imgError ? (
          <Image
            src={imageSrc}
            alt={alt}
            width={120}
            height={120}
            style={{ width: "80%", height: "80%", objectFit: "cover", borderRadius: 12 }}
            onError={() => setImgError(true)}
          />
        ) : null}
      </div>
      <h3 style={{ fontWeight: 700, fontSize: "1.18rem", marginBottom: 8, textAlign: "center", color: "#fff" }}>{title}</h3>
      <p style={{ fontSize: 15, marginBottom: 12, textAlign: "center", color: "#e0f7fa" }}>{description}</p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 8 }}>
        {tags.map((tag, idx) => (
          <span key={idx} style={{ background: "#fff", color: "#19977a", borderRadius: 6, padding: "2px 10px", fontSize: 13, fontWeight: 600 }}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
