import "./EnterpriseSection.css";

export default function EnterpriseSection() {
  return (
    <section className="enterprise-section">
      <div className="enterprise-container">
        <div className="enterprise-row">
          <div className="enterprise-image">
            <div className="image-placeholder">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" rx="12" fill="#e8f0ff"/>
                <circle cx="100" cy="70" r="30" fill="#0d4bb8" opacity="0.8"/>
                <path d="M50 160 C50 130 75 110 100 110 C125 110 150 130 150 160" fill="#0d4bb8" opacity="0.6"/>
                <rect x="70" y="130" width="60" height="40" rx="4" fill="#0439AD" opacity="0.4"/>
              </svg>
            </div>
          </div>
          <div className="enterprise-content">
            <h2>Enterprise-Level With Personal Dedication</h2>
            <p>
              We are the technology partner for businesses and organizations of all sizes. Our mission is to uplift and empower small businesses and entrepreneurs. With a deep understanding of the struggles faced in a landscape dominated by large corporations with vast IT budgets and numerous locations, we stand as your beacon of hope.
            </p>
            <p>
              Delivering quality results is our digital calling as a full-service IT consulting and software development provider. Our team of dedicated and skilled developers is committed to guiding you towards success. Discover more about our mission and let us lead you to prosperity by booking a free consultation.
            </p>
            <div className="enterprise-cta">
              <a href="#" className="cta-btn cta-primary">Get Free Quote</a>
              <span className="cta-or">OR</span>
              <a href="tel:+1234567890" className="cta-call">Call</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
