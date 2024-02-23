import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Cart from "./Cart";

const AppBar = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <h2 className="text-primary">
            <span>
              <i className="bi bi-yelp"></i> SVS Pizza Shop
            </span>
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " className="justify-content-end" >
          <Nav className="align-items-start">
            <Nav.Link href="#home" className="fw-bold text-light">
              Home
            </Nav.Link>
            <Nav.Link href="#menu" className="fw-bold text-light">
              Menu
            </Nav.Link>
            <Nav.Link href="#musttry" className="fw-bold text-light">
              Must Try
            </Nav.Link>
            <Nav.Link href="#contact" className="fw-bold text-light">
              Contact us
            </Nav.Link>
            <Cart />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;
