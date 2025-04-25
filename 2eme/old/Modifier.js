import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Modifier({handleShow,idS,s}) {
  const dispatch =useDispatch();
  const [id, setId] = useState(s.Id);
  const [nom, setNom] = useState(s.Nom);
  const [age, setAge] = useState(s.Age);
  let stagiaire={Id:id,Nom:nom,Age:age};
  const edit=(ids,stagiaire)=>{
    dispatch({
      type:'Editer',
      payload:[ids,stagiaire]
    })
  }

  return (
    <div>
      <p>Form modification :</p>
      <form>
        <p>
          Id :
          <input type="number" value={id} onChange={(e) => {setId(e.target.value);}}/>
        </p>
        <p>
          Nom :
          <input type="text" value={nom} onChange={(e) => {setNom(e.target.value);}}/>
        </p>
        <p>
          Age:
          <input type="text" value={age} onChange={(e) => {setAge(e.target.value);}}/>
        </p>
      </form>
      <button onClick={()=>{edit(idS,stagiaire)}}>Modifier</button>
      <button onClick={()=>{handleShow('false')}}>Annuler</button>
    </div>
  );
}

export default Modifier;
