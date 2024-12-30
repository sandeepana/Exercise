import React from "react";
import "./ThejanHome.css";
import Navigationbar from "./Navigationbar";

const ThejanHome = () => {
  return (
    <div className="home-container">
        
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Trendy Threads</h1>
        <p>Your one-stop shop for the latest fashion trends</p>
        <button className="shop-now-button">Shop Now</button>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="path-to-image1.jpg" alt="Product 1" />
            <h3>Stylish Jacket</h3>
            <p>$59.99</p>
          </div>
          <div className="product-card">
            <img src="path-to-image2.jpg" alt="Product 2" />
            <h3>Casual T-Shirt</h3>
            <p>$19.99</p>
          </div>
          <div className="product-card">
            <img src="path-to-image3.jpg" alt="Product 3" />
            <h3>Elegant Dress</h3>
            <p>$89.99</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2024 Trendy Threads. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ThejanHome;
