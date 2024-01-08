import React from "react";
import "./Brands.css";
import BrandItem from "./BrandItem";
import data from "./brandsData";

function Brands() {
  const cards = data.map((item) => {
    return <BrandItem key={item.id} {...item} />;
  });
  return (
    <>
      <div className="brands-container">
        <div className="brands-wrapper">
          <h1>Our prominent Brands</h1>
          <ul className="brands-box">{cards}</ul>
        </div>
      </div>
    </>
  );
}

export default Brands;
