import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h2 className="hero-sub">
          DELIVERING TECHNOLOGY SOLUTIONS WORLDWIDE
        </h2>
        <h1 className="hero-title">
          <span className="dark">KODY</span>
          <span className="blue">Works</span>
        </h1>
        <p className="hero-tagline">
          Enterprise-Level Technology Solutions With Personal Dedication
        </p>
        <div className="hero-cta">
          <a href="#contact" className="cta-btn">
            Get Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
