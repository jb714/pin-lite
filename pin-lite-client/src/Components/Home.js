import React, { Component } from 'react';
import pinsService from '../Services/pinsService.js';
import Pins from './Pins.js';
import _ from 'underscore';
// import './App.css';

class Home extends Component {
  constructor(){
    super();

    this.state = {
      newPins: [],
      savedPins: []
    };

    this.pinsService = new pinsService();
    this.grabPins = this.grabPins.bind(this);
    this.shufflePins = this.shufflePins.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount(){
    //Initialize app with Pins
    this.grabPins();
    //Event listener to fire off infinite scrolling
    window.addEventListener('scroll', _.throttle(this.onScroll,100), false);
  }

  //Infinite scrolling function
  onScroll = () => {
    if((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 2000) && this.state.newPins.length){
      this.grabPins();
    }
  }

  //Function that makes use of  'pinsService' to makeAjax call to our dataset endpoint
  grabPins(){

    this.pinsService.getData()
    .then((response) => {

      //Shuffle the array that comes by response
      var pins = this.shufflePins(response.data);
      //If the newPins array is empty, set it explicitly to our new, shuffled array.
      if(!this.state.newPins.length){
        this.setState({newPins: pins}, () => {
          console.log(this.state.newPins.length);
        })
      }
      //Otherwise, concatenate our new, shuffled array with the array already there
      else {
        this.setState({newPins: this.state.newPins.concat(pins)}, () => {
          console.log(this.state.newPins.length);
        })
      }
    })

  }


  //Using Fisher-Yates shuffle to minimize rendering order repeats when dataset array is reloaded
  shufflePins(array){
    var copy = array.slice();
    var i = 0, j = 0, temp = null;
    for(i=copy.length -1; i > 0; i-=1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = copy[i];
      copy[i] = copy[j]
      copy[j] = temp
    }
    return copy;
  }


  render() {
    return (
      <div className="Home">
        <Pins newPins={this.state.newPins}/>
      </div>
    );
  }
}

export default Home;
