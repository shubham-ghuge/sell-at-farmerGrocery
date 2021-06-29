import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { BrowserRouter as Router } from "react-router-dom";
import AuthContextProvider from "./contexts/useAuthContext";
import DataContextProvider from "./contexts/useDataContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DataContextProvider>
        <Router>
          <App />
        </Router>
      </DataContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
