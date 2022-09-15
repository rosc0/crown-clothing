import { useDispatch, useSelector } from 'react-redux'

import { selectCartItems } from '../../store/cart/cart.selector'
import { addItemToCart } from '../../store/cart/cart.action'

import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button'

import { ProductCardContainer, Footer, Name, Price } from './ProductCardStyle'

function ProductCard({ product }) {
  const dispatch = useDispatch()
  const { name, price, imageUrl } = product
  const cartItems = useSelector(selectCartItems)
  
  const addToCart = (product) => dispatch(addItemToCart(cartItems, product))

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={() => addToCart(product)}>
        ADD TO CART
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard
