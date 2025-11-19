import Image from "next/image";
import ab_img_1 from "@/assets/img/about/4/about-thumb-1.jpg";
import ab_img_2 from "@/assets/img/about/4/about-thumb-2.jpg";
import ab_img_3 from "@/assets/img/about/4/about-thumb-3.jpg";
import ab_img_4 from "@/assets/img/about/4/about-thumb-4.jpg";
import UndergraduateArea from "../undergraduate/undergraduate-area";

const thumbs = [
  { id: 1, col_lg: 3, img: ab_img_1, delay: 0.5 },
  { id: 2, col_lg: 4, img: ab_img_2, delay: 0.7 },
  { id: 3, col_lg: 3, img: ab_img_3, delay: 0.9 },
  { id: 4, col_lg: 2, img: ab_img_4, delay: 1 },
];

type IProps = {
  spacing?: string;
};

export default function AboutTwo({ spacing = "pt-115 pb-90" }: IProps) {
  return (
    <section className={`about-area ${spacing} `}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="tp-about-4-wrapper mb-75 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h6 className="fs-5">
                The Senior High School at LFES in Birtamode provides an
                enriching and future-focused education that equips students with
                the knowledge, skills, and values necessary to excel in
                university and beyond. With a balance of academic rigor,
                personal care, and holistic opportunities, our program empowers
                learners to grow into confident, capable, and responsible young
                adults.
              </h6>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          {thumbs.map((thumb) => (
            <div key={thumb.id} className={`col-lg-${thumb.col_lg} col-sm-6`}>
              <div
                className={`tp-about-4-thumb-${thumb.id} mb-30 wow fadeInUp`}
                data-wow-delay={`${thumb.delay}s`}
              >
                <Image
                  src={thumb.img}
                  alt="thumb-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Added Extra Informational Sections */}
        <div className="row pt-30">
          <div className="col-12 wow fadeInUp" data-wow-delay=".4s">
            <h4 className="d-flex align-items-center">
       
              Class Timings
            </h4>
            <p>
              Our regular school hours run from 6:45 AM to 1:00 PM, in line with
              NEB requirements. This structured yet balanced schedule promotes
              discipline, focus, and productivity.
            </p>

            <h4 className="mt-4">Individual Care and Guidance</h4>
            <p>
              At LFES, every student matters. Small class sizes and a supportive
              environment allow teachers to provide personalized
              attention—whether it is academic support, career counseling, or
              nurturing unique talents.
            </p>

            <h4 className="mt-4">Practical Learning and Creativity</h4>
            <p>
              We believe education is most powerful when applied. The world
              today seeks not only learners but also creators. LFES emphasizes
              innovation, critical thinking, and hands-on experiences. Science
              practical classes and project-based learning run throughout the
              year to bridge theory with practice.
            </p>

            <h4 className="mt-4">Experienced and Inspiring Faculty</h4>
            <p>
              Our faculty members are accomplished educators who combine deep
              expertise with genuine care. Beyond teaching, they mentor students
              to develop curiosity, confidence, and the discipline required for
              lifelong learning.
            </p>

            <h4 className="mt-4">Modern Facilities and Weekly Activities</h4>
            <p>
              LFES is proud to offer state-of-the-art science and technology
              labs, advanced computing resources, a swimming pool, and creative
              spaces. To ensure holistic growth, we organize weekly activities
              such as swimming, leadership programs, and skill-development
              workshops. These experiences help students build resilience,
              teamwork, and confidence beyond the classroom.
            </p>
            <h4 className="mt-4">Academic Streams Offered</h4>
            <p>
              Students at LFES Senior High School can choose from two streams
              designed to match their academic interests and career goals:
            </p>
            <UndergraduateArea />

            <h4 className="">Proven Excellence and Discipline</h4>
            <p>
              LFES has a proud history of 100% pass results in National Board
              Examinations, a testament to our commitment to excellence.
              Alongside academics, we emphasize a culture of discipline that
              nurtures responsibility, respect, and focus—qualities that have
              earned LFES the reputation of being the best in town.
            </p>
            <h4 className="mt-4">Preparation for University and Life</h4>
            <p>
              Our comprehensive guidance program assists students in course
              selection, university applications, and career planning. Beyond
              academics, we emphasize life skills such as critical thinking,
              communication, financial literacy, and emotional
              intelligence—preparing graduates to succeed not only in higher
              education but in life. <br />
              Senior High at LFES is more than just a step toward university—it
              is a transformative journey that shapes students into thoughtful
              leaders, innovative thinkers, and responsible global citizens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
