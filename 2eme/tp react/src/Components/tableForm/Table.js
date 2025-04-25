import React, { Component } from "react";
import "../styleTable.css";
import AjoutForm from "./AjoutForm";
class Table extends Component {

  render() {
    return (
        <table>
          <tr>
            <th>name</th>
            <th>ville</th>
            <th>adress</th>
            <th>Editer</th>
            <th>Supprimer</th>
          </tr>
          {this.props.groupe.map(({ name, ville, dateNai, age, id }, index) => {
            return (
              <tr>
                <td>{name} </td>
                <td>{ville} </td>
                <td>{age} </td>

                <td>
                  <button
                    style={{ backgroundColor: "#0076f1" }}
                    id={id}
                    onClick={() => this.props.getUpdate({ id: id, name: name, ville: ville, dateNai: dateNai })}
                  >
                    Editer
                  </button>
                </td>
                <td>
                  <button
                    style={{ backgroundColor: "red" }}
                    id={id}
                    onClick={() => this.props.getDelete(id)}
                  >
                    supprimer
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
    );
  }
}
export default Table;
