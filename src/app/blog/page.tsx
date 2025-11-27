import { Metadata } from "next";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import { generateMetadata } from "@/lib/seo";
import { getBlogs } from "@/lib/sanity-queries";
import BlogListArea from "@/components/blog/blog-list-area";

export const metadata: Metadata = generateMetadata({
  title: "News & Blog",
  description:
    "Read the latest news, articles, and updates from Little Flowers English School (LFES). Stay informed about school events, academic achievements, and educational insights.",
  keywords: [
    "LFES News & Blog",
    "School News",
    "Education Articles",
    "School Updates",
    "Academic News",
  ],
  path: "/blog",
});

// Force dynamic rendering to always fetch fresh data
export const dynamic = "force-dynamic";
export const revalidate = 0;

type Blog = {
  _id: string;
  title: string;
  category: string;
  description: string;
  publishedAt?: string;
  image?: {
    url: string;
    metadata?: {
      dimensions?: {
        width: number;
        height: number;
      };
    };
  };
};

export default async function BlogPage() {
  let blogs: Blog[] = [];

  try {
    blogs = await getBlogs();
  } catch (error) {
    console.error("Error in BlogPage:", error);
  }

  // Debug: Log the fetched blogs
  if (process.env.NODE_ENV === "development") {
    console.log("Fetched blogs count:", blogs.length);
    if (blogs.length > 0) {
      console.log("First blog sample:", JSON.stringify(blogs[0], null, 2));
    } else {
      console.log(
        "No blogs found. Make sure blogs are published in Sanity Studio."
      );
    }
  }

  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo title="News & Blog" subtitle="Latest News & Articles" />
      {/* breadcrumb area end */}

      <BlogListArea initialBlogs={blogs || []} />
    </main>
  );
}
