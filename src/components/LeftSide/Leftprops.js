import React from "react";
import "./LeftProps.css";
function Leftprops(props) {
  return (
    <div className="leftprops_list">
      <i>{props.icons}</i>
      <h4>{props.serviceName}</h4>
    </div>
  );
}

export default Leftprops;
