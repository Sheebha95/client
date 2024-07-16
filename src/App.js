import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <div>
        <h1>Product List</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;