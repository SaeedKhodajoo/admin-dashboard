import React, { useContext, useState } from "react";
import Chart from "../../componets/chart/Chart";
import Featured from "../../componets/featured/Featured";
import Navbar from "../../componets/navbar/Navbar";
import Sidebar from "../../componets/sidebar/Sidebar";
import List from "../../componets/table/Table";
import Widget from "../../componets/widget/Widget";
import { darkModeContext } from "../../context/darkModeContext";
import "./home.scss";

const Home = () => {
  const [mini, setMini] = useState(false);
  const [responsiveSidebar, setResponsiveSiebar] = useState(false);
  const {darkMode} =  useContext(darkModeContext)

  const toggleHandler = () => {
    setMini(!mini);
  };

  const showSidebarHandler = () => {
    setResponsiveSiebar(!responsiveSidebar);
  };

  return (
    <div className={darkMode ? "home dark" : "home"}>
      <Sidebar miniSidebar={mini} responsiveSidebar={responsiveSidebar} />
      <div
        className={mini ? "homeContainer homeContainer-mini" : "homeContainer"}
      >
        <Navbar
          onToggle={toggleHandler}
          onShowSidebar={showSidebarHandler}
          miniSidebar={mini}
        />
        <div className="home-box">
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="revenue" />
            <Widget type="sales" />
          </div>

          <div className="charts-container">
            <Featured />
            <Chart height={370} />
          </div>

          <div className="listContainer">
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
