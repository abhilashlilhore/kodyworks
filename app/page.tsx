import {
  FaLaptopCode,
  FaUsersCog,
  FaUserTie,
  FaCloudUploadAlt,
  FaMicrochip,
  FaGlobe,
} from "react-icons/fa";

import "./page.css";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "SOFTWARE",
    subtitle: "DEVELOPMENT",
  },
  {
    icon: <FaUsersCog />,
    title: "PROJECT",
    subtitle: "MANAGEMENT",
  },
  {
    icon: <FaUserTie />,
    title: "IT",
    subtitle: "CONSULTING",
  },
  {
    icon: <FaCloudUploadAlt />,
    title: "CLOUD",
    subtitle: "SOLUTIONS",
  },
  {
    icon: <FaMicrochip />,
    title: "AI &",
    subtitle: "AUTOMATION",
  },
  {
    icon: <FaGlobe />,
    title: "REMOTE RESOURCE",
    subtitle: "MANAGEMENT",
  },
];

export default function Home() {
  return (
    <section className="services-section">

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

    </section>
  );
}