import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='nav'>
            <h1 style={{ color: 'black' }}>Routing</h1>
            <div>
                <Link to='/'>Home</Link>
                 <Link to='/cart'>Cart</Link>
                <Link to='/Contact'>Conatact</Link>
                <Link to='/About'>About</Link>
            </div>
        </div>
    )
}

export default Header
