// src/app/routes/index.jsx
import { Routes, Route } from "react-router-dom";
import DashboardRoute from "./DashboardRoute";
import HomeRoute from "./HomeRoute";
import ClassRoute from "./ClassRoute"; 

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeRoute />} />
            <Route path="/classes/*" element={<ClassRoute />} />
            <Route path="/dashboard" element={<DashboardRoute />} />
        </Routes>
    );
};

export default AppRoutes;
