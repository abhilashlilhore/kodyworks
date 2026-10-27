import "./salesforce.css";

const services = [
  {
    icon: "🚀",
    title: "Salesforce Implementation",
    desc: "End-to-end Salesforce CRM deployment tailored to your business processes.",
  },
  {
    icon: "🎨",
    title: "Customization & Development",
    desc: "Custom objects, Apex code, Lightning components, and Visualforce pages.",
  },
  {
    icon: "🔌",
    title: "Integration",
    desc: "Connect Salesforce with ERP, marketing, and third-party systems via APIs.",
  },
  {
    icon: "📊",
    title: "Analytics & Reporting",
    desc: "Dashboards, reports, and Einstein Analytics for data-driven decisions.",
  },
  {
    icon: "🛡️",
    title: "Managed Services",
    desc: "Ongoing administration, support, and optimization of your Salesforce org.",
  },
];

const clouds = [
  {
    tag: "SALES CLOUD",
    title: "Sales Cloud",
    desc: "Manage leads, opportunities, and accounts to close deals faster.",
    bg: "url('/assets/images.jfif')",
  },
  {
    tag: "SERVICE CLOUD",
    title: "Service Cloud",
    desc: "Deliver exceptional customer support with case management and omnichannel routing.",
    bg: "url('/assets/images(1).jfif')",
  },
  {
    tag: "MARKETING CLOUD",
    title: "Marketing Cloud",
    desc: "Personalized customer journeys across email, social, and mobile.",
    bg: "url('/assets/images.jfif')",
  },
];

const featureList = [
  "Certified Salesforce consultants",
  "Custom Apex & Lightning development",
  "Seamless third-party integrations",
  "Data migration & cleansing",
  "User training & adoption",
  "Ongoing support & maintenance",
];

const benefits = [
  { icon: "📈", title: "360° Customer View", desc: "Unified data across sales, service, and marketing." },
  { icon: "⚡", title: "Process Automation", desc: "Automate repetitive tasks with flows and approvals." },
  { icon: "📱", title: "Mobile-First CRM", desc: "Access Salesforce from anywhere on any device." },
  { icon: "🔒", title: "Enterprise Security", desc: "Role-based access and data protection built-in." },
];

export default function SalesforcePage() {
  return (
    <div className="sf-wrapper">

      {/* Hero */}
      <section className="sf-hero">
        <div className="sf-hero-content">
          <h1>Salesforce</h1>
          <p>
            Unlock the full potential of your CRM with our expert Salesforce consulting, seamless implementation, and comprehensive support services.
          </p>
          <div className="sf-hero-actions">
            <a href="/contact" className="sf-btn primary">Start Salesforce Project</a>
            <a href="/services" className="sf-btn secondary">Explore Services</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="sf-section sf-section-light">
        <div className="sf-section-title">
          <span className="badge">Services</span>
          <h2>Salesforce Solutions</h2>
          <p>End-to-end Salesforce consulting, implementation, and support.</p>
        </div>
        <div className="sf-grid">
          {services.map((s, i) => (
            <div className="sf-card" key={i}>
              <div className="sf-card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clouds */}
      <section className="sf-section">
        <div className="sf-section-title">
          <span className="badge">Clouds</span>
          <h2>Salesforce Clouds We Specialize In</h2>
          <p>Expertise across the Salesforce ecosystem.</p>
        </div>
        <div className="sf-clouds">
          {clouds.map((c, i) => (
            <div className="sf-cloud" key={i}>
              <div className="sf-cloud-bg" style={{ backgroundImage: c.bg }}></div>
              <div className="sf-cloud-overlay">
                <span className="sf-cloud-tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Two column */}
      <section className="sf-section sf-section-light">
        <div className="sf-two-col">
          <div className="sf-text-content">
            <h3>Maximize Your Salesforce Investment</h3>
            <p>
              We deliver end-to-end Salesforce solutions including implementation, customization, integration, and managed services.
              Our certified experts help you maximize ROI from your Salesforce investment.
            </p>
            <p>
              Whether you're starting fresh or optimizing an existing org, we tailor Salesforce to fit your unique business
              needs and drive user adoption.
            </p>
          </div>
          <div className="sf-visual">
            <div className="sf-visual-content">
              <span className="sf-visual-icon">☁️</span>
              <h4>CRM Excellence</h4>
              <p>Salesforce tailored to your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature list */}
      <section className="sf-section">
        <div className="sf-section-title">
          <span className="badge">Features</span>
          <h2>What We Deliver</h2>
          <p>Core capabilities in every Salesforce engagement.</p>
        </div>
        <div style={{ maxWidth: "900px", display: "flex", flexDirection: "column", gap: "14px" }}>
          {featureList.map((f, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "16px 20px", background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px" }}>
              <span style={{ fontSize: "20px" }}>✓</span>
              <span style={{ fontSize: "15px", fontWeight: 600, color: "#0f172a" }}>{f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="sf-section sf-section-light">
        <div className="sf-section-title">
          <span className="badge">Value</span>
          <h2>Why Salesforce With Us</h2>
          <p>CRM advantages delivered through expert implementation.</p>
        </div>
        <div className="sf-benefits">
          {benefits.map((b, i) => (
            <div className="sf-benefit" key={i}>
              <span className="sf-benefit-icon">{b.icon}</span>
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="sf-cta">
        <h2>Ready to Transform Your CRM?</h2>
        <p>Schedule a free Salesforce consultation and unlock your customer data's full potential.</p>
        <a href="/contact" className="sf-btn">Get Free Salesforce Consultation</a>
      </section>

    </div>
  );
}
