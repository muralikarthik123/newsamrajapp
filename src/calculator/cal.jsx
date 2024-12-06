import React, { useState } from 'react';
import './cal.css'
function KilowattCalculator() {
  const [wattage, setWattage] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [kwh, setKwh] = useState(0);

  const calculateKwh = () => {
    const kilowatts = wattage / 1000; // Convert watts to kilowatts
    const totalKwh = kilowatts * hours * days;
    setKwh(totalKwh.toFixed(2)); // Set result with 2 decimal points
  };

  return (
    <div className='cal' >
      <h2>Electricity Usage Calculator (kWh)</h2>
      <div className='c1'>
        <label>Wattage (W): </label>
        <input
          type="number"
          value={wattage}
          onChange={(e) => setWattage(e.target.value)}
          placeholder="Enter wattage"
        />
      <br></br>
        <label>Hours per Day: </label>
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          placeholder="Enter hours per day"
        />
      <br></br>
        <label>Days: </label>
        <br/>
        <input
          type="number"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          placeholder="Enter number of days"
        />
      <br></br>
      <button onClick={calculateKwh} >
        Calculate kWh
      </button>
      <h3>Total kWh: {kwh} kWh</h3>
      </div>
    
    </div>
  );
}

export default KilowattCalculator;
