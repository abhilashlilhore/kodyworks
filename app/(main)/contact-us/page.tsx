import Contact from "../../components/Contact";
import "../page-shared.css";

export default function ContactUsPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We&apos;d love to hear from you. Reach out and let&apos;s start a conversation.</p>
      </div>
      <Contact />
    </div>
  );
}
