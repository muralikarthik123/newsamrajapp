import React from 'react'
import './home.css'
import { MdCalculate } from "react-icons/md";
import { IoSearchCircleSharp } from "react-icons/io5";
import { AiFillRobot } from "react-icons/ai";
import { MdEditSquare } from "react-icons/md";
import { HiChevronDoubleRight } from "react-icons/hi2";
export default function home() {
  return (
    <div className='p2'>
      {/*logo*/}
      <div className='c1'>
        <img className='logo' src='./logo.jpg' alt=''/>
      </div>

      {/*main image*/}
      <img className='img2' src='./img2.jpeg' alt=''/>
      <br/>

      {/*feactures*/}
      <h1>Explore</h1>
      <div style={{display:'flex'}}>
        <p className='more'>more</p>
        <HiChevronDoubleRight className='icon1'/>
      </div>
      <div className='c2'>
        {/*1 and 2 buttons*/}
            <div className='boxes'>
            <button className='bt13'>< MdCalculate className='icons'/></button>
            <br/>
            <p>Calucaltor</p>
            </div>

            <div className='boxes'>
            <button className='bt13'><IoSearchCircleSharp className='icon2'/></button>
            <br/>
            <p>Subsidy</p>
            </div>
      </div>
      <div className='c2'>
        {/*3 and 4 button */}
          <div className='boxes'>
            <button className='bt13'><AiFillRobot className='icons'/></button>
            <br/>
            <p>Customer Service</p>
          </div>

          <div className='boxes'>
            <button className='bt13'><MdEditSquare  className='icons'/></button>
            <br/>
            <p>Registration</p>
          </div>      
      </div>
    </div>
  )
}
