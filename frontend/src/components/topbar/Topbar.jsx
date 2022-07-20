import React from 'react';
import './topbar.css';


export default function Topbar() {
  return (
    <div className="topbar" style={{backgroundColor: '#ffba02'}}>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span >
            <h2>Manasik Aviation</h2>
          </span>
        </div>
        <div className="topRight">
          {/* <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div> */}
          <button
            style={{ backgroundColor: '#eeeef7', color: 'black' }}
            className="userAddButton"
            onClick={() => {
              window.localStorage.removeItem('isAuthenticated');
              window.location.href = '/';
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
