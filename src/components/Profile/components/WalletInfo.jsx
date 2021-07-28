import React from "react";
import { Wallet } from "../../Icons";
import { useProfileContext } from "../../../contexts/useProfileContext";

function WalletInfo() {
  const { walletBalence } = useProfileContext();
  return (
    <>
      <h2 className="fsz-3 mt-5" id="#wallet">
        <span className="icon-title">
          <Wallet />
        </span>
        <span className="ml-2">Wallet</span>
      </h2>
      <p className="c-base mt-2">
        we will update wallet balence on every order you receive!
      </p>
      <h4 className="mt-4 c-base">Current Balence</h4>
      <div className="d-flex ai-center h-10 jc-space-between">
        <div>
          <p className="fw-700 fsz-2">
            <span className="fsz-4 c-primary mr-2">₹</span>
            {walletBalence}.00
          </p>
        </div>
        <button className="btn-primary">
          <span className="mr-2">₹</span>
          Withdraw
        </button>
      </div>
    </>
  );
}
export { WalletInfo };
