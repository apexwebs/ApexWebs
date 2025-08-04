
export default function AboutPurposeSection() {
  return (
    <section className="about-purpose-section">
      <h2 className="about-purpose-title">Our Purpose</h2>
      <div className="about-purpose-underline" />
      <div className="about-purpose-hero">
        <h3 className="about-purpose-main" style={{ color: '#fff' }}>
          Pamoja Twaweza: <span style={{ color: '#fff' }}>Build. Connect. Transform.</span>
        </h3>
        <p className="about-purpose-sub">Together We Can: Building Digital Bridges for Kenyan Business</p>
      </div>
      <div className="about-purpose-cards">
        <div className="about-purpose-card">
          <h4 className="about-purpose-card-title">Our Mission</h4>
          <p className="about-purpose-card-desc">Build innovative, user-centric web apps that solve critical challenges for businesses in Kenya. We focus on creating solutions that address the specific needs of Kenyan enterprises, from SMEs to educational institutions.</p>
        </div>
        <div className="about-purpose-card">
          <h4 className="about-purpose-card-title">Our Vision</h4>
          <p className="about-purpose-card-desc">Be the catalyst for a digitally empowered, globally competitive Kenyan business environment. We strive to position Kenya at the forefront of Africa&apos;s digital transformation through accessible, powerful web technologies.</p>
        </div>
      </div>
    </section>
  );
}
