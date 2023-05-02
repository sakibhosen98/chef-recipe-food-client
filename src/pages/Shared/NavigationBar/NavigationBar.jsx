import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home" className='fs-2 fw-semibold '>Chef Recipe Food</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/" className='text-decoration-none me-3'>Home</Link>
            <Link to="/blog" className='text-decoration-none'>Blog</Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Profile </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Button>Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default NavigationBar;