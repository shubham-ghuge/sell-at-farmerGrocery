import React from "react";
import { useDataContext } from "../../../contexts/useDataContext";
import { useProfileContext } from "../../../contexts/useProfileContext";
import { Apple, Shop, Wallet } from "../../Icons";
import { Card } from "./Card";

function Overview() {
  const { totalProducts, totalOrders } = useDataContext();
  const { walletBalence } = useProfileContext();

  return (
    <>
      <h2 className="sub-title px-4">overview</h2>
      <div className="overview">
        <Card
          details={{
            heading: "Products Added",
            count: totalProducts,
            link: "/products",
            linkText: "View All Products",
          }}
          icon={<Apple />}
        />
        <Card
          details={{
            heading: "Orders Received",
            count: totalOrders,
            link: "/orders",
            linkText: "View All Orders",
          }}
          icon={<Shop />}
        />
        <Card
          details={{
            heading: "Wallet Balence",
            count: `${walletBalence || 100}.00`,
            symbol: "₹",
            link: "/profile#wallet",
            linkText: "View Wallet",
          }}
          icon={<Wallet />}
        />
      </div>
    </>
  );
}
export { Overview };
