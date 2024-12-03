import React from 'react'
import './home.css'
import { SlCalculator } from "react-icons/sl";
import { CgSearchLoading } from "react-icons/cg";
import { AiFillRobot } from "react-icons/ai";
import { MdAppRegistration } from "react-icons/md";
import { HiChevronDoubleRight } from "react-icons/hi2";
export default function home() {
  return (
    <div className='p2'>
      <img className='img2' src='./img2.jpeg' alt=''/>
      <h1>Features</h1>
      <div style={{display:'flex'}}>
        <p className='more'>more</p>
        <HiChevronDoubleRight className='icon1'/>
      </div>
      <div className='c1'>
        {/*1 and 2 buttons*/}
            <div className='boxes'>
            <button className='bt13'><SlCalculator className='icons'/></button>
            <br/>
            <p>Calucaltor</p>
            </div>

            <div className='boxes'>
            <button className='bt13'><CgSearchLoading  className='icons'/></button>
            <br/>
            <p>Subsidy</p>
            </div>
      </div>
      <div className='c1'>
        {/*3 and 4 button */}
          <div className='boxes'>
            <button className='bt13'><AiFillRobot className='icons'/></button>
            <br/>
            <p>Customer Service</p>
          </div>

          <div className='boxes'>
            <button className='bt13'><MdAppRegistration className='icons'/></button>
            <br/>
            <p>Registration</p>
          </div>      
      </div>
    </div>
  )
}
