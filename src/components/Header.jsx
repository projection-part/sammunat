import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Sammunat</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Service" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Web Development</NavDropdown.Item>
              <NavDropdown.Item href="/">
                App Development
              </NavDropdown.Item>
              <NavDropdown.Item href="/">Android App Development</NavDropdown.Item>
              <NavDropdown.Item href="/">SEO</NavDropdown.Item>
              <NavDropdown.Item href="/">UI/UX Design</NavDropdown.Item>
              <NavDropdown.Item href="/">Digital marketing</NavDropdown.Item>
              <NavDropdown.Item href="/">Other Services</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">About us</Nav.Link>
            <Nav.Link href="/">Blog</Nav.Link>
            <Nav.Link href="/">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;