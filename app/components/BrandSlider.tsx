"use client";

import "./BrandSlider.css";
import Image from "next/image";

import softwer_development from "../assets/softwer_development.png";
import remote_resource_management from "../assets/remote_resource_management.png";
import project_management from "../assets/project_management.png";
import it_consulting from "../assets/it_consulting.png";
import cloude_solution from "../assets/cloude_solution.png";
import ai_automation_1 from "../assets/ai_automation_1.png";
import footer_left from "../assets/footer_left.png";
import footer_right from "../assets/footer_right.png";

const brands = [
  { src: footer_left, alt: "KODY Works Footer Logo Left" },
  { src: footer_right, alt: "KODY Works Footer Logo Right" },
  { src: softwer_development, alt: "Software Development" },
  { src: project_management, alt: "Project Management" },
  { src: it_consulting, alt: "IT Consulting" },
  { src: cloude_solution, alt: "Cloud Solutions" },
  { src: ai_automation_1, alt: "AI & Automation" },
  { src: remote_resource_management, alt: "Remote Resource Management" },
];

const BrandSlider = () => {
  const duplicated = [...brands, ...brands];

  return (
    <section id="brands" className="brand-section">
      <div className="section-title">
        <span className="line"></span>
        <h2>TRUSTED BY</h2>
        <span className="line"></span>
      </div>

      <p className="brand-subtitle">
        Can we get a hallelujah for these brands we have worked with?
      </p>

      <div className="brand-track">
        <div className="brand-slider">
          {duplicated.map((brand, index) => (
            <div className="brand-item" key={index}>
              <Image
                src={brand.src}
                alt={brand.alt}
                width={160}
                height={80}
                className="brand-logo"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSlider;
