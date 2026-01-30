import { Route, Routes } from "react-router-dom";
import TutorRegister from "@/features/teacherManagement/pages/tutorRegister";
import TutorDashboard from "@/features/teacherManagement/pages/tutorDashboard";
import TutorManagementClass from "@/features/teacherManagement/pages/tutorManagementClass";
import ClassStudentViewByTutor from "@/features/teacherManagement/pages/classStudentViewByTutor";
import TutorStatis from "@/features/teacherManagement/pages/TutorStatis";
import MaterialTutorDetail from "@/features/teacherManagement/pages/materialTutorDetail";
import UploadMaterial from "@/features/teacherManagement/pages/uploadMaterial";
import TutorFeedback from "@/features/teacherManagement/pages/tutorFeedback";
import ClassOverviewPage from "@/features/teacherManagement/pages/ClassOverviewPage";

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
            <Route path="classes" element={<TutorManagementClass />} />
            {/* Class Overview Page - Example: /tutorDashboard/class/1/overview */}
            <Route path="class/:classId/overview" element={<ClassOverviewPage />} />
            <Route path="class/:classId/students" element={<ClassStudentViewByTutor />} />
            {/* Material Management Page - Example: /tutorDashboard/class/1/materials */}
            <Route path="class/:classId/materials" element={<MaterialTutorDetail />} />
            {/* Class Statistics Page - Example: /tutorDashboard/class/1/statistics */}
            <Route path="class/:classId/statistics" element={<TutorStatis />} />
            {/* Material Upload Center - Example: /tutorDashboard/upload-materials */}
            <Route path="upload-materials" element={<UploadMaterial />} />
            {/* Grading & Feedback Page - Example: /tutorDashboard/assignment/1/student/4/feedback */}
            <Route path="assignment/:assignmentId/student/:studentId/feedback" element={<TutorFeedback />} />
            {/* Global Statistics (legacy) */}
            <Route path="statics" element={<TutorStatis />} />
        </Routes>
    );
};

export default TeacherManagementRoute;
