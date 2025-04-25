import React from 'react';
import { useState } from 'react';

function Input() {
    const [inp, setInp] = useState('');
    const [val, setVal] = useState();
    const [stl, setStl] = useState();
    const aff = () => {
        if (inp.length < 10) {
            setVal('Saisir au moins 10 lettres');
            setStl('red');
        }else if (inp.length >= 10) {
            setVal(`Vous avez bien saisi ${inp.length} lettres Vous avez écrit : ${inp}`);
            setStl('green');
        }
    }
    return (
        <div>
            <input type='text' onChange={(e) => setInp(e.target.value)}/> 
            <button onClick={aff}>valider</button>
            <span className={stl}>{val}</span>
        </div>
    );
}

export default Input;