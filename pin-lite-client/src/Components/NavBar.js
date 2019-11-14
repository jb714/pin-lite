import React, { Component } from 'react';
import '../App.css';
import pinterestLogo from '../Assets/pinterest-badge-logo.png';


class NavBar extends Component {

  render() {

    return (
      <div className="flex-nav">
        <div className="logo-title-container">
          <div className="logo-container">
            <img src={pinterestLogo} className="brand-logo" alt="Pinterest Logo"/>
          </div>
          <div className="title">
            eque&ntilde;o
          </div>
        </div>
        <div className="greeting">Welcome, Justin!</div>
        <div className="nav-options">
          <a href="/">Home</a>
          <p href="/savedPins">Saved Pins <span className="tiny-text">coming soon!</span></p>
        </div>

      </div>

    );
  }

}

export default NavBar;
