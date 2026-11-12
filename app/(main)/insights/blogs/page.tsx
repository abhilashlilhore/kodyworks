import "../../page-shared.css";
import "./blogs.css";
import { Metadata } from "next";
import Link from "next/link";
import { getAllBlogs } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blogs | KODY Works",
  description: "Indelible insights and perspectives from our thought leaders on web development, AI, marketing and technology.",
};

export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Blogs</h1>
        <p>Indelible insights and perspectives from our thought leaders on the front lines.</p>
      </div>
      <div className="services-grid">
        {blogs.map((blog) => (
          <Link href={`/insights/blogs/${blog.slug}`} key={blog.slug} className="service-card">
            <span className="blog-category">{blog.category}</span>
            <h3>{blog.title}</h3>
            <p>{blog.excerpt}</p>
            <div className="blog-meta">
              <span>{blog.author}</span>
              <span>{blog.date}</span>
            </div>
            <span className="learn-more">Read More →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}