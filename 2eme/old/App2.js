import React, { Component } from "react";
import Table from "../Components/tableForm/Table";
import AjoutForm from "../Components/tableForm/AjoutForm";
import UpdateForm from "../Components/tableForm/UpdateForm";
import AjouterTable from "../Components/tableForm2/AjouterTable"; 
import Table from "../Components/tableForm/Table";
import UpdateForm from "../Components/tableForm/UpdateForm";

class App extends Component {
  state = {
    id: "",
    name: "",
    ville: "",
    dateNai: "",
    update: { id: "", name: "", ville: "", dateNai: "" },
    groupe: [{ name: "saad", ville: "casa", dateNai: "2001" }],
  };

  handleAjout = (person) => {
    // // var personsr = this.state.groupe;

    var stagiare = {
      name: person.name,
      dateNai: person.dateNai,
      ville: person.ville,
      id: this.state.groupe.length,
    };
    // this.setState({ groupe: persons });
    this.setState((prevState) => ({
      groupe: [...prevState.groupe, stagiare],
    }));
    console.log(person);
  };
  getUpdate = (person) => {
    this.setState({ update: person });
  };
  handleUpdate = (person) => {
    const table = this.state.groupe;
    const index = person.id;
    console.log(index);
    table[parseInt(index)].name = person.name;
    table[parseInt(index)].ville = person.ville;
    table[parseInt(index)].dateNai = person.dateNai;
    this.setState({ groupe: table });
  };
  handleDelete = (index) => {
    console.log(index);
    const table = this.state.groupe;
    console.log(table);

    const arr = table.filter((item) => item.id !== index);
    this.setState({ groupe: arr });
  };
  getDelete = (index) => {
    this.setState({
      groupe: this.state.groupe.filter((item) => item.id !== index),
    });
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ width: "30%", display: "flex !important" }}>
          <AjouterTable />
          <UpdateTable />
        </div>
          <Table />
      </div>
    );
  }
}

export default App;

