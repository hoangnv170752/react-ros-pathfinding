import React, { Component } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container fluid>
            <Navbar.Brand href="#home">H&G ROS Robot</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Button href="/" variant="primary" size="sm" className="mr-2" color="dark">Home</Button>
                <Button href="/about" variant="primary" size="sm" color="dark">About</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
  }
}

export default Header;