import "./sap.css";

const modules = [
  {
    icon: "ERP",
    title: "SAP ERP Implementation",
    desc: "End-to-end SAP ERP deployment tailored to your industry and business processes.",
  },
  {
    icon: "CRM",
    title: "SAP CRM & CX",
    desc: "Customer experience and relationship management solutions that drive engagement.",
  },
  {
    icon: "SCM",
    title: "SAP Supply Chain",
    desc: "Optimize logistics, procurement, and inventory with SAP SCM modules.",
  },
  {
    icon: "HCM",
    title: "SAP HCM & SuccessFactors",
    desc: "Human capital management and workforce optimization solutions.",
  },
  {
    icon: "BI",
    title: "SAP Analytics & BI",
    desc: "Business intelligence, reporting, and data analytics powered by SAP.",
  },
  {
    icon: "Cloud",
    title: "SAP Cloud Migration",
    desc: "Seamless migration from on-premise SAP to SAP Cloud Platform.",
  },
];

const timeline = [
  { num: "1", title: "Assessment", desc: "We evaluate your current systems and define SAP requirements." },
  { num: "2", title: "Design", desc: "We architect the SAP solution aligned to your business processes." },
  { num: "3", title: "Implementation", desc: "We configure, customize, and deploy SAP modules." },
  { num: "4", title: "Training", desc: "We train your team and support user adoption." },
  { num: "5", title: "Support", desc: "Ongoing maintenance and optimization for your SAP landscape." },
];

const benefits = [
  { icon: "⚡", title: "Operational Efficiency", desc: "Streamlined processes across departments." },
  { icon: "📊", title: "Real-Time Insights", desc: "Unified data for better decision-making." },
  { icon: "🔒", title: "Enterprise Security", desc: "SAP-grade security and compliance built-in." },
  { icon: "📈", title: "Scalable Growth", desc: "Solutions that scale with your business." },
];

export default function SAPPage() {
  return (
    <div className="sap-wrapper">

      {/* Hero */}
      <section className="sap-hero">
        <div className="sap-hero-content">
          <h1>SAP</h1>
          <p>
            Transform enterprise operations with tailored SAP solutions, integrating modules across industries to streamline processes,
            enhance efficiency, and drive growth.
          </p>
          <div className="sap-hero-actions">
            <a href="/contact" className="sap-btn primary">Start SAP Implementation</a>
            <a href="/services" className="sap-btn secondary">Explore Services</a>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="sap-section sap-section-light">
        <div className="sap-section-title">
          <span className="badge">Modules</span>
          <h2>SAP Solutions We Implement</h2>
          <p>Comprehensive SAP modules tailored to your enterprise requirements.</p>
        </div>
        <div className="sap-modules">
          {modules.map((m, i) => (
            <div className="sap-module" key={i}>
              <div className="sap-module-icon">{m.icon}</div>
              <div className="sap-module-info">
                <h4>{m.title}</h4>
                <p>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Two column */}
      <section className="sap-section sap-section-dark">
        <div className="sap-two-col">
          <div className="sap-text-content">
            <h3>Enterprise-Grade SAP Implementation</h3>
            <p>
              Our SAP services include implementation, customization, migration, and support. We help businesses maximize their SAP
              investment with industry-specific solutions and best-practice methodologies.
            </p>
            <p>
              From initial assessment to post-deployment support, we ensure your SAP landscape is optimized for performance,
              scalability, and long-term business value.
            </p>
          </div>
          <div className="sap-visual">
            <div className="sap-visual-content">
              <span className="sap-visual-icon">🏢</span>
              <h4>Enterprise Transformation</h4>
              <p>Unify your business operations on one intelligent platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="sap-section sap-section-light">
        <div className="sap-section-title">
          <span className="badge">Implementation</span>
          <h2>Our SAP Delivery Process</h2>
          <p>A proven methodology for successful SAP deployment.</p>
        </div>
        <div className="sap-timeline">
          <div className="sap-timeline-items">
            {timeline.map((step, i) => (
              <div className="sap-timeline-item" key={i}>
                <div className="sap-timeline-marker">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="sap-section sap-section-dark">
        <div className="sap-section-title">
          <span className="badge">Value</span>
          <h2>Why Choose SAP With Us</h2>
          <p>Enterprise benefits delivered through expert implementation.</p>
        </div>
        <div className="sap-benefits">
          {benefits.map((b, i) => (
            <div className="sap-benefit" key={i}>
              <span className="sap-benefit-icon">{b.icon}</span>
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="sap-cta">
        <h2>Ready to Transform Your Enterprise?</h2>
        <p>Schedule a free SAP consultation and discover how we can modernize your business operations.</p>
        <a href="/contact" className="sap-btn">Get Free SAP Consultation</a>
      </section>

    </div>
  );
}
