import React, { useState } from 'react'

export default function AjouterForm(props) {

    const [staId,setStaId] = useState('');
    const [staLastName,setStaLastName] = useState('');
    const [staFirstName,setStaFirstName] = useState('');
    const [staAdress,setAdress] = useState('');

  return (
    <div>
        <form onSubmit={(e)=>{e.preventDefault();}}>
            <h1>Ajouter Stagiaire :</h1>
            <input type='text' placeholder='id' onChange={(e)=>{ setStaId(e.target.value);}} /><br/><br/>
            <input type='text' placeholder='nom' onChange={(e)=>{ setStaLastName(e.target.value);}} /><br/><br/>
            <input type='text' placeholder='prenom' onChange={(e)=>{ setStaFirstName(e.target.value);}} /><br/><br/>
            <input type='text' placeholder='adress' onChange={(e)=>{ setAdress(e.target.value);}} /><br/><br/>
            <button onClick={()=>props.f({id:staId,lname:staLastName,fname:staFirstName,adress:staAdress})}>Ajouter</button><br/><br/>
        </form>
    </div>
  )
}