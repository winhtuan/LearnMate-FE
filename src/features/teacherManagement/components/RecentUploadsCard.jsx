export default function RecentUploadsCard({ recentUploads }) {
    return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-card flex flex-col overflow-hidden">
            <div className="p-5 border-b border-slate-100">
                <h3 className="text-sm font-bold text-slate-900">Recent Uploads</h3>
            </div>
            <div className="p-4 space-y-4">
                {recentUploads.map((upload) => (
                    <div key={upload.id} className="flex items-center gap-3 group cursor-pointer">
                        <div className={`size-8 rounded-lg ${upload.iconBgColor} ${upload.iconTextColor} flex items-center justify-center shrink-0`}>
                            <span className="material-symbols-outlined text-[18px]">{upload.icon}</span>
                        </div>
                        <div className="min-w-0">
                            <p className="text-xs font-bold text-slate-900 truncate">{upload.name}</p>
                            <p className="text-[10px] text-slate-500">{upload.timeAgo}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="p-3 text-[11px] font-bold text-primary hover:bg-slate-50 border-t border-slate-100 transition-colors uppercase tracking-wider">
                View Activity Log
            </button>
        </div>
    );
}
