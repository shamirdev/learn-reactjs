import React from 'react'
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
      <button onClick={fetchGetData}>Using fetch Data Lao</button>
      <button style={{marginLeft:"10px"}} onClick={axiosGetData}>Using axios Data Lao</button>
    </div>
  )
}

export default App
