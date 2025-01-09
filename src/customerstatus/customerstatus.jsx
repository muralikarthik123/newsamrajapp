import React, { useState } from 'react';
import './customerstatus.css';
import Data from '../data.json';
import { FaSearch } from "react-icons/fa";
export default function Customer() {
  const [search, setSearch] = useState('');

  const open = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className='status'>
      <div className='searchbox'>
        <input
        type='text'
        placeholder='Enter the name or ID'
        value={search}
        onChange={open}
        className='search'
        />
        <div className='icondis'>
          <FaSearch className='searchicon'/>
        </div>
      </div>
      <h1>Customer status</h1>
      {Data.filter((item) =>
        (item.name && item.name.toLowerCase().includes(search.toLowerCase())) || //searching with name
        (item.id && item.id.toString().includes(search)) // Search by ID as well
      ).map((item, index) => (
        <div className='boxes' key={index}>
          <p><b>User ID:</b> {item.id}</p>
          <p><b>Name:</b> {item.name}</p>
          <p><b>Site Survey:</b> {item.SiteServey}</p>
          <p><b>Installation:</b> {item.Installation}</p>
          <p><b>Documentation:</b> {item.Documenation}</p>
          <p><b>Subsidy Claimed:</b> {item.SubsidyClamied}</p>
          <br />
        </div>
      ))}
    </div>
  );
}
