// src/app/routes/index.jsx
import { Routes, Route } from "react-router-dom";
import DashboardRoute from "./DashboardRoute";
import HomeRoute from "./HomeRoute";
import AdminDashboardRoute from "./AdminDashboardRoute";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeRoute />} />
            <Route path="/dashboard" element={<DashboardRoute />} />
            <Route path="/admin/*" element={<AdminDashboardRoute />} />
        </Routes>
    );
};

export default AppRoutes;
