export default function QuickActions({ actions }) {
    const colorMap = {
        blue: "bg-blue-50 text-blue-600",
        purple: "bg-purple-50 text-purple-600",
        orange: "bg-orange-50 text-orange-600",
        teal: "bg-teal-50 text-teal-600"
    };

    return (
        <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
                {actions.map((action) => (
                    <button
                        key={action.id}
                        className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors group"
                    >
                        <div className={`p-2 rounded-full ${colorMap[action.color]} group-hover:scale-110 transition-transform`}>
                            <span className="material-symbols-outlined">{action.icon}</span>
                        </div>
                        <span className="text-sm font-medium text-slate-700">{action.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
