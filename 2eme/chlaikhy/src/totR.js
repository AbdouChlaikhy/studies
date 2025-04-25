import React, {useState} from "react";

export default function TotalRemise(props) {
    const [valeur, setValeur] = useState(0)
    return(
        <div>
        <label>Nombre de personne </label>
        <input type="number" onChange={(e) => setValeur(e.target.value)}/>
        <br /><br />
        <span>Remise: {props.a}</span>
        <br /><br />
        <span>Total: {props.b}</span>
        <br /><br />
        <button onClick={() => props.remise(valeur)}>total</button>
        </div>      
    )
}