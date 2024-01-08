import React from "react";
import "./Brands.css";

function BrandItem(props) {
  return (
    <>
      <li className="brands-list">
        <div className="brands-logo">
          <img
            src={`../images/brand-logos/${props.img}`}
            className="brands-img"
          />
        </div>
        <div className="brands-name">
          <h1>{props.text}</h1>
        </div>
      </li>
    </>
  );
}

export default BrandItem;
