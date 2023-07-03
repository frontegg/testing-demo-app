import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

import { FronteggProvider } from "@frontegg/react";

const contextOptions = {
  baseUrl: "https://app-x7dqohm49scs.stg.frontegg.com",
  clientId: "a1850f6d-685b-46cd-8136-ea2e1f78b34a",
};

const authOptions = {
  keepSessionAlive: true, // Uncomment this in order to maintain the session alive
};

// For react 18:
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <FronteggProvider
      contextOptions={contextOptions}
      hostedLoginBox={false}
      authOptions={authOptions}
    >
      <App />
    </FronteggProvider>
    ,
  </BrowserRouter>
);
