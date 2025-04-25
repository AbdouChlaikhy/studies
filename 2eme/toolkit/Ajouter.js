import React ,{useState}from 'react'
import { useDispatch } from 'react-redux'
import {addStagiaire} from '../redux';

function Ajouter() {
  const dispatch = useDispatch();
  const [id,setId] = useState('')
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [age, setAge] = useState('')
  let list = {Id:id,Nom:nom,Prenom:prenom,Age:age}
  return (
    <div>
      <h1> Ajouter.js</h1>
      <form>
        <p>
          Id : 
          <input type="number" value={id} onChange={(e)=>{setId(e.target.value)}} />
        </p>
        <p>
          Nom:
          <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)}/>
        </p>
        <p>
          Prenom : 
          <input type="text" value={prenom} onChange={(e)=>setPrenom(e.target.value)}/>
        </p>
        <p>
          Age :
          <input type="text" value={age} onChange={(e)=>setAge(e.target.value)}/>
        </p>
      </form>
      <button onClick={()=>{dispatch(addStagiaire(list))}}>Ajouter</button>
    </div>
  )
}

export default Ajouter