export default function StudentTable({ data }) {
  const { columns, groups, pagination } = data;

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full min-w-[900px] border-collapse text-left">
          <thead className="bg-slate-50 dark:bg-slate-800/50">
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  className={`px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 ${col.align === 'right' ? 'text-right' : ''}`}
                  style={{ width: col.width }}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {groups.map((group, groupIndex) => (
              <>
                <tr key={`group-${groupIndex}`} className="bg-slate-50/50 dark:bg-slate-800/30">
                  <td className="px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200" colSpan={columns.length}>
                    {group.className} 
                    <span className="ml-2 rounded-full bg-slate-200 dark:bg-slate-700 px-2 py-0.5 text-xs text-slate-600 dark:text-slate-300">
                      {group.studentCount} Students
                    </span>
                  </td>
                </tr>
                {group.students.map((student) => (
                  <tr key={student.id} className="group transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div 
                          className="h-10 w-10 shrink-0 rounded-full bg-cover bg-center ring-1 ring-slate-200 dark:ring-slate-700" 
                          style={{ backgroundImage: `url("${student.avatar}")` }}
                        ></div>
                        <div>
                          <div className="font-medium text-slate-900 dark:text-white">{student.name}</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">ID: #{student.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center rounded-md bg-${student.classColor}-50 px-2 py-1 text-xs font-medium text-${student.classColor}-700 ring-1 ring-inset ring-${student.classColor}-700/10 dark:bg-${student.classColor}-900/30 dark:text-${student.classColor}-300`}>
                        {student.className}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center rounded-full bg-${student.engagement.color}-50 px-2.5 py-0.5 text-xs font-medium text-${student.engagement.color}-700 ring-1 ring-inset ring-${student.engagement.color}-600/20 dark:bg-${student.engagement.color}-500/10 dark:text-${student.engagement.color}-400 dark:ring-${student.engagement.color}-500/20`}>
                        <span className={`mr-1.5 h-1.5 w-1.5 rounded-full bg-${student.engagement.iconColor}-500`}></span>
                        {student.engagement.label}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-slate-500 dark:text-slate-400">{student.lastActivity}</div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200">
                        <span className="material-symbols-outlined text-[20px]">more_horiz</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Showing <span className="font-medium text-slate-900 dark:text-white">{pagination.from}</span> to <span className="font-medium text-slate-900 dark:text-white">{pagination.to}</span> of <span className="font-medium text-slate-900 dark:text-white">{pagination.total}</span> students
        </p>
        <div className="flex gap-2">
          <button className="flex h-8 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50">Previous</button>
          <button className="flex h-8 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700">Next</button>
        </div>
      </div>
    </div>
  );
}
