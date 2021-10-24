import React, { useState } from "react"
import "./App.css"
import Landingpage from "./components/Landingpage"
import Navbar from './components/Navbar'
import About from './components/About'
import { Switch, Route } from 'react-router-dom'
import magnify from './magnifier.png'

function App() {

  const [search, onSearch] = useState(false)
  const [user, setUser] = useState(false)

  function handleClick() {
    onSearch(!search)
  }

  function handleUser() {
    setUser(!user)
  }

  return (
    <div>
      <Navbar user={user} handleUser={handleUser} />
      {user ?
        <div className='landing-content'>
          <h1 className='app-name'>App Name</h1>
          {search ? <input placeholder='Search Cars...' className='search' /> : <img className='search-icon' onClick={handleClick} src={magnify} alt='magnifying glass' />}
          <div className='user-content'>
            <h1>Welcome back, Billy</h1>
            <button>Add Car</button>
          </div>
        </div>
        :
        <div className='landing-content'>
          <h1 className='app-name'>App Name</h1>
          {search ? <input placeholder='Search Cars...' className='search' /> : <img className='search-icon' onClick={handleClick} src={magnify} alt='magnifying glass' />}
        </div>
      }
      <Switch>
        <Landingpage exact path='/' />
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </div>
  )
}

export default App