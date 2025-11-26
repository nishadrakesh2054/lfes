import { NextResponse } from "next/server";
import { getJobOpenings } from "@/lib/sanity-queries";

export const revalidate = 60;

export async function GET() {
  try {
    const jobs = await getJobOpenings();
    return NextResponse.json({ jobs });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch job openings",
        message:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}
