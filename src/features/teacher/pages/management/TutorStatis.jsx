import React from 'react';
import TeacherHeader from '@/shared/components/layout/TeacherHeader';
import ClassHeader from '@/features/teacher/components/management/ClassHeader';
import ClassDetailLayout from '@/features/teacher/components/management/ClassDetailLayout';
import PageTabs from '@/features/teacher/components/assignment/PageTabs';
import PerformanceSummaryCard from '@/features/teacher/components/management/PerformanceSummaryCard';
import PerformanceChart from '@/features/teacher/components/management/PerformanceChart';
import StudentAlertCard from '@/features/teacher/components/management/StudentAlertCard';
import StudentSubmissionList from '@/features/teacher/components/management/StudentSubmissionList';
import { tutorStatisData } from '@/features/teacher/data/management/tutorStatis.data';

export default function TutorStatis() {
  const {
    statsCards,
    chartData,
    studentsNeedingAttention,
    assignments
  } = tutorStatisData;

  return (
    <ClassDetailLayout activeTab="statistics">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {statsCards.map((card) => (
          <StatCard key={card.id} data={card} />
        ))}
      </div>

      {/* Performance Overview Section */}
      <div className="flex flex-col gap-6 animate-fade-in">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-xl font-bold text-slate-900">Performance Overview</h2>
          <div className="flex items-center gap-3 bg-white p-1 rounded-lg border border-slate-200 shadow-sm">
            <button className="px-3 py-1.5 text-sm font-medium rounded-md bg-slate-100 text-slate-900 shadow-sm">
              Chart
            </button>
            <button className="px-3 py-1.5 text-sm font-medium rounded-md text-slate-500 hover:text-slate-700">
              Table
            </button>
            <div className="w-px h-4 bg-slate-300 mx-1"></div>
            <select className="h-8 rounded-md border-0 bg-transparent py-0 pl-2 pr-8 text-sm font-medium text-slate-700 focus:ring-0 cursor-pointer">
              <option>Last 30 Days</option>
              <option>Fall Semester</option>
              <option>Year to Date</option>
            </select>
          </div>
        </div>

        {/* Chart and Needs Attention */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <PerformanceChart data={chartData} />

          {/* Needs Attention Sidebar */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-900">Needs Attention</h3>
              <span className="bg-rose-100 text-rose-700 px-2.5 py-1 rounded-full text-xs font-bold">
                {studentsNeedingAttention.length} Students
              </span>
            </div>
            <div className="flex-1 overflow-y-auto pr-2 space-y-3 max-h-[350px] hide-scrollbar">
              {studentsNeedingAttention.map((student) => (
                <StudentAlertCard key={student.id} student={student} />
              ))}
            </div>
            <button className="mt-auto pt-4 w-full py-2.5 text-sm font-semibold text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-200">
              View all students
            </button>
          </div>
        </div>

        {/* Assignment Completion Rates */}
        <div className="lg:col-span-3 rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Assignment Completion Rates</h3>
              <p className="text-sm text-slate-500 mt-1">Submission status for recent assignments</p>
            </div>
            <button className="text-sm font-semibold text-primary hover:text-blue-700 transition-colors flex items-center gap-1">
              View All Assignments
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
          <div className="h-64 w-full flex items-end justify-between gap-6 sm:gap-12 px-4">
            {assignments.map((assignment) => (
              <AssignmentBar key={assignment.id} assignment={assignment} />
            ))}
          </div>
        </div>
      </div>
    </ClassDetailLayout>
  );
}
