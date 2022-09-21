import { FC, memo } from 'react';

import { CartItem as TCartItem } from '../../store/cart/cart.types';

import { CartItemContainer, ItemDetails, Details } from './CartItemStyle';

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Details>{name}</Details>
        <Details>
          {quantity} x ${price}
        </Details>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
