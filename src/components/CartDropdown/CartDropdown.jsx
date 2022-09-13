import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'

import { CartContext } from '../../context/CartContext'

import { CartDropdownContainer, CartItems, EmptyMessage } from './CartDropdownStyle'

function CartDropdown() {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate() 

  const goToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? (
            cartItems.map((item) => {
              return <CartItem key={item.id} cartItem={item} />
            })
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )
        }
      </CartItems>
      <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown
