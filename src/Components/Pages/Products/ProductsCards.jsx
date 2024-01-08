import React from "react";
import "./ProductsCards.css";
import ProductItem from "./ProductItem";
import { useParams } from "react-router-dom";

function ProductsCards({ allProducts }) {
  const { category } = useParams();

  let filteredProductsData;

  if (category) {
    filteredProductsData = allProducts
      .filter((product) => product.category === category)
      .map((item) => <ProductItem key={item.id} {...item} />);
  } else {
    filteredProductsData = allProducts.map((item) => (
      <ProductItem key={item.id} {...item} />
    ));
  }

  return (
    <>
      <section className="cards-section">{filteredProductsData}</section>
    </>
  );
}

export default ProductsCards;
