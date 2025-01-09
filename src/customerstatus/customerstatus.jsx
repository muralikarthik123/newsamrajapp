import React from 'react'
import './customerstatus.css'
import Data from '../data.json'
export default function customer() {
  return (
    <div className='status'>
      <h1>Customer status</h1>
      {Data.map((item,index)=>(
        <div className='boxes' key={index}>
          <p><p><b>User ID:</b>{item.id}</p></p>
          <p><b>Name:</b>{item.name}</p>
          <p><b>Site Servey:</b>{item.SiteServey}</p>
          <p><b>Installation:</b>{item.Installation}</p>
          <p><b>Documenation:</b>{item.Documenation}</p>
          <p><b>SubsidyClamied:</b>{item.SubsidyClamied}</p>
          <br/>
        </div>
      ))}
    </div>
  )
}





  


      