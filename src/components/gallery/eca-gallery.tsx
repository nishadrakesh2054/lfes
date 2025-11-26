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
        const response = await fetch(`/api/academic-gallery${categoryQuery}`);
        if (!response.ok) {
          throw new Error("Failed to load gallery images.");
        }
        const data = await response.json();
        const sorted = (data.images || []).sort(
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
  }, [categoryQuery]);

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
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  if (displayImages.length === 0) {
    return (
      <div className="text-center py-4">
        <h5>No images available yet.</h5>
        <p className="text-muted mb-0">Please check back soon.</p>
      </div>
    );
  }

  return (
    <div className="row g-3">
      {displayImages.map((item) => (
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
              height={400}
              className="w-100 h-100 object-fit-cover gallery-img"
              style={{ minHeight: "240px" }}
            />
          </div>
        </div>
      ))}

      <style jsx>{`
        .gallery-item {
          transition:
            transform 0.4s ease,
            box-shadow 0.3s ease;
          min-height: 240px;
        }
        .gallery-item:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }
        @media (max-width: 576px) {
          .gallery-img {
            min-height: 200px !important;
          }
        }
      `}</style>
    </div>
  );
}
