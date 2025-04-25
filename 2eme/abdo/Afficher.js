import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStagiaire } from "../redux";

function Afficher({Show}) {
  const stagiaires = useSelector((state) => state.stagiaire);
  const dispatch = useDispatch();
  const handleEdit=()=>{
    Show();
  }

  return (
    <div>
      <h1>Afficher.js</h1>
      <table border={2}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stagiaires.map((s, key) =>{
            return (
              <tr key={key}>
                <td>{s.Id}</td>
                <td>{s.Nom}</td>
                <td>{s.Prenom}</td>
                <td>{s.Age}</td>
                <td>
                  <button onClick={()=>{dispatch(deleteStagiaire(s.Id))}}>Supprimer</button>
                  <button onClick={()=>{Show(s.Id)}}>Modifier</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Afficher;
