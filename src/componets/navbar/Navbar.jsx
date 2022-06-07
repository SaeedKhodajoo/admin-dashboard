import "./navbar.scss";
import React, { useContext, useRef } from "react";
import {
  Check,
  Close,
  DarkModeOutlined,
  ExitToApp,
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
  LightModeOutlined,
  MenuOutlined,
  NotificationsNoneOutlined,
  Person,
  SearchOutlined,
  Settings,
  WatchLater,
} from "@mui/icons-material";
import avatar from "../../assets/image/avatarImage.png";
import { darkModeContext } from "../../context/darkModeContext";
import { Link } from "react-router-dom";
import { sidebarModeContext } from "../../context/sidebarModeContext";

const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener("mousedown", (e) => {
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle("active");
    } else {
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove("active");
      }
    }
  });
};

const Navbar = (props) => {
  const { dispatch } = useContext(darkModeContext);
  const { darkMode } = useContext(darkModeContext);
  const { dispatchColor, activeTheme } = useContext(sidebarModeContext);
  const dropdown_content_el = useRef(null);
  const dropdown_toggle_el = useRef(null);
  const dropdown_toggle_setting = useRef(null);
  const dropdown_content_setting = useRef(null);
  const profile_icon_ref = useRef(null);
  const profile_content_ref = useRef(null);

  clickOutsideRef(dropdown_content_el, dropdown_toggle_el);
  clickOutsideRef(profile_content_ref, profile_icon_ref);
  const closeSetting = (e) => {
    dropdown_content_setting.current.classList.remove("active");
  };
  const openSetting = () => {
    dropdown_content_setting.current.classList.add("active");
  };

  return (
    <div className={darkMode ? "navbar dark" : "navbar"}>
      <div className="wrapper">
        <div className="left">
          <div className="showHide-sidebar" onClick={props.onShowSidebar}>
            <MenuOutlined />
          </div>
          <div className="toggle-sidebar" onClick={() => props.onToggle()}>
            {!props.miniSidebar ? (
              <KeyboardArrowLeftOutlined />
            ) : (
              <KeyboardArrowRightOutlined />
            )}
          </div>
          <div className="search">
            <input type="text" placeholder="search here..." />
            <SearchOutlined />
          </div>
        </div>
        <div className="items">
          <div className="item">
            <div
              className="dark-btn_container"
              onClick={() => dispatch({ type: "TOGGLE" })}
            >
            {darkMode ? <span>Dark</span> : <span>Light</span>}
            {darkMode ? (
              <DarkModeOutlined />
            ) : (
              <LightModeOutlined />
            )}
             </div>
          </div>
          <div className="item" ref={dropdown_toggle_el}>
            <NotificationsNoneOutlined />
            <div className="notif-counter">3</div>
            <div className="notification-box" ref={dropdown_content_el}>
              <div className="notif-item">
                <div className="left">
                  <img src={avatar} alt="avatar" />
                </div>
                <div className="info">
                  <span>
                    <h4>New Message </h4>from Tom
                  </span>
                  <p>
                    <WatchLater /> 47 minutes ago
                  </p>
                </div>
              </div>
              <div className="notif-item">
                <div className="left">
                  <img src={avatar} alt="avatar" />
                </div>
                <div className="info">
                  <span>
                    <h4>New Message </h4>from Jane
                  </span>
                  <p>
                    <WatchLater /> 3 hours ago
                  </p>
                </div>
              </div>
              <div className="notif-item">
                <div className="left">
                  <div className="check">
                    <Check />
                  </div>
                </div>
                <div className="info">
                  <span>Payment Succesfully Completed</span>
                  <p>
                    <WatchLater /> 3 hours ago
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="item" ref={dropdown_toggle_setting}>
            <Settings onClick={openSetting} />
            <div className="setting-box" ref={dropdown_content_setting}>
              <div className="top">
                <h2>Dashboard Settings</h2>
                <div className="close-btn">
                  <Close onClick={closeSetting} />
                </div>
                <hr />
              </div>

              <div className="settings">
                <div className="sidenav-color">
                  <h4>Sidebar Icon Colors:</h4>
                  <div className="options">
                    <div
                      className={activeTheme === 2 && "active"}
                      style={{ backgroundColor: "#cf0c0c" }}
                      onClick={() => dispatchColor({ type: "RED" })}
                    >
                      {activeTheme === 2 && <Check />}
                    </div>
                    <div
                      className={activeTheme === 1 && "active"}
                      style={{ backgroundColor: "#48bfe3" }}
                      onClick={() => dispatchColor({ type: "BLUE" })}
                    >
                      {activeTheme === 1 && <Check />}
                    </div>
                    <div
                      className={activeTheme === 3 && "active"}
                      style={{ backgroundColor: "#f79605" }}
                      onClick={() => dispatchColor({ type: "ORANGE" })}
                    >
                      {activeTheme === 3 && <Check />}
                    </div>
                    <div
                      className={activeTheme === 4 && "active"}
                      style={{ backgroundColor: "#007200" }}
                      onClick={() => dispatchColor({ type: "GREEN" })}
                    >
                      {activeTheme === 4 && <Check />}
                    </div>
                  </div>
                </div>
                <hr />

                <div className="setting">
                  <div className="Setbox">
                    <h4>sidebar mini</h4>
                    <label className="switch">
                      <input
                        checked={props.miniSidebar}
                        type="checkbox"
                        onChange={() => props.onToggle()}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <hr />
                </div>
                <div className="setting">
                  <div className="Setbox">
                    <h4>light/dark</h4>
                    <label className="switch">
                      <input
                        checked={darkMode}
                        type="checkbox"
                        onChange={() => dispatch({ type: "TOGGLE" })}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <img
              ref={profile_icon_ref}
              src={avatar}
              alt=""
              className="avatar"
            />
            <div className="profile-box" ref={profile_content_ref}>
              <Link to="/profile">
                <div>
                  <Person /> My Profile
                </div>
              </Link>
              <Link to="/login">
                <div>
                  <ExitToApp /> Logout
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
