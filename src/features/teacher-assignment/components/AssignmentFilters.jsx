export default function AssignmentFilters({ filters }) {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4">
      {/* Search Bar */}
      <div className="relative w-full md:max-w-md group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="material-symbols-outlined text-slate-400">
            search
          </span>
        </div>
        <input
          className="block w-full pl-10 pr-3 py-2.5 border-none rounded-lg leading-5 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
          placeholder="Search by assignment title..."
          type="text"
        />
      </div>
      {/* Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
        {filters.map((filter, index) => (
          <button
            key={index}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
              filter.active
                ? "bg-slate-200 text-slate-700 hover:bg-slate-300"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            {filter.label}
            {filter.hasDropdown && (
              <span className="material-symbols-outlined text-[16px]">
                expand_more
              </span>
            )}
          </button>
        ))}
        <button className="flex items-center justify-center size-8 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-primary transition-colors ml-1 cursor-pointer">
          <span className="material-symbols-outlined text-[20px]">
            filter_list
          </span>
        </button>
      </div>
    </div>
  );
}
