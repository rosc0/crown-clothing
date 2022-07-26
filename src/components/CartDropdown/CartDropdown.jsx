import Button from '../Button/Button'

import './CartDropdown.scss'

function CartDropdown() {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>

      </div>
      <Button>go to checkout</Button>
    </div>
  )
}

export default CartDropdown