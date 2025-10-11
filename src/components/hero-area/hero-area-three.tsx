import Image from "next/image";
import banner_thumb from "@/assets/img/hero/hero-3/banner-3-thumb-1.png";
import a_letter from "@/assets/img/hero/hero-3/a-letter.png";
import b_letter from "@/assets/img/hero/hero-3/b-letter.png";
import c_letter from "@/assets/img/hero/hero-3/c-letter.png";
import banner_shape_3 from "@/assets/img/hero/hero-3/banner-3-shape-3.png";

export default function HeroAreaThree() {
  return (
    <section
      className=""
      style={{ backgroundImage: `url(/assets/img/bg/banner-3-bg-1.png)` }}
    >
      <div className="tp-hero-3-shape-4">
        <Image src={banner_shape_3} alt="banner-shape" />
      </div>
      <div className="container">
        <div className="row align-items-start pt-80 pb-80">
          <div className="col-lg-8 ">
            <div
              className="tp-hero-3-content p-relative mb-45 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div
                className="tp-about-tutor-content"
                style={{ textAlign: "justify" }}
              >
                <p>
                  The academic program of the LFES Progressive Wing has been
                  modified to better equip students for life beyond the exam.
                  Our dynamic classrooms are intentionally designed to serve as
                  hubs of inquiry and creativity, where student choice and
                  contribution are vital in directing the learning process. Each
                  class is designed to be highly relevant, cooperative, and
                  captivating by carefully combining a strong and complex
                  curriculum with actual, real-world challenges. Beyond merely
                  teaching, our teachers are skilled mentors and facilitators
                  who support students in growing their critical thinking,
                  creative inquiry, and confident idea connections. This
                  supportive and student-centered atmosphere cultivates a
                  culture of resiliency and intellectual curiosity.
                </p>
                <br />
                <p>
                  Ultimately, this comprehensive approach fosters a solid and
                  lifelong enthusiasm for education that extends beyond the
                  classroom boundaries. We are committed to developing students
                  who can lead and thrive in a complex society by being not only
                  intellectually gifted but also kind, moral, and compassionate
                  individuals.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 ">
            <div
              className="tp-hero-3-thumb mb-45 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <Image
                src={banner_thumb}
                alt="banner-thumb"
                style={{ height: "auto" }}
              />
              <div className="tp-hero-3-shape">
                <div className="tp-hero-3-shape-1">
                  <Image src={a_letter} alt="a-letter" />
                </div>
                <div className="tp-hero-3-shape-2">
                  <Image src={b_letter} alt="b-letter" />
                </div>
                <div className="tp-hero-3-shape-3">
                  <Image src={c_letter} alt="c-letter" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
