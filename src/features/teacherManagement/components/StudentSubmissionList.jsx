export default function StudentSubmissionList({ students, filterChips }) {
    return (
        <aside className="w-80 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 flex flex-col bg-slate-50 dark:bg-slate-900/50">
            {/* Search & Filter */}
            <div className="p-4 space-y-4 border-b border-slate-200 dark:border-slate-800">
                {/* Search Input */}
                <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">
                        search
                    </span>
                    <input
                        className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-900 dark:text-white placeholder:text-slate-400"
                        placeholder="Search students..."
                        type="text"
                    />
                </div>

                {/* Filter Chips */}
                <div className="flex gap-2 overflow-x-auto pb-1 custom-scrollbar no-scrollbar">
                    {filterChips.map((chip, index) => (
                        <button
                            key={index}
                            className={`flex-shrink-0 px-3 py-1 border rounded-full text-xs font-medium transition-colors ${chip.active
                                    ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-900/30 text-emerald-700 dark:text-emerald-400'
                                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 shadow-sm hover:border-primary/50'
                                }`}
                        >
                            {chip.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Student List */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
                {students.map((student) => (
                    <div
                        key={student.id}
                        className={`group flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${student.active
                                ? 'bg-white dark:bg-slate-800 border border-primary/30 shadow-sm relative overflow-hidden'
                                : 'hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent'
                            }`}
                    >
                        {/* Active Indicator */}
                        {student.active && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                        )}

                        {/* Avatar */}
                        <div className="relative flex-shrink-0">
                            {student.avatar ? (
                                <div
                                    className={`bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 border ${student.active
                                            ? 'border-slate-100 dark:border-slate-700'
                                            : 'border-slate-200 dark:border-slate-700'
                                        } ${student.grayscale ? 'grayscale opacity-80' : ''}`}
                                    style={{ backgroundImage: `url("${student.avatar}")` }}
                                    data-alt={`${student.name} portrait`}
                                />
                            ) : (
                                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 font-bold text-xs">
                                    {student.initials}
                                </div>
                            )}

                            {/* Status Indicator Dot */}
                            {student.hasIndicator && (
                                <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-0.5 border-2 border-white dark:border-slate-800">
                                    <span className="block size-2 rounded-full bg-white" />
                                </div>
                            )}
                        </div>

                        {/* Student Info */}
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-0.5">
                                <p
                                    className={`text-sm truncate ${student.active
                                            ? 'font-semibold text-slate-900 dark:text-white'
                                            : student.grayscale
                                                ? 'font-medium text-slate-600 dark:text-slate-400'
                                                : 'font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white'
                                        }`}
                                >
                                    {student.name}
                                </p>
                                <span
                                    className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${student.statusColor === 'emerald'
                                            ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30'
                                            : student.statusColor === 'rose'
                                                ? 'text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-900/30'
                                                : 'text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700'
                                        }`}
                                >
                                    {student.status}
                                </span>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                                {student.submissionDate}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
}
