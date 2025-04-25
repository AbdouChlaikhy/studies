import React, {useState, useEffect} from "react";
import Activites from "./act";
import Total from "./tot";
import Notification from "./not";
import TotalRemise from "./totR";
import './App.css'

function App() {
  const [listActivite] = useState([
    {
        name: 'Raquettes à neige',
        prix: 300,
        selectionné:true,
        img:'image/voyage.png'},{
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

  const remise = (x) => { 
    if(x < 4){
      setNewPrix((prix * (98/100))*x)
      setPrixR((prix - (prix * (98/100)))*x)
      prixR.toFixed(2)
    }
    if(x >= 4 && x < 8){
      setNewPrix((prix * (92/100))*x)
      setPrixR(((prix - (prix * 92/100))*x))
      prixR.toFixed(2)
    }
    if(x >= 8){
      setNewPrix((prix * (90/100))*x)
      setPrixR((prix - (prix * (90/100)))*x)
      prixR.toFixed(2)
    }
  }


  useEffect(() => {
    console.log(act);
  },[act])
  
  return (
    <div className="App">
      <Notification notif = {act.length} />
      <Activites listActivite = {listActivite} add = {add} total = {total}/>
      <Total prix = {prix}/>
      <TotalRemise remise = {remise} b = {newPrix} a = {prixR}/>
    </div>   
  );
}

export default App;
