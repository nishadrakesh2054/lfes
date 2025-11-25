import MainProvider from "@/components/provider/main-provider";
import BackToTop from "@/components/back-to-top";
// import HeaderSeven from "@/components/header/header-seven";
// import HeaderTwo from "@/components/header/header-two";
// import HeaderFour from "@/components/header/header-four";
// import HeaderFive from "@/components/header/header-five";
import HeaderOne from "@/components/header/header-one";
import FooterOne from "@/components/footer/footer-one";

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
    </MainProvider>
  );
}
