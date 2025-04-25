import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Afficher({handleShow}){
  const stagiaires = useSelector(state=>state);
  const dispatch =useDispatch();
  const del=(id)=>{
    dispatch({
      type:'Supprimer',
      payload:id
    })
  }

  return (
    <div>
      <h1># Afficher.js</h1>
      <table border={2}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOM</th>
            <th>AGE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {stagiaires.map((s,id)=>{
            return(
              <tr key={id}>
                <td>{s.Id}</td>
                <td>{s.Nom}</td>
                <td>{s.Age}</td>
                <td>
                  <button onClick={()=>{del(s.Id)}}>Supprimer</button>
                  <button onClick={()=>{handleShow('true',id,s)}}>Modifier</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Afficher;
