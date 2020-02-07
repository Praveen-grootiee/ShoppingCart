import React, { Component } from "react";
import "../styles.css";
import { Card } from "react-bootstrap";
import data from "./dat.json";
import Description from "./description.jsx";
import PopUp from "./PopUp.jsx";

class Body extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: "",
      val: "",
      data: [],
      filteredcat: [],
      allcat: [],
      modalShow: false,
      modalpop:false,
      cartitems:[]
    }
    
  }
  componentDidMount() {
    fetch("http://localhost:3000/dat.json")
      .then(res => res.json())
      .then(
        (result) => {

          this.setState({
            data: result
          })
        })
      
    const allcatt = [...new Set(data.map(data => data.catname))]
    this.setState({ allcat: allcatt, filteredcat: allcatt })
  }

  onchange(e) {
    
    this.setState({ search: e.target.value })
  }

  onchangecheck(e) {
    let a = e.target.value;
    if (e.target.checked === false) {
      var array = [...this.state.filteredcat];
      var index = array.indexOf(e.target.value)
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({ filteredcat: array });
      }
    }
    else {
      this.setState({ filteredcat: this.state.filteredcat.concat(a)})
    }
  } 
additems(e){
const ad=e.target.value;
let dd=[];
if(localStorage.getItem("SelectedItems")){
dd=JSON.parse(localStorage.getItem("SelectedItems"))

}

dd.push({"Name":ad,"Quantity":1})
localStorage.setItem("SelectedItems",JSON.stringify(dd))
}
  render() {
    const fildata = this.state.filteredcat;
    return (
      <div>
        <div className="row">
          <div className="column aa">
            <div className="Catt">
              <h6 className="cat" >Categories</h6><br></br>
              <div className="check">
                <div>
                  {this.state.allcat.sort().map((data,i) => {
                    return (<div><input type="checkbox" value={data} defaultChecked={true} onClick={e => { this.onchangecheck(e) }} />{data}</div>);
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="column bb">
            <div className="search">
              <input type="textbox" placeholder="Search Items" onChange={e => { this.onchange(e) }}></input>
            </div>
            {fildata.sort().map((Category,i) => {
              const ad = data.filter(x => { return x.catname === Category });
              const add = ad.filter(data => {
                return data.name.toLowerCase().indexOf(this.state.search) !== -1;
              });
              return (
                <div className="col" key={i}>
                  
                  {add.length>0?<b>{Category}</b>:null}
                  <div className="row data" >
                 
                    {add.map(xx => {
                      return (
                        
                        <div className="col-md-3">
                          <Card >
                            <Card.Body>
                              <button style={{ marginLeft: "130px" }} className="btn btn-sm btn-warning" onClick={() => { this.setState({ modalShow: true, val: xx.name }) }}>i</button>
                              <p style={{ textAlign: "center" }}>{xx.name}</p>
                              <p style={{ textAlign: "center" }} >RS  :{xx.rs}      <button className="btn btn-sm btn-danger" value={xx.name}  onClick={(e)=>{this.additems(e);this.setState({modalpop:true});setTimeout(()=>{this.setState({modalpop:false})},500);}}>  Add</button></p>
                            </Card.Body>
                          </Card>
                        </div>
                      )
                    })}
                  </div>
                </div>)
            })}
          </div>
        </div>
        <Description name={this.state.val} show={this.state.modalShow} onHide={() => { this.setState({ modalShow: false, val: "" }) }} />
       <PopUp show={this.state.modalpop} />
      </div>
    );
  }
}
export default Body;