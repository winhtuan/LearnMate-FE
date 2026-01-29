export default function AssignmentCard({ assignment }) {
  return (
    <div className={`group relative flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-3xl border border-slate-100 hover:bg-slate-50 hover:shadow-md transition-all duration-300 cursor-pointer ${assignment.locked ? 'opacity-70' : ''}`}>
      <div className="flex items-center gap-4 mb-3 sm:mb-0">
        <div className={`size-12 rounded-2xl ${assignment.iconBg} ${assignment.iconColor} flex items-center justify-center shrink-0`}>
          <span className="material-symbols-outlined text-[24px]">{assignment.icon}</span>
        </div>
        <div className="min-w-0">
          <h4 className="font-bold text-slate-900 truncate pr-4 text-base group-hover:text-primary transition-colors">{assignment.title}</h4>
          <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">{assignment.locked ? 'lock' : 'calendar_today'}</span>
              {assignment.due}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span>{assignment.metadata}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full sm:w-auto gap-4 pl-[4rem] sm:pl-0">
        <div className="flex flex-col items-end">
          <span className={`text-xs font-bold ${assignment.statusColor} ${assignment.statusBg} px-2 py-1 rounded-lg`}>{assignment.status}</span>
        </div>
        <div className="text-slate-300 group-hover:text-primary transition-colors">
          <span className="material-symbols-outlined">{assignment.locked ? 'lock' : 'arrow_forward_ios'}</span>
        </div>
      </div>
    </div>
  );
}
