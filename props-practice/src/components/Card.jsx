import React from 'react'

const Card = (props) => {
    console.log(props);
    
  return (
    <div>
      <div className='card'>
      <h1>{props.user}</h1>
      <p>{props.id}</p>
    </div>
    </div>
  )
}

export default Card
