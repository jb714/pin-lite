import React, { Component } from 'react';
import '../App.css';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import pinterestLogo from '../Assets/pinterest-badge-logo.png';


class NavBar extends Component {

  render() {

    return (
      <Navbar fixedTop className="navbar">

        <Navbar.Brand className="navbar-brand">
          <img src={pinterestLogo} className="brand-logo" alt="Pinterest Logo"/>
        </Navbar.Brand>

        <Nav className="title">
          <h2>eque&ntilde;o</h2>
        </Nav>

        <Nav pullRight>
          <NavItem href="/"><h4>Home</h4></NavItem>
          <NavItem href="/savedPins"><h4>Saved Pins</h4></NavItem>
          <h3>Welcome, User!</h3>
        </Nav>

      </Navbar>

    );
  }

}

export default NavBar;
