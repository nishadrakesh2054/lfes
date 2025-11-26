import { NextRequest, NextResponse } from "next/server";
import { writeClient } from "@/sanity/lib/writeClient";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create contact submission in Sanity
    const contactData = {
      _type: "contact",
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      message: message.trim(),
      submittedAt: new Date().toISOString(),
      status: "new",
    };

    const result = await writeClient.create(contactData);

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully!",
        id: result._id,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      {
        error: "Failed to submit contact form",
        message:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}

// Optional: Add GET method to retrieve contact submissions (with authentication)
export async function GET() {
  return NextResponse.json(
    { message: "Contact API endpoint" },
    { status: 200 }
  );
}
