import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";
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
import Inbox from "../pages/Dashboard/Inbox/Inbox";
import AdminPanel from "../pages/Admin/AdminPanel";

const ProtectedRoute = () => {
    if (!Storage.getLoginInfo()) {
        window.location.href = "/login";
        return;
    }

    return <Outlet />;
};

const AdminRoute = () => {
    if (Storage.getLoginInfo()?.isAdmin !== true) {
        window.location.href = "/";
        return;
    }

    return <Outlet />;
}

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
                                    <Route element={<AdminRoute />}>
                                        <Route path="control-panel" key={index} element={<AdminPanel />} />
                                    </Route>
                                    <Route path="inbox" element={<Inbox />} />
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
