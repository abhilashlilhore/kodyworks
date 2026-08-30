import "./page.css";

import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Insights from "./components/Insights";
import EnterpriseSection from "./components/EnterpriseSection";
import TransparencySection from "./components/TransparencySection";

import Image from "next/image";
import softwer_development from "./assets/softwer_development.png";
import remote_resource_management from "./assets/remote_resource_management.png";
import project_management from "./assets/project_management.png";
import it_consulting from "./assets/it_consulting.png";
import cloude_solution from "./assets/cloude_solution.png";
import ai_automation_1 from "./assets/ai_automation_1.png";

const services = [
  {
    icon:  <Image
            src={softwer_development}
            alt="Software Development"
            width={80}
            height={80}
            className="logo-image"
            priority
          />,
    title: "SOFTWARE",
    subtitle: "DEVELOPMENT",
  },
  {
    icon: <Image
            src={project_management}
            alt="PROJECT MANAGEMENT"
            width={80}
            height={80}
            className="logo-image"
            priority
          />,
    title: "PROJECT",
    subtitle: "MANAGEMENT",
  },
  {
    icon: <Image
            src={it_consulting}
            alt="IT Consulting"
            width={94}
            height={80}
            className="logo-image"
            priority
          />,
    title: "IT",
    subtitle: "CONSULTING",
  },
  {
    icon: <Image
            src={cloude_solution}
            alt="Cloud Solutions"
            width={80}
            height={80}
            className="logo-image"
            priority
          />,
    title: "CLOUD",
    subtitle: "SOLUTIONS",
  },
  {
    icon: <Image
            src={ai_automation_1}
            alt="AI & Automation"
            width={80}
            height={80}
            className="logo-image"
            priority
          />,
    title: "AI &",
    subtitle: "AUTOMATION",
  },
  {
    icon: <Image
            src={remote_resource_management}
            alt="Remote Resource Management"
            width={80}
            height={80}
            className="logo-image"
            priority
          />,
    title: "REMOTE RESOURCE",
    subtitle: "MANAGEMENT",
  },
];




export default function Home() {
  return (
    <>
      <div className="top-banner">
        <img
          src="/assets/matrix_banner.gif"
          alt="Matrix Services Banner"
          className="top-banner-gif"
        />
      </div>
      <section className="services-section">

      <div className="services-background"></div>

      <div className="services-content">
        <div className="section-title">
          <span className="line"></span>
          <h2>OUR SERVICES</h2>
          <span className="line"></span>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>
              <h4>{service.subtitle}</h4>
            </div>
          ))}
        </div>
      </div>

      </section>
      <EnterpriseSection />
      <TransparencySection />
      <Partners />
      <Insights />
      <Hero />
    </>
  );
}