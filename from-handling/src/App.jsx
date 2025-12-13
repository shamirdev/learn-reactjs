import React from 'react'
import { useState } from 'react';

const App = () => {
  const [val, setVal] = useState("");
  const submitted = (e)=>{
    e.preventDefault();
    console.log("Form Submitted by", val);
    setVal("");
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitted(e);
      }}>
        <input type="text" placeholder='Enter your age' value={val} onChange={(e)=>{
          setVal(e.target.value);
          console.log(e.target.value);
        }}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
