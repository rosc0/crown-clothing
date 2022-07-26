import { useContext } from 'react'
import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'

import { CartContext } from '../../context/CartContext'

import './CartDropdown.scss'

function CartDropdown() {

  const { cartItems } = useContext(CartContext)

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {
          cartItems.map((item) => {
            console.log('item :>> ', item);
            return <CartItem key={item.id} cartItem={item} />
          })
        }
      </div>
      <Button>go to checkout</Button>
    </div>
  )
}

export default CartDropdown