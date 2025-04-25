import React, {useState, useEffect} from "react";
import Activites from "./Activites";
import Total from "./total";
import Notification from "./Notification";
import TotalRemise from "./totalremise";


function App() {
  const [listActivite, setListActivite] = useState([
    {
        name: 'Raquettes à neige',
        prix: 300,
        selectionné:true,
        img:'image/voyage.png'
    },{
        name: 'detente et bien etre',
        prix: 400,
        selectionné:false,
        img:'image/carte-de-voyage.png'
    },{
        name: 'patrimoine et  culture',
        prix: 250,
        selectionné:false,
        img:'image/bagages-de-voyage.png'
    },{
        name: 'séjour en famille ',
        prix: 660,
        selectionné:false,
        img:'image/en-voyageant.png'
    }
  ]
  )

  const [act, setAct] = useState([]);
  const add = (list) => {  
    setAct([...act,list]);  
  }

  const [prix, setPrix] = useState(0);
  const total = (pr) => {
    setPrix(prix + pr)
  }

  const [newPrix, setNewPrix] = useState(0)
  const [prixR, setPrixR] = useState(0)

  const remise = (rm) => { 
    if(rm < 4){
      setNewPrix(prix * 0.98)
      setPrixR(prix - (prix * 0.98))
    }
    if(rm >= 4 && rm < 8){
      setNewPrix(prix * 0.92)
      setPrixR(prix - (prix * 0.92))
    }
    if(rm >= 8){
      setNewPrix(prix * 0.90)
      setPrixR(prix - (prix * 0.90))
    }
  }


  useEffect(() => {
    console.log(act);
  },[act])
  
  return (
    <div className="App"> 
      <Activites listActivite = {listActivite} add = {add} total = {total}/>
      <Total prix = {prix}/>
      <Notification notif = {act.length} />
      <TotalRemise remise = {remise} aff1 = {newPrix} aff2 = {prixR}/>
    </div>   
  );
}

export default App;