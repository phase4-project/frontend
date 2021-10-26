import React, { useState, useEffect } from "react"
import "./App.css"
import Landingpage from "./components/Landingpage"
import Navbar from './components/Navbar'
import About from './components/About'
import { Switch, Route } from 'react-router-dom'
import Pagination from './components/Pagination'

function App() {
  const [search, onSearch] = useState(false)
  const [user, setUser] = useState(false)
  const [cars, setCars] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)


  useEffect(() => {
    fetch('https://fathomless-island-77616.herokuapp.com/cars')
      .then(res => res.json())
      .then(setCars)
  }, [])

  console.log(cars);

  function handleClick() {
    onSearch(!search)
  }

  function handleUser() {
    setUser(!user)
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = cars.slice(indexOfFirstPost, indexOfLastPost)


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo(0, 0)
  }


  return (
    <div>
      <Navbar user={user} handleUser={handleUser} />
      {user ?
        <div className='landing-content'>
          <h1 className='app-name'>App Name</h1>
          <div className='user-content'>
            <h1>Welcome back, Billy</h1>
            <button>Add Car</button>
          </div>
        </div>
        :
        <div className='landing-content'>
          <h1 className='app-name'>App Name</h1>
        </div>
      }
      <Switch>
        <Route exact path='/'>
          <Landingpage cars={currentPosts} user={user} handleClick={handleClick} search={search} />
          <Pagination postsPerPage={postsPerPage} totalPosts={cars.length} paginate={paginate} />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </div>
  )
}

export default App