import React, { Component } from 'react';
import './App.css';

import Home from './Components/Home.js';
import NavBar from './Components/NavBar.js';
import SavedPins from './Components/SavedPins';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  constructor() {
    super();
    this.state = {
      savedPins: []
    }
  }

  toSavePin = (pin) => {
    this.setState(prevState => ({
      savedPins: [...prevState.savedPins, pin]
    }), () => {console.log('saved pins!', this.state.savedPins)})
  }

  render() {
    return (
      <Router>
      <div className="app-container">
        <NavBar />
        <Route
          exact path='/'
          render={ (props)=> <Home toSavePin={this.toSavePin}/> }
          />
        <Route
          exact path='/savedPins'
          render={ (props)=> <SavedPins savedPins={this.state.savedPins}/> }
          />
      </div>
      </Router>
    );
  }
}

//render={()=>{<Home toSavePins={this.toSavePins}/>}}

export default App;
