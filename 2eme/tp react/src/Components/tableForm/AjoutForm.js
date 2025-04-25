import React, { Component } from "react";
import "../styleTable.css";
import Table from "./Table";
class AjoutForm extends Component {
  constructor(props) {
      super(props);
     this. state = {
          name: "",
          dateNai: "",
          ville:""
      }
  }
    
  render() {
    return (
        <div style={{ display: "flex" }}>
          <form className="container" onSubmit={e=>e.preventDefault()}>
            <label htmlFor=""> saisir le nom :</label>
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
            <br></br>
            <label htmlFor=""> saisir la date de naissance :</label>

            <input
              type="date"
              value={this.state.dateNai}
              onChange={(e) => {
                this.setState({ dateNai: e.target.value });
              }}
            />
            <br></br>
            <label htmlFor="">saisir la ville :</label>

            <input
              type="text"
            //   value={this.state.ville}
              onChange={(e) => {
                this.setState({ ville: e.target.value });
              }}
            />
            <br></br>
            <button
              onClick={()=>{ this.props.handleAjout({
                name: this.state.name,
                dateNai: this.state.dateNai,
                ville: this.state.ville
              })}}
            >
              Add person
            </button>

          </form>
        </div>
    );
  }
}
export default AjoutForm;
