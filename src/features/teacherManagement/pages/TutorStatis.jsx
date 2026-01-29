import Header from "@/shared/components/layout/Header";
import Breadcrumb from "@/features/class/components/Breadcrumb";
import StatCard from "../components/StatCard";
import PerformanceChart from "../components/PerformanceChart";
import StudentAlertCard from "../components/StudentAlertCard";
import AssignmentBar from "../components/AssignmentBar";
import { tutorStatisData } from "../data/tutorStatis.data";

export default function TutorStatis() {
  const {
    classInfo,
    breadcrumbItems,
    statsCards,
    tabNavigation,
    chartData,
    studentsNeedingAttention,
    assignments,
    profileImageUrl
  } = tutorStatisData;

  return (
    <div className="bg-background-light font-display text-slate-900 antialiased min-h-screen flex flex-col">
      <Header profileImageUrl={profileImageUrl} />
      
      <main className="flex-1 px-4 md:px-8 py-8 w-full max-w-[1400px] mx-auto flex flex-col gap-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <Breadcrumb items={breadcrumbItems} />
        </nav>

        {/* Class Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                {classInfo.title}
              </h1>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide">
                {classInfo.period}
              </span>
            </div>
            <p className="text-base text-slate-500 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              {classInfo.semester}
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span className="material-symbols-outlined text-[18px]">location_on</span>
              {classInfo.room}
            </p>
          </div>
          <div className="flex gap-3">
            <button className="group flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
              <span className="material-symbols-outlined text-[20px] text-slate-400 group-hover:text-slate-600 transition-colors">settings</span>
              <span>Settings</span>
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 active:translate-y-0.5">
              <span className="material-symbols-outlined text-[20px]">download</span>
              <span>Export Report</span>
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {statsCards.map((card) => (
            <StatCard key={card.id} data={card} />
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-slate-200">
          <nav aria-label="Tabs" className="flex space-x-8 overflow-x-auto hide-scrollbar">
            {tabNavigation.map((tab, index) => (
              <a
                key={index}
                className={`group inline-flex items-center py-4 px-1 text-sm font-medium transition-all ${
                  tab.active
                    ? 'border-b-2 border-primary text-primary font-bold'
                    : 'border-b-2 border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
                }`}
                href={tab.href}
              >
                {tab.label}
              </a>
            ))}
          </nav>
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
      </main>
    </div>
  );
}
