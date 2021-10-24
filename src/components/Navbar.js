import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'

function Navbar({ user, handleUser }) {

    return (
        <Menu isOpen={false}>
            {user ?
                <nav>
                    <a id='Sign up' className='menu-item' href='/'>Home</a>
                    <a id='Sign up' className='menu-item' href='/profile'>My Cars</a>
                    <a id='Sign up' className='menu-item' href='/login'>Log out</a>
                    <a id='Sign up' className='menu-item' href='/about'>About</a>
                    <button onClick={handleUser}>Log out</button>
                </nav> :
                <nav>
                    <a id='Sign up' className='menu-item' href='/'>Home</a>
                    <a id='Sign up' className='menu-item' href='/signup'>Sign up</a>
                    <a id='Sign up' className='menu-item' href='/login'>Log in</a>
                    <a id='Sign up' className='menu-item' href='/about'>About</a>
                    <button onClick={handleUser}>Log in</button>
                </nav>
            }
        </Menu>
    )
}

export default Navbar