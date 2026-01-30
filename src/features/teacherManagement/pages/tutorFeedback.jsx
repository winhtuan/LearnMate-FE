import { tutorFeedbackData } from '../data/tutorFeedback.data';
import GlobalSideNav from '../components/GlobalSideNav';
import FeedbackHeader from '../components/FeedbackHeader';
import StudentSubmissionList from '../components/StudentSubmissionList';
import DocumentPreview from '../components/DocumentPreview';
import GradingPanel from '../components/GradingPanel';

export default function TutorFeedback() {
    const {
        portal,
        globalNavigation,
        currentUser,
        breadcrumbs,
        navigationControls,
        filterChips,
        students,
        currentDocument,
        grading,
        actions
    } = tutorFeedbackData;

    const handlePreviousStudent = () => {
        console.log('Navigate to previous student');
        // Navigation logic here
    };

    const handleNextStudent = () => {
        console.log('Navigate to next student');
        // Navigation logic here
    };

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 h-screen flex overflow-hidden">
            {/* Global Side Navigation */}
            <GlobalSideNav portal={portal} navigation={globalNavigation} user={currentUser} />

            {/* Main Content Wrapper */}
            <div className="flex flex-1 flex-col h-full min-w-0 bg-white dark:bg-slate-900">
                {/* Top Header with Breadcrumbs */}
                <FeedbackHeader
                    breadcrumbs={breadcrumbs}
                    navigationControls={navigationControls}
                    onPreviousStudent={handlePreviousStudent}
                    onNextStudent={handleNextStudent}
                />

                {/* Split View Container */}
                <div className="flex flex-1 overflow-hidden">
                    {/* Student List Sidebar */}
                    <StudentSubmissionList students={students} filterChips={filterChips} />

                    {/* Main Work Area: Document Preview + Grading Panel */}
                    <main className="flex-1 flex flex-col xl:flex-row min-w-0 bg-background-light dark:bg-background-dark relative">
                        {/* Document Preview (Left/Top) */}
                        <DocumentPreview document={currentDocument} />

                        {/* Grading Panel (Right/Bottom) */}
                        <GradingPanel grading={grading} actions={actions} />
                    </main>
                </div>
            </div>
        </div>
    );
}
