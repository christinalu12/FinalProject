import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar class='navbar' className='grid'>
      <Navbar.Brand className='homelink' href="HomePage">Album List</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link className='navlink' href="CataloguePage">Albums</Nav.Link>
          <Nav.Link className='navlink' href="ContactUs">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;