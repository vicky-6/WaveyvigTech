import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import LiveBootCamp from "../pages/LiveBootCamp/LiveBootCamp";

function WaveyvigTechNavbar() {
  const [expanded, setExpanded] = useState(false);
  const [navBackground, setNavBackground] = useState("transparent");
  const location = useLocation();

  const handleClose = () => setExpanded(false);

  // Change navbar background on scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBackground("#1e3a8a"); // solid blue
    } else {
      setNavBackground("transparent"); // transparent initially
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Reset navbar background when route changes
    if (location.pathname !== "/home") {
      setNavBackground("#1e3a8a");
    } else {
      setNavBackground("transparent");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  return (
    <Navbar
      expand="lg"
      variant="dark"
      fixed="top"
      expanded={expanded}
      style={{
        backgroundColor: navBackground,
        transition: "background-color 0.4s ease",
      }}
    >
      <Container>
        <Navbar.Brand className="fw-bold text-white">
          <i className="bi bi-arrow-through-heart"></i> Waveyvig-Tech
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="WaveyvigTech-navbar"
          onClick={() => setExpanded(expanded ? false : true)}
        >
          <i className="bi bi-menu-button-wide"></i>
        </Navbar.Toggle>

        <Navbar.Collapse id="WaveyvigTech-navbar">
          <Nav className="ms-auto text-white gap-2">
            <Nav.Link as={Link} to="/home" className="text-white" onClick={handleClose}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="text-white" onClick={handleClose}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/training" className="text-white" onClick={handleClose}>
              Training
            </Nav.Link>
            <Nav.Link as={Link} to="/careers" className="text-white" onClick={handleClose}>
              Careers
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/classes" className="text-white" onClick={handleClose}>
              Classes
            </Nav.Link> */}
            <Nav.Link as={Link} to="/about" className="text-white" onClick={handleClose}>
              About-Us
            </Nav.Link>
            <LiveBootCamp />
            
            <Button
              as="a"
              href="https://wa.me/918248429488"
              target="_blank"
              rel="noopener noreferrer"
              variant="success"
            >
              Contact us on WhatsApp
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default WaveyvigTechNavbar;
