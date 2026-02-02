export default function TrialRequestFilters({ filters }) {
  return (
    <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
      {filters.map((filter, index) => {
        if (filter.label === "Archive") {
             return (
                 <div key={index} className="flex items-center gap-3">
                     <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>
                     <button className="flex h-9 items-center justify-center gap-2 rounded-full border border-transparent hover:bg-slate-100 dark:hover:bg-slate-800 px-3 transition-all text-slate-500">
                        <span className="text-sm font-medium">{filter.label}</span>
                     </button>
                 </div>
             )
        }
        
        const activeClass = filter.active 
            ? "border-primary/20 bg-primary/5 dark:bg-primary/10 text-primary" 
            : "border-slate-200 dark:border-slate-700 bg-white dark:bg-card-dark hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300";

        const iconColor = filter.active ? "text-primary" : "text-slate-500";

        return (
          <button key={index} className={`flex h-9 items-center justify-center gap-2 rounded-full border px-4 transition-all ${activeClass}`}>
            {filter.icon && <span className={`material-symbols-outlined text-[18px] ${iconColor}`}>{filter.icon}</span>}
            <span className="text-sm font-medium">{filter.label}</span>
          </button>
        );
      })}
    </div>
  );
}
