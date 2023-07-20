import "./App.css";
import Login from "./pages/login";
import Home from "./pages/home";
import {
  Router,
  Routes,
  Route,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import { RequireAuth, useIsAuthenticated } from "react-auth-kit";
import { PrivateRoute } from "react-auth-kit";
import Register from "./pages/register";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";

function App() {
  const { userToken } = useSelector((state) => state.auth);

 
  return <Provider store={store}>{userToken ? <Home /> : <Login />}</Provider>;
}

export default App;
