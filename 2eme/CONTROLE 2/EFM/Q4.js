import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Q4() {

  const nav = useNavigate();
  const years = [
    '1900','1910','1920','1930','1940'
  ]

  return (
    <div>
      <h1>#Q4.js</h1>
      <div>
        {years.map((item,key)=>{
          return(
            <p key={key} href={`q3/${item}`}>{item}</p>
          )
        })}
      </div>
    </div>
  )
}

export default Q4