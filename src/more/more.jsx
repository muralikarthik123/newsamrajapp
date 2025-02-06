import React, { useState } from 'react'
import './more.css'
import emailjs from '@emailjs/browser';
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export default function Registrations() {
  const [data, setData] = useState({
    name: '',
    number: '',
    mail: '',
    message: '',
  });

  const { name,mail, message } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({...prevData,[name]: value,}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    emailjs
      .sendForm('service_wp5fg25', 'template_rlt0bfg',e.target, {
        publicKey: '9oLRZGqYbI-iCb1mM',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };
  return (
    <div className='more'>
      {/* image at top*/}
      <img className='pannel' src='./solarpannels.jpeg' alt=''/>
      <br></br>
      {/*registration form */}
      <form onSubmit={handleSubmit} className='forms'>
        <h1>Raise Token</h1>
        <p>Name</p>
        <input   value={name} name='name' onChange={handleChange} className='inputs' type='text' placeholder='Name' required/>
        <br/>
        <p>Email Address</p>
        <input   value={mail} name='mail' onChange={handleChange} className='inputs' type='text' placeholder='Email' required/>
        <p>Issue That Your Facing</p>
        <textarea  value={message} name='message' onChange={handleChange} className='textarea' type='textarea' placeholder='Issue That Your Facing' required/>
        <br/>
        <br/>
        <button className='book'>Raise Token</button>
        <br/>
        <h2>For More Details Please Follows on </h2>
        <div className='icons'>
          <div>
            <a href='https://www.linkedin.com/company/samraj-solar-energies/posts/?feedView=all' style={{color:'darkblue'}}><FaLinkedin className='ic1'/></a>
          </div>
          <div>
            <a href='https://www.youtube.com/@samrajindustries2263' style={{color:'red'}}><FaYoutube className='ic2'/></a>
          </div>
        </div>
      </form>
    </div>
  )
}
