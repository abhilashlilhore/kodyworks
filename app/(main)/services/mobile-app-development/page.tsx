import "./mobile.css";

const features = [
  {
    icon: "📱",
    title: "iOS Development",
    desc: "Native iOS apps built with Swift and SwiftUI for exceptional performance and design.",
  },
  {
    icon: "🤖",
    title: "Android Development",
    desc: "Native Android apps using Kotlin and Jetpack Compose, optimized for all devices.",
  },
  {
    icon: "🔄",
    title: "Cross-Platform",
    desc: "Flutter and React Native apps that run seamlessly on both iOS and Android.",
  },
  {
    icon: "🏗️",
    title: "App Architecture",
    desc: "Scalable, maintainable code architecture designed for long-term growth.",
  },
  {
    icon: "🚀",
    title: "App Store Deployment",
    desc: "End-to-end support for app store submission, review, and launch.",
  },
  {
    icon: "🔧",
    title: "Maintenance & Updates",
    desc: "Ongoing app maintenance, bug fixes, and feature updates post-launch.",
  },
];

const platforms = [
  {
    tag: "NATIVE IOS",
    title: "iOS Applications",
    desc: "Premium iOS apps that leverage the full power of Apple's ecosystem and design language.",
    bg: "url('/assets/images.jfif')",
  },
  {
    tag: "NATIVE ANDROID",
    title: "Android Applications",
    desc: "High-performance Android apps built for the Google Play ecosystem and material design.",
    bg: "url('/assets/images(1).jfif')",
  },
  {
    tag: "CROSS-PLATFORM",
    title: "Flutter & React Native",
    desc: "Single codebase apps that deliver native-like experiences on iOS and Android.",
    bg: "url('/assets/images.jfif')",
  },
];

const featureList = [
  "User-centric UI/UX design",
  "Offline-first architecture",
  "Push notifications & in-app messaging",
  "Secure authentication & payments",
  "Real-time data synchronization",
  "App store optimization (ASO)",
];

export default function MobileDevelopmentPage() {
  return (
    <div className="mobile-wrapper">

      {/* Hero */}
      <section className="mobile-hero">
        <div className="mobile-hero-content">
          <h1>Mobile Development</h1>
          <p>
            An app can make your business stand out. We create ones that engage users, strengthen your brand, and drive results.
          </p>
          <div className="mobile-hero-actions">
            <a href="/contact" className="mobile-btn primary">Build Your Mobile App</a>
            <a href="/services" className="mobile-btn secondary">Explore Services</a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mobile-section mobile-section-light">
        <div className="mobile-section-title">
          <span className="badge">Capabilities</span>
          <h2>Mobile App Development Services</h2>
          <p>Native and cross-platform mobile applications designed for scale and user experience.</p>
        </div>
        <div className="mobile-grid">
          {features.map((f, i) => (
            <div className="mobile-card" key={i}>
              <div className="mobile-card-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section className="mobile-section mobile-section-alt">
        <div className="mobile-section-title">
          <span className="badge">Platforms</span>
          <h2>We Build For Every Platform</h2>
          <p>Reach your users wherever they are, on any device.</p>
        </div>
        <div className="mobile-platforms">
          {platforms.map((p, i) => (
            <div className="mobile-platform" key={i}>
              <div className="mobile-platform-bg" style={{ backgroundImage: p.bg }}></div>
              <div className="mobile-platform-overlay">
                <span className="mobile-platform-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Two column */}
      <section className="mobile-section mobile-section-light">
        <div className="mobile-two-col">
          <div className="mobile-text-content">
            <h3>Mobile Apps That Engage & Convert</h3>
            <p>
              We build high-performance mobile applications for iOS and Android using native and cross-platform technologies.
              Our apps are designed for scalability, security, and exceptional user experience.
            </p>
            <p>
              From concept to app store launch, we handle everything—design, development, testing, deployment, and
              ongoing maintenance—so you can focus on growing your business.
            </p>
          </div>
          <div className="mobile-visual">
            <div className="mobile-visual-content">
              <span className="mobile-visual-icon">📲</span>
              <h4>Mobile-First Approach</h4>
              <p>Apps designed for the palm of your hand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature list */}
      <section className="mobile-section mobile-section-alt">
        <div className="mobile-section-title">
          <span className="badge">Features</span>
          <h2>What Every App We Build Includes</h2>
          <p>Essential capabilities built into every mobile solution.</p>
        </div>
        <div className="mobile-features">
          {featureList.map((f, i) => (
            <div className="mobile-feature" key={i}>
              <span className="mobile-feature-check">✓</span>
              <h4>{f}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mobile-cta">
        <h2>Ready to Launch Your Mobile App?</h2>
        <p>Schedule a free consultation and take the first step toward your mobile presence.</p>
        <a href="/contact" className="mobile-btn">Get Free App Consultation</a>
      </section>

    </div>
  );
}
