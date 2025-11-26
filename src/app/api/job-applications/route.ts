import { NextRequest, NextResponse } from "next/server";
import { Buffer } from "node:buffer";
import { writeClient } from "@/sanity/lib/writeClient";

export const runtime = "nodejs";

function validateEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim().toLowerCase();
    const phone = formData.get("phone")?.toString().trim();
    const position = formData.get("position")?.toString().trim();
    const coverLetter = formData.get("coverLetter")?.toString().trim();
    const source = formData.get("source")?.toString() || "career_page";
    const resumeFile = formData.get("resume");

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email and phone are required" },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    let resumeField;
    if (resumeFile instanceof File && resumeFile.size > 0) {
      if (resumeFile.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          { error: "Resume size should be less than 5MB" },
          { status: 400 }
        );
      }

      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (resumeFile.type && !allowedTypes.includes(resumeFile.type)) {
        return NextResponse.json(
          { error: "Only PDF, DOC and DOCX files are allowed" },
          { status: 400 }
        );
      }

      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      const asset = await writeClient.assets.upload("file", buffer, {
        filename: resumeFile.name,
        contentType: resumeFile.type || "application/octet-stream",
      });

      resumeField = {
        _type: "file",
        asset: {
          _type: "reference",
          _ref: asset._id,
        },
      };
    }

    const result = await writeClient.create({
      _type: "jobApplication",
      name,
      email,
      phone,
      positionOfInterest: position || "General Application",
      coverLetter: coverLetter || "",
      resume: resumeField,
      source,
      submittedAt: new Date().toISOString(),
      status: "new",
    });

    return NextResponse.json(
      {
        success: true,
        id: result._id,
        message: "Thank you for applying! We will get back to you soon.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting job application:", error);
    return NextResponse.json(
      {
        error: "Failed to submit application",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
