import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-title">
        <span className="line"></span>
        <h2>ABOUT KODY WORKS</h2>
        <span className="line"></span>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <h3 className="about-heading">
            Enterprise-Level Technology Solutions With Personal Dedication
          </h3>
          <p className="about-paragraph">
            We are the driving force behind businesses and organizations of all
            sizes. Our mission is to uplift and empower small businesses and
            entrepreneurs across the globe.
          </p>
          <p className="about-paragraph">
            In a landscape dominated by large corporations with vast resources,
            we stand as your beacon of hope — delivering quality technology
            solutions that transcend your online presence goals. We are a
            full-service technology partner committed to your success.
          </p>
          <p className="about-paragraph">
            Delivering tangible results is our digital calling. Our team of
            dedicated and skilled professionals is committed to guiding you
            towards growth and measurable business outcomes.
          </p>
        </div>

        <div className="about-graphic">
          <div className="graphic-circle">
            <div className="graphic-inner">
              <span className="graphic-text">12+</span>
              <span className="graphic-label">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
