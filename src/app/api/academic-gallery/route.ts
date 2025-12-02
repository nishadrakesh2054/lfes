import { NextRequest, NextResponse } from "next/server";
import { getAcademicGalleryImages } from "@/lib/sanity-queries";
import { urlFor } from "@/sanity/lib/image";

type SanityImage = {
  _type: "image";
  asset: {
    _type: "reference";
    _ref: string;
  };
};

type AcademicGalleryDoc = {
  _id: string;
  title: string;
  category: string;
  image?: SanityImage;
  driveLink?: string;
  _createdAt?: string;
};

export const dynamic = "force-dynamic";
export const revalidate = 0; // Always revalidate

export async function GET(request: NextRequest) {
  try {
    // Using request.nextUrl avoids marking route as dynamic just to parse query params
    const categoryParam = request.nextUrl.searchParams.get("category");
    const categories = categoryParam
      ? categoryParam
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
      : undefined;

    const images = await getAcademicGalleryImages(categories);

    const formatted = images
      .map((image: AcademicGalleryDoc) => {
        // Optimize image URLs for mobile performance - smaller sizes, better compression
        const imageUrl = image.image
          ? urlFor(image.image)
              .width(600) // Reduced for faster mobile loading
              .quality(75) // Optimized for mobile - good quality with smaller file size
              .format("webp") // WebP format for better compression
              .auto("format") // Auto-optimize format
              .url()
          : image.driveLink || "";

        return {
          _id: image._id,
          createdAt: image._createdAt,
          category: image.category,
          imageUrl: imageUrl,
        };
      })
      .filter((item) => item.imageUrl); // Filter out items without valid image URLs

    // Return response with no-cache headers
    return NextResponse.json(
      { images: formatted },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0, must-revalidate",
          Pragma: "no-cache",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to load academic gallery images",
        message: error instanceof Error ? error.message : "Unexpected error",
        images: [], // Always return images array even on error
      },
      { status: 500 }
    );
  }
}
