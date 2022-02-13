import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { selectCartHidden, selectCartItems } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import storage from 'redux-persist/lib/storage'

import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.utils'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.styles.scss'

const Header = ({ currentUser, hidden, cartItems }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <span>Crown Clothing LTD</span>
      <div className='options'>
        <Link className='option' to='/'>
          home
        </Link>
        <Link className='option' to='/shop'>
          shop
        </Link>
        <Link className='option' to='/contact'>
          contact
        </Link>
        {currentUser
          ? (
            <div
              className='option' onClick={() => auth.signOut()
                .then(() => {
                  storage.removeItem('persist:root') // clear any items in cart
                  window.location.reload()
                })}
            >
              sign out
            </div>
            )
          : (
            <Link className='option' to='/signin'>
              sign in
            </Link>
            )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(Header)
