import React from 'react'
import {
  Routes,
  Route,
  Link
} from 'react-router-dom'
import './App.css'

import Header from './components/header/header.component.jsx'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component.jsx'

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
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  )
}

export default App
