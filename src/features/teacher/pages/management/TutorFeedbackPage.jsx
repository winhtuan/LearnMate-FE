import React from 'react';
import { useParams } from 'react-router-dom';
import TeacherHeader from '@/shared/components/layout/TeacherHeader';
import FeedbackHeader from '@/features/teacher/components/management/FeedbackHeader';
import GradingPanel from '@/features/teacher/components/management/GradingPanel';
import DocumentPreview from '@/features/teacher/components/management/DocumentPreview';
import { tutorFeedbackData } from '@/features/teacher/data/management/tutorFeedback.data';

export default function TutorFeedbackPage() {
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
        <div className="bg-background-light font-display text-slate-900 h-screen flex overflow-hidden">
            {/* Global Side Navigation */}
            <GlobalSideNav portal={portal} navigation={globalNavigation} user={currentUser} />

            {/* Main Content Wrapper */}
            <div className="flex flex-1 flex-col h-full min-w-0 bg-white">
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
                    <main className="flex-1 flex flex-col xl:flex-row min-w-0 bg-background-light relative">
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
