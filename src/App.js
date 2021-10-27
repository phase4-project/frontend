import React, { useState, useEffect } from "react"
import "./App.css"
import Landingpage from "./components/Landingpage"
import Navbar from './components/Navbar'
import About from './components/About'
import { Switch, Route, useParams } from 'react-router-dom'
import Pagination from './components/Pagination'
import SignUp from './components/SignUp'
import CarReviews from './components/CarReviews'
function App() {
  const [search, onSearch] = useState(false)
  const [user, setUser] = useState([])
  const [cars, setCars] = useState([])
  const [singleCar, setSingleCar] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)
  const [pageId, setPageId] = useState('')
  
  URL = "https://fathomless-island-77616.herokuapp.com/"

  useEffect(() => {
    fetch(`${URL}/cars`)
      .then(res => res.json())
      .then(setCars)
  }, [])
  
 

  
  //   function singleCarFetch(id){
  //   fetch(`${URL}cars/${id}`)
  //     .then(res => res.json())
  //     .then(setSingleCar)
  // }

  console.log(singleCar)


  

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
      <Route path='/:id'>
          <CarReviews /*singleCar={singleCar}*//>
        </Route>
        <Route exact path='/'>
          <Landingpage cars={currentPosts} user={user} handleClick={handleClick} search={search} /*singleCarFetch={singleCarFetch} setPageId={setPageId} *//>
          <Pagination cars={cars} postsPerPage={postsPerPage} totalPosts={cars.length} paginate={paginate} />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/signup'>
          <SignUp URL={URL}/>
        </Route>
        
      </Switch>
    </div>
  )
}

export default App