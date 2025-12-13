import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const MidSection = () => {
  return (
    <div style={{backgroundColor:"#2b2738"}} className='h-140 flex w-250 rounded-lg'>
        <LeftSection/>
        <RightSection newAc="Create an Account"/>
    </div>
  )
}

export default MidSection
