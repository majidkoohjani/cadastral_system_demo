import { Routes, Route, useNavigate, Outlet, BrowserRouter, redirect } from "react-router-dom";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Error404 from "../pages/Errors/Error404";
import Services from "../pages/Dashboard/Services/Services";
import Service from "../pages/Dashboard/Services/Service/Service";
import DataTable from "../pages/Dashboard/DataTable/DataTable";
import Storage from "./helpers/Storage";
import Logout from "../pages/Login/Logout";

const ProtectedRoute = ({user, redirectPath = "/login"}) => {
    const navigate = useNavigate();

    
    if (!Storage.getLoginInfo()) {
        window.location.href = "/login";
    }

    return <Outlet />;

};

const MyRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {
                    ["/login", "/signin", "/ورود"].map((route, index) => <Route path={route} key={index} element={<Login />} />)
                }

                <Route element={<ProtectedRoute />}>
                    {
                        ["/logout", "/signout", "/خروج"].map((route, index) => {
                            return <Route path={route} key={index} element={<Logout />} />;
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
                </Route>
                {
                    ["/about", "/about-us", "/درباره", "/درباره-ما"].map((route, index) => <Route path={route} key={index} element={<About />} />)
                }

                {
                    ["/contact", "/contact-us", "/تماس", "/تماس-با-ما"].map((route, index) => <Route path={route} key={index} element={<Contact />} />)
                }
                <Route path="*" element={<Error404 />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default MyRouter;
