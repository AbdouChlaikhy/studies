import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {editStagiaire} from '../redux'

function Modifier({one,Show}) {

  const dispatch = useDispatch();

  const [id,setId] = useState(one.Id)
  const [nom,setNom] = useState(one.Nom);
  const [prenom,setPrenom] = useState(one.Prenom);
  const [age,setAge] = useState(one.Age);

  const st ={Id:id,Nom:nom,Prenom:prenom,Age:age};

  return (
    <div>
      <h1>Modifier.js</h1>
      <form>
        <p>
          Id : 
          <input type="number" readOnly value={id} />
        </p>
        <p>
          Nom : 
          <input type="text" value={nom} onChange={(e)=>{setNom(e.target.value)}} />
        </p>
        <p>
          Prenom :  
          <input type="text" value={prenom} onChange={(e)=>{setPrenom(e.target.value)}}/>
        </p>
        <p>
          Age :  
          <input type="text" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
        </p>
      </form>
      <button onClick={()=>{dispatch(editStagiaire({id,st}))}}>Modifier</button>
      <button onClick={()=>{Show()}}>Annuler</button>
    </div>
  )
}

export default Modifier