import "./App.css";
import Login from "./pages/login";
import Home from "./pages/home";

import Register from "./pages/register";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store/store";
import { getMyRecipie } from "./store/slice/recipie";
import { useEffect } from "react";
import userEvent from "@testing-library/user-event";

function App() {
  const dispatch = useDispatch();

 
  const { userToken } = useSelector((state) => state.auth);


  return <Provider store={store}>{userToken ? <Home /> : <Login />}</Provider>;
}

export default App;
