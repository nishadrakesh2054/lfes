import { Metadata } from "next";

import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import ECAgallery from "@/components/gallery/eca-gallery";

export const metadata: Metadata = {
  title: "ECA - LFES",
};

export default function EcaPage() {
  return (
    <>
      {/* Breadcrumb */}
      <BreadcrumbTwo
        title="Our ECA"
        subtitle="Co-curricular and Extra Curricular Activities"
      />

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-start">
            {/* Text on right */}
            <div className="col-lg-12">
              <div className="tp-program-4-section mb-30 mt-2 ">
                <h3 className="tp-section-4-title">
                  Extra Curricular
                  <span>
                    Activities
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="170"
                      height="12"
                      viewBox="0 0 170 12"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M163.543 11.6881C91.7847 -3.61174 28.9468 5.36254 6.918 11.5745C5.00947 12.1127 2.30014 11.9681 0.866555 11.2516C-0.567032 10.5352 -0.182011 9.51803 1.72652 8.97984C26.0126 2.13138 92.5575 -7.17892 167.812 8.86629C169.887 9.30883 170.614 10.2993 169.435 11.0785C168.257 11.8577 165.618 12.1306 163.543 11.6881Z"
                        fill="#161613"
                      />
                    </svg>
                  </span>
                </h3>
              </div>

              <p
                className="text-muted lh-lg mb-3 "
                style={{ textAlign: "justify" }}
              >
                At our Primary Block, we believe that every child’s journey is
                unique and deserves careful attention. Our approach to teaching
                is holistic—going beyond textbooks to nurture creativity,
                critical thinking, emotional growth, and social skills. We
                create a learning environment where curiosity is celebrated, and
                every lesson is designed to connect with real-life experiences,
                making learning meaningful and enjoyable.
              </p>
              <p
                className="text-muted lh-lg mb-3"
                style={{ textAlign: "justify" }}
              >
                Co-curricular activities are activities that take place outside
                the classroom but reinforce or supplement classroom curriculum
                in some way. They are ungraded and do not offer any form of
                academic credit, but they do provide complementary learning of
                some form. Extracurricular activities are those activities that
                occur outside of the educational setting and do not provide
                instruction or experience to supplement the academic curriculum.
                Involvement in a sport that happens outside of the school, for
                example, would be considered an extracurricular activity. Co-
                curricular and Extracurricular activities expand learning
                abilities by stimulating creative thought, improving social and
                organizational skills, developing interests and talents, and
                offering an opportunity to switch off and do something students
                really enjoy.
              </p>

              {/* <ECAgallery /> */}

              <div className="mb-50 mt-50">
                <ECAgallery />
              </div>

              <p className="text-muted lh-lg" style={{ textAlign: "justify" }}>
                Involvement in such activities has proven to improve academic
                performance, help students explore interests and create broader
                perspectives, generate higher self-esteem, provide social
                opportunities, give students productive breaks and help them
                learn the essential life skills which are the main qualities
                required in students of this age. Here, at ‘LFES’ there are an
                array of activities in that students can participate. In sports,
                there are instructors for football, volleyball, basketball,
                cricket, table tennis, badminton, karate, and tae-kwan-do
                whereas in the field of music and dance students are trained in
                folk, classical & modern dance, vocal, guitar, keyboard,
                pianica, harmonium, flute, beat instruments (Drum, duki table,
                congo & madal). Fine art is another field provided. On the
                co-curricular side, debates, quiz competitions (general as well
                as science & technology), extempore, Kavita Bachan, essay
                writing, handwriting & spelling have been included.
              </p>

              <p className="text-muted lh-lg" style={{ textAlign: "justify" }}>
                We also understand how important it is for parents to be part of
                this journey. That is why we make it a priority to keep parents
                informed about even the smallest details of their child’s
                progress. From academic achievements to personal growth, every
                step is communicated thoughtfully, ensuring that families feel
                connected, reassured, and engaged in their child’s education.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
