import Link from "next/link";
import "../page-shared.css";

const insightsItems = [
  { title: "Case Studies", href: "/insights/case-studies", desc: "Explore real-world examples of our solutions in action." },
  { title: "Blogs", href: "/insights/blogs", desc: "Indelible insights and perspectives from our thought leaders on the front lines." },
];

export default function InsightsPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Insights</h1>
        <p>Stay updated with our latest thinking, research, and success stories.</p>
      </div>
      <div className="services-grid">
        {insightsItems.map((item) => (
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
