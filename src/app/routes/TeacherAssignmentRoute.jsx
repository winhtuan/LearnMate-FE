import { Route, Routes } from "react-router-dom";
import AssignmentTrackingPage from '@/features/teacher/pages/assignment/AssignmentTrackingPage';
import AssignmentTrackingAllPage from '@/features/teacher/pages/assignment/AllAssignmentsTrackingPage';
import CreateAssignmentPage from '@/features/teacher/pages/assignment/CreateAssignmentPage';
import TeacherAssignmentLayout from '@/features/teacher/components/assignment/Sidebar';

const TeacherAssignmentRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<TeacherAssignmentLayout />}>
                <Route index element={<AssignmentTrackingPage />} />
                <Route path="all" element={<AssignmentTrackingAllPage />} />
                <Route path="create" element={<CreateAssignmentPage />} />
            </Route>
        </Routes>
    );
};

export default TeacherAssignmentRoute;
