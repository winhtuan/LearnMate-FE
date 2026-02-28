export default function AttentionAlerts({ alerts }) {
    return (
        <div className="bg-white border border-[#e7edf3] rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-red-500">warning</span>
                <h3 className="text-sm font-bold text-[#0d141b] uppercase tracking-wider">
                    Needs Attention
                </h3>
            </div>
            <div className="flex flex-col gap-4">
                {alerts.map((alert) => (
                    <div
                        key={alert.id}
                        className={`flex gap-3 p-3 rounded-lg border ${alert.severity === 'high'
                            ? 'bg-red-50 border-red-100'
                            : 'bg-amber-50 border-amber-100'
                        }`}
                    >
                        <div
                            className="size-10 rounded-full bg-cover shrink-0"
                            style={{ backgroundImage: `url('${alert.studentAvatar}')` }}
                        />
                        <div className="flex flex-col gap-1">
                            <p className={`text-xs font-bold ${alert.severity === 'high' ? 'text-red-700' : 'text-amber-700'}`}>
                                {alert.studentName}
                            </p>
                            <p className={`text-[11px] leading-tight ${alert.severity === 'high' ? 'text-red-600' : 'text-amber-600'}`}>
                                {alert.message}
                            </p>
                            <button className={`mt-1 text-[10px] font-bold underline uppercase ${alert.severity === 'high' ? 'text-red-700' : 'text-amber-700'}`}>
                                {alert.action}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
