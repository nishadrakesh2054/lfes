import all_blogs from "@/data/blog-data";
import BlogDetailsArea from "../_components/blog-details-area";
import BlogDetailsRelatedBlogs from "@/components/blog/details/blog-details-related-blogs";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import { generateMetadata as genMeta } from "@/lib/seo";
import { Metadata } from "next";

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const id = params.id;
  const blog = all_blogs.find((item) => item.id == Number(id));

  if (!blog) {
    return genMeta({
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
      path: `/blog-details/${id}`,
      noIndex: true,
    });
  }

  return genMeta({
    title: blog.title || "Blog Post",
    description:
      blog.desc ||
      `Read ${blog.title} at Little Flowers English School (LFES).`,
    keywords: ["LFES Blog", "School News", blog.title || ""],
    path: `/blog-details/${id}`,
    image: blog.img,
  });
}

export default function BlogDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const blog = all_blogs.find((blog) => blog.id.toString() === params.id);
  return (
    <main>
      {blog ? (
        <>
          {/* breadcrumb area start */}

          {/* breadcrumb area end */}
          <BreadcrumbTwo title="Blog Details" subtitle="Read Article" />

          {/* blog details area start */}
          <BlogDetailsArea blog={blog} />
          {/* blog details area end */}

          {/* related blogs area start */}
          <BlogDetailsRelatedBlogs />
          {/* related blogs area end */}
        </>
      ) : (
        <div className="text-center mt-100 mb-80">
          No blog found with id: {params.id}
        </div>
      )}
    </main>
  );
}
