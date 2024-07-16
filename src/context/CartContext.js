import React, { createContext, useState } from 'react';

// Create a context for the cart
export const CartContext = createContext();

// Define the CartProvider component
export const CartProvider = ({ children }) => {
  // State to hold the cart items
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product._id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};