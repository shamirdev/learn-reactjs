import React from 'react'

const App = () => {
  const array = [1,2,3];

  localStorage.setItem('arr', JSON.stringify(array));

  const newArray = JSON.parse(localStorage.getItem('arr'));
  console.log(newArray);
  
  return (
    <div>
      App
    </div>
  )
}

export default App
