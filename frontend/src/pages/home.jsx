import React from "react";
import Header from "../components/Header";
import SideBar from '../components/SideBar'
import MainContent from '../components/MainContent'

function Home() {
  return (
    <div>
   
      <div className="bodyContainer">
        <SideBar/>
        <MainContent />
      </div>
    </div>
  );
}

export default Home;
