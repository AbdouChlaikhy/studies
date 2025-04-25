import React from 'react'

export default function AfficherTable(props) {

  return (
    <div>
         <table border={1}>
            {
                props.list.map(
                    (stagaire)=>(<tr key={stagaire.id}><td>{stagaire.id}</td><td>{stagaire.lname}</td><td>{stagaire.fname}</td><td>{stagaire.adress}</td><td><button>Editer</button><button key={stagaire.id} onClick = {()=>props.f1(stagaire.id)} >supprimer</button></td></tr>)
                )
            }
        </table>
    </div>
  )
}


