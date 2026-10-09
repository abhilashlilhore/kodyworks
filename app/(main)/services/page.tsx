import Link from "next/link";
import "../page-shared.css";

const services = [
  { title: "Web Development", href: "/services/web-development", desc: "Custom web solutions with modern tech stacks." },
  { title: "Generative AI", href: "/services/generative-ai", desc: "AI-driven automation and intelligent systems." },
  { title: "SAP", href: "/services/sap", desc: "Enterprise SAP implementation and integration." },
  { title: "Mobile Development", href: "/services/mobile-app-development", desc: "Native and cross-platform mobile apps." },
  { title: "MVP", href: "/services/mvp-development", desc: "Rapid prototyping to validate your idea." },
  { title: "Staffing", href: "/services/staffing", desc: "Top IT talent on demand." },
  { title: "Cloud, DevOps & Custom Integrations", href: "/services/cloud-devops-integrations", desc: "Scalable cloud and DevOps solutions." },
  { title: "Salesforce", href: "/services/salesforce", desc: "CRM implementation and optimization." },
];

export default function ServicesPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Our Services</h1>
        <p>End-to-end technology solutions tailored to your business needs.</p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <Link href={service.href} key={service.href} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <span className="learn-more">Learn More →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
