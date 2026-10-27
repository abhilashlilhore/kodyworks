import "./staffing.css";

const services = [
  {
    icon: "👨‍💻",
    title: "Contract Staffing",
    desc: "Flexible IT professionals for short-term projects and seasonal demands.",
  },
  {
    icon: "🤝",
    title: "Direct Placement",
    desc: "Permanent hires carefully vetted to match your culture and technical needs.",
  },
  {
    icon: "🏢",
    title: "Dedicated Teams",
    desc: "Full-time dedicated development teams that work as an extension of yours.",
  },
  {
    icon: "🎯",
    title: "Niche Talent",
    desc: "Hard-to-find specialists in AI, cloud, cybersecurity, and more.",
  },
];

const models = [
  {
    name: "Hourly Contract",
    desc: "Pay only for hours worked. Ideal for short-term tasks and projects.",
    price: "$45–$90",
    per: "/hr",
    featured: false,
  },
  {
    name: "Monthly Retainer",
    desc: "Dedicated talent on a monthly basis with guaranteed availability.",
    price: "$4,000–$8,000",
    per: "/mo",
    featured: true,
  },
  {
    name: "Direct Hire",
    desc: "Permanent placement with a one-time placement fee.",
    price: "15–25%",
    per: "of salary",
    featured: false,
  },
];

const roles = [
  { title: "Full-Stack Developers", icon: "💻" },
  { title: "Frontend Engineers", icon: "⚛️" },
  { title: "Backend Engineers", icon: "🖥️" },
  { title: "Mobile Developers", icon: "📱" },
  { title: "DevOps Engineers", icon: "☁️" },
  { title: "QA & Test Engineers", icon: "🧪" },
  { title: "UI/UX Designers", icon: "🎨" },
  { title: "Product Managers", icon: "📋" },
];

const benefits = [
  { icon: "⚡", title: "Fast Placement", desc: "Get qualified talent in days, not weeks." },
  { icon: "🔍", title: "Rigorous Vetting", desc: "Technical interviews and skill assessments." },
  { icon: "🔄", title: "Flexible Scaling", desc: "Scale your team up or down as needed." },
  { icon: "🛡️", title: "Risk-Free Trial", desc: "Trial period to ensure the right fit." },
];

export default function StaffingPage() {
  return (
    <div className="staff-wrapper">

      {/* Hero */}
      <section className="staff-hero">
        <div className="staff-hero-content">
          <h1>Staffing</h1>
          <p>
            Need talent fast? Our IT pros jump in to deliver results without the hiring headache.
          </p>
          <div className="staff-hero-actions">
            <a href="/contact" className="staff-btn primary">Hire IT Talent</a>
            <a href="/services" className="staff-btn secondary">Explore Services</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="staff-section staff-section-light">
        <div className="staff-section-title">
          <span className="badge">Services</span>
          <h2>Staffing Solutions</h2>
          <p>Flexible IT staffing to meet your project demands.</p>
        </div>
        <div className="staff-grid">
          {services.map((s, i) => (
            <div className="staff-card" key={i}>
              <div className="staff-card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hiring models */}
      <section className="staff-section staff-section-light">
        <div className="staff-section-title">
          <span className="badge">Engagement Models</span>
          <h2>Choose Your Hiring Model</h2>
          <p>Flexible engagement options tailored to your needs.</p>
        </div>
        <div className="staff-models">
          {models.map((m, i) => (
            <div className={`staff-model${m.featured ? " featured" : ""}`} key={i}>
              {m.featured && <span className="staff-model-badge">Most Popular</span>}
              <h3>{m.name}</h3>
              <p>{m.desc}</p>
              <span className="staff-model-price">{m.price}<small>{m.per}</small></span>
            </div>
          ))}
        </div>
      </section>

      {/* Two column */}
      <section className="staff-section">
        <div className="staff-two-col">
          <div className="staff-text-content">
            <h3>Top IT Talent, On Demand</h3>
            <p>
              We provide flexible IT staffing solutions to meet your project demands. From contract staffing to direct placement,
              our pool of skilled professionals ensures you have the right team at the right time.
            </p>
            <p>
              Skip the months-long hiring process. We handle sourcing, vetting, and onboarding so you can start delivering
            </p>
          </div>
          <div className="staff-visual">
            <div className="staff-visual-content">
              <span className="staff-visual-icon">🤝</span>
              <h4>Right Talent, Right Time</h4>
              <p>Skilled professionals ready to join your team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="staff-section staff-section-light">
        <div className="staff-section-title">
          <span className="badge">Talent</span>
          <h2>Roles We Staff For</h2>
          <p>Across the full spectrum of technology roles.</p>
        </div>
        <div className="staff-roles">
          {roles.map((r, i) => (
            <div className="staff-role" key={i}>
              <span className="staff-role-icon">{r.icon}</span>
              <h4>{r.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="staff-section staff-section-light">
        <div className="staff-section-title">
          <span className="badge">Value</span>
          <h2>Why Partner With Us</h2>
          <p>Staffing advantages that save you time and money.</p>
        </div>
        <div style={{ maxWidth: "1000px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
          {benefits.map((b, i) => (
            <div key={i} style={{ textAlign: "center", padding: "28px 20px", borderRadius: "16px", background: "#f8fafc", border: "1px solid #e2e8f0" }}>
              <span style={{ fontSize: "40px", display: "block", marginBottom: "16px" }}>{b.icon}</span>
              <h4 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "10px" }}>{b.title}</h4>
              <p style={{ fontSize: "14px", lineHeight: 1.6, margin: 0, opacity: 0.8 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="staff-cta">
        <h2>Ready to Build Your Team?</h2>
        <p>Schedule a free staffing consultation and find the right IT talent for your project.</p>
        <a href="/contact" className="staff-btn">Get Free Staffing Consultation</a>
      </section>

    </div>
  );
}
