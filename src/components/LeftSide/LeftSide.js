import React from "react";
import Leftprops from "./Leftprops";
import "./LeftSide.css";
function LeftSide() {
  return (
    <div className="leftSide">
      <div className="leftSide_logo">
        <img src="#" alt="icons" />
      </div>
      <div className="leftSide_newtour">
        <button type="button">create New Tour +</button>
      </div>
      <div className="leftSide_servicename">
        <div className="leftSide_servicename_list">
          <Leftprops icons="dicon" serviceName="Search Property" />
          <Leftprops icons="dicon" serviceName="Dashboard" />
          <Leftprops icons="dicon" serviceName="Calandar" />
          <Leftprops icons="dicon" serviceName="My Clients" />
          <Leftprops icons="dicon" serviceName="MLS Lists" />
          <Leftprops icons="dicon" serviceName="Notifications" />
        </div>
        <div className="leftSide_invite&earn">
          <Leftprops icons="dashboarIcon" serviceName="Invite & Earn" />
        </div>
      </div>
      <div>
        <h2>Nead Help</h2>
        <Leftprops icons="?icon" serviceName="Help Desk" />
      </div>
    </div>
  );
}

export default LeftSide;
