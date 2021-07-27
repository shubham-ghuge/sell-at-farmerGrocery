import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../../contexts/useDataContext";
import { useAuthContext } from "../../contexts/useAuthContext";
import { Correct, Apple, Shop, Loader, Avatar, Wallet } from "../Icons";
import "./dashboard.css";
import { Card } from "../Cards";
import { Jumbotron } from "../Jumbotron";

function Dashboard() {
  const { userDetails } = useAuthContext();
  const { loading, products, getProductsData, totalOrders } = useDataContext();

  useEffect(() => {
    getProductsData();
  }, []);
  const currentHour = new Date().getHours();

  return (
    <div className="dashboard">
      <div className="user-info d-flex ai-center jc-start px-2 pb-5 mb-5 bgc-base-100">
        <Avatar size="fsz-5" color="primary" />
        <div className="flex-column ml-3">
          <h2>
            {`Good ${
              currentHour < 12
                ? "morning"
                : currentHour < 18
                ? "afternoon"
                : "evening"
            }`}
            , {userDetails}!
          </h2>
          <p className="d-flex c-secondary fw-500 ai-center">
            <span className="c-success mr-2 mt-1">
              <Correct />
            </span>
            Verified User
          </p>
        </div>
      </div>
      <section>
        <h2 className="sub-title px-4">overview</h2>
        <div className="overview">
          <div className="text-card flex-column w-sm-20">
            <div className="d-flex">
              <Apple />
              <div className="card-details">
                <h3 className="card-header">Products Added</h3>
                <p className="fw-500">{products && products.length}</p>
              </div>
            </div>
            <Link className="c-primary" to="/products">
              View All
            </Link>
          </div>
          <div className="text-card flex-column w-sm-20">
            <div className="d-flex">
              <Shop />
              <div className="card-details">
                <h3 className="card-header">Orders Received</h3>
                <p className="fw-500">{totalOrders}</p>
              </div>
            </div>
            <Link className="c-primary" to="/orders">
              View All
            </Link>
          </div>
          <div className="text-card flex-column w-sm-20">
            <div className="d-flex">
              <Wallet />
              <div className="card-details">
                <h3 className="card-header">Wallet Balence</h3>
                <p className="fw-500">
                  <span className="fsz-2 mr-2">₹</span>
                  {totalOrders}.00
                </p>
              </div>
            </div>
            <Link className="c-primary" to="/profile#wallet">
              View Wallet
            </Link>
          </div>
        </div>
        <h2 className="sub-title mb-4 px-4">Recently added products</h2>
        {loading ? (
          <div className="d-flex ai-center jc-center h-20">
            <h2 className="sub-title">loading data</h2>
            <Loader />
          </div>
        ) : products.length !== 0 ? (
          <div className="flex-layout px-4">
            {products.map(
              (i, idx) => idx <= 3 && <Card product={i} key={i._id} />
            )}
            {products && products.length > 1 && (
              <Link
                to="/products"
                className="mb-5"
                style={{ alignSelf: "flex-end" }}
              >
                view more
              </Link>
            )}
          </div>
        ) : (
          <Jumbotron link="/products/add" />
        )}
      </section>
    </div>
  );
}
export { Dashboard };
