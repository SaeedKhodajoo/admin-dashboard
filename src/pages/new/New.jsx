import React, { useContext, useState } from "react";
import "./new.scss";
import avatarImage from "../../assets/image/avatarImage.png";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import Sidebar from "../../componets/sidebar/Sidebar";
import Navbar from "../../componets/navbar/Navbar";
import { darkModeContext } from "../../context/darkModeContext";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState();
  const [mini, setMini] = useState(false);
  const [responsiveSidebar, setResponsiveSiebar] = useState(false);
  const {darkMode} = useContext(darkModeContext)

  const toggleHandler = () => {
    setMini(!mini);
  };

  const showSidebarHandler = () => {
    setResponsiveSiebar(!responsiveSidebar);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={darkMode ? 'dark new' : 'new'}>
      <Sidebar miniSidebar={mini} responsiveSidebar={responsiveSidebar} />
      <div
        className={mini ? "new-container new-container-mini" : "new-container"}
      >
        <Navbar
          onToggle={toggleHandler}
          miniSidebar={mini}
          onShowSidebar={showSidebarHandler}
        />
        <div className="new-box">
          <div className="top">
            <h1>{title}</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <div className="image">
                <img
                  src={file ? URL.createObjectURL(file) : avatarImage}
                  alt=""
                />
              </div>
            </div>
            <div className="right">
              <form onSubmit={submitHandler}>
                <div className="formInput">
                  <label htmlFor="file">
                    Choose your avatar
                    <DriveFolderUploadOutlined />
                  </label>
                  <input
                    type="file"
                    id="file"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
                {inputs.map((input) => {
                  return (
                    <div className="formInput" key={input.id}>
                      <label htmlFor="">{input.label}</label>
                      <input
                        id={input.id}
                        type={input.type}
                        placeholder={input.placeholder}
                      />
                    </div>
                  );
                })}
                <button type="submit" className="sendBtn">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
