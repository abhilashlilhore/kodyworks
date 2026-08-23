import "./Insights.css";
import Image from "next/image";
import blog_1 from "../assets/blog_1.svg";
import blog_2 from "../assets/blog_2.svg";
import blog_3 from "../assets/blog_3.svg";
import blog_4 from "../assets/blog_4.svg";
import blog_5 from "../assets/blog_5.svg";
import blog_6 from "../assets/blog_6.svg";

type BlogPost = {
  id: number;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
  link: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Cloud Migration Strategy for Growing Enterprises",
    date: "August 12, 2026",
    author: "Rupendra Khatarker",
    excerpt:
      "Planning a seamless move to the cloud requires a structured roadmap that balances cost, security and uptime. Here is the approach we follow with every client.",
    image: blog_1,
    link: "#",
  },
  {
    id: 2,
    title: "Building Secure Software in a Remote-First World",
    date: "July 29, 2026",
    author: "KODY Works Team",
    excerpt:
      "Remote delivery teams bring flexibility, but they also demand strong DevSecOps hygiene. We share the controls that keep code safe across continents.",
    image: blog_2,
    link: "#",
  },
  {
    id: 3,
    title: "Project Management: Choosing Between Agile and Waterfall",
    date: "July 15, 2026",
    author: "Rupendra Khatarker",
    excerpt:
      "Not every project fits Scrum. We break down the decision matrix that helps our clients pick the methodology that actually ships value on time.",
    image: blog_3,
    link: "#",
  },
  {
    id: 4,
    title: "Modernizing Legacy Systems Without Stopping the Business",
    date: "June 30, 2026",
    author: "KODY Works Team",
    excerpt:
      "A step-by-step playbook for refactoring old systems incrementally while keeping day-to-day operations running and stakeholders confident.",
    image: blog_4,
    link: "#",
  },
  {
    id: 5,
    title: "Automation ROI: Measuring What Matters",
    date: "June 18, 2026",
    author: "Rupendra Khatarker",
    excerpt:
      "Automation is easy to sell and hard to prove. We track the six metrics that show whether a bot is paying for itself in six months or six years.",
    image: blog_5,
    link: "#",
  },
  {
    id: 6,
    title: "Selecting the Right Cloud Provider for 2026 Workloads",
    date: "June 5, 2026",
    author: "KODY Works Team",
    excerpt:
      "Cost, compliance, performance and support all factor into the decision. Our short framework helps you choose quickly and avoid vendor lock-in.",
    image: blog_6,
    link: "#",
  },
];

export default function Insights() {
  return (
    <section className="insights-section">
      <div className="insights-content">
        <div className="section-title">
          <span className="line"></span>
          <h2>LATEST INSIGHTS</h2>
          <span className="line"></span>
        </div>

        <div className="blogs-grid">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.id}>
              <div className="blog-image-wrapper">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="blog-image"
                />
              </div>
              <div className="blog-content">
                <span className="blog-meta">
                  {post.date} • {post.author}
                </span>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href={post.link} className="blog-link">
                  Learn More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
