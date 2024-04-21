import React from "react";
import { Link } from "react-router-dom";
import "./ProductsCards.css";

function ProductItem({ product }) {
  return (
    <figure key={product._id}>
      <div className="product-items-container">
        <div className="product-items-cards">
          <div className="product-items-category">
            <h2>{product.label}</h2>
          </div>
          <div className="product-img-section">
            {product.img && (
              <img
                src={`http://localhost:7000/${product.img}`}
                alt="Product Image"
                className="product-img"
              />
            )}
          </div>
          <div className="product-items-info">
            <div className="product-items-title">
              <h1>{product.title}</h1>
            </div>

            <div className="product-items-list">
              <div className="items-list">{product.description}</div>
            </div>
            <h2 className="product-price">
              <span>Price: </span>
              {product.price}
              <span>৳</span>
            </h2>
          </div>
          <Link className="order-now-link" to={`/products/${product.id}`}>
            <button className="order-now-btn">Order Now</button>
          </Link>
        </div>
      </div>
    </figure>
  );
}

export default ProductItem;
