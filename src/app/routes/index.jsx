// src/app/routes/index.jsx
import { Routes, Route } from "react-router-dom";
import DashboardRoute from "./DashboardRoute";
import HomeRoute from "./HomeRoute";
import ClassRoute from "./ClassRoute"; 

import TeacherOperationRoute from "./TeacherOperationRoute";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeRoute />} />
            <Route path="/classes/*" element={<ClassRoute />} />
            <Route path="/dashboard" element={<DashboardRoute />} />
            <Route path="/teacher1/*" element={<TeacherOperationRoute />} />
            <Route path="/studentdashboard" element={<DashboardRoute />} />
        </Routes>
    );
};

export default AppRoutes;
