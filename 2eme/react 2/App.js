
import './App.css';
import AfficherTable from './components/AfficherTable';
import AjouterForm from './components/AjouterForm'
import Compteur from './Compteur';
import C1 from './C1';


function App() {
  


  const fAjouter = (obj)=>{
    setlistStagiaire([...listStagiaire,obj])
  }

  const fSupprimer = (id)=>{
    const newListSta = listStagiaire.filter((sta) => sta.id !== id);
    setlistStagiaire(newListSta);
  }

  const [listStagiaire,setlistStagiaire] = useState([{id:1,lname:'wardi',fname:'salaheddine',adress:'casablanca sidi maarouf 20280'},{id:2,lname:'Zaghoudi',fname:'hamid',adress:'casablanca saada 29010'},{id:3,lname:'akhanoush',fname:'mostafa',adress:'mekness saada 43553'}]);

  return (
    <div>
      {/* <AjouterForm f={fAjouter}/> */}
      {/* <AfficherTable list={listStagiaire} f1={fSupprimer} /> */}
      <C1></C1>  
    </div>
    )
}

export default App;



