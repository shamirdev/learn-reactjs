import React from 'react'

const Nav2 = (props) => {
  return (
    <div>
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      {props.children[0]}
      {props.children[1]}
    </div>
  )
}

export default Nav2
