export default function ProfilePreview({ data }) {
    const { name, role, avatar, stats, quote } = data;

    return (
        <aside className="lg:col-span-4 relative">
            <div className="sticky top-28 flex flex-col gap-6">
                <div className="bg-white border border-slate-200/60 rounded-[2rem] shadow-2xl shadow-slate-200/50 overflow-hidden">
                    <div className="h-28 bg-gradient-to-br from-primary via-blue-400 to-indigo-500 opacity-90"></div>
                    <div className="px-8 pb-10 -mt-12">
                        <div className="flex flex-col items-center">
                            <div className="relative group">
                                <div
                                    className="size-28 rounded-full border-[6px] border-white bg-cover bg-center shadow-lg transition-transform group-hover:scale-105"
                                    style={{ backgroundImage: `url('${avatar}')` }}
                                >
                                </div>
                                <div className="absolute bottom-1.5 right-1.5 bg-emerald-500 text-white rounded-full p-1.5 shadow-lg ring-4 ring-white">
                                    <span className="material-symbols-outlined text-[18px] block font-bold">verified</span>
                                </div>
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-2xl font-bold text-slate-900">{name}</h3>
                                <div className="mt-1 px-3 py-1 bg-slate-100 rounded-full inline-block">
                                    <p className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">{role}</p>
                                </div>
                            </div>
                            <div className="mt-10 w-full space-y-4">
                                {stats.map((stat, index) => (
                                    <div key={index} className="flex items-center justify-between pb-3 border-b border-slate-100">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-[20px] text-slate-400">{stat.icon}</span>
                                            <span className="text-sm font-medium text-slate-600">{stat.label}</span>
                                        </div>
                                        {stat.status === 'pending' ? (
                                            <span className="text-[10px] px-2.5 py-1 bg-amber-50 text-amber-600 rounded-full font-bold uppercase tracking-tight border border-amber-100">{stat.value}</span>
                                        ) : (
                                            <span className="text-sm font-bold text-slate-900">{stat.value}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 w-full p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <p className="text-[11px] text-slate-500 leading-relaxed text-center italic">
                                    "{quote}"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100">
                    <div className="flex gap-4">
                        <span className="material-symbols-outlined text-emerald-600">stars</span>
                        <div>
                            <p className="text-sm font-bold text-emerald-900">Verified Badge</p>
                            <p className="text-xs text-emerald-700/80 mt-1 leading-normal">
                                Building trust is 70% faster with a verified profile badge.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
