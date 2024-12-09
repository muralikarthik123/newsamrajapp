import React from 'react'
import './home.css'
import { MdCalculate } from "react-icons/md";
import { IoSearchCircleSharp } from "react-icons/io5";
import { AiFillRobot } from "react-icons/ai";
import { MdEditSquare } from "react-icons/md";
import { HiChevronDoubleRight } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
export default function Home() {

  const Nav=useNavigate()
  const open=()=>{
    Nav('/cal')
  }

  const subsidy=()=>{
    Nav('/sub')
  }

  const customer=()=>{
    Nav('/cust')
  }
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
            <button onClick={open} className='bt13'>< MdCalculate className='icons'/></button>
            <br/>
            <p> Solar Calculator</p>
            </div>

            <div className='boxes'>
            <button   onClick={subsidy} className='bt13'><IoSearchCircleSharp className='icon2'/></button>
            <br/>
            <p>Subsidy</p>
            </div>
      </div>
      <div className='c2'>
        {/*3 and 4 button */}
          <div className='boxes'>
            <button  onClick={customer} className='bt13'><AiFillRobot className='icons'/></button>
            <br/>
            <p>Customer Service</p>
          </div>

          <div className='boxes'>
            <button className='bt13'><MdEditSquare  className='icons'/></button>
            <br/>
            <p>Registration</p>
          </div>      
      </div>
      {/*terms and conditions*/}
      <div className='terms'>
        <p style={{textAlign:'center',paddingTop:'3%'}}>Terms & Conditions</p>
      </div>
    
    </div>
  )
}
