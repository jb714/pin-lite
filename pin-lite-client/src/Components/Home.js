import React, { Component } from 'react';
import pinsService from '../Services/pinsService.js';
import Pins from './Pins.js';
import _ from 'underscore';

class Home extends Component {
  constructor(){
    super();

    this.state = {
      newPins: [],
    };

    this.pinsService = new pinsService();
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
  grabPins = () => {
    this.pinsService.getData()
    .then((response) => {

      //Shuffle the array that comes by response
      var pins = this.shufflePins(response.data);
      //If the newPins array is empty, set it explicitly to our new, shuffled array.
      if(!this.state.newPins.length){
        this.setState({newPins: pins})
      }
      //Otherwise, concatenate our new, shuffled array with the array already there
      else {
        this.setState({newPins: this.state.newPins.concat(pins)})
      }
    })
    .catch((err) => {
      console.log('Error:', err);
    })
  }


  //Using Fisher-Yates shuffle to minimize rendering order repeats when dataset array is reloaded
  shufflePins = (array) => {
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
      <div>
        <Pins newPins={this.state.newPins} toSavePin={this.props.toSavePin}/>
      </div>
    );
  }
}

export default Home;
