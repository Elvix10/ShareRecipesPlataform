import "./App.css";
import Login from "./pages/login";
import Home from "./pages/home";
import { Router, Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { RequireAuth, useIsAuthenticated } from "react-auth-kit";
import { PrivateRoute } from "react-auth-kit";
import Register from "./pages/register";
import { Provider } from "react-redux";
import { store } from "./store/store";

const Private = ({Component}) => {
  const isAuthenticated = useIsAuthenticated()
  const auth = isAuthenticated(); 
  return auth ? <Component /> : <Navigate to="/login" />
}

function App() {
  return (
    <Provider store={store}>

      <Home/>
    </Provider>
  );
}

export default App;
