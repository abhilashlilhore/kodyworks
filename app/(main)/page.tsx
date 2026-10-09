import "./page.css";
import Hero from "../components/Hero";
import About from "../components/About";
import BrandSlider from "../components/BrandSlider";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import WhyChoose from "../components/WhyChoose";
import Contact from "../components/Contact";
import ClientSlider from "../components/ClientSlider";

export default function Home() {
  return (
    <div className="main-page-wrapper">
      <Hero />

      <About />

      <Services />

      <BrandSlider />

      <Testimonials />

      <WhyChoose />

      <ClientSlider />

      <section className="our-expertise-section">
        <div className="expertise-title">
          <span className="expertise-line"></span>
          <h2>OUR EXPERTISE</h2>
          <span className="expertise-line"></span>
        </div>
        <div className="expertise-grid">
          <div className="expertise-card">
            <h3>Web Development</h3>
            <p>Custom web solutions built with modern technologies for seamless user experiences.</p>
          </div>
          <div className="expertise-card">
            <h3>AI Solutions</h3>
            <p>Leveraging generative AI to automate and enhance your business operations.</p>
          </div>
          <div className="expertise-card">
            <h3>Cloud Services</h3>
            <p>Scalable cloud infrastructure and DevOps solutions for agile businesses.</p>
          </div>
          <div className="expertise-card">
            <h3>Mobile Apps</h3>
            <p>Engaging mobile applications that strengthen your brand and drive results.</p>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
