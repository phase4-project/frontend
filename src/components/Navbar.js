import React from 'react'
import { slide as Menu } from 'react-burger-menu'

function Navbar() {
    return (
        <Menu>
            <nav>
                <a id='Sign up' className='menu-item' href='/signup'>Sign up</a>
                <a id='Sign up' className='menu-item' href='/login'>Log in</a>
                <a id='Sign up' className='menu-item' href='/about'>About</a>
            </nav>
        </Menu>
    )
}

export default Navbar