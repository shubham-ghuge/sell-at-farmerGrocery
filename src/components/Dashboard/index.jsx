import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../../contexts/useDataContext";
import { Loader } from "../Icons";
import "./dashboard.css";
import { Card } from "../Cards";
import { Jumbotron } from "../Jumbotron";
import { UserInfo } from "./components/UserInfo";
import { Overview } from "./components/Overview";

function Dashboard() {
  const { loading, products, getProductsData } = useDataContext();

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="dashboard">
      <UserInfo />
      <section>
        <Overview />
        <h2 className="sub-title mb-4 px-4">Recently added products</h2>
        {loading ? (
          <div className="d-flex ai-center jc-center h-20">
            <h2 className="sub-title">Fetching Products</h2>
            <Loader />
          </div>
        ) : !loading && products.length !== 0 ? (
          <>
            <div className="flex-layout px-4">
              {products.map(
                (i, idx) => idx <= 3 && <Card product={i} key={i._id} />
              )}
            </div>
            {products && products.length > 4 && (
              <Link
                to="/products"
                className="ml-5 mb-5"
                style={{ alignSelf: "flex-end" }}
              >
                view more
              </Link>
            )}
          </>
        ) : (
          <Jumbotron link="/products/add" />
        )}
      </section>
    </div>
  );
}
export { Dashboard };
