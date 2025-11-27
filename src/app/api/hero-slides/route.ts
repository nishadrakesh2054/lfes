import { NextResponse } from "next/server";
import { getHeroSlides } from "@/lib/sanity-queries";

export const revalidate = 60;

export async function GET() {
  try {
    const slides = await getHeroSlides();
    return NextResponse.json({ slides });
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
