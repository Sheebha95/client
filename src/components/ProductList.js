// Import necessary libraries and hooks from React
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the ProductList component
const ProductList = () => {
  // State to hold the list of products
  const [products, setProducts] = useState([]);

  // useEffect hook to fetch products when the component mounts
  useEffect(() => {
    // Function to fetch products
    const fetchProducts = async () => {
      // Get the products from the backend
      const { data } = await axios.get('/products');
      // Update the products state with the fetched data
      setProducts(data);
    };

    // Call the fetchProducts function
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map(product => (
        <div key={product._id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;