import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../../contexts/useProductContext";
import { useAuthContext } from "../../contexts/useAuthContext";

function Dashboard() {
  const { userDetails } = useAuthContext();
  // const { products } = useProductContext();
  console.log( userDetails);
  return (
    <>
      <h2>User Info will go here{userDetails}</h2>
      <h2>overview</h2>

      <h3>Recently added products</h3>
      {/* {products &&
        products.map((i) => (
          <div key={i._id}>
            {i.name} {i.description}
          </div>
        ))}
      {products && products.length > 1 && <Link to="/products">view more</Link>} */}
    </>
  );
}
export { Dashboard };
