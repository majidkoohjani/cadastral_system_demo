import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
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
    <AuthComponent />
    <ToastContainer rtl />
    {/* <Preloader /> */}
  </React.StrictMode>
);
