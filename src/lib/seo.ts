import { Metadata } from "next";

export const siteConfig = {
  name: "Little Flowers English School (LFES)",
  shortName: "LFES",
  description:
    "Little Flowers English School (LFES) - A premier educational institution in Birtamod, Jhapa, Nepal. Offering quality education from Progressive Wing to Senior High School with world-class facilities and dedicated educators.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://lfes.edu.np",
  ogImage: "/assets/img/lfeslogo1.png",
  contact: {
    email: "info@lfes.edu.np",
    phone: "+977 023-530172",
    address: "Birtamod, Jhapa, Nepal",
  },
  social: {
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
  },
};

export function generateMetadata({
  title,
  description,
  keywords,
  image,
  path = "",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.shortName}`
    : `${siteConfig.name} - Quality Education in Nepal`;
  const metaDescription = description || siteConfig.description;
  const metaKeywords =
    keywords?.join(", ") ||
    "LFES, Little Flowers English School, Education Nepal, School Birtamod, Jhapa School, Quality Education, Progressive Education, Primary School, Middle School, High School, Senior High School";
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || `${siteConfig.url}${siteConfig.ogImage}`;

  return {
    title: fullTitle,
    description: metaDescription,
    keywords: metaKeywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: noIndex ? "noindex, nofollow" : "index, follow",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: url,
      siteName: siteConfig.name,
      title: fullTitle,
      description: metaDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDescription,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
    verification: {
      // Add Google Search Console verification code here when available
      // google: "your-verification-code",
    },
  };
}

export function generateStructuredData(
  type: "Organization" | "School" | "WebSite" | "BreadcrumbList",
  data?: { items: unknown[] }
) {
  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.ogImage}`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "Customer Service",
      email: siteConfig.contact.email,
      areaServed: "NP",
      availableLanguage: ["en", "ne"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Birtamod",
      addressRegion: "Jhapa",
      addressCountry: "NP",
    },
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
  };

  const schoolSchema = {
    "@context": "https://schema.org",
    "@type": "School",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.ogImage}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Birtamod",
      addressLocality: "Birtamod",
      addressRegion: "Jhapa",
      postalCode: "",
      addressCountry: "NP",
    },
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    description: siteConfig.description,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  switch (type) {
    case "Organization":
      return baseOrganization;
    case "School":
      return schoolSchema;
    case "WebSite":
      return websiteSchema;
    case "BreadcrumbList":
      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: data?.items || [],
      };
    default:
      return baseOrganization;
  }
}
