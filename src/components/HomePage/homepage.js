import React from 'react'
import backgroundImage from '../Images/background.jpg'
import logo from '../Images/logo.png'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Contact from '../Contact/contact.js'
import About from '../About/about.js'
import Order from '../Order/order.js';
import './homepage.css'

const HomePage = () => {
  return (
    <>
      <div>
        <header>
          <img src={logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </header>
      </div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          height: '110vh'
        }}
      >
        <nav className="nav-container">
          <Link to="/about" className="nav-link about-link">About Us</Link>
          {' | '}
          <Link to="/order" className="nav-link about-link">Order Now</Link>
          {' | '}
          <Link to="/contact" className="nav-link about-link">Contact Us</Link>
        </nav>
      </div>
    </>
  );
};

export default HomePage;