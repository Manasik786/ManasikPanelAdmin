import "./sidebar.css";
import { LineStyle } from "@material-ui/icons";
import delievery from "../../assets/delivery-package-svgrepo-com.svg";
// import airplane from "../../assets/airplane-svgrepo-com.svg"
import category from "../../assets/category.svg";
import services from "../../assets/service-svgrepo-com.svg";
import applicants from "../../assets/users-svgrepo-com.svg";
import social from "../../assets/social-media-svgrepo-com.svg";
import pages from "../../assets/pages-svgrepo-com.svg";
import airambulance from "../../assets/flying-ambulance-svgrepo-com.svg";
import gallery from "../../assets/gallery-svgrepo-com.svg";
import inquiry from "../../assets/ask-svgrepo-com.svg";
import career from "../../assets/career-svgrepo-com.svg";
import contact from "../../assets/contact-svgrepo-com.svg";
import booking from "../../assets/form-svgrepo-com.svg";
import history from "../../assets/history-svgrepo-com.svg";
import aircraftsvg from "../../assets/airplane.svg";

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{ maxWidth: "220px", minWidth: "220px" }} className="sidebar">
      <div className="sidebarWrapper">
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/home" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Dashboard
              </li>
            </Link>
          </ul>
        </div> */}
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Pages</h3>
          <ul className="sidebarList">
            <Link to="/pages" className="link">
              <li className="sidebarListItem">
                <img
                  className="sidebarIcon"
                  src={pages}
                  width="20"
                  height="20"
                  alt=""
                />
                Pages
              </li>
            </Link>
          </ul>
        </div> */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Careers</h3>
          <ul className="sidebarList">
            <Link to="/manageapplicant" className="link">
              <li className="sidebarListItem">
                <img
                  className="sidebarIcon"
                  src={applicants}
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
            <Link to="/managepackage" className="link">
              <li className="sidebarListItem">
                <img
                  className="sidebarIcon"
                  src={delievery}
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
                  src={services}
                  width="18"
                  height="18"
                  alt=""
                />
                Services
              </li>
            </Link>
            <Link to="/OtherServices" className="link">
              <li className="sidebarListItem">
                <img
                  className="sidebarIcon"
                  src={services}
                  width="18"
                  height="18"
                  alt=""
                />
                Other Services
              </li>
            </Link>
            <Link to="/airambulanceservices" className="link">
              <li className="sidebarListItem">
                <img
                  className="sidebarIcon"
                  src={airambulance}
                  width="18"
                  height="18"
                  alt=""
                />
                Air Ambulance
              </li>
            </Link>{" "}
            <Link to="/galleryservices" className="link">
              <li className="sidebarListItem">
                <img
                  className="sidebarIcon"
                  src={gallery}
                  width="18"
                  height="18"
                  alt=""
                />
                Gallery
              </li>
            </Link>
            <Link to="/AirCraftService" className="link">
              <li className="sidebarListItem">
                <img
                  className="sidebarIcon"
                  src={aircraftsvg}
                  width="18"
                  height="18"
                  alt=""
                />
                Air Craft
              </li>
            </Link>
            <Link to="/BookingFormService" className="link">
              <li className="sidebarListItem">
                <img
                  className="sidebarIcon"
                  src={booking}
                  width="18"
                  height="18"
                  alt=""
                />
                Booking Form
              </li>
            </Link>
            <Link to="/CarrerInquiry" className="link">
              <li className="sidebarListItem">
                <img
                  className="sidebarIcon"
                  src={inquiry}
                  width="18"
                  height="18"
                  alt=""
                />
                CarrerInquiry
              </li>
            </Link>
            <Link to="/careerview" className="link">
              <li className="sidebarListItem">
                <img
                  className="sidebarIcon"
                  src={career}
                  width="18"
                  height="18"
                  alt=""
                />
                CareerView
              </li>
            </Link>
            <Link to="/contact" className="link">
              <li className="sidebarListItem">
                <img
                  className="sidebarIcon"
                  src={contact}
                  width="18"
                  height="18"
                  alt=""
                />
                contact
              </li>
            </Link>
            <Link to="/contactlead" className="link">
              <li className="sidebarListItem">
                <img
                  className="sidebarIcon"
                  src={history}
                  width="18"
                  height="18"
                  alt=""
                />
                contactlead
              </li>
            </Link>
            <Link to="/serivcenpackage" className="link">
              <li className="sidebarListItem">
                <img
                  className="sidebarIcon"
                  src={inquiry}
                  width="18"
                  height="18"
                  alt=""
                />
                inquiry{" "}
              </li>
            </Link>
            <Link to="/SocailLink" className="link">
              <li className="sidebarListItem">
                <img
                  className="sidebarIcon"
                  src={social}
                  width="18"
                  height="18"
                  alt=""
                />
                Socail Link
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
                  src={social}
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
