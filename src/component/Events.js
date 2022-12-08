import React from 'react'
import { useState } from 'react';

const Events = () => {
  const purple = "#8e44ad";
  const [bg, setBg] = useState(purple);
  const [name, setName] = useState("Click Me")

  const bgChange = () => {
    let newBg = 'red';
    setBg(newBg);
    setName("Ouch!! ")
  };

  const bgBack = () => {
    // let newBg = 'red';
    setBg(purple);
     setName("Ayyo!! ")
  };

  return (
    <>
      <div style={{ backgroundColor: bg }}>
        {/* <button onClick={bgChange} onDoubleClick={bgBack}> {name}</button> */}
        <button onMouseEnter={bgChange} onMouseLeave={bgBack}> {name}</button>
      </div>
    </>
  )
}

export default Events