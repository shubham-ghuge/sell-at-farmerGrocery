import React from "react";
import { useDataContext } from "../../contexts/useDataContext";

function Orders() {
  const { orders } = useDataContext();
  console.log(orders);
  return (
    <>
      {orders &&
        orders.map((i) => (
          <div className="" key={i._id}>
            {i.customerId.name}
            {i.products.map((j) => (
              <div className="" key={j._id}>
                {j.productId.name}
              </div>
            ))}
          </div>
        ))}
    </>
  );
}
export { Orders };
