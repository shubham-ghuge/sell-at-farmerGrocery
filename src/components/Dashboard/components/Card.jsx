import React from "react";
import { Link } from "react-router-dom";

function Card({
  details: {
    heading,
    count,
    link = "",
    linkText = "",
    symbol = "",
    shadow = true,
  },
  icon,
}) {
  return (
    <div
      className={`text-card flex-column w-sm-20 ${shadow ? " " : "no-shadow"}`}
    >
      <div className="d-flex">
        {icon}
        <div className="card-details">
          <h3 className="card-header">{heading}</h3>
          <p className="fw-500">
            <span className="fsz-2 mr-2">{symbol}</span>
            {count}
          </p>
        </div>
      </div>
      <Link className="c-primary" to={link}>
        {linkText}
      </Link>
    </div>
  );
}
export { Card };
