import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useDictionary } from "../context/DictionaryContext";
import { Link } from "react-router-dom";

const AppBar: React.FC = () => {
  const { dictionary, loading } = useDictionary();

  return (
    <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" className="main-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          {loading ? "Loading..." : `${dictionary?.firstName} ${dictionary?.lastName}` || "Portfolio"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
          <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;
