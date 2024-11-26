
import { useState } from "react";
import { Link } from "react-router-dom"; 
import './Cart.css'; 
import chocolateCakeImg from './images/cake.jpg';
import croissantImg from './images/croissant.jpg';
import vanillaCupcakeImg from './images/vanilla.jpg';
import applePieImg from './images/applepie.jpg';
import cheeseBreadImg from './images/cheesebread.jpg';
import blueberryMuffinImg from './images/blueberry.jpg';

function Cart() {
  // Initializing the cart with example product data
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Chocolate Cake",
      price: 20.00,
      quantity: 1,
      image: chocolateCakeImg 
    },
    {
      id: 2,
      name: "Croissant",
      price: 5.00,
      quantity: 2,
      image: croissantImg 
    },
    {
      id: 3,
      name: "Vanilla Cupcake",
      price: 3.00,
      quantity: 4,
      image: vanillaCupcakeImg  
    },
    {
      id: 4,
      name: "Apple Pie",
      price: 15.00,
      quantity: 1,
      image: applePieImg 
    },
    {
      id: 5,
      name: "Cheese Bread",
      price: 2.50,
      quantity: 3,
      image: cheeseBreadImg 
    },
    {
      id: 6,
      name: "Blueberry Muffin",
      price: 2.00,
      quantity: 2,
      image: blueberryMuffinImg 
    },
  ]);

  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const updateQuantity = (index, delta) => {
    const newCart = [...cart];
    const newQuantity = newCart[index].quantity + delta;

    if (newQuantity > 0) {
      newCart[index].quantity = newQuantity;
      setCart(newCart);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">Rs {item.price.toFixed(2)} x {item.quantity}</p>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(index, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(index, 1)}>+</button>
                </div>
                <button onClick={() => removeItem(index)} className="remove-button">Remove</button>
              </div>
            </div>
          ))}
          <h3 className="total">Total: Rs {total.toFixed(2)}</h3>
    
          <Link to="/checkout">
            <button className="checkout-button">Proceed to Checkout</button>
          </Link>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}

export default Cart;



