import React, { useState, useEffect } from "react";

function Table({persons,getUpdate}) {
  const [persona, setPerson] = useState(persons);
  useEffect(() => {
    setPerson(persons);
    console.log("gg", persona);
  }, [persons]);

  return (
    <table>
      <tr>
        <th>name</th>
        <th>ville</th>
        <th>adress</th>
        <th>Editer</th>
        <th>Supprimer</th>
      </tr>
      {persona.map(({ name, ville, id, adresse }, index) => {
        return (
          <tr>
            <td>{name} </td>
            <td>{ville} </td>
            <td>{adresse} </td>

            <td>
              <button
                style={{ backgroundColor: "#0076f1" }}
                id={id}
                onClick={() =>
                  getUpdate({
                    id: id,
                    name: name,
                    ville: ville,
                    adresse: adresse,
                  })
                }
              >
                Editer
              </button>
            </td>
            <td>
              <button
                style={{ backgroundColor: "red" }}
                id={id}
                // onClick={() => this.props.getDelete(id)}
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

export default Table;
