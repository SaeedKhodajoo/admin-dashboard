import {
  AccountBalanceWalletOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MonetizationOnOutlined,
  PersonOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React, { useContext } from "react";
import { darkModeContext } from "../../context/darkModeContext";
import "./widget.scss";

const Widget = ({ type }) => {
  const { darkMode } = useContext(darkModeContext);

  let data;

  switch (type) {
    case "user":
      data = {
        title: "New Users",
        isMoney: false,
        link: "See all users",
        query: "users",
        amount: 87,
        diff: 20,
        icon: (
          <PersonOutlined
            className="icon"
            style={{
              color: "#c9184a",
              backgroundColor: "#c9184a3b",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Orders",
        isMoney: false,
        link: "View all orders",
        query: "users",
        amount: 460,
        diff: 35,
        icon: (
          <ShoppingCartOutlined
            className="icon"
            style={{
              color: "#fdc500",
              backgroundColor: "#fdc5003b",
            }}
          />
        ),
      };
      break;
    case "revenue":
      data = {
        title: "Revenue",
        isMoney: true,
        link: "View net earnings",
        query: "products",
        amount: 3400,
        diff: -6,
        icon: (
          <MonetizationOnOutlined
            className="icon"
            style={{ backgroundColor: "#0072003b", color: "#007200" }}
          />
        ),
      };
      break;
    case "sales":
      data = {
        title: "Sales",
        isMoney: false,
        link: "See details",
        query: "products",
        amount: 430,
        diff: 5,
        icon: (
          <AccountBalanceWalletOutlined
            className="icon"
            style={{
              backgroundColor: "#9d4edd3b",
              color: "#9d4edd",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className={darkMode ? "widget dark" : "widget"}>
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="amount">
          {data.isMoney && "$"} {data.amount}
        </div>
        <a href="/" className="link">
          {data.link}
        </a>
      </div>
      <div className="right">
        <div className="right-top_box">
          <div
            className={`percentage ${data.diff < 0 ? "negative" : "positive"}`}
          >
            {data.diff < 0 ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
            {data.diff} %
          </div>
          <span>Since last month</span>
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
