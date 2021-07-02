import React from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../../contexts/useDataContext";
import { Jumbotron } from "../Jumbotron";
import "./orders.css";

function Orders() {
  const { orders } = useDataContext();
  return (
    <div className="order-container">
      {orders.length !== 0 ? (
        <>
          <h2 className="mb-5">Orders</h2>
          <div className="orders">
            <div className="headings c-white">
              <h3 className="sub-title">Order Id</h3>
              <h3 className="sub-title">Customer Email</h3>
              <h3 className="sub-title">Order Details</h3>
              <h3 className="sub-title">Delivery Status</h3>
            </div>
            <div className="my-2">
              {React.Children.toArray(
                orders &&
                  orders.map((i) => (
                    <>
                      <p>{i._id}</p>
                      <p>{i.customerId.name}</p>
                      <Link to={`/orders/${i._id}`}>View Details</Link>
                      <button className="btn-primary">pending</button>
                    </>
                  ))
              )}
            </div>
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
