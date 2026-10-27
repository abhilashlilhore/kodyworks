import "./cloud-devops.css";

const services = [
  {
    icon: "☁️",
    title: "Cloud Migration",
    desc: "Seamless migration to AWS, Azure, or GCP with zero downtime and minimal risk.",
  },
  {
    icon: "🔄",
    title: "CI/CD Pipelines",
    desc: "Automated build, test, and deployment pipelines for faster, reliable releases.",
  },
  {
    icon: "🏗️",
    title: "Infrastructure as Code",
    desc: "Provision and manage infrastructure using Terraform, CloudFormation, and more.",
  },
  {
    icon: "🔌",
    title: "Custom Integrations",
    desc: "Connect your systems, APIs, and third-party services into one unified platform.",
  },
  {
    icon: "📊",
    title: "Monitoring & Observability",
    desc: "End-to-end monitoring, logging, and alerting for production-grade visibility.",
  },
  {
    icon: "🔒",
    title: "Cloud Security",
    desc: "Identity management, encryption, and compliance for secure cloud environments.",
  },
];

const pipeline = [
  { num: "1", title: "Assess", desc: "Evaluate your current infrastructure and define goals." },
  { num: "2", title: "Plan", desc: "Design the cloud architecture and migration strategy." },
  { num: "3", title: "Build", desc: "Provision infrastructure and set up CI/CD pipelines." },
  { num: "4", title: "Deploy", desc: "Migrate workloads and deploy applications to the cloud." },
  { num: "5", title: "Optimize", desc: "Monitor, secure, and continuously improve performance." },
];

const stack = [
  { icon: "☁️", title: "AWS", desc: "Amazon Web Services" },
  { icon: "🔵", title: "Azure", desc: "Microsoft Azure" },
  { icon: "🟢", title: "GCP", desc: "Google Cloud Platform" },
  { icon: "🟣", title: "Terraform", desc: "Infrastructure as Code" },
  { icon: "🐙", title: "GitHub Actions", desc: "CI/CD Automation" },
  { icon: "📦", title: "Docker", desc: "Containerization" },
];

const benefits = [
  { icon: "🚀", title: "Faster Deployments", desc: "CI/CD automation cuts release time dramatically." },
  { icon: "💰", title: "Cost Optimization", desc: "Pay only for what you use with right-sized resources." },
  { icon: "📈", title: "Auto Scaling", desc: "Scale infrastructure based on real demand." },
  { icon: "🔒", title: "Enterprise Security", desc: "Compliance and security built into every layer." },
];

export default function CloudDevOpsPage() {
  return (
    <div className="cloud-wrapper">

      {/* Hero */}
      <section className="cloud-hero">
        <div className="cloud-hero-content">
          <h1>Cloud, DevOps & Custom Integrations</h1>
          <p>
            The cloud makes your business agile, cost-effective, and connected. We simplify the switch so you can reap the rewards.
          </p>
          <div className="cloud-hero-actions">
            <a href="/contact" className="cloud-btn primary">Modernize Your Cloud</a>
            <a href="/services" className="cloud-btn secondary">Explore Services</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="cloud-section cloud-section-light">
        <div className="cloud-section-title">
          <span className="badge">Services</span>
          <h2>Cloud & DevOps Services</h2>
          <p>Modernize infrastructure, automate deployments, and build resilient systems.</p>
        </div>
        <div className="cloud-grid">
          {services.map((s, i) => (
            <div className="cloud-card" key={i}>
              <div className="cloud-card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pipeline */}
      <section className="cloud-section cloud-section-dark">
        <div className="cloud-section-title">
          <span className="badge">Process</span>
          <h2>Our Cloud Delivery Pipeline</h2>
          <p>A structured path from assessment to optimization.</p>
        </div>
        <div className="cloud-pipeline">
          <div className="cloud-pipeline-items">
            {pipeline.map((step, i) => (
              <div className="cloud-pipeline-item" key={i}>
                <div className="cloud-pipeline-step">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two column */}
      <section className="cloud-section cloud-section-light">
        <div className="cloud-two-col">
          <div className="cloud-text-content">
            <h3>Cloud Infrastructure That Scales</h3>
            <p>
              Our cloud and DevOps services help you modernize infrastructure, automate deployments, and build resilient systems.
              We specialize in AWS, Azure, and GCP with CI/CD pipelines and infrastructure-as-code.
            </p>
            <p>
              From migration to ongoing management, we ensure your cloud environment is secure, cost-effective, and ready to grow
              with your business.
            </p>
          </div>
          <div className="cloud-visual">
            <div className="cloud-visual-content">
              <span className="cloud-visual-icon">🚀</span>
              <h4>Cloud-Native Delivery</h4>
              <p>Scalable, secure, and automated infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="cloud-section cloud-section-dark">
        <div className="cloud-section-title">
          <span className="badge">Tech Stack</span>
          <h2>Technologies We Work With</h2>
          <p>Leading cloud and DevOps platforms.</p>
        </div>
        <div className="cloud-stack">
          {stack.map((s, i) => (
            <div className="cloud-stack-item" key={i}>
              <span className="cloud-stack-icon">{s.icon}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="cloud-section cloud-section-light">
        <div className="cloud-section-title">
          <span className="badge">Value</span>
          <h2>Why Modernize Your Cloud?</h2>
          <p>The benefits of cloud and DevOps transformation.</p>
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
      <section className="cloud-cta">
        <h2>Ready to Modernize Your Infrastructure?</h2>
        <p>Schedule a free cloud consultation and start your migration journey.</p>
        <a href="/contact" className="cloud-btn">Get Free Cloud Consultation</a>
      </section>

    </div>
  );
}
