import "../../page-shared.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life At KODY Works | KODY Works",
  description: "Join a team of passionate innovators reimagining the future of work at KODY Works.",
};

export default function LifeAtAmericanChasePage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Life At KODY Works</h1>
        <p>Join a team of passionate innovators reimagining the future of work.</p>
      </div>
      <div className="page-content">
        <p>At KODY Works, we believe in fostering a culture of innovation, collaboration, and continuous learning. Our team enjoys flexible work arrangements, growth opportunities, and a supportive environment where ideas flourish.</p>
      </div>
    </div>
  );
}
