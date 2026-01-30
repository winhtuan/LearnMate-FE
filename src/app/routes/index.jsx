// src/app/routes/index.jsx
import { Routes, Route } from "react-router-dom";
import DashboardRoute from "./DashboardRoute";
import HomeRoute from "./HomeRoute";
import TeacherManagementRoute from "./TeacherManagementRoute";
import AdminDashboardRoute from "./AdminDashboardRoute";
import ClassRoute from "./ClassRoute"; 
import ConnectTeacherRoute from "./ConnectTeacherRoute";
import TrialBookingRoute from "./TrialBookingRoute";
import NotificationRoute from "./NotificationRoute";
import StudentProfilePage from "../../features/learningFlow/pages/StudentProfilePage";
import EditStudentProfilePage from "../../features/learningFlow/pages/EditStudentProfilePage";
import TopicBasedFlashcardPage from "../../features/learningFlow/pages/TopicBasedFlashcardPage";
import EnhancedFlashcardStudyPage from "../../features/learningFlow/pages/EnhancedFlashcardStudyPage";
import TrialManagementPage from "../../features/learningFlow/pages/TrialManagementPage";

import TeacherOperationRoute from "./TeacherOperationRoute";
import TeacherAssignmentRoute from "./TeacherAssignmentRoute";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeRoute />} />
            <Route path="/classes/*" element={<ClassRoute />} />
            <Route path="/dashboard" element={<DashboardRoute />} />
            <Route path="/tutorRegister/*" element={<TeacherManagementRoute />} />
            <Route path="/tutorDashboard/*" element={<TeacherManagementRoute />} />
            <Route path="/admin/*" element={<AdminDashboardRoute />} />
            <Route path="/teacher1/*" element={<TeacherOperationRoute />} />
            <Route path="/teacher-assignment/*" element={<TeacherAssignmentRoute />} />
            <Route path="/studentdashboard" element={<DashboardRoute />} />
            //Learning-flow
            <Route path="/tutors/*" element={<ConnectTeacherRoute />} />
            <Route path="/student-profile" element={<StudentProfilePage />} />
            <Route path="/student-profile/edit" element={<EditStudentProfilePage />} />
            <Route path="/flashcards" element={<TopicBasedFlashcardPage />} />
            <Route path="/flashcards/study" element={<EnhancedFlashcardStudyPage />} />
            <Route path="/trial-booking/*" element={<TrialBookingRoute />} />
            <Route path="/my-trials" element={<TrialManagementPage />} />
            <Route path="/notifications" element={<NotificationRoute />} />
        </Routes>
    );
};

export default AppRoutes;
