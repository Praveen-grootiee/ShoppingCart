import React, { Component } from "react";

import { Modal } from "react-bootstrap";
import "../styles.css";
import description from "./descriptionn.json";
class Description extends Component {

  render() {
    const a = description.filter(q => q.name === this.props.name);

    return (
      <div>
        <div >
          <Modal {...this.props}

            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {this.props.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <p>{a.map((data,i) => {
                return (<div>
                  <img style={{marginLeft:"200px"}}src={data.image} alt="img"/>
                  <p key={i}>{data.desc1}</p><p key={i}>{data.desc2}</p></div>)
              })}</p>

            </Modal.Body>
            <Modal.Footer>
              <button onClick={this.props.onHide}>Close</button>
            </Modal.Footer>
          </Modal>
        </div>        </div>

    );
  }

}
export default Description;