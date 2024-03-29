import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import CareerView from "./pages/PanelPages/CareerView";
import OtherServicesAddition from "./pages/PanelPages/OtherServiceAdd";
import Contact from "./pages/PanelPages/contact";
import EditOtherService from "./pages/PanelPages/EditOtherService";
import OtherServicess from "./pages/Services/OtherServices";
import Contactlead from "./pages/PanelPages/ContactLead";
import Inquiry from "./pages/PanelPages/Service_n_package_inquiry";
import CarrerInquiry from "./pages/PanelPages/CareerInquiry";
import CareerInquiryAddition from "./pages/PanelPages/AddCareerInquiry";
import CareerInquiryEdit from "./pages/PanelPages/EditCareerInquiry";
import SocailLink from "./pages/PanelPages/SocialLink";
import Gallery from "./pages/PanelPages/Gallery";
import AddAirCraft from "./pages/PanelPages/AddAirCraftService";
import BookingForm from "./pages/PanelPages/BookingForm";
import BookingFormPackage from "./pages/PanelPages/BookingFormPackage";
import EditAirCraft from "./pages/PanelPages/EditAirCraftService";
import AirCraft from "./pages/PanelPages/AirCraftService";
import GalleryAddition from "./pages/PanelPages/AddGallery";
import EditGallery from "./pages/PanelPages/EditGallery";
import Ambulance from "./pages/PanelPages/AirAmbulance";
import EditAmbulance from "./pages/PanelPages/EditAirAmbulance";
import AmbulanceAddition from "./pages/PanelPages/AddAirambulance";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login";
import IdleTimerContainer from "./IdleTimerContainer";
import { useEffect } from "react";
import PackagesManagement from "./pages/ManagePackages/ManagePackages";
import SliderAddition from "./pages/PanelPages/AddSlider";
import EdiSlider from "./pages/PanelPages/EditSlider";
import Slider from "./pages/PanelPages/Slider";
import Services from "./pages/Services/Services";
import Company from "./pages/Company/Company";
import Mission from "./pages/Mission/Mission";
import Vision from "./pages/Vision/Vision";
import WhyManasik from "./pages/WhyManasik/WhyManasik";
import PackagesAddition from "./pages/PanelPages/AddManagePackages";
import EditPackages from "./pages/PanelPages/EditManagePackages";
import CEOMessage from "./pages/CEOMessage/message";
import Privacy from "./pages/Privacy/Privacy";
import Aircraft from "./pages/Aviation/Aircraft";
import Onboard from "./pages/Aviation/Onboard";
import Term from "./pages/Aviation/Term";
import Hotel from "./pages/Hotel/Hotel";
import CreateService from "./pages/CreateService/CreateService";
import Test from "./pages/Test";
import AirAmbulance from "./pages/AirAmbulanve/Ambulance";
import SocialLink from "./pages/SocialLinks/SocialLink";
import Slide from "./pages/Slide/Slide";
import AllSlider from "./pages/Slide/AllSlider";
import Packages from "./pages/PackageInquery/PackageInquery";
import ServiceAdd from "./pages/PanelPages/ServicesAdd";
import EditService from "./pages/PanelPages/EditService";
import Editapplicantstatus from "./pages/PanelPages/EditStatus";
import BookingFormAirAmbulance from "./pages/PanelPages/BookingFormAirAmbulance";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ContactEdit from "./pages/PanelPages/EditContact"

