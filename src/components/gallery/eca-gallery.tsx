"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type AcademicGalleryImage = {
  _id: string;
  imageUrl: string;
  createdAt?: string;
};

type AcademicGalleryProps = {
  categories?: string[];
  limit?: number;
};

export default function AcademicGallery({
  categories = [],
  limit = 6,
}: AcademicGalleryProps) {
  const [images, setImages] = useState<AcademicGalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const categoryQuery = useMemo(() => {
    if (!categories.length) return "";
    return `?category=${categories.join(",")}`;
  }, [categories]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const url = `/api/academic-gallery${categoryQuery}`;
        console.log("Fetching gallery images from:", url);
        console.log("Categories:", categories);

        const response = await fetch(url);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error("API Error Response:", errorData);
          throw new Error(
            errorData.message || "Failed to load gallery images."
          );
        }

        const data = await response.json();
        console.log("Gallery API Response:", {
          imagesCount: data.images?.length || 0,
          hasError: !!data.error,
          error: data.error,
        });

        if (data.error) {
          throw new Error(data.error);
        }

        const imageList = data.images || [];
        console.log("Images received:", imageList.length);

        if (imageList.length > 0) {
          console.log("First image:", {
            _id: imageList[0]._id,
            imageUrl: imageList[0].imageUrl,
            hasImageUrl: !!imageList[0].imageUrl,
          });
        }

        const sorted = imageList.sort(
          (a: AcademicGalleryImage, b: AcademicGalleryImage) => {
            const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
            const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
            return dateB - dateA;
          }
        );

        setImages(sorted);
        setError(null);
      } catch (err) {
        console.error("Error loading academic gallery:", err);
        setError(
          err instanceof Error
            ? err.message
            : "Unable to load gallery images right now."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [categoryQuery, categories]);

  const displayImages = images.slice(0, limit);

  if (isLoading) {
    return (
      <div className="text-center py-4">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="text-muted mt-3 mb-0">Loading gallery images...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-warning" role="alert">
        <strong>Unable to load gallery:</strong> {error}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-2 small">
            <p className="mb-1">Debug Info:</p>
            <ul className="mb-0 small">
              <li>
                Categories requested:{" "}
                {categories.length > 0
                  ? categories.join(", ")
                  : "None (all images)"}
              </li>
              <li>API URL: /api/academic-gallery{categoryQuery}</li>
              <li>Check browser console for more details</li>
            </ul>
          </div>
        )}
      </div>
    );
  }

  if (!isLoading && displayImages.length === 0) {
    return (
      <div className="text-center py-4">
        <h5>No images available yet.</h5>
        <p className="text-muted mb-0">
          {categories.length > 0
            ? `No images found for category: ${categories.join(", ")}. Please check back soon.`
            : "Please check back soon."}
        </p>
        {process.env.NODE_ENV === "development" && (
          <div className="mt-3 small text-muted">
            <p className="mb-1">Debug Info:</p>
            <ul className="mb-0 text-start d-inline-block small">
              <li>
                Categories requested:{" "}
                {categories.length > 0 ? categories.join(", ") : "All"}
              </li>
              <li>Total images fetched: {images.length}</li>
              <li>Limit: {limit}</li>
              <li>Check Sanity Studio to ensure images are published</li>
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="row g-3">
      {displayImages
        .filter((item) => item.imageUrl && item.imageUrl.trim() !== "")
        .map((item) => (
          <div
            key={item._id}
            className="col-12 col-sm-6 col-lg-4"
            style={{ display: "flex", alignItems: "stretch" }}
          >
            <div className="w-100 gallery-item position-relative overflow-hidden rounded-4 shadow-sm">
              <Image
                src={item.imageUrl}
                alt="Gallery image"
                width={600}
                height={600}
                className="w-100 h-100 object-fit-cover gallery-img"
                style={{ minHeight: "280px", aspectRatio: "4/3" }}
                onError={(e) => {
                  console.error("Failed to load image:", item.imageUrl);
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>
        ))}

      <style jsx>{`
        .gallery-item {
          transition:
            transform 0.4s ease,
            box-shadow 0.3s ease;
          min-height: 280px;
          aspect-ratio: 4 / 3;
        }
        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          aspect-ratio: 4 / 3;
        }
        .gallery-item:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }
        @media (max-width: 576px) {
          .gallery-item {
            min-height: 240px !important;
            aspect-ratio: 4 / 3;
          }
          .gallery-img {
            min-height: 240px !important;
          }
        }
      `}</style>
    </div>
  );
}
