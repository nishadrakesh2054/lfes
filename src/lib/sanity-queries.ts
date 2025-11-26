import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

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

const galleryImagesQuery = groq`*[_type == "galleryImage"] | order(_createdAt desc) {
  _id,
  title,
  category,
  image,
  driveLink,
  _createdAt
}`;

export async function getGalleryImages() {
  try {
    const images = await client.fetch(galleryImagesQuery);
    return images;
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return [];
  }
}

const academicGalleryQuery = groq`*[_type == "academicGalleryImage" && (!defined($categories) || category in $categories)] | order(_createdAt desc) {
  _id,
  title,
  category,
  image,
  driveLink,
  _createdAt
}`;

export async function getAcademicGalleryImages(categories?: string[]) {
  try {
    const list = categories && categories.length > 0 ? categories : undefined;
    const images = await client.fetch(academicGalleryQuery, {
      categories: list,
    });
    return images;
  } catch (error) {
    console.error("Error fetching academic gallery images:", error);
    return [];
  }
}

// GROQ query to fetch events and notices
export const eventNoticesQuery = groq`*[_type == "eventNotice"] | order(date desc, _createdAt desc) {
  _id,
  title,
  date,
  description,
  category,
  "image": image.asset->{
    url,
    metadata
  }
}`;

// Fetch events and notices by category
export async function getEventNotices(category?: "event" | "notice") {
  try {
    const query = category
      ? groq`*[_type == "eventNotice" && category == $category] | order(date desc, _createdAt desc) {
        _id,
        title,
        date,
        description,
        category,
        "image": image.asset->{
          url,
          metadata
        }
      }`
      : eventNoticesQuery;

    const items = await client.fetch(query, category ? { category } : {});
    return items;
  } catch (error) {
    console.error("Error fetching events and notices:", error);
    return [];
  }
}

// GROQ query to fetch a single event/notice by ID
export const eventNoticeByIdQuery = groq`*[_type == "eventNotice" && _id == $id][0]{
  _id,
  title,
  date,
  description,
  category,
  "image": image.asset->{
    url,
    metadata
  }
}`;

// Fetch a single event/notice by ID
export async function getEventNoticeById(id: string) {
  try {
    const item = await client.fetch(eventNoticeByIdQuery, { id });
    return item;
  } catch (error) {
    console.error(`Error fetching event/notice with ID ${id}:`, error);
    return null;
  }
}
