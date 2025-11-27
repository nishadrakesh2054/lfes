import Image from "next/image";

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

type IProps = {
  blog: Blog;
};

const categoryLabels: Record<string, string> = {
  "school-news": "School News",
  "events-activities": "Events & Activities",
  "student-achievements": "Student Achievements",
  "alumni-stories": "Alumni Stories",
  "academic-updates": "Academic Updates",
  "workshops-seminars": "Workshops & Seminars",
  "sports-athletics": "Sports & Athletics",
  "arts-culture": "Arts & Culture",
  "community-service": "Community Service",
  "parent-resources": "Parent Resources",
};

export default function BlogListItem({ blog }: IProps) {
  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const categoryLabel = categoryLabels[blog.category] || blog.category;
  const displayDate = formatDate(blog.publishedAt);
  const truncatedDescription =
    blog.description.length > 150
      ? blog.description.substring(0, 150) + "..."
      : blog.description;

  return (
    <div className="tp-postbox-item p-relative mb-40">
      <div className="tp-postbox-item-list-box d-flex align-items-center">
        {blog.image?.url && (
          <div className="tp-postbox-item-list-thumb">
            <Image
              src={blog.image.url}
              alt={blog.title}
              width={270}
              height={340}
              style={{ height: "auto" }}
            />
          </div>
        )}

        <div className="tp-postbox-content">
          <div className="tp-blog-stories-tag-wrap d-flex">
            <span style={{ color: "#0079c0", fontWeight: 600 }}>
              {categoryLabel}
            </span>
            {displayDate && (
              <span style={{ marginLeft: "10px" }}>{displayDate}</span>
            )}
          </div>
          <h5 style={{ marginTop: "10px", fontSize: "20px", fontWeight: 600 }}>
            {blog.title}
          </h5>
          <p
            className="custom-paragraph"
            style={{ marginTop: "10px", color: "#666" }}
          >
            {truncatedDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
