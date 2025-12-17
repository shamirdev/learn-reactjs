import React from 'react'
import {Link, Outlet} from 'react-router-dom'
const About = () => {
  return (
    <div className='contact'>
      <h1>Contact Page</h1>
      <Link to='/contact/email'>Email?</Link>
      <Link to='/contact/phone'>Mobile Number?</Link>
      <Outlet/>
    </div>
  )
}


export default About
