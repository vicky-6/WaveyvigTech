import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Home() {
  return (
   <section
      style={{
        position: "relative",
        backgroundColor: "#0b1d57", // deep blue background
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
          backgroundImage: "url('/bghero.png')", // your transparent PNG
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
              Transforming Ideas Into <span style={{ color: "#2bbcff" }}>Digital Reality</span>
            </h1>
            <p className="mt-3">
              Zhahi Info Tech specializes in cutting-edge technology solutions and products that
              drive innovation and business growth in the digital era.
            </p>
            <div className="mt-4">
              <Button as={Link} to ='/services' variant="primary" size="lg" className="me-3">
                Explore Services
              </Button>
              <Button as ={Link} to= '/training'
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
          document.getElementById("next-section")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span style={{ display: "block", color: "#2bbcff" }}>Scroll Down</span>
        <span style={{ fontSize: "24px", color: "#2bbcff" }}>▼</span>
      </div>
    </section>

  )
}

export default Home