import Image from "next/image";

export default function Home() {
  return (
    <section
      style={{
        maxWidth: 900,
        margin: '3rem auto',
        padding: '2.5rem',
        background: 'rgba(255,255,255,0.97)',
        borderRadius: 18,
        boxShadow: '0 4px 24px #00704A22',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Lively animated accent ~ISIPITE~*/}
      <div style={{
        position: 'absolute',
        top: -60,
        right: -60,
        width: 180,
        height: 180,
        background: 'radial-gradient(circle at 40% 40%, #0ea5e9 0%, #00704A 80%)',
        opacity: 0.12,
        borderRadius: '50%',
        zIndex: 0,
        animation: 'float 6s ease-in-out infinite',
      }} />
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(20px); }
          100% { transform: translateY(0); }
        }
      `}</style>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', zIndex: 1, position: 'relative' }}>
        <Image src="/images/ApexLogo.jpg" alt="Apex Webs Logo" width={90} height={90} style={{ borderRadius: '14px', boxShadow: '0 2px 8px #00704A33' }} />
        <div>
          <h2 style={{ margin: 0, fontSize: '2.5rem', color: '#00704A', fontWeight: 800, letterSpacing: '-1px' }}>Apex Webs</h2>
          <p style={{ margin: 0, fontWeight: 600, color: '#0ea5e9', fontSize: '1.15rem' }}>Pamoja Tunaweza - Together We Can</p>
        </div>
      </div>
      <h3 style={{ color: '#171717', fontSize: '1.5rem', fontWeight: 700, marginBottom: 12 }}>Empowering Kenyan Businesses with Digital Solutions</h3>
      <p style={{ color: '#222', fontSize: '1.1rem', marginBottom: 18, lineHeight: 1.6 }}>
        Apex Webs is a Kenyan tech startup focused on providing <b>innovative, user-centric web solutions</b> for SMEs, schools, and startups. Our mission is to bridge the digital gap and empower local businesses to thrive online.
      </p>
      <ul style={{ margin: '1.5rem 0', paddingLeft: 24, color: '#222', fontSize: '1.08rem', lineHeight: 1.7 }}>
        <li><strong>Mission:</strong> Provide innovative, user-centric web solutions for Kenyan businesses.</li>
        <li><strong>Vision:</strong> Be the catalyst for a digitally empowered, globally competitive Kenyan business environment.</li>
        <li><strong>Values:</strong> Innovation, Local Understanding, Affordability, Customer-Centricity, Community Empowerment.</li>
      </ul>
      <div style={{ margin: '2.5rem 0', zIndex: 1, position: 'relative' }}>
        <a href="#contact" style={{ background: 'linear-gradient(90deg, #0ea5e9 0%, #00704A 100%)', color: '#fff', padding: '1.1rem 2.5rem', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: '1.15rem', boxShadow: '0 2px 8px #0ea5e955', transition: 'background 0.2s, box-shadow 0.2s' }}>
          Get a Free Consultation
        </a>
      </div>
      <p style={{ color: '#00704A', fontSize: '1.08rem', fontWeight: 500, textAlign: 'center', marginTop: 18 }}>
        Serving all of Kenya. <strong>Let&apos;s build your digital future together!</strong>
      </p>
    </section>
  );
}
