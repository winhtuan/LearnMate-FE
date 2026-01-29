import React from 'react';

const ViolationTable = ({ violations }) => {
    const statusClasses = {
        pending: 'text-accent-orange',
        suspended: 'text-slate-400',
        resolved: 'text-green-600',
    };

    const statusDotClasses = {
        pending: 'bg-accent-orange animate-pulse',
        suspended: 'bg-slate-400',
        resolved: 'bg-green-600',
    };

    const typeClasses = {
        Copyright: 'bg-accent-orange/10 text-accent-orange border-accent-orange/20',
        Inappropriate: 'bg-accent-red/10 text-accent-red border-accent-red/20',
        Spam: 'bg-slate-100 text-slate-500 border-slate-200',
    };

    return (
        <div className="bg-white rounded-xl table-shadow border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex items-center gap-3">
                    <h3 className="font-bold text-lg">Monitor Feed</h3>
                    <span className="bg-slate-100 text-slate-500 text-xs font-bold px-2.5 py-1 rounded-full border border-slate-200">
                        {violations.length * 47} total flags
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <select className="bg-slate-50 border-slate-200 rounded-lg text-xs font-bold focus:ring-primary focus:border-primary py-2 px-3 outline-none">
                        <option>All Violations</option>
                        <option>Copyright</option>
                        <option>Inappropriate</option>
                        <option>Spam</option>
                    </select>
                    <select className="bg-slate-50 border-slate-200 rounded-lg text-xs font-bold focus:ring-primary focus:border-primary py-2 px-3 outline-none">
                        <option>Pending First</option>
                        <option>Most Recent</option>
                        <option>Critical Risk</option>
                    </select>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50/50 text-slate-500 text-[11px] font-bold uppercase tracking-widest">
                            <th className="px-6 py-4">Class Details</th>
                            <th className="px-6 py-4">Instructor</th>
                            <th className="px-6 py-4">Violation Type</th>
                            <th className="px-6 py-4">Flag Date</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {violations.map((violation, index) => (
                            <tr key={index} className="hover:bg-slate-50/80 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-lg bg-slate-200 shrink-0 overflow-hidden">
                                            <div className={`w-full h-full flex items-center justify-center ${violation.type === 'Inappropriate' ? 'bg-gradient-to-br from-accent-red/20 to-accent-red/5' : 'bg-gradient-to-br from-primary/30 to-primary/10'
                                                }`}>
                                                <span className={`material-symbols-outlined ${violation.type === 'Inappropriate' ? 'text-accent-red/30' : 'text-primary/40'
                                                    }`}>image</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm group-hover:text-primary transition-colors">{violation.className}</p>
                                            <p className="text-[11px] text-slate-400 font-medium">ID: {violation.id}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <img className="size-6 rounded-full bg-slate-100" src={violation.instructorAvatar} alt="" />
                                        <span className="text-sm font-medium">{violation.instructor}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider border ${typeClasses[violation.type]}`}>
                                        {violation.type}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-500 font-medium">{violation.date}</td>
                                <td className="px-6 py-4">
                                    <div className={`flex items-center gap-1.5 font-bold text-xs uppercase tracking-tighter ${statusClasses[violation.statusType]}`}>
                                        <span className={`size-1.5 rounded-full ${statusDotClasses[violation.statusType]}`}></span>
                                        {violation.status}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-end gap-1">
                                        <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all" title="View Details">
                                            <span className="material-symbols-outlined text-lg">visibility</span>
                                        </button>
                                        <button className="p-2 text-slate-400 hover:text-accent-orange hover:bg-accent-orange/5 rounded-lg transition-all" title="Suspend Class">
                                            <span className="material-symbols-outlined text-lg">block</span>
                                        </button>
                                        <button className="p-2 text-slate-400 hover:text-accent-red hover:bg-accent-red/5 rounded-lg transition-all" title="Delete Class">
                                            <span className="material-symbols-outlined text-lg">delete</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
                <p className="text-xs font-semibold text-slate-500">Showing 1 to {violations.length} of 142 records</p>
                <div className="flex items-center gap-1">
                    <button className="p-1.5 rounded-lg hover:bg-white text-slate-400 disabled:opacity-30 transition-all border border-transparent hover:border-slate-200" disabled>
                        <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                    </button>
                    <div className="flex items-center px-1">
                        <button className="size-7 rounded-lg bg-primary text-white text-xs font-bold">1</button>
                        <button className="size-7 rounded-lg hover:bg-slate-200 text-slate-600 text-xs font-bold transition-all">2</button>
                        <button className="size-7 rounded-lg hover:bg-slate-200 text-slate-600 text-xs font-bold transition-all">3</button>
                        <span className="px-1 text-slate-400">...</span>
                        <button className="size-7 rounded-lg hover:bg-slate-200 text-slate-600 text-xs font-bold transition-all">48</button>
                    </div>
                    <button className="p-1.5 rounded-lg hover:bg-white text-slate-600 transition-all border border-transparent hover:border-slate-200">
                        <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViolationTable;
