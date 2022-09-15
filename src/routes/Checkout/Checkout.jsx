import { useSelector } from 'react-redux'

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'

import { 
  CheckoutContainer, 
  CheckoutHeader, 
  HeaderBlock,
  Total,
} from './CheckoutStyle'

function Checkout() {

  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

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
