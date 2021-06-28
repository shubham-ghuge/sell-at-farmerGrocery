import React, { useEffect } from "react";

function Alert({ onClose, message }) {
  useEffect(() => {
    setTimeout(() => {
      onClose();
    }, 2000);
  }, []);
  return (
    <div className="alert">
      <button onClick={() => onClose()}>x</button>
      {message}
    </div>
  );
}
export { Alert };
