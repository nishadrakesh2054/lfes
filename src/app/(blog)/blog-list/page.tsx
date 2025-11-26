import { Metadata } from "next";
import BlogListArea from "@/components/blog/blog-list-area";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";

export const metadata: Metadata = {
  title: "Blog List - LFES",
};

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
