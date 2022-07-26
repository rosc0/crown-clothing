import { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { CartContext } from '../../context/CartContext'

import './CartIcon.scss'

function CartIcon() {

  const { isCartOpen, setIsCartOpen } = useContext(CartContext)

  return (
    <div className='cart-icon-container' onClick={() => setIsCartOpen(!isCartOpen)}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>10</span>
    </div>
  )
}

export default CartIcon