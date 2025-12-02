"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";

type GalleryImage = {
  _id: string;
  title: string;
  category: string;
  imageUrl: string;
  driveLink?: string;
  createdAt?: string;
};

const CATEGORY_LABELS: Record<string, string> = {
  "progressive-wing": "Progressive Wing",
  "primary-school": "Primary School",
  "middle-school": "Middle School",
  "secondary-school": "Secondary School",
  events: "Events & Activities",
  facilities: "Facilities",
};

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  }, []);

  const openLightboxWithBodyLock = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = "hidden";
  };

  // Handle ESC key to close lightbox
  useEffect(() => {
    if (!selectedImage) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedImage, closeLightbox]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/gallery");
        if (!response.ok) {
          throw new Error("Failed to load gallery images.");
        }
        const data = await response.json();
        setImages(data.images || []);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Unable to load gallery right now."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  const availableCategories = Object.entries(CATEGORY_LABELS).filter(([id]) =>
    images.some((img) => img.category === id)
  );

  const categories =
    availableCategories.length > 0
      ? [
          { id: "all", name: "All" },
          ...availableCategories.map(([id, name]) => ({ id, name })),
        ]
      : [
          { id: "all", name: "All" },
          ...Object.entries(CATEGORY_LABELS).map(([id, name]) => ({
            id,
            name,
          })),
        ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <main>
      <BreadcrumbTwo title="Gallery" subtitle="Our Moments & Memories" />

      <section className=" pt-120 pb-120">
        <div className="container">
          {/* Filter Buttons - Top */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="tp-gallery-filter-stack">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`tp-gallery-filter-btn ${
                      selectedCategory === category.id ? "active" : ""
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="row">
            <div className="col-12">
              {isLoading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <p className="custom-paragraph mt-3">
                    Loading gallery images...
                  </p>
                </div>
              ) : error ? (
                <div className="alert alert-danger">{error}</div>
              ) : filteredImages.length === 0 ? (
                <div className="text-center py-5">
                  <h5>No images in this category yet.</h5>
                  <p className="custom-paragraph ">
                    Please check back later as we continue to update our
                    gallery.
                  </p>
                </div>
              ) : (
                <div className="row tp-gallery-masonry g-3">
                  {filteredImages.map((item) => (
                    <div
                      key={item._id}
                      className="col-lg-3 col-md-4 col-sm-6 tp-gallery-item"
                    >
                      <div
                        className="tp-gallery-item-wrapper"
                        onClick={() => openLightboxWithBodyLock(item.imageUrl)}
                      >
                        <div className="tp-gallery-thumb">
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            width={400}
                            height={400}
                            className="w-100"
                            loading="lazy"
                            sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 25vw"
                            quality={85}
                            style={{
                              height: "auto",
                              objectFit: "cover",
                              borderRadius: "12px",
                            }}
                          />
                          <div className="tp-gallery-overlay">
                            <div className="tp-gallery-content">
                              <div className="d-flex align-items-center justify-content-between gap-2">
                                <div>
                                  <h5 className="tp-gallery-title">
                                    {item.title}
                                  </h5>
                                </div>
                                {item.driveLink && (
                                  <a
                                    href={item.driveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="tp-gallery-drive-link"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <i className="bi bi-link-45deg me-1"></i>
                                    Drive
                                  </a>
                                )}
                              </div>
                              <div className="tp-gallery-icon">
                                <i
                                  className="bi bi-zoom-in"
                                  style={{ fontSize: "20px", color: "white" }}
                                ></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="tp-gallery-lightbox" onClick={closeLightbox}>
            <div
              className="tp-gallery-lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="tp-gallery-lightbox-close"
                onClick={closeLightbox}
              >
                ×
              </button>
              <Image
                src={selectedImage}
                alt="Gallery Image"
                width={1200}
                height={800}
                className="tp-gallery-lightbox-img"
                style={{
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        )}
      </section>

      <style jsx>{`
        .tp-gallery-area {
          background-color: #f8f9fa;
        }

        .tp-gallery-filter-stack {
          display: flex;
          flex-direction: row;
          gap: 10px;
          justify-content: flex-start;
          flex-wrap: wrap;
        }

        .tp-gallery-filter-btn {
          padding: 6px 16px;
          border: 1px solid #e0e0e0;
          background: #ffffff;
          color: #333;
          font-size: 13px;
          font-weight: 500;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .tp-gallery-filter-btn:hover,
        .tp-gallery-filter-btn.active {
          background: #0079c0;
          color: #ffffff;
          border-color: #0079c0;
          transform: translateY(-2px);
          box-shadow: 0 2px 8px rgba(0, 121, 192, 0.3);
        }

        .tp-gallery-item-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .tp-gallery-item-wrapper:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .tp-gallery-thumb {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
        }

        .tp-gallery-thumb img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .tp-gallery-item-wrapper:hover .tp-gallery-thumb img {
          transform: scale(1.1);
        }

        .tp-gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.7) 100%
          );
          display: flex;
          align-items: flex-end;
          padding: 25px;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 12px;
        }

        .tp-gallery-item-wrapper:hover .tp-gallery-overlay {
          opacity: 1;
        }

        .tp-gallery-content {
          width: 100%;
          color: #ffffff;
        }

        .tp-gallery-drive-link {
          background: rgba(255, 255, 255, 0.18);
          color: #ffffff;
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 12px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition:
            background 0.3s ease,
            transform 0.3s ease;
        }

        .tp-gallery-drive-link:hover {
          background: rgba(255, 255, 255, 0.35);
          color: #ffffff;
          transform: translateY(-1px);
        }

        .tp-gallery-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 5px;
          color: #ffffff;
        }

        .tp-gallery-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 35px;
          height: 35px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          backdrop-filter: blur(10px);
        }

        .tp-gallery-lightbox {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        .tp-gallery-lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
        }

        .tp-gallery-lightbox-close {
          position: absolute;
          top: -40px;
          right: 0;
          background: transparent;
          border: none;
          color: #ffffff;
          font-size: 48px;
          cursor: pointer;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
          z-index: 10000;
        }

        .tp-gallery-lightbox-close:hover {
          transform: rotate(90deg);
        }

        .tp-gallery-lightbox-img {
          border-radius: 8px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .tp-gallery-filter-btn {
            padding: 5px 12px;
            font-size: 12px;
          }

          .tp-gallery-thumb img {
            height: 200px;
          }

          .tp-gallery-lightbox {
            padding: 10px;
          }

          .tp-gallery-lightbox-content {
            max-width: 95vw;
            max-height: 95vh;
            padding-top: 40px;
          }

          .tp-gallery-lightbox-close {
            top: 5px;
            right: 5px;
            font-size: 36px;
            width: 40px;
            height: 40px;
            background: rgba(0, 0, 0, 0.6);
            border-radius: 50%;
            z-index: 10001;
          }

          .tp-gallery-lightbox-img {
            max-width: 100%;
            max-height: calc(95vh - 50px);
          }
        }
      `}</style>
    </main>
  );
}
