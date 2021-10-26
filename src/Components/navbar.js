import React from "react";
import { Navbar , Nav } from "react-bootstrap";
export default function Navbarr () {
    return(
        <div className="navbarrr">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Movies and Chill</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">TV-Shows</Nav.Link>
      <Nav.Link href="#pricing">Movies</Nav.Link>
      <Nav.Link href="#pricing">Recently Added</Nav.Link>
      <Nav.Link href="#pricing">My List</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets"><i class="far fa-bell"></i>
</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      <i class="fas fa-user"></i>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
        );
}