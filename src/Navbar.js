import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="HomePage">Album List</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="CataloguePage">Albums</Nav.Link>
          <Nav.Link href="FavoritesPage">Favorites</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;