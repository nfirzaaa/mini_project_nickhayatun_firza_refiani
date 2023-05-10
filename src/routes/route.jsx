import { Navigate } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home";
import Dashboard from "../pages/admin/Dashboard";
import NotFound from "../pages/404";

const auth = localStorage.getItem("token");
console.log(localStorage.getItem("token"));

const userRoute = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
];

const adminRoute = [
    {
        path: "/admin",
        element: auth ? <Navigate to="/dashboard" /> : <Navigate to="/login" />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/dashboard",
        element: auth ? <Dashboard /> : <Navigate to="/login" />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
];

export { userRoute, adminRoute };
