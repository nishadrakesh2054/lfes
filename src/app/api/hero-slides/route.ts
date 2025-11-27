import { NextResponse } from "next/server";
import { getHeroSlides } from "@/lib/sanity-queries";

// ISR: Revalidate every 60 seconds
export const revalidate = 60;

export async function GET() {
  try {
    const slides = await getHeroSlides();

    // Add caching headers for better performance
    return NextResponse.json(
      { slides },
      {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching hero slides:", error);
    return NextResponse.json(
      {
        error: "Failed to load hero slides",
        message: error instanceof Error ? error.message : "Unexpected error",
      },
      { status: 500 }
    );
  }
}
