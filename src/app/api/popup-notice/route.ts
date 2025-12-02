import { NextResponse } from "next/server";
import { getActivePopupNotice } from "@/lib/sanity-queries";

export const revalidate = 60;

export async function GET() {
  try {
    const popup = await getActivePopupNotice();

    if (!popup) {
      return NextResponse.json({ popup: null });
    }

    // Format the popup data with image URL
    const formatted = {
      _id: popup._id,
      image: {
        url: popup.image?.asset?.url || "",
        alt: popup.image?.alt || "",
        metadata: popup.image?.asset?.metadata || {},
      },
    };

    return NextResponse.json({ popup: formatted });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to load popup notice",
        message: error instanceof Error ? error.message : "Unexpected error",
      },
      { status: 500 }
    );
  }
}
