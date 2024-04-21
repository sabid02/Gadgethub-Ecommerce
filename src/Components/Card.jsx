import React from "react";
import "./Card.css";
import CardItem from "./CardItem";
import data from "./HomeData";
// import data from "./Pages/Products/ProductsData";

function Cards() {
  const cards = data.map((item) => {
    return <CardItem key={item.id} {...item} />;
  });
  return (
    <div className="cards">
      <h1>Our Tech Categories</h1>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <section className="product-items">
              <div className="card__section">{cards}</div>
            </section>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
