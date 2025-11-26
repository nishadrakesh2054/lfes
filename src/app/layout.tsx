import type { Metadata } from "next";
import "./globals.scss";
import { Poppins } from "next/font/google";
import {
  generateMetadata as genMeta,
  generateStructuredData,
  siteConfig,
} from "@/lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--tp-ff-poppins",
  display: "swap",
});

export const metadata: Metadata = genMeta({
  title: "Home",
  description: siteConfig.description,
  keywords: [
    "LFES",
    "Little Flowers English School",
    "Education Nepal",
    "School Birtamod",
    "Jhapa School",
    "Quality Education",
    "Progressive Education",
    "Primary School Nepal",
    "Middle School Nepal",
    "High School Nepal",
    "Senior High School Nepal",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateStructuredData("Organization");
  const schoolSchema = generateStructuredData("School");
  const websiteSchema = generateStructuredData("WebSite");

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css"
        />
        <link rel="icon" href="/assets/img/lfesicon2.png" />
        <link rel="apple-touch-icon" href="/assets/img/lfesicon2.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={poppins.variable}
        style={{ fontFamily: "var(--tp-ff-poppins), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
