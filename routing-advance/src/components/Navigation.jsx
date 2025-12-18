import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {
    const navigate = useNavigate();
  return (
    <div className='navigateButton'>
      <button onClick={()=>{navigate('/')}}>Return to Home Page</button>
      <button onClick={()=>{navigate(-1)}}>Back</button>
      <button onClick={()=>{navigate(+1)}}>Next</button>
    </div>
  )
}

export default Navigation
