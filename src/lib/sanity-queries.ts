import { client } from "@/sanity/lib/client";
import { createClient } from "next-sanity";
import { groq } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";

// Create a client without CDN for real-time gallery updates
const galleryClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disable CDN for real-time updates
});

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
    return [];
  }
}

export async function getAcademicGalleryImages(categories?: string[]) {
  try {
    let query;

    if (categories && categories.length > 0) {
      // Filter by specific categories
      query = groq`*[_type == "academicGalleryImage" && category in $categories] | order(_createdAt desc) {
        _id,
        title,
        category,
        image,
        driveLink,
        _createdAt
      }`;
    } else {
      // Get all images when no categories specified
      query = groq`*[_type == "academicGalleryImage"] | order(_createdAt desc) {
        _id,
        title,
        category,
        image,
        driveLink,
        _createdAt
      }`;
    }

    const params = categories && categories.length > 0 ? { categories } : {};

    // Use galleryClient (without CDN) for real-time updates
    // This ensures newly uploaded images appear immediately
    const images = await galleryClient.fetch(query, params, {
      cache: "no-store", // Always fetch fresh data, no caching
    });

    return Array.isArray(images) ? images : [];
  } catch (error) {
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
  videoUrl,
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
  videoUrl,
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
    return null;
  }
}

// GROQ query to fetch blogs
export const blogsQuery = groq`*[_type == "blog"] | order(publishedAt desc, _createdAt desc) {
  _id,
  title,
  category,
  description,
  publishedAt,
  "image": image.asset->{
    url,
    metadata
  }
}`;

// Fetch blogs by category
export async function getBlogs(category?: string) {
  try {
    const query = category
      ? groq`*[_type == "blog" && category == $category] | order(publishedAt desc, _createdAt desc) {
        _id,
        title,
        category,
        description,
        publishedAt,
        "image": image.asset->{
          url,
          metadata
        }
      }`
      : blogsQuery;

    const params = category ? { category } : {};
    const blogs = await client.fetch(query, params);

    return Array.isArray(blogs) ? blogs : [];
  } catch (error) {
    return [];
  }
}

// GROQ query to fetch hero slides
export const heroSlidesQuery = groq`*[_type == "heroSlide"] | order(order asc, _createdAt asc) {
  _id,
  title,
  subtitle,
  "image": image.asset->{
    url,
    metadata
  }
}`;

export async function getHeroSlides() {
  try {
    const slides = await client.fetch(heroSlidesQuery);
    return Array.isArray(slides) ? slides : [];
  } catch (error) {
    return [];
  }
}

// GROQ query to fetch active popup notice
export const popupNoticeQuery = groq`*[_type == "popupNotice" && isActive == true] | order(_createdAt desc)[0]{
  _id,
  image{
    asset->{
      url,
      metadata
    },
    alt
  }
}`;

// Fetch active popup notice
export async function getActivePopupNotice() {
  try {
    const popup = await client.fetch(popupNoticeQuery);
    return popup;
  } catch (error) {
    return null;
  }
}
