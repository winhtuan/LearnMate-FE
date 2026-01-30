export default function MaterialsToolbar({ searchQuery, setSearchQuery, viewMode, setViewMode, sortBy, setSortBy }) {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-80 group">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px] group-focus-within:text-primary transition-colors">
                    search
                </span>
                <input
                    className="h-10 w-full rounded-xl border border-slate-200 bg-white py-2 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="Search materials..."
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 shadow-sm w-full sm:w-auto">
                    <button
                        className={`flex-1 sm:flex-none px-3 py-1.5 text-sm font-medium rounded-md ${viewMode === 'grid'
                                ? 'bg-slate-100 text-slate-900 shadow-sm'
                                : 'text-slate-500 hover:text-slate-700'
                            }`}
                        onClick={() => setViewMode('grid')}
                    >
                        <span className="material-symbols-outlined text-[18px] block sm:hidden">grid_view</span>
                        <span className="hidden sm:block">Grid</span>
                    </button>
                    <button
                        className={`flex-1 sm:flex-none px-3 py-1.5 text-sm font-medium rounded-md ${viewMode === 'list'
                                ? 'bg-slate-100 text-slate-900 shadow-sm'
                                : 'text-slate-500 hover:text-slate-700'
                            }`}
                        onClick={() => setViewMode('list')}
                    >
                        <span className="material-symbols-outlined text-[18px] block sm:hidden">list</span>
                        <span className="hidden sm:block">List</span>
                    </button>
                </div>
                <select
                    className="h-10 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary cursor-pointer transition-all"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option>Sort by: Name</option>
                    <option>Sort by: Date</option>
                    <option>Sort by: Size</option>
                </select>
            </div>
        </div>
    );
}
