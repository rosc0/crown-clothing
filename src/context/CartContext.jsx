import { createContext, useReducer } from 'react'
import { createAction } from '../utils/reducer/reducer.utils'

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

export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  addToQuantity: () => {},
  subtractFromQuantity: () => {},
  removeCartItem: () => {},
  cartTotal: 0,
})

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
}

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
}

const cartReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      }

    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      }
  
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`)
  }

}

export const CartProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(cartReducer, INITIAL_STATE)
  const { isCartOpen, cartItems, cartCount, cartTotal } = state

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)

    const newCartTotal = newCartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.price
    }, 0)
    
    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
      cartItems: newCartItems,
      cartTotal: newCartTotal,
      cartCount: newCartCount,
    }))
  }

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    updateCartItemsReducer(newCartItems)
  }

  const removeCartItem = (productId) => {
    const newCartItems = removeItem(cartItems, productId)
    updateCartItemsReducer(newCartItems)
  }

  const addToQuantity = (productId) => {
    const newCartItems = addQuantity(cartItems, productId)
    updateCartItemsReducer(newCartItems)
  }

  const subtractFromQuantity = (productId) => {
    const newCartItems = subtractQuantity(cartItems, productId)
    updateCartItemsReducer(newCartItems)
  }

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    addToQuantity,
    subtractFromQuantity,
    removeCartItem,
    cartTotal,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
