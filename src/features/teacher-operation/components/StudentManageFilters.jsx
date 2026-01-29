export default function StudentManageFilters({ data }) {
  const { tabs, dropdowns } = data;

  return (
    <div className="mb-6 flex flex-col gap-4 border-b border-slate-200 dark:border-slate-800 pb-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex gap-6 overflow-x-auto pb-2 sm:pb-0">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`border-b-2 pb-2 text-sm font-medium ${
              tab.active
                ? "border-primary font-semibold text-primary"
                : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="flex gap-2 overflow-x-auto">
        {dropdowns.map((dropdown, index) => (
          <div key={index} className="relative">
            <select
              className="h-9 appearance-none rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 pl-3 pr-8 text-sm font-medium text-slate-700 dark:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
              defaultValue={dropdown.value}
            >
              <option disabled>{dropdown.label}: {dropdown.value}</option>
              {dropdown.options.map((option, i) => (
                 // Simple logic for option display, could be enhanced
                 <option key={i} value={option}>{option === "All" || option === "Active" || option === "Last 7 Days" ? option : option}</option>
              ))}
            </select>
            <span className="material-symbols-outlined pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[18px] text-slate-400">expand_more</span>
          </div>
        ))}
      </div>
    </div>
  );
}
