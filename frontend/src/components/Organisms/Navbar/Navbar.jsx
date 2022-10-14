import React from 'react';
import {Image,Navbar, Nav} from 'react-bootstrap';
import './navbar.css';

export const NavbarBrand = ({children}) => {

  return (<>
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <Image src="https://files.toolboxtve.com/wp-content/uploads/2018/03/15145223/logo.png" className="me-4" />
          <span>Node js - React js</span>
        </Navbar.Brand>
        <Nav className="me-auto">
          {children}
        </Nav>
    </Navbar>
  </>)
}
