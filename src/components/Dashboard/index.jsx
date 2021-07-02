import React from "react";
import { Link } from "react-router-dom";
import userPhoto from "../../assets/photo1.png";
import { useDataContext } from "../../contexts/useDataContext";
import { useAuthContext } from "../../contexts/useAuthContext";
import { Correct, Apple, Shop } from "../Icons";
import "./dashboard.css";
import { Card } from "../Cards";

function Dashboard() {
  const { userDetails } = useAuthContext();
  const { products, totalOrders } = useDataContext();
  const currentHour = new Date().getHours();
  return (
    <div className="dashboard">
      <div className="user-info d-flex ai-center jc-start px-2 pb-5 mb-5 bgc-base-100">
        <span className="avatar-lg">
          <img src={userPhoto} alt="your photo" />
        </span>
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
      <section className="p-5">
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
        </div>
        <h2 className="sub-title px-4">Recently added products</h2>
        <div className="flex-layout mt-4 px-4">
          {products?.length !== 0 &&
            products.map(
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
      </section>
    </div>
  );
}
export { Dashboard };
