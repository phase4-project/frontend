import React, { useState, useEffect } from "react"
import LandingPage from './components/LandingPage'
import About from './components/About'
import Login from "./components/Login";
import Navbar from './components/Navbar'
import Pagination from './components/Pagination'
import Reviews from "./components/Reviews";
import Signup from "./components/Signup"
import AddCar from './components/AddCar'
import { Switch, Route, useHistory } from 'react-router-dom'
import './App.css';

function App() {
  const [cars, setCars] = useState([])
  const [searchIcon, setSearchIcon] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)
  const [user, setUser] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  // const [authChecked, setAuthChecked] = useState(false)

  // useEffect(() => {
  //   fetch('https://fathomless-island-77616.herokuapp.com/me', {
  //     credentials: 'include'
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         res.json().then((user) => {
  //           setCurrentUser(user)
  //           setAuthChecked(true)
  //         })
  //       } else {
  //         setAuthChecked(true)
  //       }
  //     })
  // }, [])



  useEffect(() => {
    fetch("https://fathomless-island-77616.herokuapp.com/cars")
      .then(res => res.json())
      .then(setCars)
  }, [])

  function handleSearchIcon() {
    setSearchIcon(!searchIcon)
  }

  function addUser(newUser) {
    const updatedUser = [...user, newUser]
    setUser(updatedUser)
  }


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = cars.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo(0, 0)
  }

  return (
    <div className="App">
      <Navbar currentUser={currentUser} />
      <Switch>
        <Route path='/home/:id'>
          <Reviews />
        </Route>
        <Route path='/addcar'>
          <AddCar />
        </Route>
        <Route path='/login'>
          <Login setCurrentUser={setCurrentUser} />
        </Route>
        <Route path='/signup'>
          <Signup addUser={addUser} />
        </Route>
        <Route path='/about'>
          < About />
        </Route>
        <Route exact path='/home'>
          <LandingPage cars={currentPosts} handleSearchIcon={handleSearchIcon} searchIcon={searchIcon} />
          <Pagination cars={cars} postsPerPage={postsPerPage} totalPosts={cars.length} paginate={paginate} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
