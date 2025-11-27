import React from "react";
import { Metadata } from "next";
import ServiceOne from "@/components/service/service-one";
import AboutOne from "@/components/about/about-one";
import EventArea from "@/components/event/event-area";
import TestimonialOne from "@/components/testimonial/testimonial-one";
import ProgramAreaThree from "@/components/program/program-area-three";
import CounterSix from "@/components/counter/counter-six";
import { generateMetadata } from "@/lib/seo";
import FaqArea from "@/components/faq/faq-area";
import VidyaApp from "@/components/Vidya/vidya";
import { getHeroSlides } from "@/lib/sanity-queries";
import HeroAreaOne from "@/components/hero-area/hero-area-one";

export const metadata: Metadata = generateMetadata({
  title: "Home",
  description:
    "Little Flowers English School (LFES) - Premier educational institution in Birtamod, Jhapa, Nepal. Offering quality education from Progressive Wing to Senior High School with world-class facilities.",
  keywords: [
    "LFES",
    "Little Flowers English School",
    "Education Nepal",
    "School Birtamod",
    "Jhapa School",
    "Quality Education",
  ],
});

// Enable ISR - revalidate every 60 seconds
export const revalidate = 60;

export default async function HomePage() {
  // Fetch hero slides server-side for better performance
  const heroSlides = await getHeroSlides();

  return (
    <main>
      {/* hero area start */}
      <HeroAreaOne slides={heroSlides} />
      {/* hero area end */}

      {/* service area start */}
      <ServiceOne />
      {/* service area end */}

      {/* about area start */}
      <AboutOne />
      {/* about area end */}

      {/* counter area start */}
      <CounterSix />
      {/* counter area end */}

      {/* program area start */}
      <ProgramAreaThree />
      {/* program area end */}

      {/* event area start */}
      <EventArea />
      {/* event area end */}

      {/* testimonial area start */}
      <TestimonialOne />
      {/* testimonial area end */}
      <VidyaApp />
      <FaqArea />
    </main>
  );
}