function App() {
  useEffect(() => {
    document.title = "Manasik Admin Portal";
  }, []);
  return (
    <Router>
      <IdleTimerContainer />
      {window.localStorage.getItem("isAuthenticated") &&
        window.location.pathname !== "/" ? (
        <Topbar />
      ) : null}
      <div className="container1">
        {window.localStorage.getItem("isAuthenticated") &&
          window.location.pathname !== "/" ? (
          <Sidebar />
        ) : null}
        <Switch>
          <Route
            path="/CarrerInquiry"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <CarrerInquiry />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            path="/contact"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <Contact />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            path="/addCareerInquiry"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <CareerInquiryAddition />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            path="/addPackages"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <PackagesAddition />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            path="/editpackages"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <EditPackages />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            path="/editcontact"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <ContactEdit />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            path="/editCareerInquiry"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <CareerInquiryEdit />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            path="/careerview"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <CareerView />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            path="/contactlead"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <Contactlead />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            path="/serivcenpackage"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <Inquiry />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            path="/Slider"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <Slider />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            path="/editslider"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <EdiSlider/>
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            path="/sliderAdddition"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <SliderAddition/>
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            path="/SocailLink"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <SocailLink />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            path="/AirCraftService"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <AirCraft />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            path="/BookingFormService"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <BookingForm />
              ) : (
                (window.location.href = "/")
              )
            }
          />{" "}
          <Route
            path="/BookingFormPackage"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <BookingFormPackage />
              ) : (
                (window.location.href = "/")
              )
            }
          />{" "}
          <Route
            path="/BookingFormAirAmbulance"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <BookingFormAirAmbulance />
              ) : (
                (window.location.href = "/")
              )
            }
          />{" "}
          <Route
            path="/addAirCraftService"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <AddAirCraft />
              ) : (
                (window.location.href = "/")
              )
            }
          />{" "}
          <Route
            path="/editAirCraftService"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <EditAirCraft />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            path="/galleryservices"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <Gallery />
              ) : (
                (window.location.href = "/")
              )
            }
          />{" "}
          <Route
            path="/addgalleryservices"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <GalleryAddition />
              ) : (
                (window.location.href = "/")
              )
            }
          />{" "}
          <Route
            path="/editgalleryservices"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <EditGallery />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route exact path="/">
            <Login />
          </Route>
          <Route
            path="/addairambulanceservices"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <AmbulanceAddition />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            path="/editairambulanceservices"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <EditAmbulance />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            path="/airambulanceservices"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <Ambulance />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            path="/home"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <Home />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          {/* <Route
            path="/pages"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <Slider />
              ) : (
                (window.location.href = '/')
              )
            }
          /> */}
          <Route
            path="/packages"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <Packages />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            exact
            path="/slide"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <Slide />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            exact
            path="/servicesAdddition"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <ServiceAdd />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            exact
            path="/otherservicesAdddition"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <OtherServicesAddition />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            exact
            path="/update"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <AllSlider />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            exact
            path="/AirAmbulance"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <AirAmbulance />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            exact
            path="/sociallinks"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <SocialLink />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            exact
            path="/createservice"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <CreateService />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            exact
            path="/editAviation"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <Mission />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            exact
            path="/services"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <Services />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            exact
            path="/OtherServices"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <OtherServicess />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            exact
            path="/ceomessage"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <CEOMessage />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            exact
            path="/manageapplicant"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <UserList />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            exact
            path="/vehicles/:vehicleID"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <Product />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            exact
            path="/vision"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <Vision />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            exact
            path="/statusupdate"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <Editapplicantstatus />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            exact
            path="/privacy"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <Privacy />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            exact
            path="/managepackage"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <PackagesManagement />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          {/* <Route
            exact
            path="/managecategories"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <ManagePackage />
              ) : (
                (window.location.href = '/')
              )
            }
          /> */}
          <Route
            exact
            path="/whymanasik"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <WhyManasik />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            exact
            path="/editservice"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <EditService />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            exact
            path="/editotherservice"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <EditOtherService />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          {/* <Route
            path="/verification"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <VerificationList />
              ) : (
                (window.location.href = '/')
              )
            }
          /> */}
          {/*
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/verification">
            <VerificationList />
          </Route> */}
          {/* Add new page */}
          <Route
            exact
            path="/company"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <Company />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            exact
            path="/populardestination"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <Aircraft />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            exact
            path="/onboard"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <Onboard />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            exact
            path="/terms"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <Term />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            exact
            path="/hotel"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <Hotel />
              ) : (
                (window.location.href = "/")
              )
            }
          />
          <Route
            exact
            path="/test"
            render={() =>
              window.localStorage.getItem("isAuthenticated") ? (
                <Test />
              ) : (
                (window.location.href = "/")
              )
            }
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
