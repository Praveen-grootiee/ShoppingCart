import React, { Component } from "react";
import Data from "./components/dat.json";
import "./styles.css";
import {Table} from "react-bootstrap"
class Cartt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alldata: [],
      value:0,
      quantity: 1
    }
  }

  componentDidMount(){
    if(localStorage.getItem("SelectedItems")){
this.setState({alldata:JSON.parse(localStorage.getItem("SelectedItems")).filter(({Name},index)=>{return JSON.parse(localStorage.getItem("SelectedItems")).findIndex(item=>item.Name===Name)===index})})  
  }
else{alert("No Items Added")}}
  
  removedata(e){
    var array=[...JSON.parse(localStorage.getItem("SelectedItems"))]
    var index=array.indexOf(e)
    if(index===-1){
      array.splice(index,1)
      this.setState({alldata:array})  
      localStorage.setItem("SelectedItems",JSON.stringify(array))
    }
  }
  increment(e){
    var array=[...JSON.parse(localStorage.getItem("SelectedItems"))]
    array.filter(data=>{ if(data.Name===e.target.value) {++data.Quantity} return null})
    this.setState({alldata:array})
    
    localStorage.setItem("SelectedItems",JSON.stringify(array))
   
  }
  decrement(e){
    var array=[...JSON.parse(localStorage.getItem("SelectedItems"))]
    array.filter(data=>{  if(data.Name===e.target.value) {(data.Quantity>1)?--data.Quantity:alert("Cannot reduce Less than 0 Remove Item")}return null})
    this.setState({alldata:array})
    localStorage.setItem("SelectedItems",JSON.stringify(array))
  }
  display() {
    if(localStorage.getItem("SelectedItems")){
   return this.state.alldata.sort().map((data, index) => {
      const ad = Data.filter(q => q.name === data.Name);
      return (
        <tr key={index} className="tab">
          <td>{ad[0].name}</td>
          <td>{ad[0].rs}</td>
          <td><button className="btn btn-info btn-sm" value={ad[0].name} onClick={(e)=>{this.increment(e)}}>+</button> {data.Quantity} <button button className="btn btn-info btn-sm" value={ad[0].name} onClick={(e)=>{this.decrement(e)}}>-</button></td>
          <button className="btn btn-danger btn-sm" style={{marginTop:"10px"}} value={ad[0].name} onClick={(e)=>{this.removedata(e.target.value)}}>Remove</button>
        </tr>)})}

        }
  totalAmount(){
         if(localStorage.getItem("SelectedItems")){
    const ah= JSON.parse(localStorage.getItem("SelectedItems")).map(data=>{
      const ad = Data.filter(q => q.name === data.Name);
      return parseInt(data.Quantity*ad[0].rs)
    })
  return ah.reduce((total, data) => total + data, 0)
  }
}

  
  render() {
    return (
      <div className="cartbox">
       <h1 style={{margin:"5px"}}>Cart Items</h1><br></br>
        <div className="box">
          <Table striped bordered hover  className="tab">
            <thead>
              <tr className="tab">
                <th className="tab">Item Name</th>
                <th className="tab">Price</th>
                <th className="tab">Quantity</th>
                <th className="tab">Remove</th>
              </tr>
            </thead>
            <tbody >
              {this.display()}
            </tbody>
          </Table>
          <div className="checkout">
          <b >Total Amount:{this.totalAmount()}</b>
          <button  className="btn btn-danger checkout" onClick={()=>{localStorage.removeItem("SelectedItems")}}>Checkout</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Cartt;