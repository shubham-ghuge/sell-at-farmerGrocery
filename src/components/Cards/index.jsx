import React from "react";
import { Delete, Pen } from "../Icons";
import "./cards.css";

function Card({ product: { name, imgUrl, description, price, discount } }) {
  return (
    <figure className="wishlist-card mb-5">
      <img src={imgUrl} alt="product" />
      <figcaption>
        <div className="wishlist-details">
          <h3 className="wishlist-card-header">{name}</h3>
          <p className="wishlist-card-description">{description}</p>
          <div className="wishlist-card-price">
            <h4>₹{price - (price * discount) / 100}</h4>
            <p className="muted strike">₹{price}</p>
            <p className="text-danger">{discount}%</p>
          </div>
        </div>
        <div className="d-flex ai-center jc-center">
          <button className="btn-outline-danger btn-addon">
            <Delete />
            Delete
          </button>
          <button className="btn-outline-primary btn-addon mx-3">
            <Pen />
            Edit
          </button>
        </div>
      </figcaption>
    </figure>
  );
}
export { Card };
