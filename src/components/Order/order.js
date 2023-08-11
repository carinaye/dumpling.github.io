import React, { useState } from 'react';
import MEAL from './meal.js';
import './order.css';

const Order = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addToCart = (meal) => {
    setCartItems([...cartItems, meal]);
  };
  const removeFromCart = (meal) => {
    const updatedCart = cartItems.filter(item => item.id !== meal.id);
    setCartItems(updatedCart);
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div className="order-container">
      <h1 className="order-title">Welcome to Yang's Dumpling</h1>
      <div className="order-tabs">
        <button className={`order-tab ${!isCartVisible ? 'is-active' : ''}`} onClick={() => setIsCartVisible(false)}>
          Online Menu
          <span className="order-count">{MEAL.meal.length}</span>
        </button>
        <button className={`order-tab ${isCartVisible ? 'is-active' : ''}`} onClick={() => setIsCartVisible(true)}>
          Shopping Cart
          <span className="order-count">{cartItems.length}</span>
        </button>
      </div>
      <div className="order-content">
        {isCartVisible ? (
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        ) : (
          <Menu addToCart={addToCart} />
        )}
      </div>
    </div>
  );
};

const Menu = ({ addToCart }) => {
  return (
    <div className="menu-container">
      {MEAL.meal.map(meal => (
        <div key={meal.id} className="menu-item">
          <img src={meal.picture} alt={meal.title} />
          <h2>{meal.title}</h2>
          <p>{meal.introduction}</p>
          <p>Price: {meal.price}</p>
          <button onClick={() => addToCart(meal)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((totalPrice, item) => totalPrice + parseFloat(item.price), 0);

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart is</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <h3>{item.title}</h3>
          <p>Price: {item.price}</p>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
      <h1>Total Price: ${total.toFixed(2)}</h1>
      < button>Checkout</button>
    </div>
  );
};

export default Order;


