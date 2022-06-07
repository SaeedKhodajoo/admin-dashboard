import React, { useContext, useState } from "react";
import "./single.scss";
import List from "../../componets/table/Table";
import Chart from "../../componets/chart/Chart";
import avatar from "../../assets/image/avatarImage.png";
import Sidebar from "../../componets/sidebar/Sidebar";
import Navbar from "../../componets/navbar/Navbar";
import { darkModeContext } from "../../context/darkModeContext";

const Single = () => {
  const [mini, setMini] = useState(false);
  const { darkMode } = useContext(darkModeContext);

  const toggleHandler = () => {
    setMini(!mini);
  };
  return (
    <div className={darkMode ? "dark single" : "single"}>
      <Sidebar miniSidebar={mini} />
      <div
        className={
          mini ? "single-container single-container-mini" : "single-container"
        }
      >
        <Navbar onToggle={toggleHandler} miniSidebar={mini} />
        <div className="single-box">
          <div className="single-top">
            <div className="left">
              <div className="editBtn">Edit</div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img src={avatar} alt="" className="itemImg" />
                <div className="details">
                  <h1 className="itemTitle">Jane Doe</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">janedoe@gmail.com</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">+1 2345 67 89</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">
                      Elton St. 234 Garden Yd. NewYork
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">USA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <Chart height={220} />
            </div>
          </div>
          <div className="bottom">
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
