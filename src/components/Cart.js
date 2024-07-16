import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  // Access the cart context
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map(product => (
        <div key={product._id}>
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <button onClick={() => removeFromCart(product._id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;