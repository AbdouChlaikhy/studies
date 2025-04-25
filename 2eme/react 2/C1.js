import React, { useState, useEffect } from 'react';

export default function C1() {
    
    const[counter,setCounter]=useState(0);

    useEffect(function(){console.log('hi1')},[])
        
    
    useEffect(function(){ console.log('hi2') },[counter])
   
       
    useEffect(function(){ console.log('hi3') })
       
   
  return (
    <div>
        <div>
        {counter}
        </div>
        <button id="btn" onClick={()=>setCounter(counter+1)}> click
        </button>
    </div>
  )
}













