import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Gold from './pages/Gold';
import Silver from './pages/Silver';
import Diamond from './pages/Diamond';
import Platinum from './pages/Platinum';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Profile from './pages/Profile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path="/home/gold" element={<Gold />} />
        <Route path="/home/silver" element={<Silver />} />
        <Route path="/home/diamond" element={<Diamond />} />
        <Route path="/home/platinum" element={<Platinum />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
