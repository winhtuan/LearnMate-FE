export default function AssignmentTrackingTable({ assignments }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
              Assignment Title
            </th>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
              Due Date
            </th>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
              Submissions
            </th>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">
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
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`size-8 rounded-lg ${assignment.iconBg} ${assignment.iconColor} flex items-center justify-center`}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {assignment.icon}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">
                    {assignment.title}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-slate-600">
                {assignment.dueDate}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full max-w-[80px]">
                    <div
                      className={`h-full rounded-full ${assignment.submissions.color}`}
                      style={{ width: `${assignment.submissions.percent}%` }}
                    ></div>
                  </div>
                  <span className="text-xs font-medium text-slate-600">
                    {assignment.submissions.current}/
                    {assignment.submissions.total}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold ${assignment.statusColor}`}
                >
                  {assignment.status}
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-1">
                  <button
                    className="p-1.5 text-slate-400 hover:text-primary transition-colors cursor-pointer"
                    title="Grade"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      how_to_reg
                    </span>
                  </button>
                  <button
                    className="p-1.5 text-slate-400 hover:text-primary transition-colors cursor-pointer"
                    title="Edit"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      edit
                    </span>
                  </button>
                  <button
                    className="p-1.5 text-slate-400 hover:text-primary transition-colors cursor-pointer"
                    title="More"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      more_vert
                    </span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs font-medium text-slate-500">
          Showing 3 of 12 assignments
        </span>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-xs font-semibold text-slate-600 bg-white border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50 cursor-pointer">
            Prev
          </button>
          <button className="px-3 py-1 text-xs font-semibold text-slate-600 bg-white border border-slate-200 rounded hover:bg-slate-50 cursor-pointer">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
