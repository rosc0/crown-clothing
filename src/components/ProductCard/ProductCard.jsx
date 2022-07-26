import { useContext } from 'react'
import Button from '../Button/Button'
import { CartContext } from '../../context/CartContext'

import './ProductCard.scss'

function ProductCard({ product }) {

  const { addItemToCart } = useContext(CartContext)
  const { name, price, imageUrl } = product

  const addToCart = (product) => addItemToCart(product)

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={() => addToCart(product)}>ADD TO CART</Button>
    </div>
  )
}

export default ProductCard