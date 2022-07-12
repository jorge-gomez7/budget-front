import React from "react";
import "../../../App.css";
import { useNavigate    } from 'react-router-dom';

import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  let navigate = useNavigate();

  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        {SidebarData.map((val, key) => {
          return (
            <li
              id={window.location.pathname === val.link ? "active" : ""}
              className="row"
              key={key}
              onClick={() => {
                navigate(val.link);
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
