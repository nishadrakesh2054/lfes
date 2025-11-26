import { NextRequest, NextResponse } from "next/server";
import { writeClient } from "@/sanity/lib/writeClient";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source = "footer" } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingSubscriptions = await writeClient.fetch(
      `*[_type == "newsletter" && email == $email && status == "active"]`,
      { email: email.trim().toLowerCase() }
    );

    if (existingSubscriptions && existingSubscriptions.length > 0) {
      return NextResponse.json(
        {
          success: true,
          message: "You're already subscribed to our newsletter!",
          alreadySubscribed: true,
        },
        { status: 200 }
      );
    }

    // Create newsletter subscription in Sanity
    const newsletterData = {
      _type: "newsletter",
      email: email.trim().toLowerCase(),
      subscribedAt: new Date().toISOString(),
      status: "active",
      source: source,
    };

    const result = await writeClient.create(newsletterData);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for subscribing to our newsletter!",
        id: result._id,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Error submitting newsletter subscription:", error);
    return NextResponse.json(
      {
        error: "Failed to subscribe to newsletter",
        message:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}

// Optional: Add GET method
export async function GET() {
  return NextResponse.json(
    { message: "Newsletter API endpoint" },
    { status: 200 }
  );
}
