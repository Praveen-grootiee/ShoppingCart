
import React, { Component } from "react";

import { Modal } from "react-bootstrap";

class PopUp extends Component{

    render(){
      return <div>
      <Modal {...this.props}

        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>

<p>Item Added to cart</p>
        </Modal.Body>
      </Modal></div>
    }
  }
  export default PopUp;