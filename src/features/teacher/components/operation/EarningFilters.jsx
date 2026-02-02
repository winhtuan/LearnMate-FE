export default function EarningFilters() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-2">
      <div className="flex items-center gap-3">
        {/* Date Filter */}
        <button className="flex items-center gap-2 bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 hover:border-primary px-3 py-2 rounded-lg transition-colors group">
          <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-hover:text-primary">calendar_today</span>
          <span className="text-sm font-medium text-slate-900 dark:text-white">This Month</span>
          <span className="material-symbols-outlined text-sm opacity-50 text-slate-500">expand_more</span>
        </button>
        {/* Status Filter */}
        <button className="flex items-center gap-2 bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 hover:border-primary px-3 py-2 rounded-lg transition-colors group">
          <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-hover:text-primary">tune</span>
          <span className="text-sm font-medium text-slate-900 dark:text-white">All Status</span>
          <span className="material-symbols-outlined text-sm opacity-50 text-slate-500">expand_more</span>
        </button>
      </div>
      <button className="flex w-full md:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-blue-600 text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
        <span className="material-symbols-outlined">account_balance_wallet</span>
        <span className="truncate">Request Withdrawal</span>
      </button>
    </div>
  );
}
