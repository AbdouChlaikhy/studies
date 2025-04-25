import React, {useState} from "react";

export default function TotalRemise(props) {
    const [valeur, setValeur] = useState(0)
    return(
        <div>
        <label htmlFor="">Nombre d'adulte </label>
        <input type="number" onChange={(e) => setValeur(e.target.value)}/>
        <br /><br />
        <span>Remise: {props.aff2}</span>
        <br /><br />
        <span>Total avec remise: {props.aff1}</span>
        <br /><br />
        <button onClick={() => props.remise(valeur)}>Calculer</button>
        </div>      
    )
}