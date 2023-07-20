import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "react-auth-kit";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider
    store={store}
  >
    <RouterProvider router={router} />
  </Provider>
);
