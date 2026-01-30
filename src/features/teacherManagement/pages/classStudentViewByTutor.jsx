import React, { useState } from 'react';
import { classStudentViewData } from '../data/classStudentView.data';

export default function ClassStudentViewByTutor() {
    const {
        className,
        classStatus,
        breadcrumbs,
        tabs,
        attendance,
        students,
        alerts,
        quickStats,
        totalStudents,
        showingStudents
    } = classStudentViewData;

    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('Status: All');

    const getEngagementBadgeColor = (color) => {
        const colors = {
            green: "bg-green-100 text-green-700",
            amber: "bg-amber-100 text-amber-700",
            red: "bg-red-100 text-red-700"
        };
        return colors[color] || colors.green;
    };

    const getProgressBarColor = (percentage) => {
        if (percentage >= 90) return "bg-green-500";
        if (percentage >= 70) return "bg-primary";
        return "bg-red-500";
    };

    return (
        <div className="bg-background-light min-h-screen text-[#0d141b]">
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    {/* Top Navigation Bar */}
                    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e7edf3] bg-white#1a2632] px-10 py-3">
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-4 text-[#0d141b]">
                                <div className="size-4 text-primary">
                                    <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" />
                                    </svg>
                                </div>
                                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">LearnMate</h2>
                            </div>
                            <div className="flex items-center gap-9">
                                <a className="text-[#0d141b] text-sm font-medium leading-normal" href="#">Dashboard</a>
                                <a className="text-primary text-sm font-semibold leading-normal" href="#">Classes</a>
                                <a className="text-[#0d141b] text-sm font-medium leading-normal" href="#">Schedule</a>
                                <a className="text-[#0d141b] text-sm font-medium leading-normal" href="#">Resources</a>
                            </div>
                        </div>
                        <div className="flex flex-1 justify-end gap-8">
                            <label className="flex flex-col min-w-40 !h-10 max-w-64">
                                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                                    <div className="text-[#4c739a] flex border-none bg-[#e7edf3] items-center justify-center pl-4 rounded-l-lg">
                                        <span className="material-symbols-outlined text-[20px]">search</span>
                                    </div>
                                    <input
                                        className="form-input flex w-full min-w-0 flex-1 border-none bg-[#e7edf3] text-[#0d141b] focus:outline-0 focus:ring-0 h-full placeholder:text-[#4c739a] px-4 rounded-r-lg text-sm font-normal"
                                        placeholder="Search"
                                    />
                                </div>
                            </label>
                            <div className="flex gap-2">
                                <button className="flex items-center justify-center rounded-lg size-10 bg-[#e7edf3] text-[#0d141b]">
                                    <span className="material-symbols-outlined text-[20px]">notifications</span>
                                </button>
                                <button className="flex items-center justify-center rounded-lg size-10 bg-[#e7edf3] text-[#0d141b]">
                                    <span className="material-symbols-outlined text-[20px]">settings</span>
                                </button>
                            </div>
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-slate-200"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAoDQATNfC8KZVK9FSGfs-3_LYefv49_9-AUT_6kWuE7NrqrzwiQwKc7JJKv1HrqlvC3Y-4B70KLiShdK_N5QbZvpydaUKfrP2D_Qx46ynLGLWvMK4ljDzooKS0QxSHd28WhDkgHFEadpHwrU_PhnjzQ_gLqnpsJj5zM7XyHADg77NzOUmP-0ESCxHj0TZUu2t6mgs5QNn-iTsFpsCUNEC8057PRLPpIFwdpdlSvMuH2bmZGnR1F9_gxORkcVk9I-kugI9F8q-bEuU")' }}
                            />
                        </div>
                    </header>

                    <main className="flex flex-1 justify-center py-6 px-10">
                        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
                            {/* Breadcrumbs */}
                            <div className="flex flex-wrap gap-2 items-center mb-2">
                                {breadcrumbs.map((crumb, index) => (
                                    <React.Fragment key={index}>
                                        {crumb.active ? (
                                            <span className="text-[#0d141b] text-sm font-semibold">{crumb.label}</span>
                                        ) : (
                                            <>
                                                <a className="text-[#4c739a] text-sm font-medium" href={crumb.href}>{crumb.label}</a>
                                                <span className="text-[#4c739a] text-sm">/</span>
                                            </>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>

                            {/* Page Headline */}
                            <div className="flex justify-between items-end mb-6">
                                <h1 className="text-[#0d141b] tracking-tight text-3xl font-bold">{className}</h1>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wider">{classStatus}</span>
                                </div>
                            </div>

                            {/* Tabs */}
                            <div className="border-b border-[#cfdbe7] mb-6">
                                <div className="flex gap-8">
                                    {tabs.map((tab, index) => (
                                        <a
                                            key={index}
                                            className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 ${tab.active
                                                    ? 'border-primary text-primary'
                                                    : 'border-b-transparent text-[#4c739a]'
                                                }`}
                                            href="#"
                                        >
                                            <p className="text-sm font-bold tracking-[0.015em]">{tab.label}</p>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-8">
                                {/* Main Content Left */}
                                <div className="flex-1 flex flex-col gap-6 min-w-0">
                                    {/* Weekly Attendance Card */}
                                    <div className="bg-white#1a2632] border border-[#e7edf3] rounded-xl p-5 shadow-sm">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-sm font-bold text-[#0d141b] uppercase tracking-wider">
                                                Weekly Attendance Trend
                                            </h3>
                                            <span className="text-primary text-xs font-semibold">{attendance.average} Average</span>
                                        </div>
                                        <div className="flex items-end gap-2 h-16 w-full">
                                            {attendance.weekData.map((day, index) => (
                                                <div
                                                    key={index}
                                                    className={`flex-1 ${day.percentage > 0 ? 'bg-primary/20' : 'bg-slate-100'} rounded-t h-[80%] relative group`}
                                                    title={day.label}
                                                >
                                                    {day.percentage > 0 && (
                                                        <div
                                                            className="absolute inset-x-0 bottom-0 bg-primary rounded-t transition-all"
                                                            style={{ height: `${day.percentage}%` }}
                                                        />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex justify-between mt-2 text-[10px] text-[#4c739a] font-medium uppercase">
                                            {attendance.weekData.map((day, index) => (
                                                <span key={index}>{day.day}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Toolbar */}
                                    <div className="flex flex-wrap items-center justify-between gap-4">
                                        <div className="flex items-center gap-3 flex-1 min-w-[300px]">
                                            <div className="relative flex-1">
                                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#4c739a] text-lg">search</span>
                                                <input
                                                    className="w-full bg-white#1a2632] border-[#e7edf3] rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-primary focus:border-primary"
                                                    placeholder="Search students..."
                                                    type="text"
                                                    value={searchQuery}
                                                    onChange={(e) => setSearchQuery(e.target.value)}
                                                />
                                            </div>
                                            <div className="relative">
                                                <select
                                                    className="appearance-none bg-white#1a2632] border-[#e7edf3] rounded-lg px-4 py-2 pr-10 text-sm font-medium text-[#4c739a] focus:ring-primary focus:border-primary cursor-pointer"
                                                    value={statusFilter}
                                                    onChange={(e) => setStatusFilter(e.target.value)}
                                                >
                                                    <option>Status: All</option>
                                                    <option>Active</option>
                                                    <option>At Risk</option>
                                                    <option>Needs Support</option>
                                                </select>
                                            </div>
                                        </div>
                                        <button className="flex items-center justify-center rounded-lg h-10 bg-primary text-white gap-2 text-sm font-bold px-6 shadow-sm hover:bg-primary/90 transition-colors">
                                            <span className="material-symbols-outlined text-lg">person_add</span>
                                            <span>Invite Student</span>
                                        </button>
                                    </div>

                                    {/* Student Table */}
                                    <div className="bg-white#1a2632] border border-[#e7edf3] rounded-xl overflow-hidden shadow-sm">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-slate-50 text-[#4c739a] text-[11px] font-bold uppercase tracking-wider">
                                                    <th className="px-6 py-4">Student</th>
                                                    <th className="px-6 py-4">Engagement</th>
                                                    <th className="px-6 py-4">Last Attendance</th>
                                                    <th className="px-6 py-4">Assignments</th>
                                                    <th className="px-6 py-4 text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100">
                                                {students.map((student) => (
                                                    <tr key={student.id} className="group hover:bg-slate-50 transition-colors">
                                                        <td className="px-6 py-4">
                                                            <div className="flex items-center gap-3">
                                                                <div
                                                                    className="size-9 rounded-full bg-cover"
                                                                    style={{ backgroundImage: `url('${student.avatar}')` }}
                                                                />
                                                                <div>
                                                                    <p className="text-sm font-semibold text-[#0d141b] leading-tight">{student.name}</p>
                                                                    <p className="text-xs text-[#4c739a]">{student.email}</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getEngagementBadgeColor(student.engagementColor)}`}>
                                                                {student.engagement}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-[#4c739a]">{student.lastAttendance}</td>
                                                        <td className="px-6 py-4">
                                                            <div className="flex flex-col gap-1">
                                                                <span className="text-xs font-medium text-[#0d141b]">
                                                                    {student.assignmentsCompleted}/{student.assignmentsTotal}
                                                                </span>
                                                                <div className="w-24 h-1.5 bg-slate-100 rounded-full">
                                                                    <div
                                                                        className={`h-full rounded-full ${getProgressBarColor(student.assignmentPercentage)}`}
                                                                        style={{ width: `${student.assignmentPercentage}%` }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 text-right">
                                                            <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                                <button className="p-2 text-[#4c739a] hover:text-primary rounded-lg" title="Message">
                                                                    <span className="material-symbols-outlined text-lg">mail</span>
                                                                </button>
                                                                <button className="p-2 text-[#4c739a] hover:text-primary rounded-lg" title="Notes">
                                                                    <span className="material-symbols-outlined text-lg">description</span>
                                                                </button>
                                                                <button className="p-2 text-[#4c739a] hover:text-red-500 rounded-lg" title="More">
                                                                    <span className="material-symbols-outlined text-lg">more_vert</span>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                                            <p className="text-xs text-[#4c739a]">Showing {showingStudents} of {totalStudents} students</p>
                                            <div className="flex gap-2">
                                                <button className="px-3 py-1 text-xs font-bold text-[#4c739a] border border-[#e7edf3] rounded bg-white">Prev</button>
                                                <button className="px-3 py-1 text-xs font-bold text-[#4c739a] border border-[#e7edf3] rounded bg-white">Next</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Pane Sidebar */}
                                <aside className="w-80 flex flex-col gap-6">
                                    {/* Alerts */}
                                    <div className="bg-white#1a2632] border border-[#e7edf3] rounded-xl p-5 shadow-sm">
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="material-symbols-outlined text-red-500">warning</span>
                                            <h3 className="text-sm font-bold text-[#0d141b] uppercase tracking-wider">
                                                Needs Attention
                                            </h3>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            {alerts.map((alert) => (
                                                <div
                                                    key={alert.id}
                                                    className={`flex gap-3 p-3 rounded-lg border ${alert.severity === 'high'
                                                            ? 'bg-red-50 border-red-100'
                                                            : 'bg-amber-50 border-amber-100'
                                                        }`}
                                                >
                                                    <div
                                                        className="size-10 rounded-full bg-cover shrink-0"
                                                        style={{ backgroundImage: `url('${alert.studentAvatar}')` }}
                                                    />
                                                    <div className="flex flex-col gap-1">
                                                        <p className={`text-xs font-bold ${alert.severity === 'high' ? 'text-red-700' : 'text-amber-700'
                                                            }`}>
                                                            {alert.studentName}
                                                        </p>
                                                        <p className={`text-[11px] leading-tight ${alert.severity === 'high' ? 'text-red-600' : 'text-amber-600'
                                                            }`}>
                                                            {alert.message}
                                                        </p>
                                                        <button className={`mt-1 text-[10px] font-bold underline uppercase ${alert.severity === 'high' ? 'text-red-700' : 'text-amber-700'
                                                            }`}>
                                                            {alert.action}
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Quick Stats */}
                                    <div className="bg-white#1a2632] border border-[#e7edf3] rounded-xl p-5 shadow-sm">
                                        <h3 className="text-sm font-bold text-[#0d141b] uppercase tracking-wider mb-4">
                                            Quick Stats
                                        </h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="flex flex-col p-3 bg-background-light rounded-lg">
                                                <span className="text-[10px] font-bold text-[#4c739a] uppercase">Enrolled</span>
                                                <span className="text-xl font-bold text-primary">{quickStats.enrolled}</span>
                                            </div>
                                            <div className="flex flex-col p-3 bg-background-light rounded-lg">
                                                <span className="text-[10px] font-bold text-[#4c739a] uppercase">At Risk</span>
                                                <span className="text-xl font-bold text-red-500">{quickStats.atRisk}</span>
                                            </div>
                                            <div className="flex flex-col p-3 bg-background-light rounded-lg">
                                                <span className="text-[10px] font-bold text-[#4c739a] uppercase">Avg Grade</span>
                                                <span className="text-xl font-bold text-green-500">{quickStats.avgGrade}</span>
                                            </div>
                                            <div className="flex flex-col p-3 bg-background-light rounded-lg">
                                                <span className="text-[10px] font-bold text-[#4c739a] uppercase">Participation</span>
                                                <span className="text-xl font-bold text-primary">{quickStats.participation}</span>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
