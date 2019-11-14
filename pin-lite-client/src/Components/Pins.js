import React, { Component } from 'react';
import PinSolo from './PinSolo.js';
//Importing uuid to give unique id to each pin (even when there are repeats from fixed data set)
import uuid from 'uuid';
//Layout Engine
import StackGrid from 'react-stack-grid';

class Pins extends Component {

  render() {

    let pins;

    if(this.props.newPins.length){
      pins = this.props.newPins.map(pin =>{
        pin.uuid = uuid.v4();
        return <span key={pin.uuid}>
        <PinSolo pin={pin} toSavePin={this.props.toSavePin}/>
        </span >
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

export default Pins;
