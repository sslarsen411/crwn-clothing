import React from 'react'
import {
  Routes,
  Route,
  Link
} from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => (
  <div>
    <h1>HATS HATS HATS!</h1>
  </div>
)

function NoMatch () {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to='/'>Go to the home page</Link>
      </p>
    </div>
  )
}

function App () {
  return (
  // Different than video 80
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='/hats' element={<HatsPage />} />
      <Route path='*' element={<NoMatch />} />
    </Routes>
  )
}

export default App
