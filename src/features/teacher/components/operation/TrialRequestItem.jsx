export default function TrialRequestItem({ request }) {
  const { studentName, avatar, status, isNew, details, message } = request;

  return (
    <div className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
      {/* Avatar */}
      <div className="flex-shrink-0 relative">
        <div 
            className="size-16 rounded-full bg-cover bg-center border-2 border-white dark:border-slate-700 shadow-sm" 
            style={{ backgroundImage: `url("${avatar}")` }}
        ></div>
        {isNew && <div className="absolute -bottom-1 -right-1 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-100 text-[10px] font-bold px-2 py-0.5 rounded-full border border-white dark:border-slate-800">New</div>}
      </div>
      
      {/* Info */}
      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white truncate">{studentName}</h3>
          <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 dark:bg-amber-900/30 px-2 py-1 text-xs font-medium text-amber-700 dark:text-amber-400 ring-1 ring-inset ring-amber-600/20">
            {status}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            <span>{details.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px]">schedule</span>
            <span>{details.time}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px]">school</span>
            <span>{details.subject}</span>
          </div>
          {message && (
            <div className="w-full mt-2">
                <p className="text-slate-400 text-xs italic">{message}</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex flex-row md:flex-col lg:flex-row items-center gap-3 w-full md:w-auto mt-4 md:mt-0 justify-end">
        <button className="hidden lg:flex items-center justify-center size-9 rounded-full text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors" title="Reject Request">
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>
        <button className="flex-1 md:flex-none h-10 px-4 flex items-center justify-center gap-2 rounded-lg border border-primary/30 text-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors font-medium text-sm whitespace-nowrap">
          <span className="material-symbols-outlined text-[18px]">edit_calendar</span>
          Reschedule
        </button>
        <button className="flex-1 md:flex-none h-10 px-6 flex items-center justify-center gap-2 rounded-lg bg-primary text-white shadow-md shadow-primary/20 hover:bg-blue-600 hover:shadow-lg hover:shadow-primary/30 transition-all font-semibold text-sm">
          <span className="material-symbols-outlined text-[18px]">check</span>
          Accept
        </button>
      </div>
    </div>
  );
}
