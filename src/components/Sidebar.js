import React from 'react';
import { FaFileAlt } from 'react-icons/fa'; 
import { PiDownloadSimpleLight } from "react-icons/pi";
import { LuArrowDownUp } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-icon"></div>
        <h1>EazyPayouts</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#" className="active">< PiDownloadSimpleLight /> Loads</a></li>
          <li><a href="#"><FaFileAlt /> Statements</a></li>
          <li><a href="#"><LuArrowDownUp /> Transactions</a></li>
        </ul>
      </nav>
      <div className="logout">
        <a href="#"><IoIosLogOut style={{ paddingTop: '5px' }}/> Logout</a>
      </div>
    </aside>
  );
};

export default Sidebar;
