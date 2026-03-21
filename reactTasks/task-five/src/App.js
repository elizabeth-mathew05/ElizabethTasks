import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import ProductModal from "./components/ProductModal";
import "./App.css";

// Main App component for the Fake Store Cart
function App() {
  // State for products, cart, modal visibility, and alert
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [alert, setAlert] = useState("");

  // Fetch products from Fake Store API on mount
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Add product to cart, show alert if already in cart
  const addToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      setAlert("Item already added to the cart");
      setTimeout(() => setAlert(""), 2000);
      return;
    }
    setCart([...cart, product]);
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
      {/* Navbar/Header with cart count and cart button */}
      <Header cartCount={cart.length} onCartClick={() => setShowCart(true)} />

      {/* Alert for duplicate add */}
      {alert && <div className="alert" style={{ background: '#ffe0b2', color: '#e65100', padding: '10px', borderRadius: 6, margin: '16px auto', maxWidth: 400, textAlign: 'center', fontWeight: 500 }}>{alert}</div>}

      {/* Responsive product grid */}
      <div className="container" style={{ marginTop: 32 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              inCart={!!cart.find((item) => item.id === product.id)}
            />
          ))}
        </div>
      </div>

      {/* Cart modal */}
      <ProductModal
        show={showCart}
        onClose={() => setShowCart(false)}
        cart={cart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;
