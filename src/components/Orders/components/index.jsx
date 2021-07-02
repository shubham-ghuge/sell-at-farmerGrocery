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
  const { orders } = useDataContext();
  const data = orders.filter((i) => i._id === orderId);
  console.log(data);
  return (
    <div className="orders m-5 p-4">
      <h2 className="mt-3 mb-5">Order Details</h2>
      {React.Children.toArray(
        data.map((i) => (
          <>
            <SubTitle label="order id" text={i._id} />
            <SubTitle label="customer name" text={i.customerId.name} />
            <SubTitle label="customer email" text={i.customerId.email} />
            {i.products.map((j) => (
              <>
                <SubTitle label="product name" text={j.productId.name} />
                <SubTitle
                  label="product description"
                  text={j.productId.description}
                />
                <SubTitle label="product price" text={j.productId.price} />
                <SubTitle label="product quantity" text={j.quantity} />
              </>
            ))}
          </>
        ))
      )}
    </div>
  );
}
export { OrderDetails };
