import React from "react";


export default function Affichertable(props){
  return(
    <div>
      <table border={1}>
       { props.list.map((n) => (
        <tr key={n.id}>
          <td>{n.id}</td>
          <td>{n.nom}</td>

          <td>{n.prenom}</td>
          <td>{n.adresse}</td>
          <td>
           
                <button onClick={props.sup}> supprimer</button><button>editer</button>
          </td>



        </tr>
        
       ))}

      </table>
    </div>
  )
}





