import "./OurServices.css";
import Image from "next/image";
import Link from "next/link";

import softwer_development from "../assets/softwer_development.png";
import remote_resource_management from "../assets/remote_resource_management.png";
import project_management from "../assets/project_management.png";
import it_consulting from "../assets/it_consulting.png";
import cloude_solution from "../assets/cloude_solution.png";
import ai_automation_1 from "../assets/ai_automation_1.png";

const services = [
  {
    icon: softwer_development,
    alt: "Software Development",
    title: "SOFTWARE",
    subtitle: "DEVELOPMENT",
    desc:
      "Custom web and enterprise applications built with modern frameworks for fast, secure, and scalable experiences.",
    href: "/services/web-development",
  },
  {
    icon: project_management,
    alt: "Project Management",
    title: "PROJECT",
    subtitle: "MANAGEMENT",
    desc:
      "Agile and hybrid delivery that keeps timelines tight, budgets clean, and stakeholders aligned from day one.",
    href: "/services/mvp-development",
  },
  {
    icon: it_consulting,
    alt: "IT Consulting",
    title: "IT",
    subtitle: "CONSULTING",
    desc:
      "Strategic technology advisory that aligns your IT landscape with measurable business outcomes.",
    href: "/about/who-we-are",
  },
  {
    icon: cloude_solution,
    alt: "Cloud Solutions",
    title: "CLOUD",
    subtitle: "SOLUTIONS",
    desc:
      "Scalable infrastructure, DevOps pipelines, and custom integrations across AWS, Azure, and GCP.",
    href: "/services/cloud-devops-integrations",
  },
  {
    icon: ai_automation_1,
    alt: "AI & Automation",
    title: "AI &",
    subtitle: "AUTOMATION",
    desc:
      "Generative AI and intelligent automation that streamline operations and unlock new sources of value.",
    href: "/services/generative-ai",
  },
  {
    icon: remote_resource_management,
    alt: "Remote Resource Management",
    title: "REMOTE RESOURCE",
    subtitle: "MANAGEMENT",
    desc:
      "End-to-end management of distributed IT teams so you get results without the hiring overhead.",
    href: "/services/staffing",
  },
];

export default function OurServices() {
  return (
    <section className="ourservices-section" id="services">
      <div className="ourservices-container">
        <div className="ourservices-section-title">
          <span className="ourservices-line"></span>
          <h2>OUR SERVICES</h2>
          <span className="ourservices-line"></span>
        </div>

        <p className="ourservices-subtitle">
          End-to-end technology solutions tailored to your business needs.
        </p>

        <div className="ourservices-grid">
          {services.map((service) => (
            <Link
              href={service.href}
              className="ourservices-card"
              key={service.title}
            >
              <div className="ourservices-icon">
                <Image
                  src={service.icon}
                  alt={service.alt}
                  width={80}
                  height={80}
                  className="ourservices-logo"
                />
              </div>
              <h3>{service.title}</h3>
              <h4>{service.subtitle}</h4>
              <p>{service.desc}</p>
              <span className="ourservices-learnmore">Learn More</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
