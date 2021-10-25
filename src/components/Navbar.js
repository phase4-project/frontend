import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import burgermenu from '../bm-white.png'

function Navbar({ user, handleUser }) {

    return (
        <Menu customBurgerIcon={<img src={burgermenu} alt='burgermenu' />} isOpen={false}>
            {user ?
                <nav>
                    <Link to='/'><a id='Sign up' className='menu-item' href='/'>Home</a></Link>
                    <Link to='/profile'><a id='Sign up' className='menu-item' href='/profile'>My Cars</a></Link>
                    <Link to='/'><a id='Sign up' className='menu-item' href='/login' onClick={handleUser}>Log out</a></Link>
                    <Link to='/about'><a id='Sign up' className='menu-item' href='/about'>About</a></Link>
                </nav> :
                <nav>
                    <Link to='/'><a id='Sign up' className='menu-item' href='/'>Home</a></Link>
                    <Link to='/signup'><a id='Sign up' className='menu-item' href='/signup'>Sign up</a></Link>
                    <Link to='/'><a id='Sign up' className='menu-item' href='/login' onClick={handleUser}>Log in</a></Link>
                    <Link to='/about'><a id='Sign up' className='menu-item' href='/about'>About</a></Link>
                </nav>
            }
        </Menu>
    )
}

export default Navbar