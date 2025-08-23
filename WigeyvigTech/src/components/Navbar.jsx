import React from 'react';
import {Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";


function WigeyvigTechNavbar() {
  return (
    <Navbar expand='lg' variant="dark"  style={{backgroundColor:"#1e3a8a" }}>
        <Container>
            <NavbarBrand className='fw-bold' style={{color:'white'}}><i className="bi bi-arrow-through-heart"></i> WigeyVig-Tech</NavbarBrand>
            <NavbarToggle><i className="bi bi-menu-button-wide"></i>
            </NavbarToggle>
            <NavbarCollapse>
                <Nav className='ms-auto gap-2' style={{color:'white'}}>
                    <Nav.Link as = {Link} to ='/home'>Home</Nav.Link>
                    <Nav.Link as ={Link} to = '/services'>Services</Nav.Link>
                    <Nav.Link as ={Link} to = '/careers'>Careers</Nav.Link>
                    <Nav.Link as = {Link} to='/classes' >Classes</Nav.Link>
                    <Button>Contact-us</Button>
                </Nav>
            </NavbarCollapse>
        </Container>

    </Navbar>
  )
}

export default WigeyvigTechNavbar;