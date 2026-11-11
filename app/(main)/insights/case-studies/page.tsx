import Link from "next/link";
import "../../page-shared.css";
import "./case-studies.css";

const featuredCase = {
  category: "Healthcare & Counseling",
  title: "Counseling Practice Digital Growth",
  summary:
    "A counseling practice partnered with us to modernize their website, improve local visibility, and streamline lead generation. The result was a stronger digital presence and measurable growth in inquiries and bookings.",
  stats: [
    { label: "Qualified Leads", value: "+93%" },
    { label: "Web Sessions", value: "+89%" },
    { label: "Conversion Rate", value: "+11%" },
    { label: "Appointments", value: "+95%" },
  ],
};

const caseStudies = [
  {
    title: "Mobile Mechanic Platform",
    category: "App & Web",
    summary:
      "Built a responsive service platform helping a mobile mechanic business showcase services, capture bookings, and build trust with local customers.",
    metrics: [
      { label: "Lead Growth", value: "+68%" },
      { label: "Page Speed", value: "2x Faster" },
    ],
  },
  {
    title: "Neligan Construction & Roofing",
    category: "Corporate",
    summary:
      "Delivered a modern corporate website with clear service pages, project highlights, and conversion-focused contact flows for a roofing business.",
    metrics: [
      { label: "Inquiries", value: "+74%" },
      { label: "Engagement", value: "+52%" },
    ],
  },
  {
    title: "E-commerce Brand Refresh",
    category: "E-commerce",
    summary:
      "Redesigned storefront experience with improved product discovery, faster checkout flow, and mobile-first UI for higher conversions.",
    metrics: [
      { label: "Sales", value: "+61%" },
      { label: "Bounce Rate", value: "-29%" },
    ],
  },
  {
    title: "Real Estate Lead Engine",
    category: "Real Estate",
    summary:
      "Created a property-focused website with optimized landing pages and lead capture forms to support consistent buyer and seller inquiries.",
    metrics: [
      { label: "Lead Volume", value: "+83%" },
      { label: "Session Time", value: "+41%" },
    ],
  },
  {
    title: "SaaS Marketing Website",
    category: "Corporate",
    summary:
      "Launched a clear, scalable marketing site for a SaaS product with messaging focused on value, trust, and demo conversions.",
    metrics: [
      { label: "Demo Requests", value: "+57%" },
      { label: "Sign-ups", value: "+46%" },
    ],
  },
  {
    title: "Local Services Growth Site",
    category: "App & Web",
    summary:
      "Implemented SEO-ready pages, performance optimization, and streamlined contact paths for a local services company.",
    metrics: [
      { label: "Organic Traffic", value: "+72%" },
      { label: "Calls", value: "+49%" },
    ],
  },
];

const filters = ["All", "App & Web", "Corporate", "E-commerce", "Real Estate"];

export default function CaseStudiesPage() {
  return (
    <div className="page-container">
      <section className="cs-hero">
        <h1>Case Studies</h1>
        <p>
          Explore client success stories and see how we help businesses grow with design,
          development, and digital strategy tailored to real-world goals.
        </p>
        <Link href="/contact-us" className="cs-hero-cta">
          Request A Proposal
        </Link>
      </section>

      <section className="cs-testimonial">
        <p>
          &quot;KODY Works delivered exactly what we needed — clear communication, strong execution,
          and measurable results. Our online presence improved significantly and we started
          receiving more qualified leads within weeks.&quot;
        </p>
        <span className="author">— Client Partner, Growth Engagement</span>
      </section>

      <section className="cs-featured">
        <h2>Featured Case Study</h2>
        <div className="cs-featured-card">
          <div className="cs-featured-content">
            <span className="tag">{featuredCase.category}</span>
            <h3>{featuredCase.title}</h3>
            <p>{featuredCase.summary}</p>
            <div className="cs-stats">
              {featuredCase.stats.map((stat) => (
                <div key={stat.label} className="cs-stat">
                  <span className="value">{stat.value}</span>
                  <span className="label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="cs-featured-visual">
            <div className="visual-box">
              <h4>Project Impact</h4>
              <p>
                A focused redesign, performance improvements, and conversion optimization helped turn
                website visitors into meaningful client inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cs-grid-section">
        <h2>Some of Our Best Work</h2>
        <div className="cs-filters">
          {filters.map((filter, index) => (
            <span key={filter} className={`cs-filter ${index === 0 ? "active" : ""}`}>
              {filter}
            </span>
          ))}
        </div>
        <div className="cs-grid">
          {caseStudies.map((study) => (
            <article key={study.title} className="cs-card">
              <div className="category">{study.category}</div>
              <h3>{study.title}</h3>
              <p>{study.summary}</p>
              <div className="cs-card-metrics">
                {study.metrics.map((metric) => (
                  <div key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cs-cta">
        <h2>Let&apos;s scale your business and increase results</h2>
        <p>Schedule a free strategy consultation and discover what we can build together.</p>
        <Link href="/contact-us">Get Started</Link>
      </section>
    </div>
  );
}
