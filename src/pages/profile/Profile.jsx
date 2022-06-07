import "./profile.scss";
import { useContext, useState } from "react";
import Navbar from "../../componets/navbar/Navbar";
import Sidebar from "../../componets/sidebar/Sidebar";
import avatarImage from "../../assets/image/avatarImage.png";
import {
  EventNote,
  FacebookOutlined,
  Instagram,
  PeopleAlt,
  StreetviewOutlined,
  Twitter,
} from "@mui/icons-material";
import { darkModeContext } from "../../context/darkModeContext";

const Profile = () => {
  const [mini, setMini] = useState(false);
  const [responsiveSidebar, setResponsiveSiebar] = useState(false);
  const [activeTitle, setActiveTitle] = useState(1);
  const { darkMode } = useContext(darkModeContext);

  const toggleHandler = () => {
    setMini(!mini);
  };

  const showSidebarHandler = () => {
    setResponsiveSiebar(!responsiveSidebar);
  };

  return (
    <div className={darkMode ? 'dark profile' : 'profile'}>
      <Sidebar miniSidebar={mini} responsiveSidebar={responsiveSidebar} />
      <div
        className={
          mini
            ? "profile-container profile-container-mini"
            : "profile-container"
        }
      >
        <Navbar
          onToggle={toggleHandler}
          onShowSidebar={showSidebarHandler}
          miniSidebar={mini}
        />
        <div className="profile-box">
          <div className="top">
            <div className="profile-overview">
              <div className="left">
                <div className="image">
                  <img src={avatarImage} alt="" />
                </div>
                <div className="details">
                  <h4 className="name">John Doe</h4>
                  <div className="email">johndoe@gmail.com</div>
                </div>
              </div>
              <div className="right">
                <div
                  className={
                    activeTitle === 1 ? "profile-title active" : "profile-title"
                  }
                  onClick={() => setActiveTitle(1)}
                >
                  <StreetviewOutlined /> OVERVIEW
                </div>
                <div
                  className={
                    activeTitle === 2 ? "profile-title active" : "profile-title"
                  }
                  onClick={() => setActiveTitle(2)}
                >
                  <PeopleAlt /> TEAMS
                </div>
                <div
                  className={
                    activeTitle === 3 ? "profile-title active" : "profile-title"
                  }
                  onClick={() => setActiveTitle(3)}
                >
                  <EventNote /> SALES
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="profile-card">
              <h3 className="profile-card_title">Platform Settings</h3>
              <div className="profile-card_bottom">
                <div className="profile-card_subtitle">ACCOUNT</div>
                <div className="profile-checkbox">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                  <span>Email me when someone follows me</span>
                </div>
                <div className="profile-checkbox">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                  <span>Email me when someone messages me</span>
                </div>
                <div className="profile-checkbox">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                  <span>Email me when someone mentions me</span>
                </div>
                <div className="profile-card_subtitle">APPLICATION</div>
                <div className="profile-checkbox">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                  <span>Monthly product changes</span>
                </div>
                <div className="profile-checkbox">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                  <span>Subscribe to newsletter</span>
                </div>
              </div>
            </div>
            <div className="profile-card">
              <h3 className="profile-card_title">Profile Information</h3>
              <div className="profile-card_bottom">
                <p className="profile-about">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  eius id magnam. Cumque pariatur aspernatur soluta. Fugit non
                  doloribus illum sit distinctio adipisci quaerat id, nobis
                  nostrum, aperiam itaque enim!
                </p>
                <div className="profile-info">
                  <div className="profile-info_row">
                    <h4>Fullname :</h4> <span>John Doe</span>
                  </div>
                  <div className="profile-info_row">
                    <h4>Mobile :</h4> <span>(44) 123 1234 123</span>
                  </div>
                  <div className="profile-info_row">
                    <h4>Email :</h4> <span>johndoe@gmail.com</span>
                  </div>
                  <div className="profile-info_row">
                    <h4>Location :</h4> <span>Iran</span>
                  </div>
                  <div className="profile-info_row">
                    <h4>Social Media :</h4>{" "}
                    <span>
                      <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <FacebookOutlined />
                      </a>
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Instagram />
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Twitter />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-card">
              <h3 className="profile-card_title">Messages</h3>
              <div className="profile-card_bottom">
                <div className="profile-message">
                  <div className="message-row">
                    <div className="left">
                      <div className="image">
                        <img src={avatarImage} alt="" />
                      </div>
                      <div className="message-details">
                        <h4 className="name">Jane Doe</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                    <div className="right">
                      <button className="message-reply_btn">REPLY</button>
                    </div>
                  </div>

                  <div className="message-row">
                    <div className="left">
                      <div className="image">
                        <img src={avatarImage} alt="" />
                      </div>
                      <div className="message-details">
                        <h4 className="name">Jane Doe</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                    <div className="right">
                      <button className="message-reply_btn">REPLY</button>
                    </div>
                  </div>
                  <div className="message-row">
                    <div className="left">
                      <div className="image">
                        <img src={avatarImage} alt="" />
                      </div>
                      <div className="message-details">
                        <h4 className="name">Jane Doe</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                    <div className="right">
                      <button className="message-reply_btn">REPLY</button>
                    </div>
                  </div>
                  <div className="message-row">
                    <div className="left">
                      <div className="image">
                        <img src={avatarImage} alt="" />
                      </div>
                      <div className="message-details">
                        <h4 className="name">Jane Doe</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                    <div className="right">
                      <button className="message-reply_btn">REPLY</button>
                    </div>
                  </div>
                  <div className="message-row">
                    <div className="left">
                      <div className="image">
                        <img src={avatarImage} alt="" />
                      </div>
                      <div className="message-details">
                        <h4 className="name">Jane Doe</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                    <div className="right">
                      <button className="message-reply_btn">REPLY</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
