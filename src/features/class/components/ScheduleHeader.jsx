export default function ScheduleHeader({ month, year }) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold text-slate-900">{month} {year}</h2>
        <div className="flex items-center bg-white rounded-full border border-slate-200 p-1 shadow-sm">
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
          </button>
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 w-full lg:w-auto justify-end">
        <div className="flex p-1 bg-white rounded-xl border border-slate-200 shadow-sm">
          <button className="px-5 py-2 bg-slate-100 rounded-lg text-sm font-bold text-slate-900 transition-all shadow-sm">
            Month
          </button>
          <button className="px-5 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-all">
            Week
          </button>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-[20px]">sync</span>
          <span className="hidden sm:inline">Sync to Calendar</span>
        </button>
      </div>
    </div>
  );
}
