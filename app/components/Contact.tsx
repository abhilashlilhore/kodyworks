import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="section-title">
        <span className="line"></span>
        <h2>CONTACT US</h2>
        <span className="line"></span>
      </div>

      <p className="contact-subtitle">
        Ready to take your project to the next level? Get in touch with us
        today and let&apos;s start building something amazing together.
      </p>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">
              <FaPhone />
            </div>
            <div>
              <h4>MOBILE</h4>
              <p>+91 942 534 7156</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div>
              <h4>EMAIL</h4>
              <p>rupendra.khatarker@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4>OFFICE</h4>
              <p>S-201, Silver Heights-2,</p>
              <p>Gauthana, Betul, MP 460001</p>
            </div>
          </div>

          <div className="contact-map-wrapper">
            <iframe
              className="contact-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23456.879832485532!2d78.964526!3d21.776259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a31aef5ab7c5e3b%3A0xfb8d8a0a7e1f8c7c!2sBetul%2C%20Madhya%20Pradesh%20460001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KODY Works Office Location"
            />
          </div>
        </div>

        <div className="contact-form-wrapper">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
