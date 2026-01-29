export default function ClassCard({ classData }) {
    const { title, schedule, studentCount, status, icon, iconBg, opacity } = classData;

    const bgColors = {
        indigo: "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
        orange: "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
        blue: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
        pink: "bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400",
        emerald: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
        purple: "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
    };

    return (
        <div className={`group relative flex flex-col bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all duration-200 cursor-pointer ${opacity ? 'opacity-75' : ''}`}>
            <div className="flex justify-between items-start mb-4">
                <div className={`flex items-center justify-center size-10 rounded-lg ${bgColors[iconBg]}`}>
                    <span className="material-symbols-outlined">{icon}</span>
                </div>
                <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">more_horiz</span>
                </button>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                {title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 font-medium">{schedule}</p>
            <div className="mt-auto flex items-center justify-between border-t border-gray-100 dark:border-gray-700/50 pt-4">
                <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined text-[18px] text-slate-400">group</span>
                    <span className="text-sm font-medium">{studentCount} Students</span>
                </div>
                {status === "Active" ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-100 dark:border-green-900/30">
                        <span className="size-1.5 rounded-full bg-green-500"></span>
                        Active
                    </span>
                ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-slate-600 dark:text-slate-400 border border-gray-200 dark:border-gray-700">
                        <span className="size-1.5 rounded-full bg-slate-400"></span>
                        Archived
                    </span>
                )}
            </div>
        </div>
    );
}
