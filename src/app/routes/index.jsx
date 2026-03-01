// src/app/routes/index.jsx
import { lazy, Suspense, Component } from "react";
import { Routes, Route } from "react-router-dom";
import GuestRoute from "./GuestRoute";

class RouteErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }
    static getDerivedStateFromError(error) {
        return { error };
    }
    componentDidCatch(error, info) {
        console.error("[RouteErrorBoundary] caught:", error, info);
    }
    render() {
        if (this.state.error) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-red-50 p-8">
                    <div className="max-w-lg text-center">
                        <h2 className="text-xl font-bold text-red-700 mb-2">Something went wrong</h2>
                        <pre className="text-sm text-red-600 bg-red-100 p-4 rounded-lg overflow-auto text-left">
                            {this.state.error.message}
                        </pre>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

// ─── Feature route bundles (nested Routes — each becomes its own JS chunk) ────
const AuthRoute               = lazy(() => import("./AuthRoute"));
const ClassRoute              = lazy(() => import("./ClassRoute"));
const TeacherManagementRoute  = lazy(() => import("./TeacherManagementRoute"));
const AdminDashboardRoute     = lazy(() => import("./AdminDashboardRoute"));
const TeacherOperationRoute   = lazy(() => import("./TeacherOperationRoute"));
const TeacherAssignmentRoute  = lazy(() => import("./TeacherAssignmentRoute"));
const ConnectTeacherRoute     = lazy(() => import("./ConnectTeacherRoute"));

// ─── Standalone pages (thin *Route wrappers eliminated) ───────────────────────
const LoginPage                 = lazy(() => import("@/features/auth/pages/LoginPage"));
const RegisterPage              = lazy(() => import("@/features/auth/pages/RegisterPage"));
const HomePage                  = lazy(() => import("@/features/home/pages/HomePage"));
const DashboardPage             = lazy(() => import("@/features/dashboard/pages/DashboardPage"));
const StudentProfilePage        = lazy(() => import("@/features/learningFlow/pages/StudentProfilePage"));
const EditStudentProfilePage    = lazy(() => import("@/features/learningFlow/pages/EditStudentProfilePage"));
const TopicBasedFlashcardPage   = lazy(() => import("@/features/learningFlow/pages/TopicBasedFlashcardPage"));
const EnhancedFlashcardStudyPage = lazy(() => import("@/features/learningFlow/pages/EnhancedFlashcardStudyPage"));
const TrialBookingPage          = lazy(() => import("@/features/learningFlow/pages/TrialBookingPage"));
const TrialManagementPage       = lazy(() => import("@/features/learningFlow/pages/TrialManagementPage"));
const NotificationTimelinePage  = lazy(() => import("@/features/learningFlow/pages/NotificationTimelinePage"));
const ErrorPage                 = lazy(() => import("@/shared/pages/ErrorPage"));

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
        <RouteErrorBoundary>
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route path="/"                        element={<HomePage />} />
                <Route path="/auth/*"                  element={<AuthRoute />} />
                <Route path="/login"                   element={<GuestRoute><LoginPage /></GuestRoute>} />
                <Route path="/register"                element={<GuestRoute><RegisterPage /></GuestRoute>} />
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
                <Route path="/error"                   element={<ErrorPage />} />
            </Routes>
        </Suspense>
        </RouteErrorBoundary>
    );
};

export default AppRoutes;
