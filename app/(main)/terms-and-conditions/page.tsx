import Link from "next/link";
import "./terms.css";

export const metadata = {
  title: "Terms & Conditions | KODY Works",
  description: "Terms and Conditions for KODY Works IT Consulting Services",
};

export default function TermsAndConditions() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Terms & Conditions</h1>
          <p>Last Updated: October 24, 2026</p>
        </div>

        <div className="legal-content">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the website <strong>https://kodyworks.com</strong> (or any of its subpages), you agree to comply with and be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use this website or our services.
            </p>
          </section>

          <section>
            <h2>2. About Us</h2>
            <p>
              <strong>KODY Works</strong> is an IT Consulting Company engaged in providing IT consulting, software development, web & mobile application development, cloud & DevOps, Salesforce, SAP, Generative AI, MVP development, staffing solutions and related technology services. The company is owned and managed by <strong>Mr. Rupendra Khatarker</strong>, having its registered office at <strong>S-201, Silver Heights-2, Gauthana, Betul, Madhya Pradesh - 460001, India</strong>.
            </p>
          </section>

          <section>
            <h2>3. Services</h2>
            <p>
              All services offered by KODY Works are subject to separate written proposals, work orders, or service agreements. The information provided on this website is for general informational purposes only and does not constitute a binding offer unless explicitly stated.
            </p>
          </section>

          <section>
            <h2>4. Intellectual Property Rights</h2>
            <p>
              All content on this website, including but not limited to logos, images, graphics, text, design elements, and code, is the property of KODY Works or its licensors and is protected by applicable copyright, trademark, and intellectual property laws. You may not copy, reproduce, distribute, modify, or republish any content without prior written consent from KODY Works.
            </p>
          </section>

          <section>
            <h2>5. User Obligations</h2>
            <ul>
              <li>You agree to use this website only for lawful purposes.</li>
              <li>You shall not attempt to gain unauthorized access to any part of the website, servers, or databases.</li>
              <li>You shall not upload or transmit any viruses, malware, or harmful code.</li>
              <li>You shall not use this website to misrepresent your identity or submit false information.</li>
            </ul>
          </section>

          <section>
            <h2>6. Confidentiality & Client Information</h2>
            <p>
              Any business, technical, or proprietary information shared with KODY Works during discussions, proposals, or engagements shall be treated as confidential and used solely for the purpose of evaluating and delivering the agreed services.
            </p>
          </section>

          <section>
            <h2>7. Limitation of Liability</h2>
            <p>
              KODY Works shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with the use of this website or reliance on its content. All services are provided on an "as-is" basis to the extent permitted by applicable law.
            </p>
          </section>

          <section>
            <h2>8. Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites for your convenience. KODY Works does not endorse or assume any responsibility for the content, privacy practices, or terms of use of such third-party websites.
            </p>
          </section>

          <section>
            <h2>9. Governing Law & Jurisdiction</h2>
            <p>
              These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts at Betul, Madhya Pradesh, India.
            </p>
          </section>

          <section>
            <h2>10. Changes to Terms</h2>
            <p>
              KODY Works reserves the right to update or modify these Terms & Conditions at any time without prior notice. Continued use of the website after such changes shall be deemed as acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2>11. Contact Us</h2>
            <p>
              For any questions regarding these Terms & Conditions, you may contact us at:
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
