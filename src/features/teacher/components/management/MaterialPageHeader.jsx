
export default function MaterialPageHeader({ className, period, semester, room }) {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                        {className}
                    </h1>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide">
                        {period}
                    </span>
                </div>
                <p className="text-base text-slate-500 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                    {semester}
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                    {room}
                </p>
            </div>
            <div className="flex gap-3">
                <button className="group flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                    <span className="material-symbols-outlined text-[20px] text-slate-400 group-hover:text-slate-600 transition-colors">
                        settings
                    </span>
                    <span>Settings</span>
                </button>
                <button className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 active:translate-y-0.5">
                    <span className="material-symbols-outlined text-[20px]">cloud_upload</span>
                    <span>Upload New</span>
                </button>
            </div>
        </div>
    );
}
