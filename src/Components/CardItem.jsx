import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function CardItem({ label, src, text, category, path }) {
  return (
    <li className="cards__item">
      <Link className="cards__item__link" to={`/products-items/${path}`}>
        <figure className="cards__item__pic-wrap" data-category={category}>
          <img
            className="cards__item__img"
            alt="Image"
            src={`../images/${src}`}
          />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{text}</h5>
        </div>
      </Link>
    </li>
  );
}

export default CardItem;
