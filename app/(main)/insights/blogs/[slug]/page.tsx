import "../../../page-shared.css";
import "./blog-detail.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getBlogBySlug, getAllBlogs } from "@/data/blogs";

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return { title: "Blog Not Found | KODY Works" };
  }

  return {
    title: `${blog.title} | KODY Works`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      authors: [blog.author],
      publishedTime: blog.date,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const contentParagraphs = blog.content.split("\n\n");

  return (
    <div className="page-container blog-detail">
      <Link href="/insights/blogs" className="back-link">
        ? Back to Blogs
      </Link>

      <article>
        <div className="blog-header">
          <span className="blog-category-tag">{blog.category}</span>
          <h1>{blog.title}</h1>
          <div className="blog-meta-bar">
            <span>By {blog.author}</span>
            <span>{blog.date}</span>
          </div>
        </div>

        <div className="blog-body">
          {contentParagraphs.map((paragraph) => {
            const trimmed = paragraph.trim();

            if (trimmed.startsWith("### ")) {
              return (
                <h3 key={trimmed}>{trimmed.replace("### ", "")}</h3>
              );
            }

            const listItems = trimmed.split("\n").filter((l) => l.trim().startsWith("- **"));
            if (listItems.length > 0) {
              const items = trimmed
                .split("\n")
                .filter((l) => l.trim().startsWith("- **") || l.trim().startsWith("- "))
                .map((l) => {
                  const clean = l.replace(/^- \*\*/, "").replace(/\*\*:/, ":").replace(/^\*{1,2}/, "").replace(/\*{1,2}$/, "");
                  return clean;
                });
              return (
                <ul key={trimmed.substring(0, 40)}>
                  {items.map((item) => (
                    <li key={item}>{item.replace(/^- /, "")}</li>
                  ))}
                </ul>
              );
            }

            if (trimmed.startsWith("1. ") || trimmed.startsWith("2. ") || trimmed.startsWith("3. ") || trimmed.startsWith("4. ") || trimmed.startsWith("5. ")) {
              return null;
            }

            if (trimmed.startsWith("|")) {
              return null;
            }

            if (trimmed.startsWith("**")) {
              const boldText = trimmed.replace(/\*\*/g, "");
              return <p key={trimmed.substring(0, 30)} className="blog-highlight">{boldText}</p>;
            }

            if (trimmed.length > 0 && !trimmed.startsWith("[") && !trimmed.startsWith("!")) {
              return <p key={trimmed.substring(0, 30)}>{trimmed}</p>;
            }

            return null;
          })}
        </div>
      </article>
    </div>
  );
}
