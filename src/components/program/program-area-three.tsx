import { NextArrowTwo, PrevArrowTwo } from "../svg";
import ProgramSliderTwo from "./slider/program-slider-2";

export default function ProgramAreaThree() {
  return (
    <section className="program-area pb-120 grey-bg pt-80 bg-white">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-8">
            <div className="tp-program-4-section mb-60">
              <span className="tp-section-subtitle">LEARN AT YOUR PACE</span>
              <h3 className="tp-section-4-title">
                Academic{" "}
                <span>
                  Programs
                 
                </span>
              </h3>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tp-program-4-arrow text-start text-lg-end mb-60">
              <div className="tp-program-4-prev pointer">
                <span>
                  <PrevArrowTwo />
                </span>
              </div>
              <div className="tp-program-4-next pointer">
                <span>
                  <NextArrowTwo />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* program slider */}
      <ProgramSliderTwo />
      {/* program slider */}
    </section>
  );
}
