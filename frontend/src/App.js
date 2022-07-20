import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import Product from './pages/product/Product';
import Login from './pages/login/Login';
import IdleTimerContainer from './IdleTimerContainer';
import { useEffect } from 'react';
import ManagePackage from './pages/ManagePackages/ManagePackages'
import Slider from './pages/Slider/Slider'
import ManageCategory from './pages/ManageCategory/ManageCategory'
import Services from './pages/Services/Services'
import Company from './pages/Company/Company'
import Mission from './pages/Mission/Mission'
import Vision from './pages/Vision/Vision'
import WhyManasik from './pages/WhyManasik/WhyManasik'
import CEOMessage from './pages/CEOMessage/message'
import Privacy from './pages/Privacy/Privacy'
import Aircraft from './pages/Aviation/Aircraft'
import Onboard from './pages/Aviation/Onboard'
import Term from './pages/Aviation/Term'
import Hotel from './pages/Hotel/Hotel'
import CreateService from './pages/CreateService/CreateService'
import Test from './pages/Test'
import AirAmbulance from './pages/AirAmbulanve/Ambulance'
import SocialLink from './pages/SocialLinks/SocialLink'
import Slide from './pages/Slide/Slide'
import AllSlider from './pages/Slide/AllSlider'
import Packages from './pages/PackageInquery/PackageInquery'
import ServiceAdd from "./pages/PanelPages/ServicesAdd"
import EditService from './pages/PanelPages/EditService';
import Editapplicantstatus from './pages/PanelPages/EditStatus';
function App() {
  useEffect(() => {
    document.title = 'Manasik Admin Portal';
  }, []);
  return (
    <Router>
      <IdleTimerContainer />
      {window.localStorage.getItem('isAuthenticated') &&
        window.location.pathname !== '/' ? (
        <Topbar />
      ) : null}
      <div className="container">
        {window.localStorage.getItem('isAuthenticated') &&
          window.location.pathname !== '/' ? (
          <Sidebar />
        ) : null}
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route
            path="/home"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <Home />
              ) : (
                (window.location.href = '/')
              )
            }
          />
          <Route
            path="/pages"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <Slider />
              ) : (
                (window.location.href = '/')
              )
            }
          />
          <Route
            path="/packages"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <Packages />
              ) : (
                (window.location.href = '/')
              )
            }
          />
          <Route
            exact
            path="/slide"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <Slide />
              ) : (
                (window.location.href = '/')
              )
            }
          />
          <Route
            exact
            path="/servicesAdddition"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <ServiceAdd />
              ) : (
                (window.location.href = '/')
              )
            }
          />
          <Route
            exact
            path="/update"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <AllSlider />
              ) : (
                (window.location.href = '/')
              )
            }
          />
          <Route
            exact
            path="/AirAmbulance"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <AirAmbulance />
              ) : (
                (window.location.href = '/')
              )
            }
          />
          <Route
            exact
            path="/sociallinks"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <SocialLink />
              ) : (
                (window.location.href = '/')
              )
            }
          />

          <Route
            exact
            path="/createservice"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <CreateService />
              ) : (
                (window.location.href = '/')
              )
            }
          />
          <Route
            exact
            path="/editAviation"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <Mission />
              ) : (
                (window.location.href = '/')
              )
            }
          />

          <Route
            exact
            path="/services"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <Services />
              ) : (
                (window.location.href = '/')
              )
            }
          />
          <Route
            exact
            path="/ceomessage"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <CEOMessage />
              ) : (
                (window.location.href = '/')
              )
            }
          />
          <Route
            exact
            path="/manageapplicant"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <UserList />
              ) : (
                (window.location.href = '/')
              )
            }
          />
          <Route
            exact
            path="/vehicles/:vehicleID"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <Product />
              ) : (
                (window.location.href = '/')
              )
            }
          />
          <Route
            exact
            path="/vision"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <Vision />
              ) : (
                (window.location.href = '/')
              )
            }
          />
          <Route
            exact
            path="/statusupdate"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <Editapplicantstatus />
              ) : (
                (window.location.href = '/')
              )
            }
          />
          <Route
            exact
            path="/privacy"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <Privacy />
              ) : (
                (window.location.href = '/')
              )
            }
          />
          <Route
            exact
            path="/managepackage"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <ManageCategory />
              ) : (
                (window.location.href = '/')
              )
            }
          />
          <Route
            exact
            path="/managecategories"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <ManagePackage />
              ) : (
                (window.location.href = '/')
              )
            }
          />
          <Route
            exact
            path="/whymanasik"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <WhyManasik />
              ) : (
                (window.location.href = '/')
              )
            }
          />
          <Route
            exact
            path="/editservice"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <EditService />
              ) : (
                (window.location.href = '/')
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
              window.localStorage.getItem('isAuthenticated') ? (
                <Company />
              ) : (
                (window.location.href = '/')
              )
            }
          />
          <Route
            exact
            path="/populardestination"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <Aircraft />
              ) : (
                (window.location.href = '/')
              )
            }
          />
          <Route
            exact
            path="/onboard"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <Onboard />
              ) : (
                (window.location.href = '/')
              )
            }
          />
          <Route
            exact
            path="/terms"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <Term />
              ) : (
                (window.location.href = '/')
              )
            }
          />
          <Route
            exact
            path="/hotel"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <Hotel />
              ) : (
                (window.location.href = '/')
              )
            }
          />
          <Route
            exact
            path="/test"
            render={() =>
              window.localStorage.getItem('isAuthenticated') ? (
                <Test />
              ) : (
                (window.location.href = '/')
              )
            }
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
