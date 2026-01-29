import React from 'react';

const AuditLogTable = ({ logs }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-border-light overflow-hidden flex flex-col">
            <div className="overflow-x-auto custom-scrollbar">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50/50 border-b border-border-light">
                            <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest w-52">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
                                    Timestamp
                                    <span className="material-symbols-outlined text-[14px]">unfold_more</span>
                                </div>
                            </th>
                            <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
                                    Actor
                                    <span className="material-symbols-outlined text-[14px]">unfold_more</span>
                                </div>
                            </th>
                            <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest">Action</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest">Target ID</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest">IP Address</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest text-right">Details</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border-light">
                        {logs.map((log, index) => (
                            <tr key={index} className="hover:bg-slate-50/50 transition-colors group">
                                <td className="px-6 py-5 whitespace-nowrap">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-slate-700">{log.date}</span>
                                        <span className="text-[10px] font-semibold text-slate-400 font-mono uppercase tracking-tight">
                                            {log.time}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-5 whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                        <div className={`size-8 rounded-lg flex items-center justify-center font-bold text-[10px] ${index % 3 === 0 ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' :
                                                index % 3 === 1 ? 'bg-rose-50 text-rose-600 border border-rose-100' :
                                                    'bg-sky-50 text-sky-600 border border-sky-100'
                                            }`}>
                                            {log.actorInitials}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-slate-700 leading-none">{log.actor}</span>
                                            <span className="text-[11px] font-medium text-slate-400 mt-1">{log.actorEmail}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-5 whitespace-nowrap">
                                    <div className={`inline-flex items-center px-2.5 py-1 rounded-full border ${log.status === 'success' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
                                            log.status === 'warning' ? 'bg-amber-50 text-amber-700 border-amber-100' :
                                                'bg-blue-50 text-blue-700 border-blue-100'
                                        }`}>
                                        <span className={`size-1.5 rounded-full mr-2 ${log.status === 'success' ? 'bg-emerald-500' :
                                                log.status === 'warning' ? 'bg-amber-500' :
                                                    'bg-blue-500'
                                            }`}></span>
                                        <span className="text-[10px] font-bold uppercase tracking-wider">{log.action}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-5 whitespace-nowrap">
                                    <span className="font-mono text-[10px] px-2 py-1 bg-slate-50 rounded-md border border-slate-200 text-slate-600 font-medium">
                                        {log.targetId}
                                    </span>
                                </td>
                                <td className="px-6 py-5 whitespace-nowrap">
                                    <span className="font-mono text-[10px] text-slate-500 font-medium">{log.ipAddress}</span>
                                </td>
                                <td className="px-6 py-5 whitespace-nowrap text-right">
                                    <button className="p-2 text-slate-400 hover:text-primary transition-colors rounded-lg hover:bg-slate-50">
                                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="px-6 py-4 bg-slate-50/50 border-t border-border-light flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                        Showing 1 to {logs.length} of {logs.length * 40} entries
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <button className="size-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-white transition-all disabled:opacity-50" disabled>
                        <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                    </button>
                    <div className="flex items-center px-2">
                        <span className="text-sm font-bold text-primary px-3 py-1 rounded-lg bg-primary/10">1</span>
                        <span className="text-sm font-bold text-slate-400 px-3 py-1 hover:text-primary cursor-pointer transition-colors">2</span>
                        <span className="text-sm font-bold text-slate-400 px-3 py-1 hover:text-primary cursor-pointer transition-colors">3</span>
                    </div>
                    <button className="size-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-white transition-all">
                        <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuditLogTable;
