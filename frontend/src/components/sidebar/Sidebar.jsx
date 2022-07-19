import './sidebar.css';
import { LineStyle } from '@material-ui/icons';
import historyIcon from '../../assets/history.svg';
import { Link } from 'react-router-dom';
import { positions } from '@mui/system';

export default function Sidebar() {
  return (
    <div style={{ maxWidth: '220px', minWidth: '220px' }} className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/home" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Dashboard
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Pages</h3>
          <ul className="sidebarList">
            <Link to="/pages" className="link">
              <li className="sidebarListItem">
                <img
                  className="sidebarIcon"
                  src={historyIcon}
                  width="20"
                  height="20"
                  alt=""
                />
                Pages
              </li>
            </Link>
            {/* <Link to="/ridersVerification" className="link">
              <li className="sidebarListItem">
                <img
                  className="sidebarIcon"
                  src={verifyImg}
                  width="20"
                  height="20"
                  alt=""
                />
                Pending Verification
              </li>
            </Link>
            <Link to="/ridersStatus" className="link">
              <li className="sidebarListItem">
                <img
                  className="sidebarIcon"
                  src={updateImg}
                  width="20"
                  height="20"
                  alt=""
                />
                Update Status
              </li>
            </Link> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Careers</h3>
          <ul className="sidebarList">
            <Link to="/manageapplicant" className="link">
              <li className="sidebarListItem">
                <img
                  className="sidebarIcon"
                  src={historyIcon}
                  width="20"
                  height="20"
                  alt=""
                />
                Manage Applicants
              </li>
            </Link>
            {/* <Link to="/vehiclesVerification" className="link">
              <li className="sidebarListItem">
                <img
                  className="sidebarIcon"
                  src={verifyImg}
                  width="20"
                  height="20"
                  alt=""
                />
                Pending Verification
              </li>
            </Link>
            <Link to="/vehiclesStatus" className="link">
              <li className="sidebarListItem">
                <img
                  className="sidebarIcon"
                  src={updateImg}
                  width="20"
                  height="20"
                  alt=""
                />
                Update Status
              </li>
            </Link> */}
          </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Packages</h3>
            <ul className="sidebarList">
              <Link to="/managecategories" className="link">
                <li className="sidebarListItem">
                  <img
                    className="sidebarIcon"
                    src={historyIcon}
                    width="20"
                    height="20"
                    alt=""
                  />
                  Manage Categories
                </li>
              </Link>
              <Link to="/managepackage" className="link">
                <li className="sidebarListItem">
                  <img
                    className="sidebarIcon"
                    src={historyIcon}
                    width="18"
                    height="18"
                    alt=""
                  />
                  Manage Packages
                </li>
              </Link>
              {/* <Link to="/fare/history" className="link">
                <li className="sidebarListItem">
                  <img
                    className="sidebarIcon"
                    src={historyIcon}
                    width="18"
                    height="18"
                    alt=""
                  />
                  Fare Percentage
                </li>
              </Link> */}
            </ul>
          </div>
          <div className="sidebarMenu">
          <h3 className="sidebarTitle">Services</h3>

            <ul className="sidebarList">
            <Link to="/services" className="link">
                <li className="sidebarListItem">
                  <img
                    className="sidebarIcon"
                    src={historyIcon}
                    width="18"
                    height="18"
                    alt=""
                  />
                  Services
                </li>
              </Link>
              {/* <Link to="/viewRides" className="link">
                <li className="sidebarListItem">
                  <img
                    className="sidebarIcon"
                    src={moneyIcon}
                    width="20"
                    height="20"
                    alt=""
                  />
                  View Rides
                </li>
              </Link>
              <Link to="/viewRides/1" className="link">
                <li className="sidebarListItem">
                  <img
                    className="sidebarIcon"
                    src={verifyImg}
                    width="18"
                    height="18"
                    alt=""
                  />
                  Ride Details
                </li>
              </Link> */}
            </ul>
          </div>

          {/* New Management  */}
          {/* <div className="sidebarMenu">
            <h3 className="sidebarTitle">About</h3>
            <ul className="sidebarList">
              <Link to="/company" className="link">
                <li className="sidebarListItem">
                  <img
                    className="sidebarIcon"
                    src={historyIcon}
                    width="20"
                    height="20"
                    alt=""
                  />
                  Company
                </li>
              </Link>
              <Link to="vision" className="link">
                <li className="sidebarListItem">
                  <img
                    className="sidebarIcon"
                    src={historyIcon}
                    width="18"
                    height="18"
                    alt=""
                  />
                 Vision
                </li>
              </Link>
              <Link to="mission" className="link">
                <li className="sidebarListItem">
                  <img
                    className="sidebarIcon"
                    src={historyIcon}
                    width="18"
                    height="18"
                    alt=""
                  />
                 Mission
                </li>
              </Link>
              <Link to="ceomessage" className="link">
                <li className="sidebarListItem">
                  <img
                    className="sidebarIcon"
                    src={historyIcon}
                    width="18"
                    height="18"
                    alt=""
                  />
                 CEO Message
                </li>
              </Link>
              <Link to="whymanasik" className="link">
                <li className="sidebarListItem">
                  <img
                    className="sidebarIcon"
                    src={historyIcon}
                    width="18"
                    height="18"
                    alt=""
                  />
                 Why Manasik
                </li>
              </Link>
              <Link to="privacy" className="link">
                <li className="sidebarListItem">
                  <img
                    className="sidebarIcon"
                    src={historyIcon}
                    width="18"
                    height="18"
                    alt=""
                  />
                 Privacy Policy
                </li>
              </Link>
            </ul>
          </div> */}

{/* 
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Aviation</h3>
            <ul className="sidebarList">
              <Link to="/populardestination" className="link">
                <li className="sidebarListItem">
                  <img
                    className="sidebarIcon"
                    src={historyIcon}
                    width="20"
                    height="20"
                    alt=""
                  />
                  Popular Destination
                </li>
              </Link>
              <Link to="onboard" className="link">
                <li className="sidebarListItem">
                  <img
                    className="sidebarIcon"
                    src={historyIcon}
                    width="18"
                    height="18"
                    alt=""
                  />
                 Onboard Store
                </li>
              </Link>
              <Link to="terms" className="link">
                <li className="sidebarListItem">
                  <img
                    className="sidebarIcon"
                    src={historyIcon}
                    width="18"
                    height="18"
                    alt=""
                  />
                 Term & Condition
                </li>
              </Link>
             
            </ul>
          </div> */}
          {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Hotel</h3>
          <ul className="sidebarList">
            <Link to="/hotel" className="link">
              <li className="sidebarListItem">
                <img
                  className="sidebarIcon"
                  src={historyIcon}
                  width="20"
                  height="20"
                  alt=""
                />
                Hotel
              </li>
            </Link>
            
          </ul>
        </div> */}
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Popular Destination</h3>
          <ul className="sidebarList">
            <Link to="/destination" className="link">
              <li className="sidebarListItem">
                <img
                  className="sidebarIcon"
                  src={historyIcon}
                  width="20"
                  height="20"
                  alt=""
                />
                Popular Destination
              </li>
            </Link>
            
          </ul>
        </div> */}
        
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Links</h3>
          <ul className="sidebarList">
            <Link to="/sociallinks" className="link">
              <li className="sidebarListItem">
                <img
                  className="sidebarIcon"
                  src={historyIcon}
                  width="20"
                  height="20"
                  alt=""
                />
                Social Links
              </li>
            </Link>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
