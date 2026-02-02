import { Route, Routes } from "react-router-dom";
import TutorRegister from "@/features/teacher/pages/management/tutorRegister";
import TutorDashboard from "@/features/teacher/pages/management/tutorDashboard";
import TutorClassManagementPage from "@/features/teacher/pages/management/TutorClassManagementPage";
import ClassStudentViewByTutor from "@/features/teacher/pages/management/classStudentViewByTutor";
import TutorStatis from "@/features/teacher/pages/management/TutorStatis";
import MaterialTutorDetail from "@/features/teacher/pages/management/materialTutorDetail";
import UploadMaterialPage from "@/features/teacher/pages/management/UploadMaterialPage";
import TutorFeedbackPage from "@/features/teacher/pages/management/TutorFeedbackPage";
import ClassOverviewPage from "@/features/teacher/pages/management/ClassOverviewPage";

/**
 * Teacher Management Routes
 * Base paths: /tutorRegister/* or /tutorDashboard/*
 * 
 * Available routes:
 * - /tutorRegister/ or /tutorDashboard/ → TutorRegister (landing)
 * - /tutorRegister/dashboard or /tutorDashboard/dashboard → TutorDashboard
 * - /tutorRegister/classes or /tutorDashboard/classes → TutorManagementClass
 * - /tutorRegister/class/:classId/overview → ClassOverviewPage ✨
 * - /tutorRegister/class/:classId/students → ClassStudentViewByTutor
 * - /tutorRegister/class/:classId/materials → MaterialTutorDetail ✨
 * - /tutorRegister/class/:classId/statistics → TutorStatis ✨
 * - /tutorRegister/upload-materials or /tutorDashboard/upload-materials → UploadMaterial ✨
 * - /tutorRegister/assignment/:assignmentId/student/:studentId/feedback → TutorFeedback ✨
 * - /tutorRegister/statics or /tutorDashboard/statics → TutorStatis (legacy global)
 */
const TeacherManagementRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<TutorRegister />} />
            <Route path="dashboard" element={<TutorDashboard />} />
            <Route path="classes" element={<TutorClassManagementPage />} />
            {/* Class Overview Page - Example: /tutorDashboard/class/1/overview */}
            <Route path="class/:classId/overview" element={<ClassOverviewPage />} />
            <Route path="class/:classId/students" element={<ClassStudentViewByTutor />} />
            {/* Material Management Page - Example: /tutorDashboard/class/1/materials */}
            <Route path="class/:classId/materials" element={<MaterialTutorDetail />} />
            {/* Class Statistics Page - Example: /tutorDashboard/class/1/statistics */}
            <Route path="class/:classId/statistics" element={<TutorStatis />} />
            {/* Material Upload Center - Example: /tutorDashboard/upload-materials */}
            <Route path="upload-materials" element={<UploadMaterialPage />} />
            {/* Grading & Feedback Page - Example: /tutorDashboard/assignment/1/student/4/feedback */}
            <Route path="assignment/:assignmentId/student/:studentId/feedback" element={<TutorFeedbackPage />} />
            {/* Global Statistics (legacy) */}
            <Route path="statistics" element={<TutorStatis />} />
        </Routes>
    );
};

export default TeacherManagementRoute;
