import Image from "next/image";
import shape_underline from "@/assets/img/unlerline/brand-2-svg-1.svg";
// brands
import brand_1 from "@/assets/img/partners/kjc.png";
import brand_2 from "@/assets/img/partners/p1.png";
import brand_3 from "@/assets/img/partners/p2.png";
import brand_4 from "@/assets/img/partners/p3.png";
import brand_5 from "@/assets/img/partners/s-1.jpg.png";
import brand_6 from "@/assets/img/partners/s-2.jpg.png";
import brand_7 from "@/assets/img/partners/s-3.jpg.png";
import brand_8 from "@/assets/img/partners/s-4.jpg.png";
import brand_9 from "@/assets/img/partners/s-5.jpg.png";
import brand_10 from "@/assets/img/partners/s-6.jpg.png";

const brands = [
  brand_1,
  brand_2,
  brand_3,
  brand_4,
  brand_5,
  brand_6,
  brand_7,
  brand_8,
  brand_9,
  brand_10 
];

export default function BrandArea() {
  return (
    <section className="brand-area mb-65">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="tp-brand-2-content mb-40">
              <h4 className="tp-brand-2-title">
                Our Academic <br />{" "}
                <span>
                  Partners
                  <Image
                    className="tp-underline-shape-10 wow bounceIn"
                    data-wow-duration="1.5s"
                    data-wow-delay=".4s"
                    src={shape_underline}
                    alt="shape-underline"
                  />
                </span>
              </h4>
              <p>
                We collaborate with leading academic institutions and
                organizations to provide our students with enhanced learning
                opportunities and global exposure.
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tp-brand-2-wrapper">
              {brands.map((brand, index) => (
                <div className="tp-brand-2-item" key={index}>
                  <Image src={brand} alt="brand" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
