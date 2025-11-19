import { Metadata } from "next";
import Image from "next/image";
import { Container, Row, Col, Card } from "react-bootstrap";

import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";

export const metadata: Metadata = {
  title: "Gallery - Lfes",
};

export default function GalleryPage() {
  const baseImages = [
    // Primary School 2025 (3 images)
    "/assets/img/eca/a.jpg",
    "/assets/img/eca/c.jpg",
    "/assets/img/eca/d.jpg",
  ];
  const images = [
    ...baseImages,
    ...baseImages,
    ...baseImages,
    ...baseImages,
  ].sort(() => Math.random() - 0.5);

  return (
    <main>
      <BreadcrumbTwo title="Gallery" subtitle="Our Moments & Memories" />

      <Container className="my-4">
        <Row>
          <Col lg={9}>
            <Row>
              {images.map((image, index) => (
                <Col md={6} lg={4} key={index} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm">
                    <Image
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      width={200}
                      height={200}
                      className="gallery-img w-100"
                      style={{
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      }}
                      priority={index < 6}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          <Col lg={3}>
            <div className="ps-lg-3">
              <div className="mb-4">
                <h6 className="fw-bold text-primary mb-3">
                  Progressive wing School
                </h6>
                <div className="ps-3">
                  <div className="mb-2">
                    <a href="#" className="text-decoration-none text-muted">
                      2025
                    </a>
                  </div>
                  <div className="mb-2">
                    <a href="#" className="text-decoration-none text-muted">
                      2024
                    </a>
                  </div>
                  <div className="mb-2">
                    <a href="#" className="text-decoration-none text-muted">
                      2023
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h6 className="fw-bold text-primary mb-3">Primary School</h6>
                <div className="ps-3">
                  <div className="mb-2">
                    <a href="#" className="text-decoration-none text-muted">
                      2025
                    </a>
                  </div>
                  <div className="mb-2">
                    <a href="#" className="text-decoration-none text-muted">
                      2024
                    </a>
                  </div>
                  <div className="mb-2">
                    <a href="#" className="text-decoration-none text-muted">
                      2023
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h6 className="fw-bold text-primary mb-3">Middle School</h6>
                <div className="ps-3">
                  <div className="mb-2">
                    <a href="#" className="text-decoration-none text-muted">
                      2025
                    </a>
                  </div>
                  <div className="mb-2">
                    <a href="#" className="text-decoration-none text-muted">
                      2024
                    </a>
                  </div>
                  <div className="mb-2">
                    <a href="#" className="text-decoration-none text-muted">
                      2023
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h6 className="fw-bold text-primary mb-3">Secondary School</h6>
                <div className="ps-3">
                  <div className="mb-2">
                    <a href="#" className="text-decoration-none text-muted">
                      2025
                    </a>
                  </div>
                  <div className="mb-2">
                    <a href="#" className="text-decoration-none text-muted">
                      2024
                    </a>
                  </div>
                  <div className="mb-2">
                    <a href="#" className="text-decoration-none text-muted">
                      2023
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
