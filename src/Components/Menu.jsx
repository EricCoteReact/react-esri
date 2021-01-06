import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">ESRI</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink exact tag={RRNavLink} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/counter/7">Counter</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/covid">Covid Cases</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/contacts">Contacts</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;