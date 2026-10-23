"use client";

import "./BrandSlider.css";
import { useEffect, useState } from "react";

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

export default function BrandSlider() {
  const duplicatedClients = [...clients, ...clients];
  const [featuredIndex, setFeaturedIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % clients.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const featured = clients[featuredIndex];

  return (
    <section id="brands" className="brand-section">
      <div className="section-title">
        <span className="line"></span>
        <h2>TRUSTED BY</h2>
        <span className="line"></span>
      </div>

      <p className="brand-subtitle">
        Can we get a hallelujah for these brands we have worked with?
      </p>

      <div className="featured-logo-wrapper">
        <ClientLogo
          key={featured.name}
          client={featured}
          className="featured-logo"
          width={200}
          height={100}
        />
        <span className="featured-name">{featured.name}</span>
      </div>

      <div className="brand-track">
        <div className="brand-slider" aria-label="Client logos">
          {duplicatedClients.map((client, index) => (
            <div className="brand-item" key={`${client.name}-${index}`}>
              <ClientLogo
                client={client}
                className="brand-logo"
                width={120}
                height={60}
              />
              <span className="brand-name">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientLogo({
  client,
  className,
  width,
  height,
}: {
  client: (typeof clients)[0];
  className: string;
  width: number;
  height: number;
}) {
  const [src, setSrc] = useState(client.logo);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setSrc(getFallbackUrl(client.name));
    }
  };

  return (
    <img
      src={src}
      alt={client.name}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      onError={handleError}
    />
  );
}
