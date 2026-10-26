import "./WhyChoose.css";
import Image from "next/image";

const features = [
  {
    icon: "/assets/technology.png",
    alt: "Technology",
    title: "Transparency & Accessibility",
    desc: "Maintain access to a team of professionals throughout the entire project lifecycle, providing you with the expertise required to expand your outreach and optimize business growth.",
  },
  {
    icon: "/assets/Adaptable-Team.png",
    alt: "Adaptable Team",
    title: "Flexible & Adaptable Team",
    desc: "Adaptability is more important than ever in the ever-evolving landscape. Our dynamic strategies are designed to suit your unique business needs and scale with your growth.",
  },
  {
    icon: "/assets/dat-driven.png",
    alt: "Data Driven",
    title: "Data-Driven Solutions",
    desc: "Websites are only as effective as the quantifiable outcomes they produce. We create real, measurable business results driven by data and analytics for maximum ROI.",
  },
  {
    icon: "/assets/Consultation.png",
    alt: "Consultation",
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
            <div className="why-img-wrap">
              <Image
                src={f.icon}
                alt={f.alt}
                width={120}
                height={80}
                className="why-img"
                priority={index === 0}
              />
            </div>
            <div className="why-content">
              <h3 className="why-title">{f.title}</h3>
              <p className="why-desc">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
