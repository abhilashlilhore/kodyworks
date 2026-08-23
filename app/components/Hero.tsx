import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-headline">
          Technology Solutions Delivered
        </h1>
        <p className="hero-subheadline">
          End-to-end IT consulting, software development, project management, cloud architecture and automation services for businesses worldwide.
        </p>
        <div className="hero-cta">
          <a href="#services" className="cta-btn cta-primary">
            Explore Services
          </a>
          <a href="#" className="cta-btn cta-secondary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
