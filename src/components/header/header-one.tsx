import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavMenus from "./navbar/nav-menus";
import logo from "@/assets/img/lfeslogo1.png";

import HeaderTopArea from "./header-top/header-top-area";

import HeaderStickyWrapper from "./header-sticky-provider/header-sticky-wrapper";
import OffcanvasButton from "./button/offcanvas-btn";

export default function HeaderOne() {
  return (
    <>
      <header className="header-area tp-header-transparent p-relative ">
        {/* header top start*/}
        <div>
          <div className="header-top-border d-none d-lg-block" />
          <HeaderTopArea />
          <div />
        </div>

        {/* header top end */}

        <HeaderStickyWrapper>
          <div className="container ">
            <div className="row align-items-center ">
              <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-6 ">
                {/* <div className="tp-header-logo-1 tp-header-logo "> */}
                <div className=" w-0 ">
                  <Link href="/">
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        className="logo-1 "
                        src={logo}
                        alt="logo"
                        priority
                        width={70}
                        height={70}
                        quality={100}
                        style={{
                          objectFit: "contain",
                          width: "auto",
                          height: "auto",
                          maxWidth: "100%",
                          maxHeight: "100%",
                        }}
                      />
                    </div>
                  </Link>
                </div>
              </div>
              {/* </div> */}

              <div className="col-xxl-8 col-xl-8  d-none d-xl-block">
                <div className="main-menu text-end  ">
                  {/* nav menus start */}
                  <NavMenus />
                  {/* nav menus end */}
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-6">
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
