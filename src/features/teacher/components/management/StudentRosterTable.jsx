const ENGAGEMENT_COLORS = {
    green: "bg-green-100 text-green-700",
    amber: "bg-amber-100 text-amber-700",
    red: "bg-red-100 text-red-700",
};

function getEngagementBadgeColor(color) {
    return ENGAGEMENT_COLORS[color] || ENGAGEMENT_COLORS.green;
}

function getProgressBarColor(percentage) {
    if (percentage >= 90) return "bg-green-500";
    if (percentage >= 70) return "bg-primary";
    return "bg-red-500";
}

export default function StudentRosterTable({ students, showingStudents, totalStudents }) {
    return (
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
    );
}
