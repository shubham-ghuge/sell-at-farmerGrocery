import React from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../../contexts/useDataContext";
import { Jumbotron } from "../Jumbotron";
import "./orders.css";

function Orders() {
  const { orders } = useDataContext();
  console.log(orders);
  return (
    <div className="orders">
      {orders.length !== 0 ? (
        <>
          <h2 className="mb-5">Orders</h2>
          <div className="order-container">
            <div className="headings c-white">
              <h3 className="sub-title">Order Id</h3>
              <h3 className="sub-title">Payment Status</h3>
              <h3 className="sub-title">Order Details</h3>
              <h3 className="sub-title">Delivery Status</h3>
            </div>
            <>
              {React.Children.toArray(
                orders &&
                  orders.map((i) => (
                    <div className="my-2">
                      <p>{i._id}</p>
                      <p>{i.paymentStatus ? "done" : "pending"}</p>
                      <Link to={`/orders/${i._id}`}>View Details</Link>
                      <p>pending</p>
                    </div>
                  ))
              )}
            </>
          </div>
        </>
      ) : (
        <Jumbotron
          heading="Sorry! No orders received :("
          text="You Haven't received any orders yet, add more products and keep checking this space!"
        />
      )}
    </div>
  );
}
export { Orders };
