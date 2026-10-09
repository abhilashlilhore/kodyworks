import "./Footer.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserCircle,
} from "react-icons/fa";

import Image from "next/image";
import footer_left from "../assets/footer_left.png";
import footer_right from "../assets/footer_right.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><Link href="/services/web-development">Web Development</Link></li>
            <li><Link href="/services/generative-ai">Generative AI</Link></li>
            <li><Link href="/services/sap">SAP</Link></li>
            <li><Link href="/services/mobile-app-development">Mobile Development</Link></li>
            <li><Link href="/services/mvp-development">MVP</Link></li>
            <li><Link href="/services/staffing">Staffing</Link></li>
            <li><Link href="/services/cloud-devops-integrations">Cloud, DevOps & Custom Integrations</Link></li>
            <li><Link href="/services/salesforce">Salesforce</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>About Chase</h4>
          <ul>
            <li><Link href="/about/who-we-are">Who We Are</Link></li>
            <li><Link href="/about/life-at-american-chase">Life At KODY Works</Link></li>
            <li><Link href="/about/jobs-at-american-chase">Jobs At KODY Works</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Insights</h4>
          <ul>
            <li><Link href="/insights/case-studies">Case Studies</Link></li>
            <li><Link href="/insights/blogs">Blogs</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li><Link href="/contact-us">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-top">
        <div className="footer-item">
          <div className="icon">
            <FaPhoneAlt />
          </div>
          <div>
            <h4>MOBILE</h4>
            <p>+91 942 534 7156</p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="footer-item">
          <div className="icon">
            <FaEnvelope />
          </div>
          <div>
            <h4>EMAIL</h4>
            <p>rupendra.khatarker@gmail.com</p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="footer-item">
          <div className="icon">
            <FaMapMarkerAlt />
          </div>
          <div>
            <h4>OFFICE</h4>
            <p>S-201, Silver Heights-2,</p>
            <p>Gauthana, Betul, MP 460001</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="logos-row">
          <div className="logo-section-left">
            <Image
              src={footer_left}
              alt="footer_left"
              className="logo-image-left"
              priority
            />
          </div>
          <div className="owner">
            <FaUserCircle className="owner-icon" />
            <span className="label">PROPRIETOR:</span>
            <span className="name">Rupendra Khatarker</span>
          </div>
          <div className="logo-section-right">
            <Image
              src={footer_right}
              alt="footer_right"
              className="logo-image-right"
              priority
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
