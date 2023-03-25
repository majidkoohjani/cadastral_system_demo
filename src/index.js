import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
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
          ["/login", "/signin"].map((route, index) => <Route path={route} key={index} element={<Login />} />)
        }
        <Route path="*" element={<Error404 />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
