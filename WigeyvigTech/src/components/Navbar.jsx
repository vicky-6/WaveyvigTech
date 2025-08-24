import React, { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";

function WigeyvigTechNavbar() {
  const [expanded, setExpanded] = useState(false);

  const handleClose = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      variant="dark"
      fixed="top"
      expanded={expanded}
      style={{ backgroundColor: "#1e3a8a" }}
    >
      <Container>
        <Navbar.Brand className="fw-bold" style={{ color: "white" }}>
          <i className="bi bi-arrow-through-heart"></i> WigeyVig-Tech
        </Navbar.Brand>

        {/* Toggle button */}
        <Navbar.Toggle
          aria-controls="wigeyvig-navbar"
          onClick={() => setExpanded(expanded ? false : true)}
        >
          <i className="bi bi-menu-button-wide"></i>
        </Navbar.Toggle>

        {/* Collapsible menu */}
        <Navbar.Collapse id="wigeyvig-navbar" >
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
            <Nav.Link as={Link} to="/classes" className="text-white" onClick={handleClose}>
              Classes
            </Nav.Link>
            <Button onClick={handleClose}>Contact-us</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default WigeyvigTechNavbar;
