export default function TrackingFilters() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="relative w-full sm:max-w-xs group">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-[20px]">
          search
        </span>
        <input
          className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm"
          placeholder="Search assignments..."
          type="text"
        />
      </div>
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-[18px]">
            filter_list
          </span>
          Filter
        </button>
        <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2 bg-primary hover:bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-sm transition-all active:scale-95 cursor-pointer">
          <span className="material-symbols-outlined text-[18px]">add</span>
          Create Assignment
        </button>
      </div>
    </div>
  );
}
