import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import servicesData from "../data/servicesData";
import solutions from "../data/solutionData";
import WhyChoose from "./Home/WhyChoose";
import Services from "./Services";
import OurSolution from "./Home/OurSolution";

function Home() {
  // show 1st, 3rd, and 7th service objects
  const featuredServices = [servicesData[0], servicesData[2], servicesData[6]];

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          backgroundColor: "#0b1d57", // deep blue
          color: "white",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Transparent background image overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/heroAi2.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.7,
            zIndex: 0,
          }}
        ></div>

        <Container style={{ position: "relative", zIndex: 1 }}>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <h1 className="fw-bold display-4">
                Shaping Your Vision Into{" "}
                <span className="fw-bold" style={{ color: "#2bbcff" }}>Digital Solutions</span>
              </h1>
              <p className="mt-3">
                At WaveyVigTech, from concept to execution, we craft digital realities that move businesses forward.
              </p>
              <div className="mt-4">
                <Button
                  as={Link}
                  to="/services"
                  variant="primary"
                  size="lg"
                  className="me-3"
                >
                  Explore Services
                </Button>
                <Button
                  as={Link}
                  to="/training"
                  variant="outline-info"
                  size="lg"
                >
                  Training & Career
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Scroll down indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            cursor: "pointer",
          }}
          onClick={() =>
            document
              .getElementById("services-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span style={{ display: "block", color: "#2bbcff" }}>
            Scroll Down
          </span>
          <span style={{ fontSize: "24px", color: "#2bbcff" }}>▼</span>
        </div>
      </section>

          {/* Our solution */}
      <section style={{ backgroundColor: "#1a1a4b", padding: "60px 0" }}>
        <Container>
          <h2 className="text-center mb-5" style={{ color: "#00bcd4" }}>
            Our Solution
          </h2>
          <Row>
            {solutions.map((solution) => (
              <Col lg={3} md={6} sm={12} key={solution.id} className="mb-4">
                <Card className="h-100 shadow-sm rounded text-center">
                  <Card.Body>
                    <div
                      style={{
                        fontSize: "2rem",
                        color: "#00bcd4",
                        marginBottom: "15px",
                      }}
                    >
                      {solution.icon}
                    </div>
                    <Card.Title>{solution.title}</Card.Title>
                    <Card.Text>{solution.description}</Card.Text>
                    <Link to={solution.link} style={{ color: "#00bcd4" }}>
                      →
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <OurSolution/>

      {/* Our Services Section */}
      <section
        id="services-section"
        style={{ backgroundColor: "#1a1a4b", padding: "50px 0" }}
      >
        <Container>
          <h2 className="text-center mb-5" style={{ color: "#00bcd4" }}>
            Our Services
          </h2>
          <Row>
            {featuredServices.map((service) => (
              <Col lg={4} md={6} sm={12} key={service.id} className="mb-4">
                <Card className="h-100 shadow-sm rounded">
                  <Card.Body>
                    <div
                      style={{
                        fontSize: "2rem",
                        color: "#00bcd4",
                        marginBottom: "15px",
                      }}
                    >
                      {service.icon}
                    </div>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                    <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                      {service.points.map((point, index) => (
                        <li
                          key={index}
                          style={{ color: "#00bcd4", marginBottom: "5px" }}
                        >
                          » {point}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-4">
            <Button
              as={Link}
              to="/services"
              variant="info"
              style={{ color: "#fff" }}
            >
              More of Our Services →
            </Button>
          </div>
        </Container>
      </section>

      {/* <Services /> */}

      {/* why choose section */}
    <WhyChoose></WhyChoose>
    </div>
  );
}

export default Home;
