import { createContext, useEffect, useState } from 'react'

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
  cartTotalPrice: 0,
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotalPrice, setCartTotalPrice] = useState(0)

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const removeCartItem = (productId) => {
    setCartItems(removeItem(cartItems, productId))
  }

  const addToQuantity = (productId) => {
    setCartItems(addQuantity(cartItems, productId))
  }

  const subtractFromQuantity = (productId) => {
    setCartItems(subtractQuantity(cartItems, productId))
  }

  useEffect(() => {
    const newCartTotalPrice = cartItems.reduce((total, cartItem) => {
      return total + (cartItem.quantity * cartItem.price)
    }, 0)
    setCartTotalPrice(newCartTotalPrice)
  }, [cartItems])

  useEffect(() => {
    const newCartTotalPrice = cartItems.reduce((total, cartItem) => {
      return total + (cartItem.quantity * cartItem.price)
    }, 0)
    setCartTotalPrice(newCartTotalPrice)
  }, [cartItems])

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    addToQuantity,
    subtractFromQuantity,
    removeCartItem,
    cartTotalPrice,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
