import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { BrowserRouter as Router } from "react-router-dom";
import AuthContextProvider from "./contexts/useAuthContext";
import DataContextProvider from "./contexts/useDataContext";
import ProfileContextProvider from "./contexts/useProfileContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DataContextProvider>
        <ProfileContextProvider>
          <Router>
            <App />
          </Router>
        </ProfileContextProvider>
      </DataContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
