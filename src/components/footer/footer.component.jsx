import React from 'react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { auth } from '../../firebase/firebase.utils'
import './footer.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
// import CartIcon from '../cart-icon/cart-icon.component'
// import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Footer = () => {
  return (
    <div className=''>      
      <div className='footer'>
        <Logo className='logo' />
        <span>Crown Clothing LTD</span>
        <div className='options'>
          <Link className='option' to='/cookies'>
            cookies
          </Link>
          <Link className='option' to='/privacy'>
            privacy
          </Link>
          <Link className='option' to='/terms'>
            terms
          </Link>
        </div>
      </div>
      <div className='copyright'>
        &copy; 2012 &mdash; 2022&nbsp;
        <a className='option' href='https://www.mojoimpact.com' target='_blank' rel='noreferrer'>Mojo Impact, LLC</a>&nbsp
        All rights reserved.
      </div>
    </div>
  )
}

export default Footer
