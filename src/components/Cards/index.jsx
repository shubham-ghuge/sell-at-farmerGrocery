import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../../contexts/useDataContext";
import { Delete, Pen } from "../Icons";
import { Modal } from "../Modal";
import "./cards.css";

function Card({
  product: { _id, name, imgUrl, description, price, discount },
}) {
  const { deleteProduct } = useDataContext();
  const [showModal, setShowModal] = useState(false);
  const [userResponse, setUserResponse] = useState(false);
  if (userResponse) {
    deleteProduct(_id);
  }
  return (
    <>
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
            <button
              className="btn-outline-danger btn-addon"
              onClick={() => setShowModal(true)}
            >
              <Delete />
              Delete
            </button>
            <Link
              to={`/products/add/${_id}`}
              className="btn-outline-primary btn-addon mx-3"
            >
              <Pen />
              Edit
            </Link>
          </div>
        </figcaption>
      </figure>
      {showModal && (
        <Modal
          heading={`Are you sure?`}
          message={`you want to permanently delete ${name}, you can't bring it back again!`}
          color="danger"
          onClose={() => setShowModal(false)}
          confirmAction={() => setUserResponse(true)}
        />
      )}
    </>
  );
}
export { Card };
