import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'

import './Checkout.scss'

function Checkout() {

  const { cartItems, cartTotalPrice } = useContext(CartContext)

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>

      {
        cartItems.map((checkoutItem) => {
          return <CheckoutItem key={checkoutItem.id} checkoutItem={checkoutItem} />
        })
      }

      <div className='total'>
        TOTAL: ${cartTotalPrice}
      </div>
    </div>
  )
}

export default Checkout
