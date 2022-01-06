import React from "react";
import "../Css/Sidebar.css";
import { Link } from "react-router-dom";

export default function SideBar(props) {
  return (
    <div className={props.isActive ? "sidebar" : "sidebar visible"}>
      <ul>
        <li>
          <Link to={"/folder"} className="" onClick={props.handleLanguage}>
            FOLDERS
          </Link>
        </li>
        <li>
          <Link to={"/home"} className="" onClick={props.handleLanguage}>
            TODOS
          </Link>
        </li>
        <li>
          <Link to={"/"} className="" onClick={props.handleLanguage}>
            Log Out
          </Link>
        </li>
        <li></li>
        <li></li>
      </ul>
      <div className="sidebar_btn">
        <svg
          className={
            props.isActive ? "ham hamRotate ham4" : "ham hamRotate ham4 active"
          }
          viewBox="0 0 100 100"
          width="55"
          onClick={props.handleToggleSideBar}
        >
          <path
            className="line top"
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
          />
          <path className="line middle" d="m 70,50 h -40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
          />
        </svg>
      </div>
    </div>
  );
}
