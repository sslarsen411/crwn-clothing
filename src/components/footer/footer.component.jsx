import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './footer.styles.scss'

const Footer = () => {
  return (
    <div className=''>
      <div className='footer'>
        <Logo className='logo' />
        <span>Crown Clothing LTD</span>
        <div className='options'>
          <Link className='option' to='policy/cookie'>
            cookies
          </Link>
          <Link className='option' to='policy/privacy'>
            privacy
          </Link>
          <Link className='option' to='policy/terms'>
            terms
          </Link>
        </div>
      </div>
      <div className='copyright'>
        &copy; 2012 &mdash; <span id='currYr' />&nbsp;
        <a className='option' href='https://www.mojoimpact.com' target='_blank' rel='noreferrer'>Mojo Impact, LLC</a>
        &nbsp;All rights reserved.
      </div>
    </div>
  )
}

export default Footer
