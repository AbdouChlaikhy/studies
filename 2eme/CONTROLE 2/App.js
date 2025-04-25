import './App.css';
import Q3 from './EFM/Q3';
import {Routes,Route } from 'react-router-dom';
import Menu from './EFM/Menu';
import { useSelector } from 'react-redux';
import Q4 from './EFM/Q4';

function App() {
  const state = useSelector((state)=>state.p) 
  console.log(state);
  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route path='/q3' element={<Q3 data={state}/>}/>
        <Route path='/q4' element={<Q4 data={state}/>} />
        <Route path="/q3/:year" element={<Q3/>}/>
      </Routes>
    </div>
  );
}

export default App;
