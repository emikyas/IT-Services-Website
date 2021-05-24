import React from 'react';
import {
    Navbar,
    Nav,
} from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#our-services">Our Services</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#resources">Resources</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
  };
 
export default NavBar;