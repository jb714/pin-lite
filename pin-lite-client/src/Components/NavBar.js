import React, { Component } from 'react';
import '../App.css';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import pinterestLogo from '../Assets/pinterest-badge-logo.png';


class NavBar extends Component {

  render() {

    return (
      <div className="navbar">
        <div className="logo-title-container">
          <div className="logo-container">
            <img src={pinterestLogo} className="brand-logo" alt="Pinterest Logo"/>
          </div>
          <div className="title">
            <h2>eque&ntilde;o</h2>
          </div>
        </div>
        <h3 className="greeting">Welcome, Justin!</h3>
        <div className="nav-options">
          <h5><a href="/">Home</a></h5>
          <h5><a href="/savedPins">Saved Pins</a></h5>
        </div>

      </div>

    );
  }

}

export default NavBar;
