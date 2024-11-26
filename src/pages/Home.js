
import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css'; 
import welcomeImg from './images/welcome.jpg'; 
import chocolateCakeImg from './images/cake.jpg'; 
import croissantImg from './images/croissant.jpg'; 
import artisanBreadImg from './images/cheesebread.jpg';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Our Bakery!</h1>
      <br />
      <img src={welcomeImg} alt="Welcome to Our Bakery" className="welcome-image" />
      <h2>Freshly baked goods every day!</h2>

      <section className="about">
        <h2>About Us</h2>
        <br />
        <p>
          At our bakery, we believe in using the finest ingredients to create delicious treats that bring joy to your day. 
          Our commitment to quality means that we source only the best local and organic ingredients, ensuring that every bite is not only delightful but also wholesome.
        </p>
        <p>
          From classic breads to pastries that melt in your mouth, each item is crafted with love and care by our passionate bakers.
        </p>
      </section>

      <section className="featured-products">
        <h3>Featured Products</h3>
        <div className="featured-items">
          <div className="item">
            <img src={chocolateCakeImg} alt="Chocolate Cake" className="product-image1" />
            <h4>Chocolate Cake</h4>
            <p>Rich and moist chocolate cake layered with creamy chocolate frosting.</p>
          </div>
          <div className="item">
            <img src={croissantImg} alt="Fresh Croissants" className="product-image" />
            <h4>Fresh Croissants</h4>
            <p>Buttery and flaky croissants baked fresh every morning.</p>
          </div>
          <div className="item">
            <img src={artisanBreadImg} alt="Artisan Bread" className="product-image" />
            <h4>Artisan Bread</h4>
            <p>Crispy on the outside, soft on the inside, made with organic flour.</p>
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <h3>Visit Us Today!</h3>
        <p>
          Stop by our bakery for a taste of our delicious offerings. We are located in the heart of the city.
        </p>
        <Link to="/menu">
          <button className="cta-button">See Our Menu</button>
        </Link>
      </section>

      <section className="auth-buttons">
        <h3>Get Started</h3>
        <p>Log in to your account or register to explore more features.</p>
        <div className="buttons">
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
          <Link to="/register">
            <button className="register-button">Register</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
