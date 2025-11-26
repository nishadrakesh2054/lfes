import { NextRequest, NextResponse } from "next/server";
import { writeClient } from "@/sanity/lib/writeClient";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      studentName,
      dateOfBirth,
      gender,
      currentSchool,
      gradeApplied,
      fatherName,
      fatherOccupation,
      fatherContact,
      motherName,
      motherOccupation,
      motherContact,
      correspondenceEmail,
      localAddress,
      heardFrom,
    } = body;

    // Validate required fields
    if (
      !studentName ||
      !dateOfBirth ||
      !gender ||
      !currentSchool ||
      !gradeApplied ||
      !fatherName ||
      !fatherOccupation ||
      !fatherContact ||
      !motherName ||
      !motherOccupation ||
      !motherContact ||
      !correspondenceEmail
    ) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correspondenceEmail)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create admission application in Sanity
    const applicationData = {
      _type: "admissionApplication",
      studentName: studentName.trim(),
      dateOfBirth: dateOfBirth,
      gender: gender,
      currentSchool: currentSchool.trim(),
      gradeApplied: gradeApplied.trim(),
      fatherName: fatherName.trim(),
      fatherOccupation: fatherOccupation.trim(),
      fatherContact: fatherContact.trim(),
      motherName: motherName.trim(),
      motherOccupation: motherOccupation.trim(),
      motherContact: motherContact.trim(),
      correspondenceEmail: correspondenceEmail.trim().toLowerCase(),
      localAddress: localAddress?.trim() || "",
      heardFrom: heardFrom || [],
      submittedAt: new Date().toISOString(),
      status: "new",
    };

    const result = await writeClient.create(applicationData);

    return NextResponse.json(
      {
        success: true,
        message:
          "Your application has been submitted successfully! We will contact you soon.",
        id: result._id,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Error submitting admission application:", error);
    return NextResponse.json(
      {
        error: "Failed to submit application",
        message:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}

// Optional: Add GET method to retrieve applications (with authentication)
export async function GET() {
  return NextResponse.json(
    { message: "Admission API endpoint" },
    { status: 200 }
  );
}
