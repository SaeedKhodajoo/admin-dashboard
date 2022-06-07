import "./sidebar.scss";
import React, { useContext, useEffect, useRef } from "react";
import {
  AcUnitOutlined,
  Close,
  Dashboard,
  ExitToApp,
  Groups,
  Login,
  NoteAddOutlined,
  Person,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { sidebarModeContext } from "../../context/sidebarModeContext";
import { darkModeContext } from "../../context/darkModeContext";
import { activeLinkContext } from "../../context/activeLinkContext";

const Sidebar = ({ miniSidebar, responsiveSidebar }) => {
  const { sidebarColor } = useContext(sidebarModeContext);
  const { darkMode } = useContext(darkModeContext);
  const { activeLink, dispatchLink } = useContext(activeLinkContext);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const liElements = document.querySelectorAll(".sidebar .center ul li");
    liElements.forEach((li) => {
      li.childNodes[0].style.color = sidebarColor;
    });
  }, [sidebarColor]);

  useEffect(() => {
    sidebarRef.current.classList.toggle("responsive-sidebar");
  }, [responsiveSidebar]);
  useEffect(() => {
    sidebarRef.current.classList.toggle("dark");
  }, [darkMode]);

  const toggleHandler = () => {
    miniSidebar && sidebarRef.current.classList.remove("toggle");
  };
  const miniHandler = () => {
    miniSidebar && sidebarRef.current.classList.add("toggle");
  };

  const closeSidebar = () => {
    sidebarRef.current.classList.remove("responsive-sidebar");
  };

  return (
    <div
      ref={sidebarRef}
      className={!miniSidebar ? "sidebar" : "sidebar toggle"}
      onMouseEnter={toggleHandler}
      onMouseLeave={miniHandler}
    >
      <div className="closeSidebar-btn" onClick={closeSidebar}>
        <Close />
      </div>
      <div className="top">
        <Link to="/" onClick={() => dispatchLink({ type: "1" })}>
          <AcUnitOutlined />
          <h2 className="logo">Komma Store</h2>
        </Link>
      </div>
      <hr className="logoHr" />
      <div className="center">
        <ul>
          <h2 className="title">Main</h2>
          <Link to="/" onClick={() => dispatchLink({ type: "1" })}>
            <li className={activeLink === 1 && "active"}>
              <Dashboard />
              <span>Dashboard</span>
            </li>
          </Link>
          <hr />
          <h2 className="title">Pages</h2>
          <Link to="/profile" onClick={() => dispatchLink({ type: "2" })}>
            <li className={activeLink === 2 && "active"}>
              <Person /> <span>Profile</span>
            </li>
          </Link>
          <Link to="/users" onClick={() => dispatchLink({ type: "3" })}>
            <li className={activeLink === 3 && "active"}>
              <Groups /> <span>Users</span>
            </li>
          </Link>
          <h2 className="title">User</h2>
          <Link to="/login">
            <li>
              <Login /> <span>Login</span>
            </li>
          </Link>
          <Link to="/register">
            <li>
              <NoteAddOutlined /> <span>Register</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="sidebar-bottom">
        <Link to="/login">
          <button className="logout">
            <ExitToApp /> <span>Logout</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
