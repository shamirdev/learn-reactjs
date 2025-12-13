import React, { useState } from 'react'
import Counter from './components/Counter'

const App = () => {
  let [val, setVal] = useState(10);
  let [obj, setObj] = useState({user:"Shamir",age:20});
  function click(){
    console.log(val);
    setVal(prev=>(prev +1));
    console.log(obj);
    setObj(prev=>({...prev, age:17, address:"LRM"}));
  }
    
  return (
    <div>
      <h1>{val}</h1>
    <h1>{obj.user} {obj.age} {obj.address}</h1>
    <button onClick={click}></button>
    </div>
  )
}

export default App
