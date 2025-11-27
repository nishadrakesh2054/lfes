import Image from "next/image";

const VidyaApp = () => {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "100px 20px 0 20px",
      }}
    >
      <div className="container">
        <p
          style={{
            fontSize: "48px",
            fontWeight: 600,
            marginBottom: "100px",
            lineHeight: 1.2,
            textAlign: "center",
          }}
        >
          <span style={{ color: "#00b0ff" }}>Vidya</span> App.
        </p>
        <div className="row align-items-center justify-content-center gy-4">
          <div className="col-lg-6 col-md-10 text-center">
            <Image
              src="/assets/img/vidya-app.png"
              alt="Vidya mobile preview"
              width={620}
              height={620}
              priority
              className="img-fluid"
            />
          </div>

          <div className="col-lg-6 col-md-10">
            <p
              style={{
                fontSize: "24px",
                fontWeight: 500,
                marginBottom: "12px",
              }}
            >
              <span style={{ color: "#00b0ff" }}>Download</span> Vidya App on{" "}
              <br />
              <span style={{ color: "#00b0ff" }}>PlayStore & AppStore.</span>
            </p>

            <p
              style={{
                fontSize: "15px",
                color: "#4f4f4f",
                marginBottom: "32px",
              }}
            >
              An education software suite to digitise the student journey.
            </p>

            <div className="row g-3 g-md-4 justify-content-center align-items-center flex-nowrap flex-sm-wrap">
              <div className="col-6 col-sm-6 text-center d-flex flex-column align-items-center">
                <Image
                  src="/assets/img/scan%20andriod.png"
                  alt="Android QR"
                  width={150}
                  height={150}
                  className="img-fluid"
                />
                <div className="mt-3">
                  <Image
                    src="/assets/img/div.genius-btn.png"
                    alt="Download on Google Play"
                    width={150}
                    height={50}
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-6 col-sm-6 text-center d-flex flex-column align-items-center">
                <Image
                  src="/assets/img/app-ios.png"
                  alt="iOS QR"
                  width={150}
                  height={150}
                  className="img-fluid"
                />
                <div className="mt-3">
                  <Image
                    src="/assets/img/appst.png"
                    alt="Download on App Store"
                    width={150}
                    height={50}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VidyaApp;
