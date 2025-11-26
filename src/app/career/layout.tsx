import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import MainProvider from "@/components/provider/main-provider";
import BackToTop from "@/components/back-to-top";
import FooterOne from "@/components/footer/footer-one";
import HeaderOne from "@/components/header/header-one";

export const metadata: Metadata = generateMetadata({
  title: "Career Opportunities",
  description:
    "Join the Little Flowers English School (LFES) team. Explore teaching positions, administrative roles, and career opportunities in education at our school in Birtamod, Jhapa, Nepal.",
  keywords: [
    "LFES Careers",
    "Teaching Jobs",
    "School Employment",
    "Education Careers",
    "Job Opportunities",
  ],
  path: "/career",
});

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainProvider>
      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      {/* main content */}
      {children}
      {/* main content */}

      {/* footer area start */}
      <FooterOne />
      {/* footer area end */}

      {/* back to top */}
      <BackToTop />
      {/* back to top */}
    </MainProvider>
  );
}
