import React from "react";
import "./Products.css";
import Card from "../../Card.jsx";

function Products() {
  return (
    <>
      <div>
        <div className="search-margin">
          <div className="search-container">
            <input placeholder="Please type to search" />
            <div className="search-button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
        <div>
          <Card />
        </div>
      </div>
    </>
  );
}

export default Products;
