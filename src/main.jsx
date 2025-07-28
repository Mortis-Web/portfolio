import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./hooks/AuthContext.jsx";
import { DashProvider } from "./hooks/Dashboard.Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <DashProvider>
          <App />
        </DashProvider>
      </AuthProvider>
    </Router>
  </StrictMode>
);
