"use client";
import { useState, useEffect, useMemo } from "react";
import BlogListItem from "./blog-list-item";

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

type BlogListAreaProps = {
  initialBlogs: Blog[];
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

export default function BlogListArea({ initialBlogs }: BlogListAreaProps) {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs || []);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Update blogs when initialBlogs changes (for revalidation)
  useEffect(() => {
    if (initialBlogs && initialBlogs.length > 0) {
      setBlogs(initialBlogs);
    }
  }, [initialBlogs]);

  // Filter blogs by category
  const filteredBlogs = useMemo(() => {
    if (!selectedCategory) return blogs;
    return blogs.filter((blog) => blog.category === selectedCategory);
  }, [blogs, selectedCategory]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayBlogs = filteredBlogs.slice(startIndex, endIndex);

  // Get category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    blogs.forEach((blog) => {
      counts[blog.category] = (counts[blog.category] || 0) + 1;
    });
    return counts;
  }, [blogs]);

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Debug logging
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log("BlogListArea - initialBlogs:", initialBlogs?.length || 0);
      console.log("BlogListArea - blogs state:", blogs.length);
      console.log("BlogListArea - displayBlogs:", displayBlogs.length);
    }
  }, [initialBlogs, blogs, displayBlogs]);

  return (
    <section className="tp-blog-standard-area p-relative pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {displayBlogs.length > 0 ? (
              <>
                <div className="tp-postbox-wrapper">
                  {displayBlogs.map((blog) => (
                    <BlogListItem key={blog._id} blog={blog} />
                  ))}
                </div>

                {/* Pagination - Only show if more than 6 items */}
                {filteredBlogs.length > itemsPerPage && (
                  <div className="tp-event-inner-pagination tp-postbox-item-pagination">
                    <div className="tp-dashboard-pagination">
                      <div className="tp-pagination">
                        <div className="d-flex justify-content-center gap-2 align-items-center">
                          <button
                            onClick={() => {
                              setCurrentPage((prev) => Math.max(1, prev - 1));
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            disabled={currentPage === 1}
                            className="btn btn-outline-primary"
                            style={{
                              borderColor: "#0079c0",
                              color: currentPage === 1 ? "#ccc" : "#0079c0",
                              borderRadius: "8px",
                              padding: "8px 20px",
                              opacity: currentPage === 1 ? 0.5 : 1,
                              cursor:
                                currentPage === 1 ? "not-allowed" : "pointer",
                            }}
                          >
                            Previous
                          </button>

                          {Array.from(
                            { length: totalPages },
                            (_, i) => i + 1
                          ).map((page) => (
                            <button
                              key={page}
                              onClick={() => {
                                setCurrentPage(page);
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                              className="btn"
                              style={{
                                backgroundColor:
                                  currentPage === page
                                    ? "#0079c0"
                                    : "transparent",
                                borderColor: "#0079c0",
                                color:
                                  currentPage === page ? "#fff" : "#0079c0",
                                borderRadius: "8px",
                                minWidth: "40px",
                                height: "40px",
                                fontWeight: currentPage === page ? 600 : 500,
                              }}
                            >
                              {page}
                            </button>
                          ))}

                          <button
                            onClick={() => {
                              setCurrentPage((prev) =>
                                Math.min(totalPages, prev + 1)
                              );
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            disabled={currentPage === totalPages}
                            className="btn btn-outline-primary"
                            style={{
                              borderColor: "#0079c0",
                              color:
                                currentPage === totalPages ? "#ccc" : "#0079c0",
                              borderRadius: "8px",
                              padding: "8px 20px",
                              opacity: currentPage === totalPages ? 0.5 : 1,
                              cursor:
                                currentPage === totalPages
                                  ? "not-allowed"
                                  : "pointer",
                            }}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-5">
                <p className="custom-paragraph" style={{ fontSize: "1.1rem" }}>
                  No blogs available
                  {selectedCategory ? " in this category" : ""} at the moment.
                </p>
              </div>
            )}
          </div>

          <div className="col-lg-4">
            <div className="tp-sidebar-wrapper pl-55">
              {/* Categories */}
              <div className="tp-sidebar-widget mb-50">
                <div className="tp-sidebar-content">
                  <h5 className="tp-sidebar-widget-title text-uppercase">
                    Categories
                  </h5>
                  <ul>
                    <li>
                      <button
                        onClick={() => setSelectedCategory(null)}
                        style={{
                          background:
                            selectedCategory === null ? "#e3f2fd" : "#f5f5f5",
                          padding: "10px 15px",
                          textAlign: "left",
                          width: "100%",
                          border: "none",
                          borderRadius: "6px",
                          color: selectedCategory === null ? "#0079c0" : "#333",
                          fontWeight: selectedCategory === null ? 600 : 400,
                          cursor: "pointer",
                          marginBottom: "8px",
                        }}
                      >
                        All <span>({blogs.length})</span>
                      </button>
                    </li>
                    {Object.entries(categoryLabels).map(([value, label]) => (
                      <li key={value} style={{ marginBottom: "8px" }}>
                        <button
                          onClick={() => setSelectedCategory(value)}
                          style={{
                            background:
                              selectedCategory === value
                                ? "#e3f2fd"
                                : "#f5f5f5",
                            padding: "10px 15px",
                            textAlign: "left",
                            width: "100%",
                            border: "none",
                            borderRadius: "6px",
                            color:
                              selectedCategory === value ? "#0079c0" : "#333",
                            fontWeight: selectedCategory === value ? 600 : 400,
                            cursor: "pointer",
                          }}
                        >
                          {label} <span>({categoryCounts[value] || 0})</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
