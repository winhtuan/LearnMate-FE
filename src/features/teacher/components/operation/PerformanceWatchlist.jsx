export default function PerformanceWatchlist({ watchlist }) {
  return (
    <section className="flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden mb-10">
      <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex flex-wrap justify-between items-center gap-4">
        <div>
          <h3 className="text-slate-900 dark:text-white text-lg font-bold">Student Performance Watchlist</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Students requiring attention based on recent analytics</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">Filter</button>
          <button className="px-3 py-1.5 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">Sort by Grade</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
              <th className="p-4 text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Student Name</th>
              <th className="p-4 text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Class</th>
              <th className="p-4 text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Attendance</th>
              <th className="p-4 text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Assignment Avg</th>
              <th className="p-4 text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Status</th>
              <th className="p-4 text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {watchlist.map((student, index) => (
              <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-cover bg-center" style={{ backgroundImage: `url('${student.avatar}')` }}></div>
                    <p className="font-medium text-slate-900 dark:text-slate-200 text-sm">{student.studentName}</p>
                  </div>
                </td>
                <td className="p-4 text-sm text-slate-600 dark:text-slate-400">{student.className}</td>
                <td className="p-4 text-sm text-slate-600 dark:text-slate-400">
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 w-24 mb-1">
                    <div className={`${student.attendanceColor} h-1.5 rounded-full`} style={{ width: `${student.attendance}%` }}></div>
                  </div>
                  <span className="text-xs">{student.attendance}%</span>
                </td>
                <td className="p-4 text-sm font-medium text-slate-900 dark:text-slate-200">{student.assignmentAvg}</td>
                <td className="p-4">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${student.statusColor}`}>
                      {student.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">more_vert</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
