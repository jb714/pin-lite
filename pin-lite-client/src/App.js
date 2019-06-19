import React, { Component } from 'react';
import './App.css';

import Home from './Components/Home.js';
import NavBar from './Components/NavBar.js';
import SavedPins from './Components/SavedPins';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
      <div className="app-container">
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/savedPins' component={SavedPins} />
      </div>
      </Router>
    );
  }
}

export default App;
