import React from 'react'

const FormFields = (props) => {
    console.log(props);
    
  return (
    <div className=''>
      <input style={{backgroundColor:'#3b364c', width: `${props.width}px`}} className='text-white placeholder-white h-10 rounded-md border-transparent focus:border-[#645d79] focus:border outline-none p-2' placeholder={props.placeholder} type="text" />
    </div>
  )
}

export default FormFields
