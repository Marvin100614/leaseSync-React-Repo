import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css";

export default function Header() {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" className="header-container">
        <Container className="header-custom-container">
          <Navbar.Brand href="home" className="brand-text">Lease<span>Sync</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="menu-toggle" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home">HOME</Nav.Link>
              <Nav.Link href="features">FEATURES</Nav.Link>
              <Nav.Link href="pricing">PRICING</Nav.Link>
              <Nav.Link href="about">ABOUT</Nav.Link>
              <Nav.Link href="contactUs">CONTACT US</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}