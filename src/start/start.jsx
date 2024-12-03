import React from 'react'
import './start.css'
import { FaArrowRight } from "react-icons/fa";
import {Link} from "react-router-dom"

export default function home() {
  return (
    <div className='p1'>
      <img className='image1' src='./img1.jpeg' alt=' '/>
      <h1>Welcome to Samraj Solar Energies</h1>
      <p>We Specialize in delivering Both Large-scale and Small-Scale Solar projects,tralored to meet the unique needs of every client</p>
      <Link to='/home' style={{textDecoration:'none'}}><button style={{display:'flex'}} className='bt1'>Get Started<span style={{marginLeft:'10px'}}><FaArrowRight/></span></button></Link>
    </div>
  )
}
