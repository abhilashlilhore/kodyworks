import "./Partners.css";
import Image from "next/image";
import salesforce from "../assets/partner_salesforce.svg";
import microsoft from "../assets/partner_microsoft.svg";
import aws from "../assets/partner_aws.svg";
import google from "../assets/partner_google.svg";
import ibm from "../assets/partner_ibm.svg";
import accenture from "../assets/partner_accenture.svg";

const partners = [
  { name: "Salesforce", logo: salesforce, alt: "Salesforce" },
  { name: "Microsoft", logo: microsoft, alt: "Microsoft" },
  { name: "Amazon Web Services", logo: aws, alt: "AWS" },
  { name: "Google Cloud", logo: google, alt: "Google" },
  { name: "IBM", logo: ibm, alt: "IBM" },
  { name: "Accenture", logo: accenture, alt: "Accenture" },
];

export default function Partners() {
  return (
    <section className="partners-section">
      <div className="partners-content">
        <div className="section-title">
          <span className="line"></span>
          <h2>OUR PARTNERS</h2>
          <span className="line"></span>
        </div>

        <div className="partners-grid">
          {partners.map((partner) => (
            <div className="partner-item" key={partner.name}>
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={60}
                height={60}
                className="partner-logo"
              />
              <span className="partner-name">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
