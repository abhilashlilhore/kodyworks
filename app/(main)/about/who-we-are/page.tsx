import "../../page-shared.css";
import "./who-we-are.css";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export const metadata = {
  title: "Who We Are | KODY Works",
  description: "Get your bearings on our values, culture, and unique approach.",
};

const values = [
  {
    title: "Culture-Driven Growth",
    desc: "We foster an environment of learning, earning, and fun. Growth is not just about metrics—it's about people.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "Process-Driven Excellence",
    desc: "We focus on clarity, efficiency, and results in every project. Great outcomes start with great processes.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Inclusion & Collaboration",
    desc: "We believe in equal opportunities and high performance through teamwork. Diverse minds build stronger solutions.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Respect & Empathy",
    desc: "Every transaction, every project, every relationship is built on mutual respect and genuine understanding.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
];

const differentiators = [
  {
    title: "Customer-First Mindset",
    desc: "Every customer is unique, and we tailor solutions to their needs, goals, and long-term vision.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Sustainable & Scalable Tech",
    desc: "We believe in Green Code and sustainable architecture that stands the test of time and scale.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "User Experience Matters",
    desc: "A great digital experience is the key to success. We put usability at the heart of everything we do.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "AI as Your Growth Partner",
    desc: "Artificial Intelligence is not just a tool—it's your executive partner in driving real business outcomes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Process-Driven Excellence",
    desc: "We focus on clarity, efficiency, and measurable results in every engagement we take on.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "The Future is Digital",
    desc: "We embrace cutting-edge technology because we believe it's the only way forward for modern enterprises.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

const leaders = [
  { name: "Ayush Jain", role: "CTO", initials: "AJ" },
  { name: "Yash Chouhan", role: "CEO", initials: "YC" },
  { name: "Akshar Sisodia", role: "Director", initials: "AS" },
  { name: "Adhir Dubey", role: "Director", initials: "AD" },
];

export default function WhoWeArePage() {
  return (
    <div className="who-page">
      {/* ===== Hero ===== */}
      <section className="who-hero">
        <div className="who-hero-content">
          <span className="who-hero-eyebrow">Who We Are</span>
          <h1>Dream Big. Build Bold. Move Forward.</h1>
          <p className="who-hero-tagline">Culture-Driven Growth</p>
          <p className="who-hero-sub">
            At KODY Works, we are more than a technology company. We are your strategic partner in digital transformation—building solutions that drive real business impact.
          </p>
        </div>
      </section>

      {/* ===== Values ===== */}
      <section className="who-section">
        <div className="who-section-title">
          <span className="line"></span>
          <h2>Our Values</h2>
          <span className="line"></span>
        </div>
        <div className="who-intro">
          <p>
            Our values are the foundation of everything we do. They guide us as we build long-lasting relationships with our clients, our employees, and the communities we serve.
          </p>
        </div>
        <div className="who-values-grid">
          {values.map((v) => (
            <div key={v.title} className="who-value-card">
              <div className="who-value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Our Origin ===== */}
      <section className="who-section who-section-alt">
        <div className="who-section-title">
          <span className="line"></span>
          <h2>Our Origin</h2>
          <span className="line"></span>
        </div>
        <div className="who-two-col">
          <div className="who-two-col-image">
            <div className="who-image-placeholder">
              <svg viewBox="0 0 24 24" fill="none" stroke="#0d4bb8" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>
          <div className="who-two-col-content">
            <h2>Started with a dream, built with passion.</h2>
            <p>
              We love fresh ideas and creative problem-solvers! At KODY Works, young professionals get the space and support to think big, break barriers, and make an impact. We believe that innovation happens when you dare to think differently.
            </p>
            <p>
              We provide an environment where bright minds can collaborate, experiment, and grow, turning bold ideas into reality. Here, every voice is heard, and every idea can shape the future.
            </p>
          </div>
        </div>
      </section>

      {/* ===== What Makes Us Different ===== */}
      <section className="who-section">
        <div className="who-section-title">
          <span className="line"></span>
          <h2>What Makes Us Different</h2>
          <span className="line"></span>
        </div>
        <div className="who-intro">
          <p>
            Code Green. Scale Infinite. Impact Real. These aren't just buzzwords—they're the principles that define how we work, build, and deliver for our clients.
          </p>
        </div>
        <div className="who-different-grid">
          {differentiators.map((d) => (
            <div key={d.title} className="who-different-card">
              <div className="who-different-icon">{d.icon}</div>
              <div className="who-different-content">
                <h4>{d.title}</h4>
                <p>{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Mission & Vision ===== */}
      <section className="who-section who-section-alt">
        <div className="who-section-title">
          <span className="line"></span>
          <h2>Our Purpose</h2>
          <span className="line"></span>
        </div>
        <div className="who-mission-vision">
          <div className="who-mission-card">
            <h3>Our Mission</h3>
            <p>
              We&apos;re here to make technology work for people—helping businesses grow, communities thrive, and innovation drive real change. Our goal is to create smart, sustainable solutions that make life easier, more inclusive, and full of possibilities.
            </p>
          </div>
          <div className="who-vision-card">
            <h3>Our Vision</h3>
            <p>
              We see a future where technology brings people together, fuels progress, and makes the world a better place. With innovation, integrity, and heart, we&apos;re building a smarter, more connected world—one solution at a time.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Leadership Team ===== */}
      <section className="who-section">
        <div className="who-section-title">
          <span className="line"></span>
          <h2>Our Leadership Team</h2>
          <span className="line"></span>
        </div>
        <div className="who-intro">
          <p>
            Since our inception, we&apos;ve been led by some of the brightest minds in the industry. With a mix of technical and business expertise, our leadership team is poised to take KODY Works to unique frontiers.
          </p>
        </div>
        <div className="who-leadership-grid">
          {leaders.map((l) => (
            <div key={l.name} className="who-leader-card">
              <div className="who-leader-avatar">{l.initials}</div>
              <h4>{l.name}</h4>
              <p className="who-leader-role">{l.role}</p>
              <a href="#" className="who-leader-social" aria-label={`${l.name} LinkedIn`}>
                <FaLinkedin />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Our Team ===== */}
      <section className="who-section who-section-alt">
        <div className="who-section-title">
          <span className="line"></span>
          <h2>Our Team</h2>
          <span className="line"></span>
        </div>
        <div className="who-intro">
          <p>
            The KODY Works team is a close-knit group of like-minded experts who share a passion for technology and helping businesses succeed. We&apos;re made up of engineers, developers, consultants, and project managers from all over the world, and we are always looking for talented folks to complement our capabilities.
          </p>
        </div>
        <div className="who-cta">
          <h2>Join Our Team</h2>
          <p>
            Your opportunity to work alongside highly intelligent and motivated people. We&apos;re a place where you can apply your talents to some of the most challenging, interesting, and meaningful problems.
          </p>
          <div className="who-cta-buttons">
            <Link href="#" className="who-cta-btn who-cta-primary">Explore Current Openings</Link>
            <Link href="/contact-us" className="who-cta-btn who-cta-secondary">Talk To Us</Link>
          </div>
        </div>
      </section>

      {/* ===== Let's Get Started ===== */}
      <section className="who-section who-section-dark">
        <div className="who-section-title">
          <span className="line"></span>
          <h2>Let&apos;s Get Started</h2>
          <span className="line"></span>
        </div>
        <div className="who-cta">
          <p>
            Ready to experience the KODY Works difference? Connect with an innovation expert to learn more about our unique capabilities.
          </p>
          <div className="who-cta-buttons">
            <Link href="/contact-us" className="who-cta-btn who-cta-primary">Get In Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
