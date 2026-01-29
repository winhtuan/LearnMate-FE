export default function FileUpload({ label, subLabel, icon, secondaryText }) {
    return (
        <div className="space-y-3">
            <label className="text-sm font-semibold text-slate-700">{label}</label>
            <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:border-primary/50 hover:bg-slate-50 transition-all cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">{icon}</span>
                </div>
                <div className="text-center">
                    <p className="text-sm font-medium text-slate-900">{subLabel}</p>
                    <p className="text-[11px] text-slate-400 mt-1">{secondaryText}</p>
                </div>
            </div>
        </div>
    );
}
