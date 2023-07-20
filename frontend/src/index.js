import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "react-auth-kit";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthProvider
    authType="cookie"
    authName="_auth"
    cookieDomain={window.location.hostname}
    cookieSecure
  >
    <RouterProvider router={router} />
  </AuthProvider>
);
