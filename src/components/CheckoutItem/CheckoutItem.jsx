import { useDispatch, useSelector } from 'react-redux'

import { selectCartItems } from '../../store/cart/cart.selector'
import { addToQuantity, subtractFromQuantity, removeCartItem } from '../../store/cart/cart.action'

import { 
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Arrow,
  Value,
  Price,
  RemoveButton,
 } from './CheckoutItemStyle'

function CheckoutItem({ checkoutItem }) {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const { id, name, imageUrl, quantity, price } = checkoutItem

  const addQuantity = (productId) => dispatch(addToQuantity(cartItems, productId))
  const subtractQuantity = (productId) => dispatch(subtractFromQuantity(cartItems, productId))
  const removeItem = (productId) => dispatch(removeCartItem(cartItems, productId))

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={() => subtractQuantity(id)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addQuantity(id)}>&#10095;</Arrow>
      </Quantity>
      <Price>${price}</Price>
      <RemoveButton onClick={() => removeItem(id)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem