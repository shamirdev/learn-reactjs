import React from 'react'
//importing axios 
import axios from 'axios'

const App = () => {
  // Using fetch
  async function fetchGetData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response);
    const data = await response.json();
    console.log(data);
  }

  // Using axios
  async function axiosGetData() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response.data);
    
  }
  return (
    <div>
      <button style={{background: "red", padding:"15px 25px", marginRight:"10px"}} onClick={fetchGetData}>Data is coming using fetch.</button>
      <button style={{marginLeft:"10px", background: "red", padding:"15px 25px"}} onClick={axiosGetData}>Data is coming using axios.</button>
    </div>
  )
}

export default App
