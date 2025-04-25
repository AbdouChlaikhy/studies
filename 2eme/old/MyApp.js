import React, { useState } from 'react'
import Afficher from './Afficher'
import Ajouter from './Ajouter'
import Modifier from './Modifier'
import { useSelector } from 'react-redux'

function MyApp() {
  const [show,setShow]= useState(false);
  const [idS,setIdS]= useState();
  const [s,setS] = useState();
  const handleShow=(statut,id,s)=>{
    setS(s);
    setIdS(id);
    if(statut ==='true'){
      setShow(true);
    }else{
      setShow(false)
    }
  }
  return (
    <div>
      <Afficher handleShow={handleShow}/>
      {show ? <Modifier s={s} idS={idS} handleShow={handleShow} />:<Ajouter/>}
    </div>
  )
}

export default MyApp