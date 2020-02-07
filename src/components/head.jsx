import React from "react";
import "../styles.css";
import { BrowserRouter as Router} from "react-router-dom";

import "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
function Heading() {
  return (
    <div>
    <div className="row">
      <div className="column a">
        <p>Shopping Cart <img src="https://img.icons8.com/doodle/48/000000/cottage--v1.png" alt="cart"></img></p>
      </div>
      <div className="column b">
        <div className="nav">
          
          <Router>
                   <a href="/" style={{paddingRight:"10px"}}>Home</a>
                   <a href="/cart" style={{color:"blacK"}}>MyCart</a>

                   
                   </Router>
</div>
      </div>
    </div><br></br></div>
  );
}
export default Heading;
