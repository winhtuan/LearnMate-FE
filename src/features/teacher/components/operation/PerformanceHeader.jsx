export default function PerformanceHeader({ header }) {
  const { title, subtitle, currentDate } = header;

  return (
    <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
        <p className="text-slate-500 dark:text-slate-400 text-base">{subtitle}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-lg h-10 px-3">
          <span className="material-symbols-outlined text-slate-400 text-[20px] mr-2">calendar_today</span>
          <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">{currentDate}</span>
        </div>
        <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary hover:bg-blue-600 text-white text-sm font-bold shadow-md shadow-blue-500/20 transition-all">
          <span className="material-symbols-outlined text-[20px]">download</span>
          <span>Export Report</span>
        </button>
      </div>
    </header>
  );
}
