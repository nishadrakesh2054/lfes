import React from "react";
import HeaderOne from "@/components/header/header-one";
import FooterOne from "@/components/footer/footer-one";
import BackToTop from "@/components/back-to-top";
import MainProvider from "@/components/provider/main-provider";
import PopupNoticeWrapper from "@/components/popup/popup-notice-wrapper";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainProvider>
      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      {/* main content */}
      {children}
      {/* main content */}

      {/* footer area start */}
      <FooterOne />
      {/* footer area end */}

      {/* back to top */}
      <BackToTop />
      {/* back to top */}

      {/* popup notice */}
      <PopupNoticeWrapper />
      {/* popup notice */}
    </MainProvider>
  );
}
