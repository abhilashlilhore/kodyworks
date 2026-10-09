import "./WhyChoose.css";
import Image from "next/image";

import softwer_development from "../assets/softwer_development.png";
import project_management from "../assets/project_management.png";
import it_consulting from "../assets/it_consulting.png";
import cloude_solution from "../assets/cloude_solution.png";

const features = [
  {
    icon: softwer_development,
    alt: "Software Development",
    title: "Transparency & Accessibility",
    desc: "Maintain access to a team of professionals throughout the entire project lifecycle, providing you with the expertise required to expand your outreach and optimize business growth.",
  },
  {
    icon: project_management,
    alt: "Project Management",
    title: "Flexible & Adaptable Team",
    desc: "Adaptability is more important than ever in the ever-evolving landscape. Our dynamic strategies are designed to suit your unique business needs and scale with your growth.",
  },
  {
    icon: it_consulting,
    alt: "IT Consulting",
    title: "Data-Driven Solutions",
    desc: "Websites are only as effective as the quantifiable outcomes they produce. We create real, measurable business results driven by data and analytics for maximum ROI.",
  },
  {
    icon: cloude_solution,
    alt: "Cloud Solutions",
    title: "High-Level Consultation",
    desc: "Obtaining the right guidance is essential for success. Our role is to provide expert advice on technologies so you can focus on what you do best — running your business.",
  },
];

const WhyChoose = () => {
  return (
    <section id="why-choose" className="why-choose-section">
      <div className="section-title">
        <span className="line"></span>
        <h2>WHY CHOOSE KODY WORKS</h2>
        <span className="line"></span>
      </div>

      <p className="why-subtitle">
        Enterprise-Level With Personal Dedication
      </p>

      <div className="why-grid">
        {features.map((f, index) => (
          <div className="why-card" key={index}>
            <div className="why-badge">{index + 1}</div>
            <div className="why-icon">
              <Image
                src={f.icon}
                alt={f.alt}
                width={70}
                height={70}
                className="why-logo"
                unoptimized
              />
            </div>
            <h3 className="why-title">{f.title}</h3>
            <p className="why-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
