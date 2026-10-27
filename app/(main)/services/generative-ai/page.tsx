"use client";

import "./generative-ai.css";

const features = [
  {
    num: "01",
    title: "LLM Integration",
    desc: "Seamlessly integrate large language models into your existing workflows, applications, and customer-facing products.",
  },
  {
    num: "02",
    title: "Custom AI Applications",
    desc: "Bespoke generative AI applications built around your business logic, data, and unique requirements.",
  },
  {
    num: "03",
    title: "Intelligent Automation",
    desc: "Automate repetitive tasks, content generation, data analysis, and customer support with AI agents.",
  },
  {
    num: "04",
    title: "AI Strategy & Consulting",
    desc: "Identify high-impact AI opportunities and build a roadmap to adopt generative AI responsibly.",
  },
];

const processSteps = [
  { num: "1", title: "Discovery", desc: "We analyze your business processes to identify AI opportunities." },
  { num: "2", title: "Strategy", desc: "We define the AI roadmap, tech stack, and success metrics." },
  { num: "3", title: "Build", desc: "We develop, train, and integrate generative AI models into your systems." },
  { num: "4", title: "Deploy", desc: "We deploy, monitor, and continuously optimize your AI solutions." },
];

const faqs = [
  {
    q: "What is generative AI?",
    a: "Generative AI creates new content—text, images, code, audio—by learning patterns from existing data.",
  },
  {
    q: "How can it help my business?",
    a: "It automates content creation, customer support, data analysis, and software development tasks at scale.",
  },
  {
    q: "Do I need my own AI infrastructure?",
    a: "No. We can integrate with existing AI platforms or deploy models on your preferred cloud infrastructure.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. We follow enterprise-grade security practices and never use your data to train public models.",
  },
];

export default function GenerativeAIPage() {
  return (
    <div className="gen-ai-wrapper">

      {/* Hero */}
      <section className="gen-ai-hero">
        <div className="gen-ai-hero-content">
          <h1>Generative AI</h1>
          <p>
            AI isn&rsquo;t just for tech giants—it&rsquo;s for you. We use it to automate, analyze, and enhance your business.
          </p>
          <div className="gen-ai-hero-actions">
            <a href="/contact" className="gen-ai-btn primary">Start Building with AI</a>
            <a href="/services" className="gen-ai-btn secondary">Explore Services</a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="gen-ai-section gen-ai-section-light">
        <div className="gen-ai-section-title">
          <span className="badge">Capabilities</span>
          <h2>What We Build With Generative AI</h2>
          <p>Intelligent systems that think, create, and automate—tailored to your business goals.</p>
        </div>
        <div className="gen-ai-grid">
          {features.map((f, i) => (
            <div className="gen-ai-card" key={i}>
              <span className="gen-ai-card-number">{f.num}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Two column: text + visual */}
      <section className="gen-ai-section gen-ai-section-dark">
        <div className="gen-ai-two-col">
          <div className="gen-ai-text-content">
            <h3>From Concept to Production AI</h3>
            <p>
              We help businesses harness the power of generative AI to streamline operations, create intelligent automation,
              and drive innovation. From LLM integration to custom AI applications, we deliver solutions that matter.
            </p>
            <p>
              Whether you need a customer support chatbot, automated content pipeline, or an AI-powered analytics engine,
              our team builds production-ready generative AI systems that integrate with your existing stack.
            </p>
          </div>
          <div className="gen-ai-visual">
            <div className="gen-ai-visual-content">
              <span className="gen-ai-visual-icon">✨</span>
              <h4>AI-Powered Transformation</h4>
              <p>Turn your data into intelligent, generative experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="gen-ai-section gen-ai-section-light">
        <div className="gen-ai-section-title">
          <span className="badge">Our Process</span>
          <h2>How We Deliver AI Solutions</h2>
          <p>A structured approach from discovery to deployment.</p>
        </div>
        <div className="gen-ai-process">
          <div className="gen-ai-process-steps">
            {processSteps.map((step, i) => (
              <div className="gen-ai-step" key={i}>
                <div className="gen-ai-step-circle">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="gen-ai-section gen-ai-section-dark">
        <div className="gen-ai-section-title">
          <span className="badge">Impact</span>
          <h2>Results That Matter</h2>
          <p>Measurable outcomes from AI adoption.</p>
        </div>
        <div className="gen-ai-stats">
          <div className="gen-ai-stat">
            <span className="gen-ai-stat-value">10x</span>
            <span className="gen-ai-stat-label">Faster Content Production</span>
          </div>
          <div className="gen-ai-stat">
            <span className="gen-ai-stat-value">70%</span>
            <span className="gen-ai-stat-label">Support Ticket Deflection</span>
          </div>
          <div className="gen-ai-stat">
            <span className="gen-ai-stat-value">5x</span>
            <span className="gen-ai-stat-label">Development Velocity</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="gen-ai-section gen-ai-section-light">
        <div className="gen-ai-section-title">
          <span className="badge">FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about generative AI.</p>
        </div>
        <div className="gen-ai-faq">
          {faqs.map((faq, i) => (
            <div className="gen-ai-faq-item" key={i}>
              <button className="gen-ai-faq-question" onClick={(e) => {
                const btn = e.currentTarget as HTMLElement;
                const item = btn.parentElement as HTMLElement;
                const answer = item.querySelector(".gen-ai-faq-answer") as HTMLElement;
                const arrow = item.querySelector(".gen-ai-faq-arrow") as HTMLElement;
                const open = answer.style.maxHeight && answer.style.maxHeight !== "0px";
                answer.style.maxHeight = open ? "0px" : answer.scrollHeight + "px";
                arrow.style.transform = open ? "rotate(0deg)" : "rotate(180deg)";
              }}>
                <h4>{faq.q}</h4>
                <span className="gen-ai-faq-arrow">▼</span>
              </button>
              <div className="gen-ai-faq-answer">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="gen-ai-cta">
        <h2>Ready to Integrate AI Into Your Business?</h2>
        <p>Schedule a free AI strategy consultation and discover how generative AI can transform your operations.</p>
        <a href="/contact" className="gen-ai-btn">Get Free AI Consultation</a>
      </section>

    </div>
  );
}
