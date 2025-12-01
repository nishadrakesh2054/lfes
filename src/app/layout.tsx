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
  weight: ["400", "500", "600", "700"], // Reduced weights for better performance
  variable: "--tp-ff-poppins",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = genMeta({
  title: "Home",
  description: siteConfig.description,
  keywords: [
    "LFES",
    "Little Flowers English School",
    "Education Nepal",
    "School Biratnagar",
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
        {/* Resource hints for better performance */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />

        {/* Bootstrap-icons loaded asynchronously via script below */}
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
        {/* Async CSS loader - non-render-blocking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css';
                link.media = 'print';
                link.onload = function() { this.media = 'all'; };
                link.onerror = function() {
                  var fallback = document.createElement('link');
                  fallback.rel = 'stylesheet';
                  fallback.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css';
                  document.head.appendChild(fallback);
                };
                document.head.appendChild(link);
              })();
            `,
          }}
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
