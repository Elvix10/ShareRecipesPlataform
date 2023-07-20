import Register from "../pages/register";
import Login from "../pages/login";
import Home from "../pages/home";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import { RequireAuth } from 'react-auth-kit'

export const router = createBrowserRouter([
  {
    path: "/",

    element: 
      <App/>   
  },

  {
    path: "/login",

    element: <Login />,
  },

  {
    path: "/register",

    element: <Register />,
  },


]); 
