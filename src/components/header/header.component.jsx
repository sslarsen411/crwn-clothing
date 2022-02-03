import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = () => {
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
          Contact
        </Link>
        <a className='option' href='https://www.mojoimpact.com' target='_blank' rel='noreferrer'>Mojo Impact</a>
      </div>
    </div>
  )
}

export default Header
