import React from "react";
import { useParams } from "react-router-dom";
import ProductItem from "./ProductItem";
import "./ProductsCards.css";

function ProductsCards({ allProducts }) {
  const { path } = useParams();

  // Filter products based on category if a category is specified in the route
  const filteredProducts = path
    ? allProducts.filter((product) => product.category === path)
    : allProducts;

  return (
    <div className="cards-section">
      {filteredProducts.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </div>
  );
}

export default ProductsCards;
