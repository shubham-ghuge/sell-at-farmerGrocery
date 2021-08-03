import React, { useEffect } from "react";
import { Close, Warning } from "../Icons";
import "./alert.css";

function Alert({ onClose, message, color = "danger" }) {
  useEffect(() => {
    setTimeout(() => {
      onClose();
    }, 3000);
  }, []);
  color = (message.includes("success") && "success") || color;
  return (
    <div className="alert d-flex jc-center">
      <div className={`alert-${color} w-sm-30 outline-${color}`}>
        <span>
          <Warning />
        </span>
        <div className="alert-content">
          <p> {message}</p>
        </div>
        <span className="close">
          <button onClick={() => onClose()} className={`btn-reset c-${color}`}>
            <Close />
          </button>
        </span>
      </div>
    </div>
  );
}
export { Alert };
