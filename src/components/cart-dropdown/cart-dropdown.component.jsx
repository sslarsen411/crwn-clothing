import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useNavigate } from 'react-router-dom'

import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions.js'

import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    dispatch(toggleCartHidden())
    navigate('/checkout')
  }
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length
          ? (
              cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
              ))
            )
          : (
            <span className='empty-message'>Your cart is empty</span>
            )}
      </div>
      <CustomButton onClick={handleClick}>go to checkout</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown)
