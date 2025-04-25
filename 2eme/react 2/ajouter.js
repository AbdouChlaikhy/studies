import React, { useState } from "react";
export default function Ajouter(props){
    const[nomM,setNom]=useState('')
    const[prenoM,seTPrenom]=useState('')
    const[adresS,setAdress]=useState('')
    const s={nom:nomM,prenom:prenoM,adress:adresS}
    return(
        <div>
            <from>

                nom:<input type={'text'} onChange={(n)=>setNom(n.target.value)}/>
                prenom:<input type={'text'} onChange={(p)=>setPrenom(n.target.value)}/>
                adress:<input type={'text'} onChange={(a)=>setAdress(n.target.value)}/>


            </from>
        </div>
    )



}