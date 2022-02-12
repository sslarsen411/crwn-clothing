import React from 'react'
import {
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { auth, createUserProfileDocument} from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'

import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import CheckoutPage from './pages/checkout/checkout.component'
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component'
import PolicyPage from './pages/policy/policy-component'

import './App.css'

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

const currentDate = new Date()
 
class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    })
  // Set date in footer
    document.querySelector("#currYr").innerHTML = currentDate.getFullYear()
  } 
  
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render () {
    return (
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop/*' element={<ShopPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          {/* v6 Redirect */}
          <Route 
          path="/signin" element={this.props.currentUser ? 
          <Navigate to="/"/> 
          : <SignInSignUpPage />} /> 
          <Route path='/policy/:policyId' element={<PolicyPage />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
