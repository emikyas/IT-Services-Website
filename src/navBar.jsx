import React from 'react';
import { Link, NavLink } from "react-router-dom";
import {
    Navbar,
    Nav,
} from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar className="px-3 sticky-top" bg="light" expand="lg">
        <Link className="navbar-brand" to="/">Logo</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <NavLink className="nav-link" to="/home">Home</NavLink>
            <NavLink className="nav-link" to="/our-services">Our Services</NavLink>
            <NavLink className="nav-link" to="/about-us">About Us</NavLink>
            <NavLink className="nav-link" to="/resources">Resources</NavLink>
            <NavLink className="nav-link" to="/blog">Blog</NavLink>
            <NavLink className="nav-link" to="/contact-us">Contact Us</NavLink>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
  };
 
export default NavBar;