import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import data from "./Pages/Products/ProductsData";

function CardItem(props) {
  // Find the product with matching category
  const matchingProduct = data.find(
    (product) => product.category === props.path
  );

  // If a matching product is found, use its category for the Link URL
  const linkURL = matchingProduct
    ? `/products-items/${matchingProduct.category}`
    : "/"; // Set default URL if no match found

  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={linkURL}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt="Image"
              src={`../images/${props.src}`}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
