import React from "react";
import { Link } from "react-router-dom";

function Jumbotron({
  heading = "Your Product List is lighter than a feather",
  text = "add products to your list and start your selling journey",
  link,
}) {
  return (
    <div className={`jumbotron m-0 bgc-success-100`}>
      <div className="content">
        <h3 className="jumbotron-title">{heading}</h3>
        <p className="jumbotron-description">{text}</p>
        {link && (
          <Link
            className={`jumbotron-cta btn-outline-success bgc-base-100`}
            to={link}
          >
            Add Products
          </Link>
        )}
      </div>
    </div>
  );
}
export { Jumbotron };
