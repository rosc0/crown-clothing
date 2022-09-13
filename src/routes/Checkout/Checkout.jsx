import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'

import { 
  CheckoutContainer, 
  CheckoutHeader, 
  HeaderBlock,
  Total,
} from './CheckoutStyle'

function Checkout() {

  const { cartItems, cartTotal } = useContext(CartContext)

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {
        cartItems.map((checkoutItem) => {
          return <CheckoutItem key={checkoutItem.id} checkoutItem={checkoutItem} />
        })
      }

      <Total>
        TOTAL: ${cartTotal}
      </Total>
    </CheckoutContainer>
  )
}

export default Checkout
