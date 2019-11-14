import React, { Component } from 'react';
import PinSolo from './PinSolo.js';
//Importing uuid to give unique id to each pin (even when there are repeats from fixed data set)
import uuid from 'uuid';
//Layout Engine
import StackGrid from 'react-stack-grid';

import '../App.css';

class SavedPins extends Component {

  render() {
    let pins;
    console.log('pins...', this.props);
    if(this.props.savedPins.length){
      console.log('pins!', pins);
      pins = this.props.savedPins.map(pin =>{
        pin.uuid = uuid.v4();
        return (
          <span key={pin.uuid}>
            <PinSolo pin={pin} />
          </span >
        )
      })
    }

    return (
      <StackGrid
      columnWidth={250}
      gutterWidth={7}
      gutterHeight={10}
      duration={0}
      >
        {pins}
      </StackGrid>
    );
  }
}

export default SavedPins;
