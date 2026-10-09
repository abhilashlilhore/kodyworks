import "../page-shared.css";

export default function ContactUsPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We&apos;d love to hear from you. Reach out and let&apos;s start a conversation.</p>
      </div>
      <div className="page-content">
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Email</h3>
            <p>rupendra.khatarker@gmail.com</p>
          </div>
          <div className="contact-card">
            <h3>Phone</h3>
            <p>+91 942 534 7156</p>
          </div>
          <div className="contact-card">
            <h3>Office</h3>
            <p>S-201, Silver Heights-2, Gauthana, Betul, MP 460001</p>
          </div>
        </div>
      </div>
    </div>
  );
}
