import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section style={{ maxWidth: 800, margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #eee' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
        <Image src="/images/ApexLogo.jpg" alt="Apex Webs Logo" width={80} height={80} style={{ borderRadius: '12px' }} />
        <div>
          <h2 style={{ margin: 0, fontSize: '2rem', color: '#00704A' }}>Apex Webs</h2>
          <p style={{ margin: 0, fontWeight: 500 }}>Pamoja Tunaweza - Together We Can</p>
        </div>
      </div>
      <h3>Empowering Kenyan Businesses with Digital Solutions</h3>
      <p>
        Apex Webs is a Kenyan tech startup focused on providing innovative, user-centric web solutions for SMEs, schools, and startups. Our mission is to bridge the digital gap and empower local businesses to thrive online.
      </p>
      <ul style={{ margin: '1.5rem 0', paddingLeft: 20 }}>
        <li><strong>Mission:</strong> Provide innovative, user-centric web solutions for Kenyan businesses.</li>
        <li><strong>Vision:</strong> Be the catalyst for a digitally empowered, globally competitive Kenyan business environment.</li>
        <li><strong>Values:</strong> Innovation, Local Understanding, Affordability, Customer-Centricity, Community Empowerment.</li>
      </ul>
      <div style={{ margin: '2rem 0' }}>
        <a href="#contact" style={{ background: '#00704A', color: '#fff', padding: '1rem 2rem', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem' }}>
          Get a Free Consultation
        </a>
      </div>
      <p style={{ color: '#888', fontSize: '0.95rem' }}>
        Serving all of Kenya. <strong>Let's build your digital future together!</strong>
      </p>
    </section>
  );
}
