import React from "react";
import { Metadata } from "next";
import HeroAreaOne from "@/components/hero-area/hero-area-one";
import ServiceOne from "@/components/service/service-one";
import AboutOne from "@/components/about/about-one";
import CounterOne from "@/components/counter/counter-one";
import EventArea from "@/components/event/event-area";
import TestimonialOne from "@/components/testimonial/testimonial-one";
import InstagramArea from "@/components/instagram/instagram-area";
import CtaOne from "@/components/cta/cta-one";
import ProgramAreaThree from "@/components/program/program-area-three";

export const metadata: Metadata = {
  title: "LFES",
};

export default function HomePage() {
  return (
    <main>
      {/* hero area start */}
      <HeroAreaOne />
      {/* hero area end */}

      {/* service area start */}
      <ServiceOne />
      {/* service area end */}

      {/* about area start */}
      <AboutOne />
      {/* about area end */}

      {/* counter area start */}
      <CounterOne />
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

      {/* blog area start */}
      {/* <BlogOne /> */}
      {/* blog area end */}

      {/* instagram area start */}
      <InstagramArea />
      {/* instagram area end */}

      {/* cta area start */}
      <CtaOne />
      {/* cta area end */}
    </main>
  );
}
