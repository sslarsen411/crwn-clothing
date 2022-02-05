import React from 'react'
import {
  Routes,
  Route,
  Link
} from 'react-router-dom'
import './App.css'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component'
import { auth, createUserProfileDocument} from './firebase/firebase.utils'

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
class App extends React.Component {
  constructor () {
    super()

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null 

  /* REACT LIFECYCLE METHODS */
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {          
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state)
        })       
      }      
      this.setState({ currentUser: userAuth })      
    })
  }  
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/signin' element={<SignInSignUpPage />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </div>
    )
  }
}

export default App
