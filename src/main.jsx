import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { BrowserRouter as Router } from "react-router-dom";
import AuthContextProvider from "./contexts/useAuthContext";
import ProductContextProvider from "./contexts/useProductContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProductContextProvider>
        <Router>
          <App />
        </Router>
      </ProductContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
