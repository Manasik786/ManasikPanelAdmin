import React from "react";
import "./topbar.css";
import Headlogo from "../../assets/img/Headerlogo.png";

export default function Topbar() {
  return (
    <div className="topbar" style={{ backgroundColor: "#ffba02" }}>
      <div className="topbarWrapper">
        <div className="topLeft">
          <img src={Headlogo} />
        </div>
        <div className="topRight">
        
          {/* <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div> */}
          <button
            style={{ backgroundColor: "#eeeef7", color: "black" }}
            className="userAddButton"
            onClick={() => {
              window.localStorage.removeItem("isAuthenticated");
              window.location.href = "/";
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
