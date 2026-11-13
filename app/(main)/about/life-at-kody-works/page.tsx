import "../../page-shared.css";
import "./life-at-kody-works.css";
import Link from "next/link";
import { Metadata } from "next";
import { FaLinkedin } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Life At KODY Works | KODY Works",
  description: "Join a team of passionate innovators reimagining the future of work at KODY Works. Culture, perks, and life at KODY Works.",
};

const culture = [
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
  {
    title: "Continuous Learning",
    desc: "We invest in certifications, training, and conference attendance so our team stays ahead of the curve.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 003-3V7z" />
        <path d="M1 12v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
  },
];

const workLife = [
  {
    title: "Flexible Work Arrangements",
    desc: "Remote, hybrid, and onsite options that let you work where you're most productive.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Growth Opportunities",
    desc: "Clear career paths, mentorship, and the chance to own meaningful projects from day one.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="M5 12l6 6-6 6M19 12l6 6-6 6" />
      </svg>
    ),
  },
  {
    title: "Supportive Environment",
    desc: "A workplace where every voice is heard, ideas flourish, and teammates have each other's backs.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 9h2M14 9h2M4 4l16 12M4 20l16-12" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const team = [
  { name: "Ayush Jain", role: "CTO", initials: "AJ" },
  { name: "Yash Chouhan", role: "CEO", initials: "YC" },
  { name: "Akshar Sisodia", role: "Director", initials: "AS" },
  { name: "Adhir Dubey", role: "Director", initials: "AD" },
];

const perks = [
  "Competitive salary and performance-based bonuses",
  "Health insurance and wellness benefits",
  "Paid time off and company holidays",
  "Learning & development stipend",
  "Team outings, hackathons, and celebration events",
  "Modern tech stack and collaborative tooling",
];

export default function LifeAtKodyWorksPage() {
  return (
    <div className="page-container">
      {/* ===== Hero ===== */}
      <section className="life-hero">
        <div className="life-hero-content">
          <span className="life-hero-eyebrow">Life At KODY Works</span>
          <h1>Build Meaningful Work. Grow With Purpose.</h1>
          <p className="life-hero-tagline">Where curiosity meets craftsmanship</p>
          <p className="life-hero-sub">
            At KODY Works, we believe in fostering a culture of innovation, collaboration, and continuous learning. Our team enjoys flexible work arrangements, growth opportunities, and a supportive environment where ideas flourish.
          </p>
        </div>
      </section>

      {/* ===== Our Culture ===== */}
      <section className="life-section">
        <div className="life-section-title">
          <span className="line"></span>
          <h2>Our Culture</h2>
          <span className="line"></span>
        </div>
        <div className="life-intro">
          <p>
            Culture is how we show up for each other every day.             At KODY Works, we&apos;re building a place where smart, kind, and ambitious people can do their best work together.
          </p>
        </div>
        <div className="life-culture-grid">
          {culture.map((c) => (
            <div key={c.title} className="life-culture-card">
              <div className="life-culture-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Life at KODY ===== */}
      <section className="life-section life-section-alt">
        <div className="life-section-title">
          <span className="line"></span>
          <h2>Life at KODY</h2>
          <span className="line"></span>
        </div>
        <div className="life-intro">
          <p>
            We design the everyday experience around flexibility, support, and growth—so you can focus on doing great work and growing your career.
          </p>
        </div>
        <div className="life-work-grid">
          {workLife.map((w) => (
            <div key={w.title} className="life-work-card">
              <div className="life-work-icon">{w.icon}</div>
              <div className="life-work-content">
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Benefits ===== */}
      <section className="life-section">
        <div className="life-section-title">
          <span className="line"></span>
          <h2>Perks &amp; Benefits</h2>
          <span className="line"></span>
        </div>
        <div className="life-intro">
          <p>
            We take care of our team so you can take care of our clients.             Here&apos;s some of what KODY Works offers.
          </p>
        </div>
        <div className="life-work-grid">
          {perks.map((p, idx) => (
            <div key={idx} className="life-work-card">
              <div className="life-work-icon" style={{ color: "#ffd166" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12" />
                  <line x1="12" y1="2" x2="12" y2="20" />
                </svg>
              </div>
              <div className="life-work-content">
                <h4 style={{ color: "#0d4bb8" }}>{p}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Our People ===== */}
      <section className="life-section life-section-alt">
        <div className="life-section-title">
          <span className="line"></span>
          <h2>Our People</h2>
          <span className="line"></span>
        </div>
        <div className="life-intro">
          <p>
            The KODY Works team is a close-knit group of like-minded experts who share a passion for technology and helping businesses succeed. Meet the leaders shaping our journey.
          </p>
        </div>
        <div className="life-people-grid">
          {team.map((t) => (
            <div key={t.name} className="life-people-card">
              <div className="life-people-avatar">{t.initials}</div>
              <h4>{t.name}</h4>
              <p className="life-people-role">{t.role}</p>
              <a href="#" className="life-people-social" aria-label={`${t.name} LinkedIn`}>
                <FaLinkedin />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Join Us CTA ===== */}
      <section className="life-section life-section-dark">
        <div className="life-section-title">
          <span className="line"></span>
          <h2>Join Our Team</h2>
          <span className="line"></span>
        </div>
        <div className="life-cta">
          <h2>Ready to build with us?</h2>
          <p>
            Your opportunity to work alongside highly intelligent and motivated people.             We&apos;re a place where you can apply your talents to some of the most challenging, interesting, and meaningful problems.
          </p>
          <div className="life-cta-buttons">
            <Link href="/about/jobs-at-kody-works" className="life-cta-btn life-cta-primary">Explore Current Openings</Link>
            <Link href="/contact-us" className="life-cta-btn life-cta-secondary">Talk To Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
