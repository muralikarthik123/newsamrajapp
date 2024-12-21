import React, { useState } from 'react'
import './registration.css'
import emailjs from '@emailjs/browser';

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
    <div className='reg'>
      {/* image at top*/}
      <img className='pannel' src='./solarpannel.jpg' alt=''/>
      <br></br>
      {/*registration form */}
      <form onSubmit={handleSubmit} className='forms'>
        <h1>Registration Form</h1>
        <p>Name</p>
        <input   value={name} name='name' onChange={handleChange} className='inputs' type='text' placeholder='Name' required/>
        <br/>
        <p>Email Address</p>
        <input   value={mail} name='mail' onChange={handleChange} className='inputs' type='text' placeholder='Email' required/>
        <p>Leave us a Message</p>
        <textarea  value={message} name='message' onChange={handleChange} className='textarea' type='textarea' placeholder='Message' required/>
        <br/>
        <br/>
        <button className='book'>Book Now</button>
        <br/>
        <br/>
      </form>
    </div>
  )
}
