import React from "react";
import "./ProductsCards.css";
import { Link } from "react-router-dom";

function ProductItem(props) {
  return (
    <figure>
      <div className="product-items-container">
        <div className="product-items-cards">
          <div className="product-img-section">
            <img
              className="product-img"
              src={`../images/product-img/${props.img}`}
            />
          </div>
          <div className="product-items-info">
            <div className="product-items-title">
              <h1>{props.title}</h1>
            </div>
            <ul className="product-items-list">
              <li className="items-list">{props.description.line1}</li>
              <li className="items-list">{props.description.line2}</li>
              <li className="items-list">{props.description.line3}</li>
              <li className="items-list">{props.description.line4}</li>
            </ul>
            <h2 className="product-price">{props.price}</h2>
          </div>
          <Link className="order-now-link">
            <button className="order-now-btn">Order Now</button>
          </Link>
        </div>
      </div>
    </figure>
  );
}

export default ProductItem;
