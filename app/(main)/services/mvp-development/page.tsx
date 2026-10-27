import "./mvp.css";

const services = [
  {
    icon: "💡",
    title: "Idea Validation",
    desc: "We validate your product concept with real users before writing a single line of code.",
  },
  {
    icon: "⚡",
    title: "Rapid Prototyping",
    desc: "Functional prototypes built in weeks, not months, to test core assumptions quickly.",
  },
  {
    icon: "🛠️",
    title: "MVP Development",
    desc: "Lean, production-ready MVPs with only the features that matter most to your users.",
  },
  {
    icon: "📈",
    title: "Iterate & Scale",
    desc: "Data-driven iterations based on user feedback to evolve your MVP into a full product.",
  },
];

const timeline = [
  { num: "1", title: "Discovery", desc: "Define the problem, target audience, and core value proposition." },
  { num: "2", title: "Design", desc: "Wireframes and UI/UX focused on the essential user journey." },
  { num: "3", title: "Build", desc: "Develop the MVP with core features using rapid development." },
  { num: "4", title: "Launch", desc: "Release to early users and collect real-world feedback." },
  { num: "5", title: "Iterate", desc: "Refine and expand based on data and user insights." },
];

const benefits = [
  { icon: "🚀", title: "Fast Time-to-Market", desc: "Launch in weeks, not months." },
  { icon: "💰", title: "Low Initial Investment", desc: "Validate before building a full product." },
  { icon: "🔄", title: "User Feedback Loop", desc: "Build what users actually want." },
  { icon: "📊", title: "Investor Ready", desc: "A working MVP to attract funding." },
];

const metrics = [
  { value: "2-6", label: "Weeks to MVP Launch" },
  { value: "50%+", label: "Cost Savings vs Full Build" },
  { value: "3x", label: "Faster Validation Cycle" },
];

export default function MVPPage() {
  return (
    <div className="mvp-wrapper">

      {/* Hero */}
      <section className="mvp-hero">
        <div className="mvp-hero-content">
          <h1>MVP Development</h1>
          <p>
            Launch a functional prototype quickly to gather real-world feedback, refine your product, and attract investors.
          </p>
          <div className="mvp-hero-actions">
            <a href="/contact" className="mvp-btn primary">Build Your MVP</a>
            <a href="/services" className="mvp-btn secondary">Explore Services</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mvp-section mvp-section-light">
        <div className="mvp-section-title">
          <span className="badge">Services</span>
          <h2>MVP Development Services</h2>
          <p>Rapid prototyping to validate your idea with minimal investment.</p>
        </div>
        <div className="mvp-grid">
          {services.map((s, i) => (
            <div className="mvp-card" key={i}>
              <div className="mvp-card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mvp-section">
        <div className="mvp-section-title">
          <span className="badge">Process</span>
          <h2>From Idea to MVP in 5 Steps</h2>
          <p>A streamlined process to get your product to market fast.</p>
        </div>
        <div className="mvp-timeline">
          <div className="mvp-timeline-items">
            {timeline.map((step, i) => (
              <div className="mvp-timeline-item" key={i}>
                <div className="mvp-timeline-marker">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two column */}
      <section className="mvp-section mvp-section-light">
        <div className="mvp-two-col">
          <div className="mvp-text-content">
            <h3>Validate Your Idea Before Scaling</h3>
            <p>
              Our MVP development services help you validate market demand with minimal investment. We focus on core features,
              rapid iteration, and scalable architecture to get your product to market faster.
            </p>
            <p>
              Instead of spending months building a full product, we help you launch a lean MVP that real users can test.
              Based on their feedback, you iterate and scale with confidence.
            </p>
          </div>
          <div className="mvp-visual">
            <div className="mvp-visual-content">
              <span className="mvp-visual-icon">⚡</span>
              <h4>Lean Development</h4>
              <p>Build fast, learn faster, scale smart.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mvp-section mvp-section-light">
        <div className="mvp-section-title">
          <span className="badge">Value</span>
          <h2>Why Build an MVP?</h2>
          <p>The advantages of starting small and scaling smart.</p>
        </div>
        <div className="mvp-benefits">
          {benefits.map((b, i) => (
            <div className="mvp-benefit" key={i}>
              <span className="mvp-benefit-icon">{b.icon}</span>
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Metrics */}
      <section className="mvp-section">
        <div className="mvp-section-title">
          <span className="badge">Speed</span>
          <h2>Built for Speed</h2>
          <p>MVP metrics that matter for early-stage products.</p>
        </div>
        <div className="mvp-metrics">
          {metrics.map((m, i) => (
            <div className="mvp-metric" key={i}>
              <span className="mvp-metric-value">{m.value}</span>
              <span className="mvp-metric-label">{m.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mvp-cta">
        <h2>Ready to Validate Your Idea?</h2>
        <p>Schedule a free MVP consultation and turn your concept into a market-ready product.</p>
        <a href="/contact" className="mvp-btn">Get Free MVP Consultation</a>
      </section>

    </div>
  );
}
