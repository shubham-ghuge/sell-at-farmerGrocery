import React, { useEffect, useState } from "react";
import { useDataContext } from "../../contexts/useDataContext";
import { Card } from "../Cards";
import { Loader } from "../Icons";
import { Jumbotron } from "../Jumbotron";

function Product() {
  const { products, loading, getProductsData } = useDataContext();
  useEffect(() => {
    getProductsData();
  }, []);
  return (
    <div className="p-5">
      <h2 className="mb-5 fsz-3">Your Products</h2>
      {loading && (
        <div className="d-flex ai-center jc-center mb-5">
          <h2 className="sub-title">Fetching Products</h2>
          <Loader />
        </div>
      )}
      <div className="flex-layout">
        {products.length !== 0 ? (
          products.map((i) => <Card product={i} key={i._id} />)
        ) : (
          <Jumbotron link="/products/add" />
        )}
      </div>
    </div>
  );
}
export { Product };
