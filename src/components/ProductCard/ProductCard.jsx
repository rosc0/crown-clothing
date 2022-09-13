import { useContext } from 'react'
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button'
import { CartContext } from '../../context/CartContext'

import { ProductCardContainer, Footer, Name, Price } from './ProductCardStyle'

function ProductCard({ product }) {

  const { addItemToCart } = useContext(CartContext)
  const { name, price, imageUrl } = product

  const addToCart = (product) => addItemToCart(product)

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={() => addToCart(product)}>ADD TO CART</Button>
    </ProductCardContainer>
  )
}

export default ProductCard