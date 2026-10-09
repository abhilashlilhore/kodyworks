import "./index2.css";

export const metadata = {
  title: "KODY Works | Index 2",
  description: "KODY Works - Index 2 Page",
};

export default function Index2Page() {
  return (
    <div className="index2-wrapper">
      {/* Header Section with Blue GIF Banner */}
      <header className="index2-header">
        <div className="index2-banner">
          <img
            src="/assets/kodyworks_animated_lower_banner.gif"
            alt="KODY Works Animated Banner"
            className="index2-banner-gif"
          />
        </div>
        <div className="index2-header-top">
          <div className="index2-logo-section">
            <img
              src="/assets/logo.jpeg"
              alt="KODY Works Logo"
              className="index2-logo"
            />
          </div>
          <div className="index2-company-section">
            <h1 className="index2-company-name">
              <span className="dark">KODY</span>
              <span className="blue">Works</span>
            </h1>
            <div className="index2-consulting-row">
              <div className="index2-line"></div>
              <h2>CONSULTING</h2>
              <div className="index2-line"></div>
            </div>
            <p className="index2-tagline">Delivering Technology Solutions Worldwide</p>
          </div>
        </div>

        {/* Navbar */}
        <nav className="index2-navbar">
          <ul className="index2-nav-list">
            <li><a href="/" className="index2-nav-link">Home</a></li>
            <li><a href="/services/web-development" className="index2-nav-link">Services</a></li>
            <li><a href="/about/who-we-are" className="index2-nav-link">About Us</a></li>
            <li><a href="/insights/blogs" className="index2-nav-link">Insights</a></li>
            <li><a href="/index2" className="index2-nav-link">Index 2</a></li>
            <li><a href="/contact-us" className="index2-nav-link">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="index2-main">
        <section className="index2-hero-section">
          <div className="index2-hero-overlay">
            <h2>Welcome to KODY Works</h2>
            <p>Innovative technology solutions for modern businesses</p>
          </div>
        </section>

        <section className="index2-content-section">
          <div className="index2-section-title">
            <span className="index2-line"></span>
            <h2>OUR EXPERTISE</h2>
            <span className="index2-line"></span>
          </div>
          <div className="index2-grid">
            <div className="index2-card">
              <h3>Web Development</h3>
              <p>Custom web solutions built with modern technologies for seamless user experiences.</p>
            </div>
            <div className="index2-card">
              <h3>AI Solutions</h3>
              <p>Leveraging generative AI to automate and enhance your business operations.</p>
            </div>
            <div className="index2-card">
              <h3>Cloud Services</h3>
              <p>Scalable cloud infrastructure and DevOps solutions for agile businesses.</p>
            </div>
            <div className="index2-card">
              <h3>Mobile Apps</h3>
              <p>Engaging mobile applications that strengthen your brand and drive results.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="index2-footer">
        <div className="index2-footer-content">
          <div className="index2-footer-section">
            <h3>KODY<span>Works</span></h3>
            <p>Delivering Technology Solutions Worldwide</p>
          </div>
          <div className="index2-footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about/who-we-are">About</a></li>
              <li><a href="/contact-us">Contact</a></li>
            </ul>
          </div>
          <div className="index2-footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="/services/web-development">Web Development</a></li>
              <li><a href="/services/generative-ai">AI Solutions</a></li>
              <li><a href="/services/cloud-devops-integrations">Cloud</a></li>
            </ul>
          </div>
        </div>
        <div className="index2-footer-bottom">
          <p>&copy; 2026 KODY Works. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
