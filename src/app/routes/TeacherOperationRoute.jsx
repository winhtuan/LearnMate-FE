import { Routes, Route } from "react-router-dom";

import StudentDetailPage from '@/features/teacher/pages/operation/StudentDetailPage';
import TeacherSidebar from '@/features/teacher/components/operation/TeacherLayout';
import StudentManageView from "@/features/teacher/pages/operation/studentmanageview";
import ScheduleAvailability from "@/features/teacher/pages/operation/scheduleAvailability";
import TrialLessonRequest from "@/features/teacher/pages/operation/triallessonrequest";
import LiveClass from "@/features/teacher/pages/operation/liveclass";
import TeacherPerformance from "@/features/teacher/pages/operation/teacherperformance";
import Earnings from "@/features/teacher/pages/operation/earning";

const TeacherOperationRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<TeacherSidebar />}>
                <Route path="students/:studentId" element={<StudentDetailPage />} />
                <Route path="students" element={<StudentManageView />} />
                <Route path="schedule" element={<ScheduleAvailability />} />
                <Route path="trial-requests" element={<TrialLessonRequest />} />
                <Route path="live-class" element={<LiveClass />} />
                <Route path="performance" element={<TeacherPerformance />} />
                <Route path="earnings" element={<Earnings />} />
            </Route>
        </Routes>
    );
};

export default TeacherOperationRoute;
