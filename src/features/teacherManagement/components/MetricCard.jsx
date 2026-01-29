export default function MetricCard({ data }) {
    const { label, value, icon, change, changeLabel, changeType, badge, badgeType } = data;

    return (
        <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-slate-500">{label}</span>
                <span className="material-symbols-outlined text-slate-400 text-[20px]">{icon}</span>
            </div>
            <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold text-slate-900 tracking-tight">{value}</p>
                {badge && (
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${badgeType === 'warning' ? 'bg-orange-100 text-orange-800' : 'bg-slate-100 text-slate-800'
                        }`}>
                        {badge}
                    </span>
                )}
            </div>
            <div className="mt-2 text-xs text-slate-400 flex items-center gap-1">
                {change && (
                    <span className={`font-medium ${changeType === 'positive' ? 'text-green-500' : ''}`}>
                        {change}
                    </span>
                )}
                {changeLabel}
            </div>
        </div>
    );
}
