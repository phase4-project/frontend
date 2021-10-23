import React from 'react'
import Navbar from './Navbar'
import magnify from '../magnifier.png'

function Landingpage() {
    return (
        <div className='top-bar'>
            <Navbar />
            <h1 className='app-name'>App Name</h1>
            <img className='search-icon' src={magnify} alt='magnifying glass' />
        </div>
    )
}

export default Landingpage