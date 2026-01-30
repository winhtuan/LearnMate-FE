export default function FilterChips({ activeFilter = "Active", onFilterChange }) {
    const filters = ["Active", "Archived", "All"];

    return (
        <div className="flex gap-2 p-1 bg-gray-100 rounded-lg border border-gray-200">
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => onFilterChange?.(filter)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${activeFilter === filter
                            ? 'bg-white shadow-sm font-semibold text-slate-900 border border-gray-200'
                            : 'hover:bg-white/50 text-slate-500'
                        }`}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}
