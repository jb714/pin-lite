import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../App.css';

class PinSolo extends Component {

constructor(props){
  super(props);

  //Modal specific state. Modal closed "open: false" by default
  this.state = {
    open: false
  };
}

    closeModal = () => {
      this.setState({ open: false});
    }

    openModal = () => {
      this.setState({ open: true});
    }

    saveThisPin = () => {
      this.props.toSavePin(this.props.pin);
    }

  render() {
    const pin = this.props.pin;
    const ImageUrl = pin.images["236x"].url;
    const ImageDescription = pin.description;
    const Pinner = pin.pinner.full_name;
    const Title = pin.title;

    return (
      <div className="pin-solo">
        <img src={ImageUrl} className="card-image" alt="Pin visual"/>
        <div className="image-overlay">

          <Button className="save-button" onClick={this.saveThisPin}>Save Pin</Button>
          <Button className="modal-button" onClick={this.openModal}>Enlarge</Button>
        </div>

        <Modal show={this.state.open} onHide={this.closeModal} animation={false}>
          <Modal.Header closeButton>
            <h3>{Title}</h3>
            <div><img src={ImageUrl} className="card-image" alt="Pin visual"/></div>
          </Modal.Header>
          <Modal.Body>
            <div>
              <h5 className="h5">Pinner:</h5>
              <p>{Pinner}</p>
              <h5 className="h5">Description: </h5>
              <p>{ImageDescription}</p>
            </div>
            <Button className="save-button" onClick={this.saveThisPin}>Save Pin</Button>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>

      </div>
    );

  }
}

export default PinSolo;
