import React, { useState } from 'react'
import Navbar from './Navbar'
import magnify from '../magnifier.png'

function Landingpage() {
    const [search, onSearch] = useState(false)

    function handleClick() {
        onSearch(!search)
    }


    return (
        <div className='landing-content'>
            <Navbar />
            <h1 className='app-name'>App Name</h1>
            {search ? <input placeholder='Search Cars...' className='search' /> : <img className='search-icon' onClick={handleClick} src={magnify} alt='magnifying glass' />}
        </div>
    )
}

export default Landingpage