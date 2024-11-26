

import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <h1><i>Baked Vibes</i></h1>
      </div>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/menu" className="nav-link">Menu</Link>
        <Link to="/cart" className="nav-link">Cart</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>
      </nav>
    </header>
  );
}

export default Header;


