import React from "react";
import { useParams } from "react-router";
import { useDataContext } from "../../../contexts/useDataContext";

function SubTitle({ label, text }) {
  return (
    <h2 className="sub-title">
      {label}
      {": "}
      {text}
    </h2>
  );
}
function OrderDetails() {
  const { orderId } = useParams();
  const { orders, products } = useDataContext();
  const data = orders.filter((i) => i._id === orderId);
  function getProductDetails(productId, field) {
    const product = products.find((i) => i._id === productId);
    return product[field];
  }
  console.log(data);
  return (
    <div className="orders m-5 p-4">
      <h2 className="mt-3 mb-5">Order Details</h2>
      {React.Children.toArray(
        data.map((i) => (
          <>
            <SubTitle label="order id" text={i._id} />
            {React.Children.toArray(
              i.products.map((j) => (
                <div style={{border:"1px solid grey mb-7"}}>
                  <SubTitle
                    label="product name"
                    text={getProductDetails(j.productId, "name")}
                  />
                  <SubTitle
                    label="product description"
                    text={getProductDetails(j.productId, "description")}
                  />
                  <SubTitle
                    label="product price"
                    text={getProductDetails(j.productId, "price")}
                  />
                  <SubTitle label="product quantity" text={j.quantity} />
                </div>
              ))
            )}
          </>
        ))
      )}
    </div>
  );
}
export { OrderDetails };
