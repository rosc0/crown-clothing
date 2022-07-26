import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'

import { CartContext } from '../../context/CartContext'

import './CartDropdown.scss'

function CartDropdown() {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate() 

  const goToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />
        })}
      </div>
      <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown
