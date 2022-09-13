import { CartItemContainer, ItemDetails, Details } from './CartItemStyle'

function CartItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Details>{name}</Details>
        <Details>{quantity} x ${price}</Details>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem