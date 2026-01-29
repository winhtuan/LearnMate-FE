// src/app/routes/index.jsx
import { Routes, Route } from "react-router-dom";
import DashboardRoute from "./DashboardRoute";
import HomeRoute from "./HomeRoute";
import TeacherManagementRoute from "./TeacherManagementRoute";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeRoute />} />
            <Route path="/dashboard" element={<DashboardRoute />} />
            <Route path="/tutorRegister/*" element={<TeacherManagementRoute />} />
            <Route path="/tutorDashboard/*" element={<TeacherManagementRoute />} />
        </Routes>
    );
};

export default AppRoutes;
