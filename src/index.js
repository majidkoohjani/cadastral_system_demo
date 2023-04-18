import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Error404 from "./pages/Errors/Error404";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./assets/styles/global.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {
          ["/login", "/signin", "/ورود"].map((route, index) => <Route path={route} key={index} element={<Login />} />)
        }
        {
          ["/", "/home", "/dashboard", "/services", "/خانه"].map((route, index) => <Route path={route} key={index} element={<Dashboard />} />)
        }
        {
          ["/about", "/about-us", "/درباره", "/درباره-ما"].map((route, index) => <Route path={route} key={index} element={<About />} />)
        }
        {
          ["/contact", "/contact-us", "/تماس", "/تماس-با-ما"].map((route, index) => <Route path={route} key={index} element={<Contact />} />)
        }
        <Route path="*" element={<Error404 />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
