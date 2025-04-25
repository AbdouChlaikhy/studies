import React,{useState } from 'react'
import { useEffect } from 'react';

function UpdateTable(props) {
  const [person, setPerson] = useState({
    name: "",
    ville: "",
    adresse: "",
    id:""
  });
  useEffect(() => {
    setPerson({
      name: props.updatePerson.name,
      ville: props.updatePerson.ville,
      adresse: props.updatePerson.adresse,
      id:props.updatePerson.id
    })
},[props])
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
            props.update(person);
          }}
        >
          edit person
        </button>
      </form>
    </div>
  );
}

export default UpdateTable