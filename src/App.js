import React from "react";
import Body from "./components/body.js";
import Foot from "./components/footer.jsx";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Cart from "./Cartt.js";
import "react-bootstrap";
import "./styles.css";
import Heading from "./components/head.jsx";
function App(){
  return (

    <div >
    <Heading />
    <Router>
    <Route exact path="/" component={Body}/>
    
    <Route exact path="/cart" component={Cart}/>
    </Router>
  <Foot />
  </div>

  );
  

}
export default App;