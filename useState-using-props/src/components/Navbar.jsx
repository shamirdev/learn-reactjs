import React from 'react'

const Navbar = (props) => {
    console.log(props.theme);
    return (
        <div>
            <h1>Theme is {props.theme}</h1>
            <button onClick={() => {
                props.setTheme("Dark");
            }}>Change Theme</button>
        </div>
    )
}

export default Navbar
