import { Metadata } from "next";
import BlogListArea from "@/components/blog/blog-list-area";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Our Blog",
  description:
    "Read the latest news, articles, and updates from Little Flowers English School (LFES). Stay informed about school events, academic achievements, and educational insights.",
  keywords: [
    "LFES Blog",
    "School News",
    "Education Articles",
    "School Updates",
    "Academic News",
  ],
  path: "/blog-list",
});

export default function BlogListPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      {/* <BreadcrumbOne subtitle="Our Blog" title="Right Sidebar" /> */}
      <BreadcrumbTwo title="Our Blog" subtitle="Latest News & Articles" />
      {/* breadcrumb area end */}

      {/* blog list area start */}
      <BlogListArea />
      {/* blog list area end */}
    </main>
  );
}
