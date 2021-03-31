import React from "react";
import "./SidebarOption.css";

function SideBarOption({ title, Icon }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h4 className="title">{title}</h4>
      ) : (
        <p className="title">{title}</p>
      )}
    </div>
  );
}

export default SideBarOption;
