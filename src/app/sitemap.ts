import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const routes = [
    "",
    "/about",
    "/contact",
    "/admission",
    "/facilities",
    "/event",
    "/blog-list",
    "/gallery",
    "/teacher",
    "/career",
    "/faq",
    "/eca",
    "/alumini",
    "/message",
    "/privacy-policy",
    "/progressive",
    "/primary-school",
    "/middle-school",
    "/high-school",
    "/senior-high-school",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
