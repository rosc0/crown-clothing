import { useContext } from 'react'

import { CartContext } from '../../context/CartContext'

import './CheckoutItem.scss'

function CheckoutItem({ checkoutItem }) {

  const { id, name, imageUrl, quantity, price } = checkoutItem
  const { addToQuantity, subtractFromQuantity, removeCartItem } = useContext(CartContext)

  const addQuantity = (productId) => addToQuantity(productId)
  const subtractQuantity = (productId) => subtractFromQuantity(productId)
  const removeItem = (productId) => removeCartItem(productId)

  return (
    <div className='checkout-item-container'>
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className='arrow' onClick={() => subtractQuantity(id)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addQuantity(id)}>&#10095;</div>
      </span>
      <span className="price">${price}</span>
      <div className='remove-button' onClick={() => removeItem(id)}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem