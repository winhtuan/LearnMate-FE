import { Route, Routes } from "react-router-dom";
import TutorRegister from "@/features/teacherManagement/pages/tutorRegister";
import TutorDashboard from "@/features/teacherManagement/pages/tutorDashboard";
import TutorManagementClass from "@/features/teacherManagement/pages/tutorManagementClass";
import ClassStudentViewByTutor from "@/features/teacherManagement/pages/classStudentViewByTutor";
import TutorStatis from "@/features/teacherManagement/pages/TutorStatis";
import MaterialTutorDetail from "@/features/teacherManagement/pages/materialTutorDetail";
import UploadMaterial from "@/features/teacherManagement/pages/uploadMaterial";
import TutorFeedback from "@/features/teacherManagement/pages/tutorFeedback";

/**
 * Teacher Management Routes
 * Base paths: /tutorRegister/* or /tutorDashboard/*
 * 
 * Available routes:
 * - /tutorRegister/ or /tutorDashboard/ → TutorRegister (landing)
 * - /tutorRegister/dashboard or /tutorDashboard/dashboard → TutorDashboard
 * - /tutorRegister/classes or /tutorDashboard/classes → TutorManagementClass
 * - /tutorRegister/class/:classId/students → ClassStudentViewByTutor
 * - /tutorRegister/class/:classId/materials → MaterialTutorDetail ✨
 * - /tutorRegister/upload-materials or /tutorDashboard/upload-materials → UploadMaterial ✨
 * - /tutorRegister/assignment/:assignmentId/student/:studentId/feedback → TutorFeedback ✨
 * - /tutorRegister/statics or /tutorDashboard/statics → TutorStatis
 */
const TeacherManagementRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<TutorRegister />} />
            <Route path="dashboard" element={<TutorDashboard />} />
            <Route path="classes" element={<TutorManagementClass />} />
            <Route path="class/:classId/students" element={<ClassStudentViewByTutor />} />
            {/* Material Management Page - Example: /tutorDashboard/class/1/materials */}
            <Route path="class/:classId/materials" element={<MaterialTutorDetail />} />
            {/* Material Upload Center - Example: /tutorDashboard/upload-materials */}
            <Route path="upload-materials" element={<UploadMaterial />} />
            {/* Grading & Feedback Page - Example: /tutorDashboard/assignment/1/student/4/feedback */}
            <Route path="assignment/:assignmentId/student/:studentId/feedback" element={<TutorFeedback />} />
            <Route path="statics" element={<TutorStatis />} />
        </Routes>
    );
};

export default TeacherManagementRoute;
