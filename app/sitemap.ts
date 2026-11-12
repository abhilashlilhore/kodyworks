import { MetadataRoute } from "next"
import { getAllBlogs } from "@/data/blogs"

const baseUrl = "https://kodyworks.com"

const staticPages: MetadataRoute.Sitemap = [
  {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  },
  {
    url: `${baseUrl}/services/web-development`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/services/generative-ai`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/services/sap`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/services/mobile-app-development`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/services/mvp-development`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/services/staffing`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/services/cloud-devops-integrations`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/services/salesforce`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/services`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/about`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/about/who-we-are`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/about/life-at-kody-works`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${baseUrl}/about/jobs-at-kody-works`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${baseUrl}/insights/blogs`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/insights/case-studies`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/contact-us`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/privacy-policy`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    url: `${baseUrl}/terms-and-conditions`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = getAllBlogs()

  const blogEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/insights/blogs/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticPages, ...blogEntries]
}
