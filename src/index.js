import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Login from "./pages/Login/Login";
// import Dashboard from "./pages/Dashboard/Dashboard";
// import About from "./pages/About/About";
// import Contact from "./pages/Contact/Contact";
// import Error404 from "./pages/Errors/Error404";
// import Services from "./pages/Dashboard/Services/Services";
// import Service from "./pages/Dashboard/Services/Service/Service";
// import DataTable from "./pages/Dashboard/DataTable/DataTable";
import AuthComponent from "./components/Auth/AuthComponent";
import Preloader from "./components/Preloader/Preloader";
import { ToastContainer } from "react-toastify";
import Storage from "./core/helpers/Storage";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./assets/styles/global.scss";
import MyRouter from "./core/MyRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MyRouter />
    {/* <BrowserRouter>
      <Routes>
        {
          ["/login", "/signin", "/ورود"].map((route, index) => <Route path={route} key={index} element={<Login />} />)
        }
        {
          ["/logout", "/signout", "/خروج"].map((route, index) => {
            Storage.deleteLoginInfo();
            
            return <Route path={route} key={index} element={<Login />} />;
          })
        }
        {
          ["/", "/home", "/dashboard", "/خانه"].map((route, index) => {
              return (
                  <Route path={route} key={index} element={<Dashboard />}>
                      <Route path="services" element={<Services />} />
                      <Route path="service/:id/sub-services" element={<Service />} />
                      <Route path="service/:id/sub-services/:subServiceID" element={<DataTable />} />
                  </Route>
              );
          })
        }
        {
          ["/about", "/about-us", "/درباره", "/درباره-ما"].map((route, index) => <Route path={route} key={index} element={<About />} />)
        }
        {
          ["/contact", "/contact-us", "/تماس", "/تماس-با-ما"].map((route, index) => <Route path={route} key={index} element={<Contact />} />)
        }
        <Route path="*" element={<Error404 />}/>
      </Routes>
    </BrowserRouter> */}
    <AuthComponent />
    <ToastContainer rtl />
    {/* <Preloader /> */}
  </React.StrictMode>
);
