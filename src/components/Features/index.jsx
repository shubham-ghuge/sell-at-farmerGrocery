import React from "react";
import { Card } from "../Dashboard/components/Card";
import { Money, Stats, Wallet } from "../Icons";
import "./features.css";

function ColumnData({ details }) {
  return (
    <div className="details d-flex jc-space-between">
      <p>Payment From Baburao Ganpatrao Apte</p>
      <p>5000.00</p>
      <span className="bgc-success-100 p-2 bdrs-5">success</span>
      <p>June 11,2021</p>
    </div>
  );
}

function Features() {
  return (
    <>
      <h2 className="text-center mt-5">Upcoming Feature Preview</h2>
      <div className="bgc-base-100 feature mt-5 mx-3 bdrs-2 shadow">
        <h2 className="sub-title mb-4">Payment Analytics</h2>
        <div className="flex-layout">
          <Card
            details={{
              count: "10000.00",
              symbol: "₹",
              heading: "Account Balence",
              shadow: false,
              linkText: "View Earnings",
              link: "/feature",
            }}
            icon={<Money />}
          />
          <Card
            details={{
              count: "27 hr.",
              heading: "Avg. Payment Delay",
              shadow: false,
              linkText: "Check Details",
              link: "/feature",
            }}
            icon={<Stats />}
          />
          <Card
            details={{
              count: "327",
              heading: "Invoices Sent",
              shadow: false,
              linkText: "View Details",
              link: "/feature",
            }}
            icon={<Wallet />}
          />
        </div>
        <div className="flex-column">
          <h2 className="sub-title mb-4">Recent Payments</h2>
          <div className="wrapper">
            <div className="table flex-column">
              <div className="heading d-flex jc-space-between">
                <h4>Transactions</h4>
                <h4>Amount</h4>
                <h4>Status</h4>
                <h4>Date</h4>
              </div>
              <ColumnData />
              <ColumnData />
              <ColumnData />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export { Features };
