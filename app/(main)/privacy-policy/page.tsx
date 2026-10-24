import Link from "next/link";
import "./privacy.css";

export const metadata = {
  title: "Privacy Policy | KODY Works",
  description: "Privacy Policy for KODY Works IT Consulting Services",
};

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Privacy Policy</h1>
          <p>Last Updated: October 24, 2026</p>
        </div>

        <div className="legal-content">
          <section>
            <h2>1. Introduction</h2>
            <p>
              At <strong>KODY Works</strong>, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>https://kodyworks.com</strong> or interact with us.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and any details you voluntarily submit via our contact form.</li>
              <li><strong>Technical Information:</strong> IP address, browser type, device information, operating system, and pages visited for analytics and security purposes.</li>
              <li><strong>Communication Data:</strong> Any messages, queries, or feedback you send directly to us via email or phone.</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li>To respond to your enquiries and provide our IT consulting services.</li>
              <li>To improve our website, user experience, and service offerings.</li>
              <li>To communicate with you regarding proposals, projects, or updates.</li>
              <li>To maintain website security and prevent fraudulent activity.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2>4. Sharing of Information</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following cases:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> With trusted vendors who assist us in operating our website or business, under strict confidentiality obligations.</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government authority.</li>
              <li><strong>Business Protection:</strong> To protect the rights, property, or safety of KODY Works, our clients, or others.</li>
            </ul>
          </section>

          <section>
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to safeguard your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2>6. Cookies</h2>
            <p>
              Our website may use basic cookies to enhance user experience and collect anonymous usage data. You can choose to disable cookies through your browser settings, though some features of the website may not function properly as a result.
            </p>
          </section>

          <section>
            <h2>7. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2>8. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Request access to the personal information we hold about you.</li>
              <li>Request correction of any inaccurate or incomplete information.</li>
              <li>Request deletion of your personal information, subject to legal obligations.</li>
              <li>Withdraw your consent for us to contact you at any time.</li>
            </ul>
            <p>
              To exercise any of these rights, please email us at <strong>info@kodystack.com</strong>.
            </p>
          </section>

          <section>
            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to external websites. We are not responsible for the privacy practices or content of those third-party sites. We encourage you to review their privacy policies separately.
            </p>
          </section>

          <section>
            <h2>10. Changes to This Privacy Policy</h2>
            <p>
              KODY Works may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Last Updated" date. We encourage you to review this page periodically to stay informed.
            </p>
          </section>

          <section>
            <h2>11. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
            </p>
            <ul>
              <li><strong>Email:</strong> info@kodystack.com</li>
              <li><strong>Phone:</strong> +91 942 534 7156</li>
              <li><strong>Address:</strong> S-201, Silver Heights-2, Gauthana, Betul, MP 460001, India</li>
            </ul>
          </section>

          <div className="legal-back">
            <Link href="/">← Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
