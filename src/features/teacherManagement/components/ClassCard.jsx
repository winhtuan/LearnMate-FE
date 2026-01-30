export default function ClassCard({ classData }) {
    const { title, schedule, studentCount, status, icon, iconBg, opacity } = classData;

    const bgColors = {
        indigo: "bg-indigo-50 text-indigo-600",
        orange: "bg-orange-50 text-orange-600",
        blue: "bg-blue-50 text-blue-600",
        pink: "bg-pink-50 text-pink-600",
        emerald: "bg-emerald-50 text-emerald-600",
        purple: "bg-purple-50 text-purple-600"
    };

    return (
        <div className={`group relative flex flex-col bg-surface-light border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all duration-200 cursor-pointer ${opacity ? 'opacity-75' : ''}`}>
            <div className="flex justify-between items-start mb-4">
                <div className={`flex items-center justify-center size-10 rounded-lg ${bgColors[iconBg]}`}>
                    <span className="material-symbols-outlined">{icon}</span>
                </div>
                <button className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-gray-100 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">more_horiz</span>
                </button>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                {title}
            </h3>
            <p className="text-xs text-slate-500 mb-4 font-medium">{schedule}</p>
            <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                <div className="flex items-center gap-1.5 text-slate-600">
                    <span className="material-symbols-outlined text-[18px] text-slate-400">group</span>
                    <span className="text-sm font-medium">{studentCount} Students</span>
                </div>
                {status === "Active" ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
                        <span className="size-1.5 rounded-full bg-green-500"></span>
                        Active
                    </span>
                ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-slate-600 border border-gray-200">
                        <span className="size-1.5 rounded-full bg-slate-400"></span>
                        Archived
                    </span>
                )}
            </div>
        </div>
    );
}
