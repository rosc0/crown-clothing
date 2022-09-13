import { useContext } from 'react'

import { CartContext } from '../../context/CartContext'

import { ShoppingIcon, CartIconContainer, ItemCount } from './CartIconStyle'

function CartIcon() {

  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

  return (
    <CartIconContainer onClick={() => setIsCartOpen(!isCartOpen)}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon