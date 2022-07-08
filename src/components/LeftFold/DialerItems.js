import React from "react";
import './dialer-item.css'
import { BiMicrophone } from "react-icons/bi";
import { FaVideo } from "react-icons/fa";
function DialerItems({ item }) {
  return (
    <div className="dialer-item">
      <div className="item-info">
        <label className="item-title">{item.name}</label>
        <label className="item-subtitle">{item.type}</label>
      </div>
      <div className="item-icons">
        <div className="item-icon">
          <BiMicrophone />
        </div>
        <div className="item-icon">
          <FaVideo />
        </div>
      </div>
    </div>
  );
}

export default DialerItems;
