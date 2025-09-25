import Image from "next/image";
import overview_img_1 from "@/assets/img/course/details/admisson-overview-1.jpg";

export function Message() {
  return (
    <section className="tp-admission-apply-area  pt-100 pb-140">
      <div className="container">
        <div className="row ">
          {/* Left Column: Image */}
          <div className="col-lg-6">
            <div className="image-container">
              <Image
                src={overview_img_1} // Replace with your image path
                alt="Board Directors"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="col-lg-6">
            <div className="text-container">
              <h3 className=" fw-bold text-dark mb-4">Board of Directors</h3>
              <p style={{ textAlign: "justify" }}>
                LITTLE FLOWERS ENGLISH SCHOOL has always been at the forefront
                of education not only in Eastern Nepal but throughout the
                country. Our students have excelled in various fields nationally
                and internationally. This has been made possible with the
                blessings of our elders, visionary members of the school
                managing committee, supportive parents, and dedicated staff.
                Since its inception, LFES has always remained committed to
                providing a kind of education that emphasizes not only gaining
                knowledge but also focuses on the holistic development of
                students. The achievement of the prestigious awards mentioned in
                the pages of our history bear testimony to our commitment to
                high-quality education.
                <br />
                From the academic year 2076, we have implemented the Early Child
                Education and Care (ECEC) curriculum From Nursery to Grade 2
                which will be upgraded till grade 5, remaining within the
                framework of the National Government Curriculum to ensure the
                best education befitting
              </p>

              {/* Director Profile */}

              <div>
                <h5 className="mb-1 fw-semibold text-dark">Rajesh Khadka</h5>
                <p className="mb-0 text-secondary small">Founder / Director</p>
              </div>

              <hr className="w-50 mx-start mt-4" />
            </div>
          </div>
        </div>

        <div className="row pt-100">
          {/* Right Column: Text */}
          <div className="col-lg-6">
            <div className="text-container">
              <h3 className="fw-bold text-dark mb-4">Principle Message</h3>
              <p style={{ textAlign: "justify" }}>
                LITTLE FLOWERS ENGLISH SCHOOL has always been at the forefront
                of education not only in Eastern Nepal but throughout the
                country. Our students have excelled in various fields nationally
                and internationally. This has been made possible with the
                blessings of our elders, visionary members of the school
                managing committee, supportive parents, and dedicated staff.
                Since its inception, LFES has always remained committed to
                providing a kind of education that emphasizes not only gaining
                knowledge but also focuses on the holistic development of
                students. The achievement of the prestigious awards mentioned in
                the pages of our history bear testimony to our commitment to
                high-quality education.
                <br />
                From the academic year 2076, we have implemented the Early Child
                Education and Care (ECEC) curriculum From Nursery to Grade 2
                which will be upgraded till grade 5, remaining within the
                framework of the National Government Curriculum to ensure the
                best education befitting
              </p>

              <div>
                <h5 className="mb-1 fw-semibold text-dark">XYZ</h5>
                <p className="mb-0 text-secondary small">Founder/Principal</p>
              </div>

              <hr className="w-50 mx-start mt-4" />
            </div>
          </div>

          {/* Left Column: Image */}
          <div className="col-lg-6">
            <div className="image-container">
              <Image
                src={overview_img_1}
                alt="Board Directors"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
