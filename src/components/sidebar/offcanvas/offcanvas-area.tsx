import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/img/bglogo2.png";
import {
  CloseThreeSvg,
  FbSvg,
  InstagramSvg,
  YoutubeTwoSvg,
} from "@/components/svg";
import OffcanvasMenu from "./offcanvas-menu";
// import OffcanvasMenuTwo from "./offcanvas-menu-2";

type IProps = {
  openOffCanvas: boolean;
  onHandleOffCanvas: () => void;
  offcanvas_cls?: string;
  offcanvas_menu_2?: boolean;
};
export default function OffcanvasArea({
  openOffCanvas,
  onHandleOffCanvas,
  offcanvas_cls,
  offcanvas_menu_2,
}: IProps) {
  return (
    <>
      <div
        className={`offcanvas__area ${offcanvas_cls} ${
          openOffCanvas ? "offcanvas-opened" : ""
        }`}
      >
        <div className="offcanvas__wrapper">
          <div className="offcanvas__close">
            <button
              onClick={onHandleOffCanvas}
              className="offcanvas__close-btn offcanvas-close-btn"
            >
              <CloseThreeSvg />
            </button>
          </div>
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-90 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo tp-header-logo w-0">
                <Link href="/">
                  <Image src={logo} alt="logo" height={100} width={100} />
                </Link>
              </div>
            </div>
            <div className="offcanvas-main">
              {/* mobile menu */}
              {offcanvas_menu_2 ? <OffcanvasMenu /> : <OffcanvasMenu />}
              {/* mobile menu */}

              <div className="offcanvas-contact"></div>
              <div className="offcanvas-social">
                <h3 className="offcanvas-title sm">Follow Us</h3>
                <ul>
                  <li>
                    <a href="#">
                      <FbSvg />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <InstagramSvg />
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <YoutubeTwoSvg />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body Overlay */}
      <div
        onClick={onHandleOffCanvas}
        className={`body-overlay ${openOffCanvas ? "opened" : ""}`}
      />
      {/* Body Overlay */}
    </>
  );
}
