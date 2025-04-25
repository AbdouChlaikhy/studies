import React, { useState, useEffect } from "react";

function AjouterTable(props) {
  const [person, setPerson] = useState({
    name: "",
    ville: "",
    adresse: "",
  });

  return (
    <div style={{ display: "flex" }}>
      <form className="container" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor=""> saisir le nom :</label>
        <input
          type="text"
          value={person.name}
          onChange={(e) => {
            setPerson((prevState)=>({...prevState,name:e.target.value}));
          }}
        />
        <br></br>
        <label htmlFor=""> saisir la date de naissance :</label>

        <input
          type="text"
          value={person.adresse}
          onChange={(e) => {
            setPerson((prevState)=>({...prevState,adresse:e.target.value}));
          }}
        />
        <br></br>
        <label htmlFor="">saisir la ville :</label>

        <input
          type="text"
            value={person.ville}
          onChange={(e) => {
            setPerson((prevState)=>({...prevState,ville:e.target.value}));
          }}
        />
        <br></br>
        <button
          onClick={() => {
            props.addPerson({
              name: person.name,
              adresse: person.adresse,
              ville: person.ville,
            });
          }}
        >
          Add person
        </button>
      </form>
    </div>
  );
}

export default AjouterTable;
