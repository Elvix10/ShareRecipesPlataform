import React from "react";
import Header from "../components/Header";
import SideBar from '../components/SideBar'
import MainContent from '../components/MainContent'
import {useAuthUser} from 'react-auth-kit'
import Login from "./login";

function Home() {

  
  return (
    <div> 
      <div className="bodyContainer">
         <SideBar/>
        <MainContent /> 
       
       {/*  <Login/> */}
      </div>
    </div>
  );
}

export default Home;
