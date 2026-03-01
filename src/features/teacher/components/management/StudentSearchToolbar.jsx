export default function StudentSearchToolbar({ searchQuery, setSearchQuery, statusFilter, setStatusFilter }) {
    return (
        <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 min-w-[300px]">
                <div className="relative flex-1">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#4c739a] text-lg">search</span>
                    <input
                        className="w-full bg-white border-[#e7edf3] rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-primary focus:border-primary"
                        placeholder="Search students..."
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="relative">
                    <select
                        className="appearance-none bg-white border-[#e7edf3] rounded-lg px-4 py-2 pr-10 text-sm font-medium text-[#4c739a] focus:ring-primary focus:border-primary cursor-pointer"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option>Status: All</option>
                        <option>Active</option>
                        <option>At Risk</option>
                        <option>Needs Support</option>
                    </select>
                </div>
            </div>
            <button className="flex items-center justify-center rounded-lg h-10 bg-primary text-white gap-2 text-sm font-bold px-6 shadow-sm hover:bg-primary/90 transition-colors">
                <span className="material-symbols-outlined text-lg">person_add</span>
                <span>Invite Student</span>
            </button>
        </div>
    );
}
