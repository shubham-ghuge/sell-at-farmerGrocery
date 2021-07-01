import React, { useState } from "react";
import { useDataContext } from "../../contexts/useDataContext";
import { Card } from "../Cards";

function Product() {
  const { products } = useDataContext();
  return (
    <div className="p-5">
      <h2 className="mb-5">Your Products</h2>
      <div className="flex-layout">
        {products?.length !== 0 &&
          products.map((i) => <Card product={i} key={i._id} />)}
      </div>
    </div>
  );
}
export { Product };
