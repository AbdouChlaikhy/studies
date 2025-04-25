/* eslint-disable no-lone-blocks */
import React, { useState } from 'react'
import Afficher from './Afficher';
import { useSelector ,useDispatch} from 'react-redux'
import Ajouter from './Ajouter';
import Modifier from './Modifier';

function Main() {
  const [show,setShow]=useState(false);
  const [one,setOne] = useState()
  const stagiaires = useSelector(state => state.stagiaire);
  
  const Show=(id)=>{
    {show === false ? setShow(true):setShow(false)};
    setOne(stagiaires[id]);
  }
  return (
    <div>
      <Afficher Show={Show}/>
      {show ? <Modifier Show={Show} one={one}/> : <Ajouter/>}
    </div>
  )
}

export default Main