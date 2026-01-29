export default function FilterChips({ activeFilter = "Active", onFilterChange }) {
    const filters = ["Active", "Archived", "All"];

    return (
        <div className="flex gap-2 p-1 bg-gray-100 dark:bg-surface-dark/50 rounded-lg border border-gray-200 dark:border-gray-700">
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => onFilterChange?.(filter)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${activeFilter === filter
                            ? 'bg-white dark:bg-surface-dark shadow-sm font-semibold text-slate-900 dark:text-white border border-gray-200 dark:border-gray-600'
                            : 'hover:bg-white/50 dark:hover:bg-gray-700 text-slate-500 dark:text-slate-400'
                        }`}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}
