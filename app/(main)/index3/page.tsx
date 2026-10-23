import "./index3.css";

export const metadata = {
  title: "KODY Works | Index 3",
  description: "KODY Works - Index 3 Page with Green Theme",
};

export default function Index3Page() {
  return (
    <div className="index3-wrapper">
      {/* Main Content */}
      <main className="index3-main">
        <section className="index3-hero-section">
          <div className="index3-hero-overlay">
            <h2>Welcome to KODY Works</h2>
            <p>Innovative technology solutions for modern businesses</p>
          </div>
        </section>

        <section className="index3-content-section">
          <div className="index3-section-title">
            <span className="index3-line"></span>
            <h2>OUR EXPERTISE</h2>
            <span className="index3-line"></span>
          </div>
          <div className="index3-grid">
            <div className="index3-card">
              <h3>Web Development</h3>
              <p>Custom web solutions built with modern technologies for seamless user experiences.</p>
            </div>
            <div className="index3-card">
              <h3>AI Solutions</h3>
              <p>Leveraging generative AI to automate and enhance your business operations.</p>
            </div>
            <div className="index3-card">
              <h3>Cloud Services</h3>
              <p>Scalable cloud infrastructure and DevOps solutions for agile businesses.</p>
            </div>
            <div className="index3-card">
              <h3>Mobile Apps</h3>
              <p>Engaging mobile applications that strengthen your brand and drive results.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}