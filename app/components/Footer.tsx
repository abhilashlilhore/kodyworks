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

const Footer = () => {
  return (
    <footer className="footer">

      {/* Top Section */}
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

      {/* Bottom Section */}

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