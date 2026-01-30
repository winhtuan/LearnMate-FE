import React, { useState } from 'react';
import ClassDetailLayout from '../components/ClassDetailLayout';
import { classStudentViewData } from '../data/classStudentView.data';

export default function ClassStudentViewByTutor() {
    const {
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
        <ClassDetailLayout activeTab="students">
            <div className="flex gap-8">
                {/* Main Content Left */}
                <div className="flex-1 flex flex-col gap-6 min-w-0">
                    {/* Weekly Attendance Card */}
                    <div className="bg-white border border-[#e7edf3] rounded-xl p-5 shadow-sm">
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
                                    className="w-full bg-white border-[#e7edf3] rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-primary focus:border-primary"
                                    placeholder="Search students..."
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <div className="relative">
                                <select
                                    className="appearance-none bg-white border-[#e7edf3] rounded-lg px-4 py-2 pr-10 text-sm font-medium text-[#4c739a] focus:ring-primary focus:border-primary cursor-pointer"
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
                    <div className="bg-white border border-[#e7edf3] rounded-xl overflow-hidden shadow-sm">
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
                    <div className="bg-white border border-[#e7edf3] rounded-xl p-5 shadow-sm">
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
                    <div className="bg-white border border-[#e7edf3] rounded-xl p-5 shadow-sm">
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
        </ClassDetailLayout>
    );
}
