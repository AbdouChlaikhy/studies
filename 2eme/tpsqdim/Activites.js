import React from "react";

export default function Activites (props) {
    return (
        <div>
            <ul>
            {props.listActivite.map((list) => {
                return(
                    <li>
                        <button className="activite" onClick={() =>{ props.add(list); props.total(list.prix)}}>{list.name} : {list.prix}</button>
                    </li>                  
                )
            })}
            </ul>
        </div>
    )
}