import { Route, Routes } from "react-router-dom";
import TutorRegister from "@/features/teacherManagement/pages/tutorRegister";
import TutorDashboard from "@/features/teacherManagement/pages/tutorDashboard";
import TutorManagementClass from "@/features/teacherManagement/pages/tutorManagementClass";
import ClassStudentViewByTutor from "@/features/teacherManagement/pages/classStudentViewByTutor";
import TutorStatis from "@/features/teacherManagement/pages/TutorStatis";

const TeacherManagementRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<TutorRegister />} />
            <Route path="dashboard" element={<TutorDashboard />} />
            <Route path="classes" element={<TutorManagementClass />} />
            <Route path="class/:classId/students" element={<ClassStudentViewByTutor />} />
            <Route path="statics" element={<TutorStatis />} />
        </Routes>
    );
};

export default TeacherManagementRoute;
