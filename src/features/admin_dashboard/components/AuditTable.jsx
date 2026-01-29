import React from 'react';
import { adminDashboardData } from '../data/admin_dashboard.data';

const AuditTable = () => {
    const { auditLogs } = adminDashboardData;

    const statusClasses = {
        success: 'bg-green-100 text-green-800',
        info: 'bg-blue-100 text-blue-800',
        warning: 'bg-yellow-100 text-yellow-800',
    };

    return (
        <div className="bg-white rounded-xl border border-border-light shadow-sm overflow-hidden mb-8">
            <div className="p-6 border-b border-border-light flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-bold">Recent Audit Activities</h3>
                    <p className="text-sm text-[#6a7981]">Latest actions performed by system administrators</p>
                </div>
                <button className="text-primary text-sm font-bold hover:underline">View All Logs</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-[#6a7981] text-xs font-bold uppercase tracking-wider">
                        <tr>
                            <th className="px-6 py-4">Timestamp</th>
                            <th className="px-6 py-4">Actor</th>
                            <th className="px-6 py-4">Action</th>
                            <th className="px-6 py-4 text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border-light text-sm">
                        {auditLogs.map((log, index) => (
                            <tr key={index} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-[#6a7981]">{log.timestamp}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <div className="size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold">
                                            {log.initials}
                                        </div>
                                        <span className="font-bold">{log.actor}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-[#121516]">
                                    {log.action}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <span
                                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${statusClasses[log.statusType]
                                            }`}
                                    >
                                        {log.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="p-4 bg-gray-50 border-t border-border-light flex justify-center">
                <button className="text-sm font-bold text-[#6a7981] hover:text-primary transition-colors flex items-center gap-2">
                    <span>Show More Activity</span>
                    <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
                </button>
            </div>
        </div>
    );
};

export default AuditTable;
