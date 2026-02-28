// src/app/routes/index.jsx
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// ─── Feature route bundles (nested Routes — each becomes its own JS chunk) ────
const ClassRoute              = lazy(() => import("./ClassRoute"));
const TeacherManagementRoute  = lazy(() => import("./TeacherManagementRoute"));
const AdminDashboardRoute     = lazy(() => import("./AdminDashboardRoute"));
const TeacherOperationRoute   = lazy(() => import("./TeacherOperationRoute"));
const TeacherAssignmentRoute  = lazy(() => import("./TeacherAssignmentRoute"));
const ConnectTeacherRoute     = lazy(() => import("./ConnectTeacherRoute"));

// ─── Standalone pages (thin *Route wrappers eliminated) ───────────────────────
const HomePage                  = lazy(() => import("@/features/home/pages/HomePage"));
const DashboardPage             = lazy(() => import("@/features/dashboard/pages/DashboardPage"));
const StudentProfilePage        = lazy(() => import("@/features/learningFlow/pages/StudentProfilePage"));
const EditStudentProfilePage    = lazy(() => import("@/features/learningFlow/pages/EditStudentProfilePage"));
const TopicBasedFlashcardPage   = lazy(() => import("@/features/learningFlow/pages/TopicBasedFlashcardPage"));
const EnhancedFlashcardStudyPage = lazy(() => import("@/features/learningFlow/pages/EnhancedFlashcardStudyPage"));
const TrialBookingPage          = lazy(() => import("@/features/learningFlow/pages/TrialBookingPage"));
const TrialManagementPage       = lazy(() => import("@/features/learningFlow/pages/TrialManagementPage"));
const NotificationTimelinePage  = lazy(() => import("@/features/learningFlow/pages/NotificationTimelinePage"));

// ─── Full-page loader shown during route-level code splits ────────────────────
function PageLoader() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background-light">
            <div className="size-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
    );
}

const AppRoutes = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route path="/"                        element={<HomePage />} />
                <Route path="/classes/*"               element={<ClassRoute />} />
                <Route path="/tutor/*"                 element={<TeacherManagementRoute />} />
                <Route path="/admin/*"                 element={<AdminDashboardRoute />} />
                <Route path="/teacher-ops/*"           element={<TeacherOperationRoute />} />
                <Route path="/teacher-assignments/*"   element={<TeacherAssignmentRoute />} />
                <Route path="/dashboard"               element={<DashboardPage />} />
                <Route path="/tutors/*"                element={<ConnectTeacherRoute />} />
                <Route path="/student-profile"         element={<StudentProfilePage />} />
                <Route path="/student-profile/edit"    element={<EditStudentProfilePage />} />
                <Route path="/flashcards"              element={<TopicBasedFlashcardPage />} />
                <Route path="/flashcards/study"        element={<EnhancedFlashcardStudyPage />} />
                <Route path="/trial-booking/*"         element={<TrialBookingPage />} />
                <Route path="/my-trials"               element={<TrialManagementPage />} />
                <Route path="/notifications"           element={<NotificationTimelinePage />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
