
const SMTPConfigSettings = ({ smtp, lastSync }) => {
    return (
        <section className="space-y-4 pb-8">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 md:p-8 space-y-6">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                        <span className="material-symbols-outlined text-slate-400">alternate_email</span>
                        SMTP Email Settings
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <label className="text-[11px] uppercase tracking-wider font-bold text-slate-400">SMTP Host</label>
                            <input
                                className="w-full border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none"
                                type="text"
                                defaultValue={smtp.host}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[11px] uppercase tracking-wider font-bold text-slate-400">SMTP Port</label>
                            <input
                                className="w-full border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none"
                                type="text"
                                defaultValue={smtp.port}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Security Type</label>
                            <select
                                className="w-full border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none"
                                defaultValue={smtp.security}
                            >
                                <option>TLS</option>
                                <option>SSL</option>
                                <option>None</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-50/50 px-6 py-4 flex items-center justify-between border-t border-slate-100">
                    <div className="flex items-center gap-2 text-emerald-600">
                        <span className="material-symbols-outlined text-sm">verified</span>
                        <span className="text-xs font-medium">System last synced {lastSync}</span>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-6 py-2 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-100 transition-all">Discard</button>
                        <button className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-sm">Apply Configuration</button>
                    </div>
                </div>
            </div>

            <div className="bg-rose-50 border border-rose-100 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex gap-4 items-center">
                    <div className="size-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                        <span className="material-symbols-outlined">warning</span>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-rose-800">System Reset</p>
                        <p className="text-xs text-rose-600 max-w-md leading-relaxed">Clears all system caches and resets temporary configuration data. Use with extreme caution.</p>
                    </div>
                </div>
                <button className="w-full md:w-auto px-6 py-2 bg-rose-600 text-white rounded-lg text-sm font-bold hover:bg-rose-700 transition-all shadow-sm">Purge Cache</button>
            </div>
        </section>
    );
};

export default SMTPConfigSettings;
