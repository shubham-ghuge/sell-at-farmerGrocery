import React from "react";
import { Link } from "react-router-dom";

function Jumbotron({
  heading = "Your Product List is lighter than a feather",
  text = "add products to your list and start your selling journey",
  link,
  linkText = "Add Products",
}) {
  return (
    <div className={`jumbotron m-0 bgc-primary-100`}>
      <div className="content">
        <h3 className="jumbotron-title">{heading}</h3>
        <p className="jumbotron-description">{text}</p>
        {link && (
          <Link
            className={`jumbotron-cta btn-outline-primary bgc-base-100`}
            to={link}
          >
            {linkText}
          </Link>
        )}
      </div>
    </div>
  );
}
export { Jumbotron };
