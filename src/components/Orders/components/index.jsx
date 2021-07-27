import React, { useState } from "react";
import { useParams } from "react-router";
import { useDataContext } from "../../../contexts/useDataContext";

function SubTitle({ label, text }) {
  return (
    <h2 className="sub-title">
      {label}
      {": "}
      <span className="fw-400">{text}</span>
    </h2>
  );
}
function OrderDetails() {
  const { orderId } = useParams();
  const { orders, products } = useDataContext();

  const data = orders.filter((i) => i._id === orderId);
  function getProductDetails(productId) {
    const product = products.find((i) => i._id === productId);
    return product;
  }
  return (
    <div className="orders m-5 p-4">
      <h2 className="mt-3 mb-5">Order Details</h2>
      {React.Children.toArray(
        data.length === 0 ? (
          <h2 className="fsz-2">No Order found</h2>
        ) : (
          data.map((i) => {
            const {
              _id,
              addressId: { address, pincode },
              paymentStatus,
              products,
            } = i;
            return (
              <>
                <SubTitle label="order id" text={_id} />
                <SubTitle
                  label="Delivery Details"
                  text={`${address} ${pincode}`}
                />
                <SubTitle
                  label="Payment Status"
                  text={`${paymentStatus ? "done" : "pending"}`}
                />
                <SubTitle
                  label="Delivery Status"
                  text={`${i.deliveryStatus ? "done" : "pending"}`}
                />
                <h2 className="fsz-1 fw-500 mt-4">Products</h2>
                <div className="flex-layout">
                  {React.Children.toArray(
                    products.map((j) => {
                      const { name, price, imgUrl } = getProductDetails(
                        j.productId,
                        j.quantity
                      );
                      return (
                        <div
                          className="list-container w-sm-30"
                          style={{ margin: "1rem 0" }}
                        >
                          <div className="list-item">
                            <div className="d-flex">
                              <img
                                src={imgUrl}
                                className="h-20 bdrs-2"
                                alt="product"
                              />
                              <div className=" m-2">
                                <SubTitle label="product name" text={name} />
                                <SubTitle label="product price" text={price} />
                                <SubTitle
                                  label="order quantity"
                                  text={j.quantity}
                                />
                                <SubTitle
                                  label="amount"
                                  text={price * j.quantity}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </>
            );
          })
        )
      )}
    </div>
  );
}
export { OrderDetails };
