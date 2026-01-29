import { Routes, Route } from "react-router-dom";
import TeacherLayout from "../../features/teacher-operation/components/TeacherLayout";
import DetailStudent from "../../features/teacher-operation/pages/detailstudent";
import StudentManageView from "../../features/teacher-operation/pages/studentmanageview";
import ScheduleAvailability from "../../features/teacher-operation/pages/scheduleAvailability";
import TrialLessonRequest from "../../features/teacher-operation/pages/triallessonrequest";

import LiveClass from "../../features/teacher-operation/pages/liveclass";

import TeacherPerformance from "../../features/teacher-operation/pages/teacherperformance";

import Earnings from "../../features/teacher-operation/pages/earning";

const TeacherOperationRoute = () => {
    return (
        <Routes>
            <Route element={<TeacherLayout />}>
                <Route path="student-profile" element={<DetailStudent />} />
                <Route path="studentmanageview" element={<StudentManageView />} />
                <Route path="scheduleAvailability" element={<ScheduleAvailability />} />
                <Route path="triallessonrequest" element={<TrialLessonRequest />} />
                <Route path="liveclass" element={<LiveClass />} />
                <Route path="teacherperformance" element={<TeacherPerformance />} />
                <Route path="earning" element={<Earnings />} />
            </Route>
        </Routes>
    );
};

export default TeacherOperationRoute;
