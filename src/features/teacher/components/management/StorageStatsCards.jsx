export default function StorageStatsCards({ storage, totalFiles }) {
    return (
        <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="size-10 rounded-lg bg-blue-50 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[20px]">database</span>
                    </div>
                    <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                            Storage Used
                        </p>
                        <h4 className="text-lg font-extrabold text-slate-900">
                            {storage.used} / {storage.total}
                        </h4>
                    </div>
                </div>
                <div className="mt-4 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${storage.percentage}%` }} />
                </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="size-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
                        <span className="material-symbols-outlined text-[20px]">folder_open</span>
                    </div>
                    <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                            Total Files
                        </p>
                        <h4 className="text-lg font-extrabold text-slate-900">{totalFiles} Files</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
