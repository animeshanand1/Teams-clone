import React from "react";
import { sidebarBottom, sidebarMore, sidebarUp } from "../../data/sidebarData";
import "./sidebar.css";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  const topSidebar = sidebarUp;
  const moreSidebar = sidebarMore;
  const bottomSidebar = sidebarBottom;

  return (
    <div className="sidebar">
      <div className="sidebar-up">
        <div>
          {topSidebar.map((option) => {
            return <SidebarOption option={option}
            isActive={option.name==='Calls'? true:false}/>;
          })}
        </div>
      </div>
      <div><SidebarOption option={moreSidebar}/></div>
      <div className="sidebar-bottom">
        <div>
          {bottomSidebar.map((option)=>{
            return(
              <SidebarOption option={option}/>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
