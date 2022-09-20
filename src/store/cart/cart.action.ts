import {
  createAction,
  withMatcher,
  ActionWithPayload,
} from '../../utils/reducer/reducer.utils';

import { CART_ACTION_TYPES, CartItem } from './cart.types';
import { CategoryItem } from '../categories/categories.types';

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeItem = (cartItems: CartItem[], productId: number): CartItem[] => {
  return cartItems.filter((cartItem) => {
    return cartItem.id !== productId;
  });
};

const addQuantity = (cartItems: CartItem[], productId: number): CartItem[] => {
  return cartItems.map((cartItem) => {
    return cartItem.id === productId
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem;
  });
};

const subtractQuantity = (
  cartItems: CartItem[],
  productId: number
): CartItem[] => {
  const existingItem = cartItems.find((cartItem) => {
    return cartItem.id === productId;
  });

  if (existingItem && existingItem.quantity > 1) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productId
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
  } else {
    return removeItem(cartItems, productId);
  }
};

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setIsCartOpen = withMatcher(
  (boolean: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeCartItem = (cartItems: CartItem[], productId: number) => {
  const newCartItems = removeItem(cartItems, productId);
  return setCartItems(newCartItems);
};

export const addToQuantity = (cartItems: CartItem[], productId: number) => {
  const newCartItems = addQuantity(cartItems, productId);
  return setCartItems(newCartItems);
};

export const subtractFromQuantity = (
  cartItems: CartItem[],
  productId: number
) => {
  const newCartItems = subtractQuantity(cartItems, productId);
  return setCartItems(newCartItems);
};
