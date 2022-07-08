import React from "react";
import {FiMoreHorizontal} from 'react-icons/fi'
import {SiMicrosoftteams} from 'react-icons/si'
import {BsSearch} from 'react-icons/bs'


import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="menu">
        <SiMicrosoftteams />
        
      </div>
      <div className="left-fold">
        <label className="label-heading">Microsoft Teams </label>
      </div>
      <div className="right-fold">
        <div className="header-search">
           <BsSearch/>
          <input placeholder="search" />
        </div>
        <div className="header-option">
          < FiMoreHorizontal />
          <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" />
        </div>
      </div>
    </div>
  );
}

export default Header;
