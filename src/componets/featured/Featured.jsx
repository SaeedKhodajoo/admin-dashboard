import React, { useContext } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./featured.scss";
import {KeyboardArrowDown, KeyboardArrowUp} from '@mui/icons-material'
import { darkModeContext } from "../../context/darkModeContext";


const Featured = () => {
  const { darkMode } = useContext(darkModeContext);

  return (
    <div className={darkMode ? 'featured dark' : 'featured'}>
      <div className="title">
        <h2>Total Revenue</h2>
      </div>
      <div className="top">
        <CircularProgressbar value={70} text="70%" strokeWidth={3} />
      </div>
      <div className="bottom">
        <p>Total sales made today</p>
        <span className="amount">$420</span>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          temporibus deleniti et optio doloremque quia?
        </p>
        <div className="details">
          <div className="detail">
            <h5>Target</h5>
            <span className="positive"> <KeyboardArrowUp /> $23.6k  </span>
          </div>
          <div className="detail">
            <h5>Last Week</h5>
            <span className="negative"> <KeyboardArrowDown /> $56.6k  </span>
          </div>
          <div className="detail">
            <h5>Last Month</h5>
            <span className="positive"> <KeyboardArrowUp /> $87.4k  </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
