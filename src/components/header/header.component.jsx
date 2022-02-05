import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'

import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = ({ currentUser }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
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
        <a className='option' href='https://www.mojoimpact.com' target='_blank' rel='noreferrer'>Mojo Impact</a>
      </div>
    </div>
  )
}

export default Header
