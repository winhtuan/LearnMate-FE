import { useState } from 'react';
import ClassDetailLayout from '@/features/teacher/components/management/ClassDetailLayout';
import WeeklyAttendanceCard from '@/features/teacher/components/management/WeeklyAttendanceCard';
import StudentSearchToolbar from '@/features/teacher/components/management/StudentSearchToolbar';
import StudentRosterTable from '@/features/teacher/components/management/StudentRosterTable';
import AttentionAlerts from '@/features/teacher/components/management/AttentionAlerts';
import QuickStatsPanel from '@/features/teacher/components/management/QuickStatsPanel';
import { classStudentViewData } from '@/features/teacher/data/management/classStudentView.data';

export default function ClassStudentViewByTutor() {
    const { attendance, students, alerts, quickStats, totalStudents, showingStudents } = classStudentViewData;

    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('Status: All');

    return (
        <ClassDetailLayout activeTab="students">
            <div className="flex gap-8">
                <div className="flex-1 flex flex-col gap-6 min-w-0">
                    <WeeklyAttendanceCard attendance={attendance} />
                    <StudentSearchToolbar
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        statusFilter={statusFilter}
                        setStatusFilter={setStatusFilter}
                    />
                    <StudentRosterTable
                        students={students}
                        showingStudents={showingStudents}
                        totalStudents={totalStudents}
                    />
                </div>
                <aside className="w-80 flex flex-col gap-6">
                    <AttentionAlerts alerts={alerts} />
                    <QuickStatsPanel quickStats={quickStats} />
                </aside>
            </div>
        </ClassDetailLayout>
    );
}
