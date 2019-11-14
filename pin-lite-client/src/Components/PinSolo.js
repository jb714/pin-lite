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

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

    closeModal(){
      this.setState({ open: false});
    }

    openModal(){
      this.setState({ open: true});
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

          <Button className="save-button" href="/savedPins">Save Pin</Button>
          <Button className="modal-button" onClick={this.openModal}>Enlarge</Button>
        </div>

        <Modal show={this.state.open} onHide={this.closeModal} animation={false}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <div className="h5">{Title}</div>
            <div className="enlarged-image-container">
              <img src={ImageUrl} className="card-image enlarged" alt="Pin visual"/>
            </div>
            <div>
              <div className="h5">Pinner:</div>
              <p>{Pinner}</p>
              <div className="h5">Description: </div>
              <p>{ImageDescription}</p>
            </div>
            <Button className="save-button" href="/savedPins">Save Pin</Button>
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
