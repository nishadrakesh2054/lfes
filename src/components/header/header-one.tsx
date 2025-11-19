import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavMenus from "./navbar/nav-menus";
// import logo from "@/assets/img/logo/logo.png";
import logo from "@/assets/img/bglogo2.png";

import HeaderTopArea from "./header-top/header-top-area";
// import logo_black from "@/assets/img/logo/logo-black-1.png";
import logo_black from "@/assets/img/bglogo2.png";

import HeaderStickyWrapper from "./header-sticky-provider/header-sticky-wrapper";
import OffcanvasButton from "./button/offcanvas-btn";

export default function HeaderOne() {
  return (
    <>
      <header className="header-area tp-header-transparent p-relative">
        {/* header top start*/}
        <div>
          <div className="header-top-border d-none d-lg-block" />
          <HeaderTopArea />
          <div />
        </div>

        {/* header top end */}

        <HeaderStickyWrapper>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-6 ">
                {/* <div className="tp-header-logo-1 tp-header-logo "> */}
                <div className=" w-0 ">
                  <Link href="/">
                    <Image
                      className="logo-1 "
                      src={logo}
                      alt="logo"
                      priority
                      width={80}
                      height={80}
                    />
                    <Image
                      className="logo-2 d-none"
                      src={logo_black}
                      alt="logo"
                      priority
                      width={80}
                      height={80}
                    />
                  </Link>
                </div>
              </div>
              {/* </div> */}

              <div className="col-xxl-8 col-xl-7  d-none d-xl-block">
                <div className="main-menu text-end  ">
                  {/* nav menus start */}
                  <NavMenus />
                  {/* nav menus end */}
                </div>
              </div>
              <div className="col-xxl-2 col-xl-3 col-lg-6 col-md-6 col-6">
                <div className="tp-header-contact d-flex align-items-center justify-content-end">
                  <div className="tp-header-bar d-xl-none ml-30">
                    <OffcanvasButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeaderStickyWrapper>
      </header>

      {/* mobile offcanvas */}
      <div id="offcanvas-sidebar" />
      {/* mobile offcanvas */}
    </>
  );
}
