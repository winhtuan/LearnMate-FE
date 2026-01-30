import { Route, Routes } from "react-router-dom";
import AssignmentTracking from "../../features/teacher-assignment/pages/assignmenttracking";
import AssignmentTrackingAll from "../../features/teacher-assignment/pages/assignmenttrackingall";
import CreateAssignment from "../../features/teacher-assignment/pages/createassignment";

const TeacherAssignmentRoute = () => {
    return (
        <Routes>
            <Route index element={<AssignmentTrackingAll />} />
            <Route path="tracking" element={<AssignmentTracking />} />
            <Route path="create" element={<CreateAssignment />} />
        </Routes>
    );
};

export default TeacherAssignmentRoute;
