import React from 'react'
import { useContext } from 'react'
import {themeContext} from '../context/ThemeContext'

const Navbar = () => {
    const data = useContext(themeContext);
    console.log(data);
    
  return (
    <div>
        <h1>{data}</h1>
      <h1>Navbar</h1>
    </div>
  )
}

export default Navbar
