import { client } from "@/sanity/lib/client";

// GROQ query to fetch all testimonials
export const testimonialsQuery = `*[_type == "testimonial"] | order(_createdAt desc) {
  _id,
  name,
  position,
  content
}`;

// Fetch testimonials
export async function getTestimonials() {
  try {
    const testimonials = await client.fetch(testimonialsQuery);
    return testimonials;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}

// GROQ query to fetch job openings
export const jobOpeningsQuery = `*[_type == "jobOpening" && status == "open"] | order(postedDate desc, _createdAt desc) {
  _id,
  title,
  department,
  employmentType,
  location,
  postedDate,
  description,
  requirements
}`;

export async function getJobOpenings() {
  try {
    const jobs = await client.fetch(jobOpeningsQuery);
    return jobs;
  } catch (error) {
    console.error("Error fetching job openings:", error);
    return [];
  }
}
