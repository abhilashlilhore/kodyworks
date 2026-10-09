import "./ContactUs.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import Link from "next/link";

const contactItems = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "rupendra.khatarker@gmail.com",
    href: "mailto:rupendra.khatarker@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+91 942 534 7156",
    href: "tel:+919425347156",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Office",
    value: "S-201, Silver Heights-2, Gauthana, Betul, MP 460001",
    href: "https://maps.google.com/?q=S-201,Silver+Heights-2,Gauthana,Betul,MP+460001",
  },
  {
    icon: <FaClock />,
    title: "Hours",
    value: "Mon - Fri: 9:00 AM - 7:00 PM IST",
    href: "#",
  },
];

export default function ContactUs() {
  return (
    <section className="contactus-section">
      <div className="contactus-container">
        <div className="contactus-section-title">
          <span className="contactus-line"></span>
          <h2>CONTACT US</h2>
          <span className="contactus-line"></span>
        </div>

        <p className="contactus-subtitle">
          Ready to transform your business with technology? Reach out and let&apos;s
          build something great together.
        </p>

        <div className="contactus-grid">
          {contactItems.map((item) => (
            <a href={item.href} className="contactus-card" key={item.title}>
              <div className="contactus-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.value}</p>
            </a>
          ))}
        </div>

        <div className="contactus-cta">
          <Link href="/contact-us" className="cta-btn cta-primary">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
