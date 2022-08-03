import "./sidebar.css";
import { LineStyle, InventoryIcon } from "@material-ui/icons";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import delievery from "../../assets/delivery-package-svgrepo-com.svg";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
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
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Link } from "react-router-dom";
import { useState } from "react";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import InfoIcon from "@mui/icons-material/Info";
import CollectionsIcon from "@mui/icons-material/Collections";
import PublicIcon from "@mui/icons-material/Public";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import CallIcon from "@mui/icons-material/Call";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
export default function Sidebar() {
  const styling = {
    marginRight: "5px",
    fontSize: "20px",
    color: "#f9f5f5",
  };
  const hovering = {
    marginRight: "5px",
    fontSize: "20px",
    color: "#050505",
  };
  const [linkstyling, setlinkstyling] = useState(styling);
  return (
    <div style={{ maxWidth: "220px", minWidth: "220px" }} className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/home" className="link">
              <li className="sidebarListItem">
                <LineStyle />
                Dashboard
              </li>
            </Link>
          </ul>
        </div>
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Pages</h3>
          <ul className="sidebarList">
            <Link to="/pages" className="link">
              <li className="sidebarListItem">
                <img
                 
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
          <h3 className="sidebarTitle">Services</h3>
          <ul className="sidebarList">
            <Link to="/services" className="link">
              <li className="sidebarListItem">
                <MiscellaneousServicesIcon />
                Manage Services
              </li>
            </Link>{" "}
            <Link to="/BookingFormService" className="link">
              <li className="sidebarListItem">
                <QuestionAnswerIcon />
                Service Inquiry
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Packages</h3>
          <ul className="sidebarList">
            <Link to="/managepackage" className="link">
              <li className="sidebarListItem">
                <Inventory2Icon />
                Manage Packages
              </li>
            </Link>
            {/* BookingFormPackage */}
            <Link to="/BookingFormPackage" className="link">
              <li className="sidebarListItem">
                <QuestionAnswerIcon />
                Package Inquiry
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Air Service</h3>
          <ul className="sidebarList">
            <Link to="/airambulanceservices" className="link">
              <li className="sidebarListItem">
                <LocalHospitalIcon src={airambulance} />
                Air Ambulance
              </li>
            </Link>{" "}
            <Link to="/AirCraftService" className="link">
              <li className="sidebarListItem">
                <ConnectingAirportsIcon />
                Charter Flight
              </li>
            </Link>
            <Link to="/BookingFormAirAmbulance" className="link">
              <li className="sidebarListItem">
                <QuestionAnswerIcon />
                Air Service Inquiry
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Career</h3>
          <ul className="sidebarList">
            <Link to="/CarrerInquiry" className="link">
              <li className="sidebarListItem">
                <ManageSearchIcon />
                Manage Jobs
              </li>
            </Link>
            <Link to="/manageapplicant" className="link">
              <li className="sidebarListItem">
                <FilePresentIcon />
                Manage Applicants
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Others</h3>

          <ul className="sidebarList">
            <Link to="/Slider" className="link">
              <li className="sidebarListItem">
                <ViewHeadlineIcon />
                Slider
              </li>
            </Link>

            <Link to="/OtherServices" className="link">
              <li className="sidebarListItem">
                <InfoIcon />
                About Page
              </li>
            </Link>

            <Link to="/galleryservices" className="link">
              <li className="sidebarListItem">
                <CollectionsIcon />
                Gallery
              </li>
            </Link>
            {/* <Link to="/SocailLink" className="link">
              <li className="sidebarListItem">
                <PublicIcon src={social} />
                Socail Link
              </li>
            </Link> */}

            {/* <Link to="/careerview" className="link">
              <li className="sidebarListItem">
                <img
                  
                  src={career}
                  width="18"
                  height="18"
                  alt=""
                />
                CareerView
              </li>
            </Link> */}

            {/* <Link to="/serivcenpackage" className="link">
              <li className="sidebarListItem">
                <img
                  
                  src={inquiry}
                  width="18"
                  height="18"
                  alt=""
                />
                inquiry{" "}
              </li>
            </Link> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Contact</h3>
          <ul className="sidebarList">
            <Link to="/contact" className="link">
              <li className="sidebarListItem">
                <CallIcon />
                contact
              </li>
            </Link>

            <Link to="/contactlead" className="link">
              <li className="sidebarListItem">
                <LeaderboardIcon />
                contact Lead
              </li>
            </Link>
          </ul>
        </div>

        {/* New Management  */}
        {/* <div className="sidebarMenu">
            <h3 className="sidebarTitle">About</h3>
            <ul className="sidebarList">
              <Link to="/company" className="link">
                <li className="sidebarListItem">
                  <img
                   
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
      </div>
    </div>
  );
}
