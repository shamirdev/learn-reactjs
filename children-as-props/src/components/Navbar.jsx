import React, { useState } from 'react'
import Nav2  from './Nav2'


const Navbar = () => {
    const [theme, setTheme] = useState("Light")
  return (
    <div>
      <h2>Children as a props</h2>
      <Nav2 theme={theme}>
        <h1>First Children</h1>
        <h1>Ssecond Children</h1>
      </Nav2>
    </div>
  )
}

export default Navbar
