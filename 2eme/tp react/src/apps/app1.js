import React, { Component,useState, useEffect } from "react";
import AjouterTable from "../Components/tableForm2/AjouterTable"; 
import Table from "../Components/tableForm2/Table";
import UpdateTable from "../Components/tableForm2/UpdateTable";
import "./Components/styleTable.css";
// import Cycle from "./Components/tableForm/Cycle";
import Cycle from "../Components/tableForm/Cycle";
import CycleFunction from "../Components/tableForm/CycleFunction";

const App = () => {
  const [person, setPerson] = useState([
    {id:"0", name: "saad", ville: "casablanca", adresse: "autobus" },
    {id:"1", name: "hamid", ville: "tanger", adresse: "maarif" },
    {id:"2", name: "mustapha", ville: "marrakech", adresse: "centre ille" },
  ]);
  useEffect(() => {
    
  },[person])
  const [update, setUpdate] = useState({id:"",name:"",ville:"",adresse:""})
  const addPerson = (person) => {
    var person = {
      id:person.length,
      name: person.name,
      ville: person.ville,
      adresse: person.adresse

    }
    setPerson((prevState) => [...prevState, person]);
    console.log(person)
  }
  const getUpdate = (person) => {
    setUpdate(person)
    console.log(person)
    console.log(update)
    
  }
  const updatePerson = (persona) => {
    const persons = person
    persons[parseInt(update.id)] = persona
    setPerson(persons)
    setUpdate(update)
    console.log(update)

    console.log(persona, parseInt(update.id))
    console.log(person)


  }
    return (
      <div style={{ display: "flex" }}>
        {/* <div style={{ width: "30%", display: "flex !important" }}>
          <UpdateTable updatePerson={update} update={updatePerson} />
          <AjouterTable addPerson={addPerson} />
        </div>
        <Table persons={person} getUpdate={getUpdate} /> */}
      <Cycle />
      </div>
    )
 
}
export default App;

