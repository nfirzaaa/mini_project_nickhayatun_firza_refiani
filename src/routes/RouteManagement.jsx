import { useNavigate, Route, Routes, useLocation } from "react-router-dom";
import { Suspense, useEffect } from "react";
import Loading from "../components/Loading";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Dashboard from "../pages/admin/Dashboard";
import About from "../pages/About/About";
import Product from "../pages/Product/Product";
import Register from "../pages/Auth/Register";
// import NotFound from "../pages/404";

const RouteManagement = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/dashboard") {
            if (token === null) {
                navigate("/admin");
            }
        }
    }, []);

    return (
        <Suspense fallback={<Loading />}>
            {token ? (
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/" element={<Home />} />
                    <Route path="product/:id" element={<Product />} />
                    <Route path="/admin" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            ) : (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="product/:id" element={<Product />} />
                    <Route path="/admin" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            )}
        </Suspense>
    );
};

export default RouteManagement;
