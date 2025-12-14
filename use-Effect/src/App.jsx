import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  // useEffect runs on first render or when you reload
  useEffect(() => {
    console.log("useEffect is running");
  }, [num]);
  return (
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>

      <button onClick={() => {
        setNum(num + 1);
      }}>Change num</button>

      <button onClick={() => {
        setNum2(num2 + 1);
      }}>Change num2</button>
    </div>
  )
}

export default App
