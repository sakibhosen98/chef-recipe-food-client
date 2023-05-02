import React from 'react';
import './Navigation.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home" className='fs-2 fw-semibold '>Chef <span className='nav-title'>Recipe</span> Food</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/" className='text-decoration-none me-3'>Home</Link>
            <Link to="/blog" className='text-decoration-none me-3'>Blog</Link>
            <Link to="/login" className='text-decoration-none me-3'>Login</Link>
            <Link to="/signup" className='text-decoration-none'>Sign Up</Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Profile </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default NavigationBar;