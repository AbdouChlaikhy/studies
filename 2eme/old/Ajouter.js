import React, { useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';

function Ajouter() {

  const stagiaires=useSelector(state=>state);
  console.log(stagiaires);
  const dispatch = useDispatch();
  const [id,setId] = useState('');
  const [nom,setNom] =useState('');
  const [age,setAge]= useState('');
  const list = {Id:id,Nom:nom,Age:age};

  const add=(list)=>{
    dispatch({
      type:'Ajouter',
      payload:list
    })
  }
  return (
    <div>
      <h1># Ajouter.js</h1>
      <form>
        <p>Id : 
          <input value={id} type="number" onChange={(e)=>{setId(e.target.value)}} />
        </p>
        <p>Nom :
          <input value={nom} type="text"onChange={(e)=>{setNom(e.target.value)}}/>
        </p>
        <p>Age:
          <input value={age} type="text" onChange={(e)=>{setAge(e.target.value)}}/>
        </p>
      </form>
      <button onClick={()=>{add(list)}}>Ajouter</button>
    </div>
  )
}

export default Ajouter