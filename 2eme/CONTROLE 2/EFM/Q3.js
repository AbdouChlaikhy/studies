import React from 'react'
import './Style/Q3.css'

function Q3({data}){

  console.log('Q3.js ==> ' ,data)

  return(
    <div className='Q3'>
      <h1># Q3.js</h1>
      <div className='paysCont'>
        {data.map((item,key)=>{
          return(
            <div className='pays' key={key}>
              <img src={item.image} alt="" />
              <p>Name : {item.name}</p>
              <p>Surface : {item.surfaceArea}</p>
              <p>Population :{item.population}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Q3