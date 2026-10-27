import "./web-development.css";

const featureList = [
  {
    title: "Conversion-Focused Business Website",
    desc: "Two-layer architecture (frontend & backend). User-centered websites with high engagement built for business growth.",
  },
  {
    title: "Sales-Oriented Landing Pages",
    desc: "High-converting landing pages that let you focus on your target audience by providing value.",
  },
  {
    title: "Web App Buildout",
    desc: "High-end web applications created to drive various business needs.",
  },
  {
    title: "Smart UX/UI Design Solution",
    desc: "Effective and intuitive websites ensuring the best possible user experience with high-converting web solutions.",
  },
  {
    title: "Website Redesign",
    desc: "Clearly communicate your information, spice up your existing website, or improve its functionality.",
  },
  {
    title: "High-Level Consultancy",
    desc: "Expert guidance on web development technologies so you can focus on your core business.",
  },
];

const secrets = [
  {
    num: "01",
    title: "Clear Vision for Future Success",
    desc: "Develop an online presence that effectively communicates your value and resonates with potential leads.",
  },
  {
    num: "02",
    title: "Identify Performance Challenges",
    desc: "Uncover obvious and hidden issues impacting your online performance — the first step towards a solution.",
  },
  {
    num: "03",
    title: "Transparent Action Plan",
    desc: "A no-nonsense plan that demonstrates how we will unlock amazing results for your web presence.",
  },
];

const reasons = [
  {
    title: "100% Transparent",
    desc: "At any step of the journey, get a clear picture of all current, previous & future work on your project.",
  },
  {
    title: "Fast-Changing Industry Improvements",
    desc: "Years of experience and client success stories to support any size business growing its online presence.",
  },
  {
    title: "Dedicated SEM Professionals",
    desc: "We make technical processes simple. Our team guides you through every step of our process.",
  },
  {
    title: "Precise & Guaranteed Expertise",
    desc: "Dozens of client success stories confirm 100% dedicated attention and the results you desire.",
  },
  {
    title: "True Partnership",
    desc: "We believe in the mission of every client we partner with. Our clients become our partners in success.",
  },
];

const testimonials = [
  {
    quote: "I found Savior Marketing on Fiverr and it was one of the greatest finds in my life. The communication was great when it came to implementing my ideas.",
    name: "John Jones",
    title: "CEO",
    rating: 5,
  },
  {
    quote: "Extremely responsive, professional and answered all of our questions in a way that was easy to understand. Highly recommend!",
    name: "Marion Wagner",
    title: "CEO",
    rating: 5,
  },
  {
    quote: "The design team was very responsive and open to all of our revisions. Easy to communicate with and timely feedback.",
    name: "Nkem Anizor",
    title: "CEO",
    rating: 5,
  },
];

export default function WebDevelopmentPage() {
  return (
    <div className="web-dev-wrapper">

      {/* Hero */}
      <section className="web-dev-hero">
        <div className="web-dev-hero-content">
          <h1>Web Development</h1>
          <p>
            We deliver strategic online business websites to help you achieve your company&rsquo;s goals in the most direct way.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" className="web-dev-cta-btn primary">Get Free Consultation</a>
            <a href="/services" className="web-dev-cta-btn secondary">Explore All Services</a>
          </div>
        </div>
      </section>

      {/* Online Business Solutions */}
      <section className="web-dev-section web-dev-section-alt">
        <div className="web-dev-section-title">
          <span className="web-dev-line"></span>
          <h2>Online Business Solutions</h2>
          <span className="web-dev-line"></span>
        </div>
        <p className="web-dev-subtitle">
          Your business deserves a stable and efficient website with a two-layer architecture (frontend &amp; backend).
        </p>
        <div className="web-dev-cards">
          {featureList.map((f, i) => (
            <div className="web-dev-card" key={i}>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Traditional Websites Are Dead */}
      <section className="web-dev-section">
        <div className="web-dev-section-title">
          <span className="web-dev-line"></span>
          <h2>Why Traditional Websites Are Dead</h2>
          <span className="web-dev-line"></span>
        </div>
        <div className="web-dev-cards">
          <div className="web-dev-card">
            <h3>Outdated Websites Don&rsquo;t Convert</h3>
            <p>
              Just 10 years ago, having any website was enough. Sadly, competition is now fierce and traditional websites are dead.
              We build high-end website solutions that help small and medium-size businesses thrive and dominate online.
            </p>
          </div>
          <div className="web-dev-card">
            <h3>Done-For-You Growth Team</h3>
            <p>
              Our in-house web designers, UX/UI specialists, web developers, SEO specialists, digital marketers, and managers work
              together to bring you a seamless Online Business Website for your business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Growth Formulas */}
      <section className="web-dev-section web-dev-section-alt">
        <div className="web-dev-section-title">
          <span className="web-dev-line"></span>
          <h2>Our Online Business Website Growth Formulas</h2>
          <span className="web-dev-line"></span>
        </div>
        <p className="web-dev-subtitle">
          Proven formulas to scale your business online.
        </p>
        <div className="web-dev-features">
          {featureList.map((f, i) => (
            <div className="web-dev-feature" key={i}>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Foundational Secrets */}
      <section className="web-dev-section">
        <div className="web-dev-section-title">
          <span className="web-dev-line"></span>
          <h2>Foundational Secrets We&rsquo;ve Honed Over 10+ Years</h2>
          <span className="web-dev-line"></span>
        </div>
        <p className="web-dev-subtitle">
          We reject run-of-the-mill marketing and tailor your online presence to your specific needs.
        </p>
        <div className="web-dev-cards">
          {secrets.map((s, i) => (
            <div className="web-dev-card" key={i}>
              <h3 style={{ display: "flex", alignItems: "center", gap: "10px", color: "#0d4bb8" }}>
                <span style={{ fontSize: "24px", fontWeight: 800 }}>{s.num}</span>
                {s.title}
              </h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reasons */}
      <section className="web-dev-section web-dev-section-alt">
        <div className="web-dev-section-title">
          <span className="web-dev-line"></span>
          <h2>Why Our Solutions Have Scaled Countless Businesses</h2>
          <span className="web-dev-line"></span>
        </div>
        <p className="web-dev-subtitle">
          Five reasons businesses trust Kody Works for web development.
        </p>
        <div className="web-dev-features">
          {reasons.map((r, i) => (
            <div className="web-dev-feature" key={i}>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="web-dev-section web-dev-section-alt">
        <div className="web-dev-section-title">
          <span className="web-dev-line"></span>
          <h2>Hear What Our Clients Have to Say</h2>
          <span className="web-dev-line"></span>
        </div>
        <p className="web-dev-subtitle">
          Real feedback from businesses we&rsquo;ve helped grow online.
        </p>
        <div className="web-dev-testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="web-dev-testimonial" key={i}>
              <div className="web-dev-rating">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j}>&starf;</span>
                ))}
              </div>
              <p className="web-dev-quote">{`"${t.quote}"`}</p>
              <div className="web-dev-author">
                <span className="web-dev-author-name">{t.name}</span>
                <span className="web-dev-author-title">{t.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="web-dev-cta">
        <h2>Ready for your new online business website?</h2>
        <p>Schedule a free strategy consultation today to get started!</p>
        <a href="/contact" className="web-dev-cta-btn primary">Get Free Consultation</a>
      </section>

    </div>
  );
}
