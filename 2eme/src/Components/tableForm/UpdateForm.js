import React, { Component } from "react";
import "../styleTable.css";
import Table from "./Table";
class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.person.id,
      name: props.person.name,
      ville: props.person.ville,
      dateNai: props.person.dateNai,
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {
        id: props.person.id,
        name: props.person.name,
        ville: props.person.ville,
        dateNai: props.person.dateNai,
      } ;
  }
  render() {
    return (
        <div style={{ display: "flex" }}>
          <div className="container">
            <label htmlFor=""> saisir le nom update :</label>
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
              value={this.state.ville}
              onChange={(e) => {
                this.setState({ ville: e.target.value });
              }}
            />
            <br></br>
            <button
              onClick={() =>
                this.props.handleUpdate({
                  name: this.state.name,
                  ville: this.state.ville,
                  dateNai: this.state.dateNai,
                })
              }
            >
              edit person
            </button>
          </div>
        </div>
    );
  }
}
export default UpdateForm;
