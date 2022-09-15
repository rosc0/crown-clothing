import { createAction } from '../../utils/reducer/reducer.utils'
import { CART_ACTION_TYPES } from './cart.types'

export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)




const addCartItem = (cartItems, productToAdd) => {
  // find if exists
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === productToAdd.id
  })
  // add to existing
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    )
  }
  // else return first adding of item
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeItem = (cartItems, productId) => {
  return cartItems.filter((cartItem) => {
    return cartItem.id !== productId
  })
}

const addQuantity = (cartItems, productId) => {
  return cartItems.map((cartItem) => {
    return cartItem.id === productId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
  })
}

const subtractQuantity = (cartItems, productId) => {
  const existingItem = cartItems.find((cartItem) => {
    return cartItem.id === productId
  })

  if (existingItem.quantity > 1) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    })
  } else {
    return removeItem(cartItems, productId)
  }
}




export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeCartItem = (cartItems, productId) => {
  const newCartItems = removeItem(cartItems, productId)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const addToQuantity = (cartItems, productId) => {
  const newCartItems = addQuantity(cartItems, productId)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const subtractFromQuantity = (cartItems, productId) => {
  const newCartItems = subtractQuantity(cartItems, productId)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}