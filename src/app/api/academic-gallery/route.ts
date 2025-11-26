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

export const revalidate = 60;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryParam = searchParams.get("category");
    const categories = categoryParam
      ? categoryParam
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
      : undefined;

    const images = await getAcademicGalleryImages(categories);

    const formatted = images.map((image: AcademicGalleryDoc) => ({
      ...image,
      createdAt: image._createdAt,
      imageUrl: image.image
        ? urlFor(image.image).width(1000).quality(90).url()
        : "",
    }));

    return NextResponse.json({ images: formatted });
  } catch (error) {
    console.error("Error fetching academic gallery images:", error);
    return NextResponse.json(
      {
        error: "Failed to load academic gallery images",
        message: error instanceof Error ? error.message : "Unexpected error",
      },
      { status: 500 }
    );
  }
}
