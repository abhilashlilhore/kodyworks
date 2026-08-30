import Link from "next/link";
import "../page-shared.css";

const aboutItems = [
  { title: "Who We Are", href: "/about/who-we-are", desc: "Get your bearings on our values, culture, and unique approach." },
  { title: "Life At American Chase", href: "/about/life-at-american-chase", desc: "Join a team of passionate innovators reimagining the future of work." },
  { title: "Jobs At American Chase", href: "/about/jobs-at-american-chase", desc: "Explore opportunities that inspire, challenge, and unlock your potential." },
];

export default function AboutPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>About Chase</h1>
        <p>Discover our story, culture, and the people behind KODY Works.</p>
      </div>
      <div className="services-grid">
        {aboutItems.map((item) => (
          <Link href={item.href} key={item.href} className="service-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span className="learn-more">Learn More →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
