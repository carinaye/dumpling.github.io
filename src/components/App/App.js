

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage/homepage.js';
import About from '../About/about.js';
import Order from '../Order/order.js';
import Contact from '../Contact/contact.js';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
    
      </Routes>
    </BrowserRouter>
  );
};

export default App;
