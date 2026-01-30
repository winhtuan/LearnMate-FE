import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import AuditLogTable from '../components/AuditLogTable';
import { adminDashboardData } from '../data/admin_dashboard.data';
import '../styles/admin.css';

const AuditLogPage = () => {
    const { auditLogs } = adminDashboardData;

    return (
        <div className="bg-background-light text-slate-800 antialiased h-screen flex flex-col overflow-hidden">
            <Header />
            <div className="flex flex-1 overflow-hidden pt-16">
                <Sidebar />
                <main className="flex-1 ml-64 overflow-y-auto bg-background-light">
                    <div className="p-8 max-w-[1440px] mx-auto space-y-8">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                            <div className="flex flex-col gap-1">
                                <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">
                                    <a className="hover:text-primary transition-colors" href="#">Admin</a>
                                    <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                                    <span className="text-slate-900">Audit Logs</span>
                                </nav>
                                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">System Audit Logs</h2>
                                <p className="text-slate-500 text-sm mt-1">Monitor security events, administrative changes, and platform activity for compliance.</p>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50 transition-shadow shadow-sm">
                                    <span className="material-symbols-outlined text-lg">download</span>
                                    Export CSV
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                                    <span className="material-symbols-outlined text-lg">refresh</span>
                                    Refresh Logs
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
                            <div className="flex items-center gap-4">
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2 border-r border-slate-200 pr-4 mr-2">
                                    <span className="material-symbols-outlined text-[18px]">filter_alt</span>
                                    Filters
                                </div>
                                <div className="flex flex-wrap items-center gap-2">
                                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold hover:border-primary/50 transition-all">
                                        <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                                        Last 30 Days
                                        <span className="material-symbols-outlined text-[16px]">expand_more</span>
                                    </button>
                                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold hover:border-primary/50 transition-all">
                                        <span className="material-symbols-outlined text-[16px]">person</span>
                                        Actor: All
                                        <span className="material-symbols-outlined text-[16px]">expand_more</span>
                                    </button>
                                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold hover:border-primary/50 transition-all">
                                        <span className="material-symbols-outlined text-[16px]">bolt</span>
                                        Action Type
                                        <span className="material-symbols-outlined text-[16px]">expand_more</span>
                                    </button>
                                    <button className="ml-2 text-xs font-bold text-slate-400 hover:text-rose-500 transition-colors uppercase tracking-widest">
                                        Clear All
                                    </button>
                                </div>
                            </div>
                        </div>

                        <AuditLogTable logs={auditLogs} />

                        <div className="flex items-center gap-4 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                            <div className="bg-primary/10 p-2 rounded-full text-primary">
                                <span className="material-symbols-outlined">info</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-primary">Audit Data Retention Policy</p>
                                <p className="text-xs text-slate-600">
                                    Logs are kept for 90 days for Standard accounts and 365 days for Enterprise.
                                    Exported logs should be stored in encrypted volumes.
                                </p>
                            </div>
                            <button className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg shadow-md hover:shadow-lg transition-all">
                                View Policy
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AuditLogPage;
