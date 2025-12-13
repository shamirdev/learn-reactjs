import React from 'react'
import AlreadyAccount from './AlreadyAccount'
import FormFeilds from './FormFields'
import CreateAccountBtn from './CreateAccountBtn'

const RightSection = (props) => {
  console.log(props);
  
  return (
    <>
      <div className='mt-10 ms-9 flex flex-col'>
        <h1 className='text-white text-4xl font-semibold'>{props.newAc}</h1>
        <AlreadyAccount />
        <div className='mt-9 flex gap-5'>
          <FormFeilds width={180} placeholder="First Name" />
          <FormFeilds width={180} placeholder="Last Name"/>
        </div>
        <div className='mt-4 flex flex-col gap-5'>
          <FormFeilds width={380} placeholder="Email"/>
          <FormFeilds width={380} placeholder="Enter your password"/>
          <CreateAccountBtn />
        </div>
        <div className='flex'>
        </div>
      </div>
    </>
  )
}

export default RightSection
