import React, { useContext, useState } from "react";
import Datatable from "../../componets/datatable/Datatable";
import Sidebar from "../../componets/sidebar/Sidebar";
import Navbar from "../../componets/navbar/Navbar";
import "./list.scss";
import { darkModeContext } from "../../context/darkModeContext";

const List = ({ url, rowsData, columnsData }) => {
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
    <div className={darkMode ? 'dark list' : 'list'}>
      <Sidebar miniSidebar={mini} responsiveSidebar={responsiveSidebar} />
      <div
        className={
          mini ? "list-container list-container-mini" : "list-container"
        }
      >
        <Navbar
          onToggle={toggleHandler}
          miniSidebar={mini}
          onShowSidebar={showSidebarHandler}
        />
        <div className="list-box">
          <Datatable url={url} rows={rowsData} columns={columnsData} />
        </div>
      </div>
    </div>
  );
};

export default List;
