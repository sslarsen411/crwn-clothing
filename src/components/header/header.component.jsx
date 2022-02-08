import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.utils'
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <h1>Crown Clothing LTD</h1>
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
/* how to destructure nested objects */
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header)
