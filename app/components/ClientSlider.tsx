"use client";

import "./ClientSlider.css";
import { useState } from "react";

const clients = [
  { name: "Amazon", logo: "/assets/client-logos/amazon.png" },
  { name: "Microsoft", logo: "/assets/client-logos/microsoft.png" },
  { name: "Walmart", logo: "/assets/client-logos/walmart.png" },
  { name: "Netflix", logo: "/assets/client-logos/netflix.png" },
  { name: "Spotify", logo: "/assets/client-logos/spotify.png" },
  { name: "Salesforce", logo: "/assets/client-logos/salesforce.png" },
  { name: "Accenture", logo: "/assets/client-logos/accenture.png" },
  { name: "Deloitte", logo: "/assets/client-logos/deloitte.png" },
  { name: "PwC", logo: "/assets/client-logos/pwc.png" },
  { name: "EY", logo: "/assets/client-logos/ey.png" },
  { name: "KPMG", logo: "/assets/client-logos/kpmg.png" },
  { name: "Capgemini", logo: "/assets/client-logos/capgemini.png" },
  { name: "Infosys", logo: "/assets/client-logos/infosys.png" },
  { name: "TCS", logo: "/assets/client-logos/tcs.svg" },
  { name: "Wipro", logo: "/assets/client-logos/wipro.png" },
  { name: "HCL", logo: "/assets/client-logos/hcltech.svg" },
  { name: "Cognizant", logo: "/assets/client-logos/cognizant.png" },
  { name: "EPAM", logo: "/assets/client-logos/epam.png" },
  { name: "Intuit", logo: "/assets/client-logos/intuit.png" },
  { name: "Ford", logo: "/assets/client-logos/ford.png" },
];

function getFallbackUrl(name: string) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0D4BB8&color=fff&size=120&font-size=0.45`;
}

export default function ClientSlider() {
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="client-slider-section">
      <div className="client-slider-content">
        <div className="section-title">
          <span className="line"></span>
          <h2>OUR CLIENTS</h2>
          <span className="line"></span>
        </div>

        <div className="slider-wrapper">
          <div className="slider-track" aria-label="Client logos">
            {duplicatedClients.map((client, index) => (
              <ClientLogoItem key={`${client.name}-${index}`} client={client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientLogoItem({ client }: { client: typeof clients[0] }) {
  const [src, setSrc] = useState(client.logo);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setSrc(getFallbackUrl(client.name));
    }
  };

  return (
    <div className="client-item">
      <div className="client-logo-wrapper">
        <img
          src={src}
          alt={client.name}
          width={120}
          height={60}
          className="client-logo"
          loading="lazy"
          onError={handleError}
        />
      </div>
      <span className="client-name">{client.name}</span>
    </div>
  );
}