import React from "react";
import './Left-fold.css'
import { callsData, dialerData } from "../../data/leftfoldData";
import DialerItems from "./DialerItems";
import MenuLeft from "./MenuLeft";
import { BiMicrophone } from "react-icons/bi";
import { FaVideo } from "react-icons/fa";

function LeftFold() {
  const menu = callsData;
  const dialer = dialerData;
  return (
    <div className="leftFold">
      <div className="left-menu">
        <label>Calls</label>
        <div>
          {menu.map((item) => {
            return <MenuLeft item={item} />;
          })}
        </div>
      </div>
      <div className="left-call">
        <label className="dialer-label">Suggested</label>
        <div className="dialer-search">
          <input placeholder="type a name" />
        </div>
        <div className="dialer-suggested">
          <label className="suggested-label">Suggested</label>
          <div className="suggested-list">
            {dialer.map((item) => {
              return <DialerItems item={item} />;
            })}
          </div>
        </div>
        <div className="dialer-button">
          <div className="dialer-button-icon">
            <BiMicrophone />
          </div>
          <div className="dialer-button-icon">
            {" "}
            <FaVideo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftFold;
