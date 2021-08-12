import React from 'react';
import {
  Navbar, Nav,
} from 'react-bootstrap';

const AppNavbar = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Fin-catalog.kz</Navbar.Brand>
    <Navbar.Collapse id="basic-Navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/about">О проекте</Nav.Link>
        <Nav.Link href="/deposits">Депозиты</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default AppNavbar;
