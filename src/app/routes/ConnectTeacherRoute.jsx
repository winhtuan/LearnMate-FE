import { Routes, Route } from "react-router-dom";
import ConnectTeacherPage from "../../features/learningFlow/pages/ConnectTeacherPage";
import TeacherProfilePage from "../../features/learningFlow/pages/TeacherProfilePage";

const ConnectTeacherRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<ConnectTeacherPage />} />
            <Route path="/:teacherId" element={<TeacherProfilePage />} />
        </Routes>
    );
};

export default ConnectTeacherRoute;
