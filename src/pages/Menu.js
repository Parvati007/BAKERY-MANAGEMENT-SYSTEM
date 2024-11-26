
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";  
import './Menu.css';  

function Menu() {
  const [products, setProducts] = useState([]);

  // Fetch products data from an API endpoint when component loads
  useEffect(() => {
    axios.get("http://localhost:3001/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <p>
        Discover our wide selection of freshly baked goods, made with love and the finest ingredients. 
        From classic favorites to seasonal specialties, there’s something for everyone!
      </p>

      <section className="menu-categories">
        <h3>Breads</h3>
        <p>Explore our artisanal breads, perfect for sandwiches or to enjoy with butter.</p>

        <h3>Pastries</h3>
        <p>Indulge in our flaky pastries filled with cream, fruit, and chocolate.</p>

        <h3>Cakes</h3>
        <p>Celebrate with our delicious cakes, available in various flavors and sizes.</p>

        <h3>Cookies</h3>
        <p>Enjoy our homemade cookies, a perfect treat for any occasion.</p>
      </section>

      <section className="featured-products">
        <h3>Featured Items</h3>
        <div className="menu-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Menu;


