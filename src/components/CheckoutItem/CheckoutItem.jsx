import { useContext } from 'react'

import { CartContext } from '../../context/CartContext'

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

  const { id, name, imageUrl, quantity, price } = checkoutItem
  const { addToQuantity, subtractFromQuantity, removeCartItem } = useContext(CartContext)

  const addQuantity = (productId) => addToQuantity(productId)
  const subtractQuantity = (productId) => subtractFromQuantity(productId)
  const removeItem = (productId) => removeCartItem(productId)

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