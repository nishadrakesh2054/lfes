import { NextResponse } from "next/server";
import { getGalleryImages } from "@/lib/sanity-queries";
import { urlFor } from "@/sanity/lib/image";

type SanityImageAsset = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};

type GalleryImageDocument = {
  _id: string;
  title: string;
  category: string;
  image?: SanityImageAsset;
  driveLink?: string;
  _createdAt?: string;
};

export const revalidate = 60;

export async function GET() {
  try {
    const images = await getGalleryImages();

    const formatted = images.map((image: GalleryImageDocument) => ({
      ...image,
      createdAt: image._createdAt,
      imageUrl: image.image
        ? urlFor(image.image).width(1200).quality(90).url()
        : "",
    }));

    return NextResponse.json({ images: formatted });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to load gallery images",
        message: error instanceof Error ? error.message : "Unexpected error",
      },
      { status: 500 }
    );
  }
}
