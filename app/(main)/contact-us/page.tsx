import Contact from "../../components/Contact";
import { Metadata } from "next";
import "../page-shared.css";

export const metadata: Metadata = {
  title: "Contact Us | KODY Works",
  description: "Get in touch with KODY Works. Reach out for IT consulting, software development and technology solutions.",
};

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
