// src/app/routes/index.jsx
import { Routes, Route } from "react-router-dom";
import DashboardRoute from "./DashboardRoute";
import HomeRoute from "./HomeRoute";
import AdminDashboardRoute from "./AdminDashboardRoute";
import ClassRoute from "./ClassRoute"; 

import TeacherOperationRoute from "./TeacherOperationRoute";
import TeacherAssignmentRoute from "./TeacherAssignmentRoute";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeRoute />} />
            <Route path="/classes/*" element={<ClassRoute />} />
            <Route path="/dashboard" element={<DashboardRoute />} />
            <Route path="/admin/*" element={<AdminDashboardRoute />} />
            <Route path="/teacher1/*" element={<TeacherOperationRoute />} />
            <Route path="/teacher-assignment/*" element={<TeacherAssignmentRoute />} />
            <Route path="/studentdashboard" element={<DashboardRoute />} />
        </Routes>
    );
};

export default AppRoutes;
