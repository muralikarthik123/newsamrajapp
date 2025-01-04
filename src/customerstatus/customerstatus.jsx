import React from 'react'
import './customerstatus.css'
import Data from '../data.json'
export default function customer() {
  return (
    <div>
      <p>Customer status</p>
      {Data.map((item,index)=>(
        <div key={index}>
          <p>{item.name}</p>
          <img src={item.image1} alt='e'/>
        </div>
      ))}
    </div>
  )
}





  


      