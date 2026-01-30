export default function AssignmentTable({ assignments }) {
  return (
    <div className="bg-surface-light rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/50">
              <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider w-1/4 min-w-[200px]">
                Assignment Title
              </th>
              <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider w-1/6 min-w-[150px]">
                Class Name
              </th>
              <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider w-1/6 min-w-[180px]">
                Deadline
              </th>
              <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider w-1/4 min-w-[200px]">
                Submission Rate
              </th>
              <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider w-1/6">
                Status
              </th>
              <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right w-12">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {assignments.map((assignment) => (
              <tr
                key={assignment.id}
                className="hover:bg-slate-50 transition-colors group"
              >
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`${assignment.iconBg} p-2 rounded-lg ${assignment.iconColor}`}
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {assignment.icon}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {assignment.title}
                      </p>
                      <p className="text-xs text-slate-500 md:hidden">
                        {assignment.class}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="text-sm font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded">
                    {assignment.class}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex flex-col">
                    <span className="text-sm text-slate-700 font-medium">
                      {assignment.deadlineDate}
                    </span>
                    <span className="text-xs text-slate-400">
                      {assignment.deadlineTime}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex flex-col gap-1.5 w-full max-w-[200px]">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-semibold text-slate-700">
                        {assignment.submittedCount}/{assignment.totalCount}{" "}
                        Submitted
                      </span>
                      <span
                        className={`text-xs font-bold ${
                          assignment.submittedPercent === 0
                            ? "text-slate-400"
                            : "text-primary"
                        }`}
                      >
                        {assignment.submittedPercent}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          assignment.submittedPercent === 0
                            ? "bg-primary" // Base usually empty but css width 0. Wait, HTML had "bg-primary" width 0%.
                            : assignment.submittedPercent === 100
                            ? "bg-green-500"
                            : "bg-primary"
                        }`}
                        style={{ width: `${assignment.submittedPercent}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${assignment.statusColor}`}
                  >
                    <span
                      className={`size-1.5 rounded-full ${assignment.statusDot}`}
                    ></span>
                    {assignment.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <button className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-[20px]">
                      more_vert
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
