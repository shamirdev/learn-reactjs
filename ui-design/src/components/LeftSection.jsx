import React from 'react'
import mountains from './images/mountains.jpg'
const LeftSection = () => {
  return (
    <div className='h-scress p-3 relative '>
      <img className="h-134 w-120 object-cover rounded-md" src={mountains} alt="" />
      <div className='absolute top-5 left-7 text-white font-normal text-2xl'>
        <h1>AMU</h1>
      </div>
        <div className='absolute w-85 left-21 text-white text-4xl font-semibold bottom-15 text-center'>
          <h1>Capturing Moments, <br />Creating Memories</h1>
        </div>
    </div>  
  )
}

export default LeftSection
